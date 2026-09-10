import {
  LAB_ORDER,
  ARC_ORDER,
  STUDIO_ORDER,
  BASE_STUDIO,
  INITIATIVE_AT,
} from './matrix-layout';

/**
 * The Matrix, at phone size.
 *
 * The desktop Matrix needs 856px because every 80px tile carries the unit's
 * name at 12px. Drop the name and keep the two-letter code and the whole
 * 9x10 grid fits in 324x360px — the full overview, on one screen, with no
 * panning and nothing scaled below legibility.
 *
 * It reads from the same Sanity units and the same layout data as the
 * desktop Matrix, so a rename in the CMS updates both. It replaces three
 * static PNGs whose labels were baked in at export time.
 *
 * Interaction is tap, not hover: every code and every project cell opens
 * the same popup the desktop tiles open, where the full name and
 * description live.
 */

function CodeButton({ unit, onOpen, className = '' }) {
  if (!unit) return null;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${unit.title} — open details`}
      className={`flex h-[36px] w-[36px] items-center justify-center bg-[#1d1d20] font-SaansRegular text-[13px] leading-none text-grey-1 active:bg-[#595959] active:text-white ${className}`}
    >
      {unit.id}
    </button>
  );
}

export default function MobileMatrix({ units, openPopupFor }) {
  return (
    <div className="sm:hidden">
      <div className="flex flex-col gap-[2px]">
        {/* Lab codes across the top */}
        <div className="flex gap-[2px]">
          <div className="h-[36px] w-[36px]" aria-hidden="true" />
          {LAB_ORDER.map((code) => (
            <CodeButton
              key={code}
              unit={units[code]}
              onOpen={openPopupFor(code)}
            />
          ))}
        </div>

        {/* One row per arc: its code, then the eight intersections */}
        {ARC_ORDER.map((arcCode) => (
          <div key={arcCode} className="flex gap-[2px]">
            <CodeButton unit={units[arcCode]} onOpen={openPopupFor(arcCode)} />
            {LAB_ORDER.map((labCode) => {
              const initiative = INITIATIVE_AT[`${labCode}:${arcCode}`];

              if (!initiative) {
                return (
                  <div
                    key={labCode}
                    className="h-[36px] w-[36px] bg-[#161618]"
                    aria-hidden="true"
                  />
                );
              }

              return (
                <button
                  key={labCode}
                  type="button"
                  onClick={openPopupFor(initiative.popup)}
                  aria-label={`${initiative.title} — ${units[labCode]?.title} and ${units[arcCode]?.title}`}
                  className="flex h-[36px] w-[36px] items-center justify-center bg-[#3a3a3a] active:bg-[#737EA5]"
                >
                  <span
                    aria-hidden="true"
                    className="h-[8px] w-[8px] bg-grey-1"
                  />
                </button>
              );
            })}
          </div>
        ))}

        {/* Studios sit alongside the Matrix rather than inside it */}
        <div className="mt-[10px] flex gap-[2px]">
          {[...STUDIO_ORDER, BASE_STUDIO].map((code) => (
            <CodeButton
              key={code}
              unit={units[code]}
              onOpen={openPopupFor(code)}
            />
          ))}
        </div>
      </div>

      <p className="p-xl-regular mt-[18px] max-w-[380px] text-label">
        Rows are Arcs, columns are Labs, and the studios sit below. A marked
        square is a project at that intersection — tap any code or square for
        the detail.
      </p>
    </div>
  );
}
