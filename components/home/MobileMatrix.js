import {
  LAB_ORDER,
  ARC_ORDER,
  STUDIO_ORDER,
  BASE_STUDIO,
  INITIATIVE_AT,
} from './matrix-layout';
import { MATRIX } from './matrix-theme';

/**
 * The Matrix, at phone size.
 *
 * The desktop Matrix needs 856px because each 80px tile carries the unit's
 * name at 12px alongside its code. Drop the name, keep the code, and the
 * whole grid fits on one screen with nothing scaled below legibility — the
 * name and description live in the popup a tap already opens.
 *
 * It borrows the desktop Matrix's palette (`matrix-theme.js`), its type —
 * SaansRegular, wide tracking, grey-3 on #292929 — and its rhythm, where
 * columns sit flush and rows are separated. Same Sanity units, same layout
 * data, so a rename in the CMS moves both.
 */

const TILE = 'h-[36px] w-[36px] shrink-0';

function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`font-SaansRegular text-[13px] font-normal leading-none tracking-wide ${className}`}
      style={{ color: MATRIX.sectionLabel }}
    >
      {children}
    </p>
  );
}

/** A unit tile: its code, styled like the desktop tiles. */
function UnitTile({ unit, onOpen, align = 'items-start' }) {
  if (!unit) return null;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${unit.title} — open details`}
      className={`${TILE} flex ${align} justify-start px-[5px] pt-[5px] font-SaansRegular text-[13px] font-normal leading-none tracking-wide transition-colors active:text-white`}
      style={{ backgroundColor: MATRIX.tile, color: MATRIX.tileText }}
    >
      {unit.id}
    </button>
  );
}

export default function MobileMatrix({ units, openPopupFor }) {
  return (
    <div className="w-full sm:hidden">
      {/* Understated labels, as on desktop: "Arcs" over the arc column,
          "Labs" over the lab columns. */}
      <div className="mb-[6px] flex">
        <SectionLabel className="w-[36px] shrink-0">Arcs</SectionLabel>
        <SectionLabel>Labs</SectionLabel>
      </div>

      <div className="flex">
        <div className={TILE} aria-hidden="true" />
        <div className="flex">
          {LAB_ORDER.map((code) => (
            <UnitTile
              key={code}
              unit={units[code]}
              onOpen={openPopupFor(code)}
            />
          ))}
        </div>
      </div>

      {/* One row per Arc: its tile, then the eight intersections. Rows are
          separated and columns sit flush, matching the desktop rhythm. */}
      <div className="mt-[5px] flex flex-col gap-[5px]">
        {ARC_ORDER.map((arcCode) => (
          <div key={arcCode} className="flex">
            <UnitTile unit={units[arcCode]} onOpen={openPopupFor(arcCode)} />
            <div className="flex">
              {LAB_ORDER.map((labCode) => {
                const initiative = INITIATIVE_AT[`${labCode}:${arcCode}`];

                if (!initiative) {
                  return (
                    <div
                      key={labCode}
                      className={TILE}
                      style={{ backgroundColor: MATRIX.cell }}
                      aria-hidden="true"
                    />
                  );
                }

                // A lit cell is the desktop Matrix's own way of saying
                // "something lives here", so no invented marker.
                return (
                  <button
                    key={labCode}
                    type="button"
                    onClick={openPopupFor(initiative.popup)}
                    aria-label={`${initiative.title} — ${units[labCode]?.title} and ${units[arcCode]?.title}`}
                    className={`${TILE} transition-colors`}
                    style={{ backgroundColor: MATRIX.cellActive }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Studios sit below the Matrix, as they do at the base on desktop */}
      <div className="mt-[18px] flex items-end gap-[5px]">
        <div className="flex">
          {[...STUDIO_ORDER, BASE_STUDIO].map((code) => (
            <UnitTile
              key={code}
              unit={units[code]}
              onOpen={openPopupFor(code)}
              align="items-end"
            />
          ))}
        </div>
        <SectionLabel className="pb-[5px]">Studios</SectionLabel>
      </div>

      <p className="p-xl-regular mt-[20px] max-w-[380px] text-label">
        A lighter square is a project where that Lab and Arc meet. Tap any code
        or square for the detail.
      </p>
    </div>
  );
}
