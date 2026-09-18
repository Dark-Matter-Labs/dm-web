/**
 * Builders for /llms.txt and for the per-page Markdown versions.
 *
 * Follows llmstxt.org v2: an H1 (the only required part), a blockquote
 * summary, prose sections without headings, then H2 "file list" sections of
 * `- [name](url): notes`. The spec asks that those links point at Markdown
 * rather than HTML, so they point at each page's own `index.md`.
 *
 * Note there is deliberately no llms-full.txt here. It is a widely copied
 * community convention but it is not in the spec, which proposes per-page
 * Markdown instead - and per-page files are the better shape anyway, since
 * an agent fetches only the pages it needs.
 */

export const baseUrl = 'https://darkmatterlabs.org';

/** One query serves both files, so they can never disagree. */
export const LLMS_QUERY = `{
  "units": *[_type in ['labObject','arcObject','studioObject']] | order(_type asc, title asc) {
    _type, title, value,
    "summary": pt::text(content)
  },
  "initiatives": *[_type == 'initiative' && defined(slug.current)] | order(title asc) {
    title, subtitle, "slug": slug.current,
    "body": pt::text(description)
  },
  "feed": *[_type == 'feedItem'] | order(date desc) {
    title, subtitle, date, type, link, "slug": slug.current,
    "body": pt::text(description),
    "units": array::compact([
      ...labs[]->title, ...arcs[]->title, ...studios[]->title
    ])
  }
}`;

const LICENCE =
  'Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0), ' +
  'https://creativecommons.org/licenses/by-sa/4.0/. Code is GPLv3.';

const HEADER = `# Dark Matter Labs

> We are building options for the next economies.

Our collaborative approach is firmly grounded in the complex, messy reality
of our existing socio-economic systems. Step-by-step, with the support of a
growing ecosystem, we aim to build tangible pathways towards the options that
we would like to manifest in the world. We have visualised our organisation's
response strategy across a three-dimensional matrix, which represents the
dynamic interplay of our systemic goals, collaborations and context specific
initiatives.

Licence: ${LICENCE}
Attribution: Dark Matter Labs, ${baseUrl}
Contact: info@darkmatterlabs.org

This work is openly licensed and we are glad for it to be read, quoted,
built on and learned from. The licence asks for attribution and share-alike
in return. Every page also carries JSON-LD naming the licence and author, so
that request is machine-readable rather than only stated here.

The links below point at Markdown versions of each page, as llmstxt.org v2
recommends. Every project and initiative page has one at its own URL with
index.md appended - the HTML page links to it with rel="alternate".
`;

/** A single feed item or initiative, for its Markdown route. */
export const ITEM_QUERY = `
*[_type == $type && slug.current == $slug][0] {
  title, subtitle, date, "slug": slug.current,
  "body": pt::text(description),
  "units": array::compact([
    ...labs[]->title, ...arcs[]->title, ...studios[]->title
  ]),
  "team": team[]->fullName,
  "partners": partners[]->Name,
  links[] { linkText, linkUrl }
}`;

/** One tidy line, no newlines, trimmed to `max`. */
function oneLine(text, max = 240) {
  if (!text) return '';
  const flat = String(text).replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return flat.slice(0, max - 1).replace(/[\s,;:.—-]+$/, '') + '…';
}

/** Group the units by their document type, in Matrix order. */
function unitSection(units = []) {
  const groups = [
    [
      'labObject',
      'Labs',
      'explore structural alternatives to the everyday codes of society',
    ],
    [
      'arcObject',
      'Arcs',
      'hold directional goals embedded in diverse contexts',
    ],
    [
      'studioObject',
      'Studios',
      'support the Labs and Arcs with specific skills and craft',
    ],
  ];

  return groups
    .map(([type, label, gloss]) => {
      const rows = units.filter((u) => u._type === type);
      if (!rows.length) return '';
      const list = rows
        .map((u) => `- ${u.title} (${u.value}): ${oneLine(u.summary, 200)}`)
        .join('\n');
      return `### ${label}\n\nThe ${label.toLowerCase()} ${gloss}.\n\n${list}`;
    })
    .filter(Boolean)
    .join('\n\n');
}

const STATIC_PAGES = [
  [
    '',
    'Home',
    'The Matrix: how Dark Matter Labs is organised, and the thinking underneath it',
  ],
  [
    '/feed',
    'Projects and news',
    'Every project, update and media appearance, filterable by unit and year',
  ],
  [
    '/initiatives',
    'Initiatives',
    'Long-running programmes of work with their own identity',
  ],
  ['/team', 'Team', 'Current team and alumni'],
  ['/jobs', 'Work with us', 'Open roles, how we organise, how pay is set'],
  ['/contact', 'Contact', 'Legal entities, studio spaces and partners'],
  [
    '/lineage-and-intellectual-responsibility',
    'On Lineage and Intellectual Responsibility',
    'How we credit the collective inquiry our work emerges from, and how we license it',
  ],
  [
    '/privacy-policy',
    'Privacy policy',
    'What is collected, and how to opt out',
  ],
];

/** The short index: one line per item. */
export function buildIndex({ units = [], initiatives = [], feed = [] } = {}) {
  const RECENT = 25;

  const pages = STATIC_PAGES.map(
    ([path, name, desc]) => `- [${name}](${baseUrl}${path}): ${desc}`,
  ).join('\n');

  const inits = initiatives
    .map(
      (i) =>
        `- [${i.title}](${baseUrl}/initiatives/${i.slug}/index.md): ${oneLine(i.subtitle, 160)}`,
    )
    .join('\n');

  const recent = feed
    .slice(0, RECENT)
    .map((f) => {
      // Media items are link-outs with no page of their own, so they point
      // at the external destination; everything else at its Markdown version.
      const url = f.slug ? `${baseUrl}/feed/${f.slug}/index.md` : f.link;
      const units = f.units?.length ? ` [${f.units.join(', ')}]` : '';
      return `- [${f.title?.trim()}](${url}) — ${f.date}${units}: ${oneLine(f.subtitle, 160)}`;
    })
    .join('\n');

  return `${HEADER}
## How the work is organised

Dark Matter Labs is structured as a matrix. Labs and Arcs intersect to
produce initiatives; Studios cut across both. There are ${units.length} units
in total.

${unitSection(units)}

## Pages

${pages}

## Initiatives

${inits}

## Recent projects, updates and media

The ${RECENT} most recent of ${feed.length}; the rest are in
${baseUrl}/sitemap.xml.

${recent}
`;
}

/**
 * One page as Markdown, for the `index.md` routes. Portable Text arrives
 * already flattened to plain text by `pt::text()` in the query, which loses
 * inline formatting - acceptable here, since the point is clean prose rather
 * than a faithful re-render.
 */
export function buildItemMarkdown(item, kind) {
  if (!item) return null;

  const url = `${baseUrl}/${kind}/${item.slug}`;
  const units = item.units?.length ? item.units.join(', ') : null;
  const team = item.team?.length ? item.team.join(', ') : null;
  const partners = item.partners?.length ? item.partners.join(', ') : null;

  const meta = [
    ['Source', url],
    ['Date', item.date],
    ['Units', units],
    ['Team', team],
    ['Partners', partners],
    [
      'Licence',
      'CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/',
    ],
    ['Attribution', `Dark Matter Labs, ${baseUrl}`],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('  \n');

  const links = item.links?.length
    ? `\n\n## Links\n\n${item.links
        .filter((l) => l?.linkUrl)
        .map((l) => `- [${l.linkText || l.linkUrl}](${l.linkUrl})`)
        .join('\n')}`
    : '';

  const body = item.body?.trim()
    ? item.body.trim()
    : '_No description set for this item._';

  return `# ${item.title?.trim()}

${item.subtitle ? `> ${oneLine(item.subtitle, 400)}\n\n` : ''}${meta}

${body}${links}
`;
}
