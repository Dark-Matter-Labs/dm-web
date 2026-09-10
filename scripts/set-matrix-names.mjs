/**
 * One-off migration: record the abbreviated Matrix tile labels and the
 * Net Zero Cities tile code in Sanity, so the homepage can stop hardcoding
 * them without changing what a visitor sees.
 *
 * Needs a token with write access. Put it in .env.local (gitignored) as
 * SANITY_API_WRITE_TOKEN, then:
 *
 *   node --env-file=.env.local scripts/set-matrix-names.mjs --dry-run
 *   node --env-file=.env.local scripts/set-matrix-names.mjs
 *
 * Values come from the pre-migration diff of the hardcoded homepage tiles.
 * Idempotent: re-running it changes nothing once applied.
 */

import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;
const dryRun = process.argv.includes('--dry-run');

if (!projectId || !dataset) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID / _DATASET.');
  process.exit(1);
}
if (!token && !dryRun) {
  console.error(
    'Missing SANITY_API_WRITE_TOKEN.\n' +
      'Create one at https://sanity.io/manage with Editor access, add it to\n' +
      '.env.local, and re-run. Use --dry-run to preview without a token.',
  );
  process.exit(1);
}

// title -> fields to set. Only the units whose Matrix tile differs from
// their canonical name, plus the one code correction.
const CHANGES = {
  'Philanthropy Futures': { homepage_matrix_name: 'Philanthr. Futures' },
  'Neighbourhood Futures': { homepage_matrix_name: 'Neighbour. Futures' },
  'Nature as Infrastructure': {
    homepage_matrix_name: 'Nature as Infrastruct.',
  },
  // Confirmed: the canonical name is "Conversation Design". The desktop
  // Matrix said "Conversational Design", which was a typo and is dropped.
  'Conversation Design': { homepage_matrix_name: 'Conversat. Design' },
  // The tile has always shown NZC; the old schema capped `value` at two
  // characters, so it could not be entered until now.
  'Net Zero Cities': { value: 'NZC' },
};

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-17',
  token,
  useCdn: false,
});

const QUERY = `*[_type in ["labObject","arcObject","studioObject"] && title in $titles]{
  _id, _type, title, value, homepage_matrix_name
}`;

const titles = Object.keys(CHANGES);
const docs = await client.fetch(QUERY, { titles });

const missing = titles.filter((t) => !docs.some((d) => d.title === t));
if (missing.length) {
  console.error(`Not found in Sanity: ${missing.join(', ')}`);
  console.error('Aborting rather than writing a partial migration.');
  process.exit(1);
}

let tx = client.transaction();
let pending = 0;

for (const doc of docs) {
  const wanted = CHANGES[doc.title];
  const diff = Object.entries(wanted).filter(([k, v]) => doc[k] !== v);

  if (diff.length === 0) {
    console.log(`  = ${doc.title} — already correct`);
    continue;
  }
  for (const [k, v] of diff) {
    console.log(
      `  ~ ${doc.title}\n      ${k}: ${JSON.stringify(doc[k])} -> ${JSON.stringify(v)}`,
    );
  }
  tx = tx.patch(doc._id, (p) => p.set(Object.fromEntries(diff)));
  pending += 1;
}

if (pending === 0) {
  console.log('\nNothing to do — Sanity already matches the homepage.');
  process.exit(0);
}
if (dryRun) {
  console.log(
    `\n--dry-run: ${pending} document(s) would be patched. No changes made.`,
  );
  process.exit(0);
}

await tx.commit();
console.log(`\nPatched ${pending} document(s).`);
console.log(
  'The homepage revalidates via the Sanity webhook, or redeploy to be sure.',
);
