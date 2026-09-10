import Lab from '@/components/Lab';
import Initiative from '@/components/Initiative';
import StudioInitiative from '@/components/StudioInitiative';
import StudioLabInitiative from '@/components/StudioLabInitiative';
import MatrixCell from './MatrixCell';
import { LAB_ORDER, ARC_ORDER, INITIATIVE_AT } from './matrix-layout';

const CELL_COMPONENT = {
  'lab-arc': Initiative,
  studio: StudioInitiative,
  'studio-lab': StudioLabInitiative,
};

/**
 * The 8 lab columns of the Matrix, each holding 9 cells — one per arc.
 *
 * Replaces ~1,530 lines of hand-written JSX. Unit names and codes come from
 * Sanity via `units`; the grid order and the ten intersections come from
 * `matrix-layout.js`.
 */
export default function MatrixGrid({
  units,
  isActive,
  unitSetter,
  openPopup,
  openPopupFor,
  closePopup,
  scrollYProgress,
  bgHoverInterpolate,
}) {
  return LAB_ORDER.map((labCode) => {
    const lab = units[labCode];

    return (
      <div key={labCode}>
        {lab && (
          <Lab
            title={lab.matrixName}
            short={lab.id}
            activeState={isActive(labCode) || openPopup === labCode}
            setActive={unitSetter(labCode)}
            setOpen={openPopupFor(labCode)}
            scrollYProgress={scrollYProgress}
            bgHoverInterpolate={bgHoverInterpolate}
          />
        )}

        {ARC_ORDER.map((arcCode) => {
          const initiative = INITIATIVE_AT[`${labCode}:${arcCode}`];

          if (!initiative) {
            return (
              <MatrixCell
                key={arcCode}
                active={isActive(arcCode) || isActive(labCode)}
                onEnter={() => {
                  unitSetter(arcCode)(true);
                  unitSetter(labCode)(true);
                }}
                onLeave={() => {
                  unitSetter(arcCode)(false);
                  unitSetter(labCode)(false);
                }}
              />
            );
          }

          const Cell = CELL_COMPONENT[initiative.variant];
          const {
            labels,
            sets,
            activeAll,
            activeNot = [],
            hoverAny,
          } = initiative;

          const active =
            (activeAll.every(isActive) && !activeNot.some(isActive)) ||
            openPopup === initiative.popup;

          return (
            <Cell
              key={arcCode}
              title={initiative.title}
              arc={labels.arc}
              lab={labels.lab}
              studio={labels.studio}
              activeState={active}
              hoverState={hoverAny.some(isActive)}
              setActiveArc={sets.arc ? unitSetter(sets.arc) : undefined}
              setActiveLab={sets.lab ? unitSetter(sets.lab) : undefined}
              setActiveStudio={
                sets.studio ? unitSetter(sets.studio) : undefined
              }
              setOpen={openPopupFor(initiative.popup)}
            />
          );
        })}
      </div>
    );
  });
}
