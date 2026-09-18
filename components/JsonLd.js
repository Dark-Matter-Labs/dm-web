const BASE = 'https://darkmatterlabs.org';
const LICENCE = 'https://creativecommons.org/licenses/by-sa/4.0/';

/**
 * Structured data, rendered as a JSON-LD script tag.
 *
 * This is the half of "make the site legible to agents" that matters most
 * once robots.txt says yes to AI training and AI answers: the licence asks
 * for attribution and share-alike in return, and JSON-LD is how that request
 * travels with the content instead of sitting only in robots.txt, where
 * nothing carries it downstream.
 *
 * Values come from Sanity, so they are not trusted input. Every `<` is
 * escaped to its < form rather than pattern-matching for `</script`:
 * the escape is still valid JSON, and it makes breaking out of the tag
 * impossible whatever an editor types - including `<!--`, which would
 * otherwise open an HTML comment inside a script element.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/** The organisation itself. Rendered once, in the front-end layout. */
export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: 'Dark Matter Labs',
    alternateName: 'Dm',
    url: BASE,
    description: 'We are building options for the next economies',
    email: 'info@darkmatterlabs.org',
    sameAs: [
      'https://provocations.darkmatterlabs.org/',
      'https://www.linkedin.com/company/dark-matter-laboratories/',
      'https://medium.com/@darkmatterlabs',
    ],
  };
}

/**
 * A feed item or initiative. `CreativeWork` rather than `Article`: most of
 * these are projects and programmes of work, not written pieces.
 */
export function workSchema(item, kind) {
  // Sanity returns `slug` as an object on the page queries and as a plain
  // string where a projection has already flattened it. Accept both.
  const slug = typeof item?.slug === 'string' ? item.slug : item?.slug?.current;
  if (!slug) return null;

  const url = `${BASE}/${kind}/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': url,
    url,
    name: item.title?.trim(),
    ...(item.subtitle ? { description: item.subtitle.trim() } : {}),
    ...(item.date ? { datePublished: item.date } : {}),
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', '@id': `${BASE}/#website`, url: BASE },
    // The two that matter for reuse: who to credit, and under what terms.
    author: { '@id': `${BASE}/#organization` },
    publisher: { '@id': `${BASE}/#organization` },
    license: LICENCE,
    creditText: 'Dark Matter Labs',
    ...(item.units?.length
      ? { about: item.units.map((u) => ({ '@type': 'Thing', name: u })) }
      : {}),
    // The Markdown version of this page, so an agent that finds the JSON-LD
    // does not have to guess the convention.
    encoding: {
      '@type': 'MediaObject',
      encodingFormat: 'text/markdown',
      contentUrl: `${url}/index.md`,
    },
  };
}
