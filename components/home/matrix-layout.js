/**
 * Layout of the homepage ecosystem Matrix.
 *
 * Content (names, codes, descriptions, links) lives in Sanity. Layout does
 * not: the Matrix is a grid whose visual order carries meaning, and a new
 * unit appearing in an arbitrary slot would be worse than it not appearing
 * at all. So the order is declared here, and `MatrixGrid` warns in
 * development if Sanity holds a unit this file doesn't place.
 *
 * Codes match the `value` field on each Sanity document.
 */

// Columns of the grid, left to right.
export const LAB_ORDER = ['NE', 'BL', 'CS', 'PF', 'PB', 'SD', 'BR', 'RI'];

// Rows of the grid, top to bottom.
export const ARC_ORDER = [
  'RC',
  'NF',
  'NZC',
  '7G',
  'X0',
  'RF',
  'NI',
  'BE',
  'PC',
];

export const STUDIO_ORDER = ['CT', 'CD', 'FF'];

// Org Dev sits at the base of the Matrix in a wider tile of its own, with
// its name in the code slot and no second label.
export const BASE_STUDIO = 'OD';

/**
 * Projects that sit at a lab x arc intersection. Every other cell in the
 * 8x9 grid is empty and simply highlights when either its lab or its arc is
 * hovered.
 *
 * The state expressions below are transcribed VERBATIM from the previous
 * hardcoded markup, including its inconsistencies, because this refactor is
 * meant to change where the data lives and nothing about how the page
 * behaves. Three of them are worth knowing about:
 *
 *  - LEED carries `activeNot: ['BE']`. It and Cornerstone Indicators are
 *    both CD-studio cells in the NE column, and this is what stops both
 *    lighting up at once.
 *  - LEED's hover pair uses NF while the codes it activates are CD and NE.
 *  - CircuLaw's active set is its arc and studio but NOT its lab, while its
 *    hover pair uses the lab. Every other cell uses lab + arc for both.
 *
 * `activeAll` — every code must be active for the cell to read as active.
 * `activeNot` — none of these may be active.
 * `hoverAny`  — any of these triggers the cell's hover styling.
 * `sets`      — the codes hovering this cell makes active.
 * `labels`    — the small codes drawn on the cell face. Two of these still
 *                use pre-rename codes: CircuLaw shows NZ (not NZC) and MatR
 *                shows M0 + SM (not X0 + RI). Kept verbatim so the page does
 *                not change; correcting them is a content decision.
 */
export const INITIATIVES = [
  {
    lab: 'NE',
    arc: 'RC',
    popup: 'MC',
    variant: 'lab-arc',
    title: 'Multivalent currencies',
    labels: { arc: 'RC', lab: 'NE' },
    activeAll: ['RC', 'NE'],
    hoverAny: ['RC', 'NE'],
    sets: { lab: 'NE', arc: 'RC' },
  },
  {
    lab: 'NE',
    arc: 'NF',
    popup: 'LEED',
    variant: 'studio',
    title: 'Life-Ennobling Economics dialogue',
    labels: { arc: 'NE', studio: 'CD' },
    activeAll: ['CD', 'NE'],
    activeNot: ['BE'],
    hoverAny: ['NF', 'NE'],
    sets: { studio: 'CD', arc: 'NE' },
  },
  {
    lab: 'NE',
    arc: 'X0',
    popup: 'NET',
    variant: 'lab-arc',
    title: 'New Economic Thinking',
    labels: { arc: 'X0', lab: 'NE' },
    activeAll: ['X0', 'NE'],
    hoverAny: ['X0', 'NE'],
    sets: { lab: 'NE', arc: 'X0' },
  },
  {
    lab: 'NE',
    arc: 'BE',
    popup: 'CI',
    variant: 'studio-lab',
    title: 'Cornerstone Indicators',
    labels: { arc: 'NE', studio: 'CD' },
    activeAll: ['CD', 'NE', 'BE'],
    hoverAny: ['BE', 'NE'],
    sets: { studio: 'CD', arc: 'BE', lab: 'NE' },
  },
  {
    lab: 'CS',
    arc: 'NF',
    popup: 'CCR',
    variant: 'lab-arc',
    title: 'City & Community Retrofit',
    labels: { arc: 'NF', lab: 'CS' },
    activeAll: ['NF', 'CS'],
    hoverAny: ['NF', 'CS'],
    sets: { lab: 'CS', arc: 'NF' },
  },
  {
    lab: 'CS',
    arc: 'NI',
    popup: 'TAI',
    variant: 'lab-arc',
    title: 'TreesAI',
    labels: { arc: 'NI', lab: 'CS' },
    activeAll: ['NI', 'CS'],
    hoverAny: ['NI', 'CS'],
    sets: { lab: 'CS', arc: 'NI' },
  },
  {
    lab: 'PB',
    arc: '7G',
    popup: 'PBP',
    variant: 'lab-arc',
    title: 'Property & Beyond portfolio',
    labels: { arc: '7G', lab: 'PB' },
    activeAll: ['7G', 'PB'],
    hoverAny: ['7G', 'PB'],
    sets: { lab: 'PB', arc: '7G' },
  },
  {
    lab: 'SD',
    arc: 'RC',
    popup: 'PTC',
    variant: 'lab-arc',
    title: 'Permissioning the City',
    labels: { arc: 'RC', lab: 'SD' },
    activeAll: ['RC', 'SD'],
    hoverAny: ['RC', 'SD'],
    sets: { lab: 'SD', arc: 'RC' },
  },
  {
    lab: 'RI',
    arc: 'NZC',
    popup: 'CL',
    variant: 'studio',
    title: 'CircuLaw',
    labels: { arc: 'NZ', studio: 'CT' },
    activeAll: ['NZC', 'CT'],
    hoverAny: ['NZC', 'RI'],
    sets: { studio: 'CT', arc: 'NZC' },
  },
  {
    lab: 'RI',
    arc: 'X0',
    popup: 'MATR',
    variant: 'lab-arc',
    title: 'MatR',
    labels: { arc: 'M0', lab: 'SM' },
    activeAll: ['X0', 'RI'],
    hoverAny: ['X0', 'RI'],
    sets: { lab: 'RI', arc: 'X0' },
  },
];

/** Fast lookup for "is there a project at this intersection?". */
export const INITIATIVE_AT = Object.fromEntries(
  INITIATIVES.map((i) => [`${i.lab}:${i.arc}`, i]),
);

export const ALL_UNIT_CODES = [
  ...LAB_ORDER,
  ...ARC_ORDER,
  ...STUDIO_ORDER,
  BASE_STUDIO,
];
