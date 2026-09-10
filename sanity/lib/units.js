import { sanityFetch } from './client';

/**
 * Labs, Arcs and Studios — the units of the homepage ecosystem Matrix.
 *
 * Only editorial content comes from Sanity: names, codes, descriptions and
 * links. The tile logos stay as local static imports (see
 * `components/home/matrix-layout.js`) because Sanity holds 90x90 rasters of
 * them while the repo has the vectors, and the popup renders at 200x200.
 */
const UNITS_QUERY = `{
  "labs": *[_type == 'labObject'] { ..., "kind": "lab" },
  "arcs": *[_type == 'arcObject'] { ..., "kind": "arc" },
  "studios": *[_type == 'studioObject'] { ..., "kind": "studio" }
}`;

function normalise(doc) {
  return {
    id: doc.value,
    kind: doc.kind,
    // The canonical name, used as the popup heading.
    title: doc.title,
    // Matrix tiles are 80px wide, so some names are abbreviated there.
    // Falling back to the full name keeps a new unit readable rather than
    // blank if nobody has set a short name yet.
    matrixName: doc.homepage_matrix_name || doc.title,
    links: doc.links ?? [],
    content: doc.content ?? [],
  };
}

/**
 * Returns units keyed by their Matrix code, e.g. `units.NE`.
 * Codes are unique across all three types.
 */
export async function getUnits() {
  const { labs, arcs, studios } = await sanityFetch({
    query: UNITS_QUERY,
    tags: ['labObject', 'arcObject', 'studioObject'],
  });

  const all = [...(labs ?? []), ...(arcs ?? []), ...(studios ?? [])];
  return Object.fromEntries(
    all.filter((doc) => doc.value).map((doc) => [doc.value, normalise(doc)]),
  );
}
