import { memo } from 'react';

/**
 * An empty cell in the Matrix — a lab x arc intersection with no project.
 * It only exists to light up when either its lab or its arc is hovered.
 *
 * The 62 of these were previously written out by hand as if/else pairs of
 * divs interpolating `classT`, `classA` and `classAB`. All three of those
 * state values were initialised to '' and only ever set to '', so every
 * cell resolved to the same two class strings; they are dropped here.
 */
function MatrixCell({ active, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={active ? undefined : onEnter}
      onMouseLeave={active ? onLeave : undefined}
      className={`my-1.5 ${active ? 'bg-[#292929]' : 'bg-[#212121]'} h-[80px] w-[80px] p-2`}
    >
      {' '}
    </div>
  );
}

export default memo(MatrixCell);
