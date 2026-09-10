/**
 * The Matrix palette, in one place.
 *
 * These greys were previously written as literals in three components and
 * again inside `bgHoverInterpolate` on the homepage. Sharing them is what
 * keeps the compact mobile Matrix looking like the desktop one rather than
 * merely similar.
 */
export const MATRIX = {
  // Unit tiles — Labs, Arcs, Studios
  tile: '#292929',
  tileActive: '#595959',
  tileText: '#A8A8A8',

  // Grid cells
  cell: '#212121',
  cellRowActive: '#292929',
  cellActive: '#595959',

  // Section labels: "Arcs", "Labs", "Studios"
  sectionLabel: '#A8A8A8',
};
