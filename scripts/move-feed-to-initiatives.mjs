/**
 * One-off migration: move two projects from the feed to Initiatives.
 *
 *   rz-studio, planetary-civics-inquiry
 *
 * Sanity has no "convert document type", so this creates an `initiative`
 * from each `feedItem` and, as a separate later step, deletes the original.
 * Needs a token with write access. Put it in .env.local (gitignored) as
 * SANITY_API_WRITE_TOKEN, then, in this order:
 *
 *   1. Preview, no token needed:
 *      node --env-file=.env --env-file=.env.local scripts/move-feed-to-initiatives.mjs --dry-run
 *
 *   2. Create the initiatives (the feed items are left alone):
 *      node --env-file=.env --env-file=.env.local scripts/move-feed-to-initiatives.mjs
 *
 *   3. Check /initiatives/<slug> renders, and merge the redirects PR.
 *
 *   4. Delete the feed items (refuses unless the initiative already exists):
 *      node --env-file=.env --env-file=.env.local scripts/move-feed-to-initiatives.mjs --delete-originals
 *
 * Idempotent: creating uses createIfNotExists with a deterministic _id, so
 * re-running changes nothing. Delete the script once the move is done.
 */

import { createClient } from '@sanity/client';
import { pathToFileURL } from 'node:url';

export const SLUGS = ['rz-studio', 'planetary-civics-inquiry'];

/** `short_description` on the initiative schema is required, max 380. */
export const SHORT_MAX = 380;

/**
 * Feed items have no short description and initiatives require one. Existing
 * initiatives mostly open it with the first sentence or two of the body, so
 * do the same: whole sentences from the start of the body while they fit.
 * Printed for review; edit it in Studio afterwards if it should read
 * differently.
 */
export function pickShortDescription(text, max = SHORT_MAX) {
  const flat = String(text ?? '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!flat) return '';

  const sentences = (flat.match(/[^.!?]+[.!?]+(?=\s|$)|[^.!?]+$/g) ?? [flat])
    .map((s) => s.trim())
    .filter(Boolean);

  let out = '';
  for (const sentence of sentences) {
    const next = out ? `${out} ${sentence}` : sentence;
    if (next.length > max) break;
    out = next;
  }
  if (out) return out;

  // Even the first sentence is too long: cut at a word boundary.
  const cut = flat.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.-]+$/, '') + '…';
}

/** What the initiative should contain. Fields the schema lacks are dropped. */
export function buildInitiative(feed) {
  const slug = feed.slug?.current;
  return {
    _id: `initiative-${slug}`,
    _type: 'initiative',
    image: feed.image,
    title: feed.title,
    slug: feed.slug,
    subtitle: feed.subtitle,
    short_description: pickShortDescription(feed.descriptionText),
    ...(feed.description ? { description: feed.description } : {}),
    ...(feed.links?.length ? { links: feed.links } : {}),
    ...(feed.team?.length ? { team: feed.team } : {}),
    ...(feed.partners?.length ? { partners: feed.partners } : {}),
  };
}

/** The initiative schema's required fields, checked before any write. */
export function validateInitiative(doc) {
  const problems = [];
  if (!doc.image?.asset?._ref) problems.push('image is missing');
  if (!doc.title?.trim()) problems.push('title is missing');
  if (!doc.slug?.current) problems.push('slug is missing');
  if (!doc.subtitle?.trim()) problems.push('subtitle is missing');
  if (!doc.short_description) problems.push('short_description is empty');
  if (doc.short_description?.length > SHORT_MAX)
    problems.push(`short_description is over ${SHORT_MAX} characters`);
  return problems;
}

const FEED_QUERY = `*[_type == 'feedItem' && slug.current == $slug]{
  ...,
  "descriptionText": pt::text(description),
  "units": array::compact([...labs[]->title, ...arcs[]->title, ...studios[]->title])
}`;

/** A refusal to proceed. Thrown rather than exiting, so it can be tested. */
export class MigrationError extends Error {}

function fail(message) {
  throw new MigrationError(message);
}

/**
 * Looks at one slug and decides what to do, without writing anything.
 * Every check that can refuse lives here, so a refusal for the second
 * project is known before the first is touched.
 */
async function plan(client, slug, { deleteOriginals }) {
  const found = await client.fetch(FEED_QUERY, { slug });
  const published = found.find((d) => !d._id.startsWith('drafts.'));
  const draft = found.find((d) => d._id.startsWith('drafts.'));

  if (!published) fail(`No published feed item with slug "${slug}".`);
  if (draft) {
    fail(
      `"${slug}" has an unpublished draft. Publish or discard it in Studio\n` +
        '  first, so the copy made here is the one you actually see there.',
    );
  }

  const doc = buildInitiative(published);
  const existing = await client.fetch(
    `*[_type == 'initiative' && slug.current == $slug]{_id, title}`,
    { slug },
  );
  const clash = existing.find((e) => e._id !== doc._id);
  if (clash) {
    fail(
      `An initiative with slug "${slug}" already exists as ${clash._id}. ` +
        'Resolve that first; slugs must be unique.',
    );
  }
  const alreadyCreated = existing.some((e) => e._id === doc._id);

  if (deleteOriginals) {
    if (!alreadyCreated) {
      fail(
        `No initiative "${doc._id}" yet. Run without --delete-originals ` +
          'first; refusing to delete the only copy.',
      );
    }
    const referrers = await client.fetch(
      `count(*[references($id) && !(_id in [$id, "drafts." + $id])])`,
      { id: published._id },
    );
    if (referrers > 0) {
      fail(
        `${referrers} other document(s) reference "${slug}"; deleting it ` +
          'would leave broken references. Not deleting.',
      );
    }
  } else {
    const problems = validateInitiative(doc);
    if (problems.length) {
      fail(
        `"${slug}" would not pass the initiative schema:\n  - ${problems.join('\n  - ')}`,
      );
    }
  }

  return { slug, published, doc, alreadyCreated };
}

/**
 * The migration itself. Takes the client as a parameter so the guards can be
 * exercised against a fake one - this ends in a delete, so they matter.
 *
 * Two phases. First every project is planned, and any refusal aborts before
 * a single write. Then all writes go out in ONE transaction, which Sanity
 * applies atomically: both projects move, or neither does. An earlier
 * version checked-then-wrote one project at a time, so a failure on the
 * second left the first already created, or already deleted.
 */
export async function run(
  client,
  { dryRun, deleteOriginals },
  log = console.log,
) {
  log(
    `${deleteOriginals ? 'DELETE ORIGINALS' : 'CREATE INITIATIVES'}` +
      `${dryRun ? ' (dry run, nothing will be written)' : ''}\n`,
  );

  const plans = [];
  for (const slug of SLUGS) {
    plans.push(await plan(client, slug, { deleteOriginals }));
  }

  for (const { slug, published, doc, alreadyCreated } of plans) {
    log('─'.repeat(72));
    log(slug);

    if (deleteOriginals) {
      log(`  feed item ${published._id}: ${published.title}`);
      log(`  ${dryRun ? 'would delete' : 'will delete'} the feed item`);
      continue;
    }

    log(`  _id               ${doc._id}`);
    log(`  title             ${doc.title}`);
    log(`  subtitle          ${doc.subtitle}`);
    log(
      `  short_description (${doc.short_description.length}/${SHORT_MAX}, derived - edit in Studio if wanted)\n` +
        `                    ${doc.short_description}`,
    );
    log(
      `  carried over      description (${published.descriptionText.length} chars), ` +
        `${doc.links?.length ?? 0} link(s), ${doc.team?.length ?? 0} team, ` +
        `${doc.partners?.length ?? 0} partners, image`,
    );
    log(
      `  NOT carried over  date ${published.date}, type "${published.type}", ` +
        `units: ${published.units.join(', ') || '(none)'}`,
    );
    log(
      alreadyCreated
        ? '  = initiative already exists, leaving it alone'
        : `  ${dryRun ? 'would create' : 'will create'} the initiative`,
    );
  }

  log('─'.repeat(72));

  if (dryRun) {
    log('\nDry run complete.');
    return;
  }

  const tx = client.transaction();
  let writes = 0;
  for (const { published, doc, alreadyCreated } of plans) {
    if (deleteOriginals) {
      tx.delete(published._id);
      writes++;
    } else if (!alreadyCreated) {
      tx.createIfNotExists(doc);
      writes++;
    }
  }

  if (writes === 0) {
    log('\nNothing to do.');
    return;
  }
  await tx.commit();
  log(`\n✓ Done: ${writes} write(s), committed atomically.`);
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const dryRun = args.has('--dry-run');
  const deleteOriginals = args.has('--delete-originals');

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_WRITE_TOKEN;

  if (!projectId || !dataset) {
    fail('Missing NEXT_PUBLIC_SANITY_PROJECT_ID / _DATASET.');
  }
  if (!token && !dryRun) {
    fail(
      'Missing SANITY_API_WRITE_TOKEN.\n' +
        '  Create one at https://sanity.io/manage with Editor access, add it to\n' +
        '  .env.local, and re-run. Use --dry-run to preview without a token.',
    );
  }

  // With a token, look at the raw dataset so unpublished drafts are visible.
  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-05-17',
    useCdn: false,
    ...(token ? { token, perspective: 'raw' } : {}),
  });

  console.log(`dataset: ${dataset}`);
  await run(client, { dryRun, deleteOriginals });
}

// Only run when invoked directly, so the functions above can be imported
// and exercised without a network call.
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((err) => {
    if (err instanceof MigrationError) {
      console.error(`\n✖ ${err.message}`);
    } else {
      console.error(err);
    }
    process.exit(1);
  });
}
