import Arc from '@/components/Arc';
import Studio from '@/components/Studio';
import { ARC_ORDER, STUDIO_ORDER } from './matrix-layout';

/**
 * The Arc column and the Studio row of the Matrix.
 *
 * Both were previously written out one tile at a time. Names and codes now
 * come from Sanity; the order comes from `matrix-layout.js`.
 */

function tileProps(unit, { isActive, unitSetter, openPopup, openPopupFor }) {
  return {
    title: unit.matrixName,
    short: unit.id,
    activeState: isActive(unit.id) || openPopup === unit.id,
    setActive: unitSetter(unit.id),
    setOpen: openPopupFor(unit.id),
  };
}

export function ArcColumn({
  units,
  scrollYProgress,
  bgHoverInterpolate,
  ...state
}) {
  return ARC_ORDER.map((code) => {
    const unit = units[code];
    if (!unit) return null;
    return (
      <Arc
        key={code}
        {...tileProps(unit, state)}
        scrollYProgress={scrollYProgress}
        bgHoverInterpolate={bgHoverInterpolate}
      />
    );
  });
}

export function StudioRow({
  units,
  scrollYProgress,
  bgHoverInterpolate,
  ...state
}) {
  return STUDIO_ORDER.map((code) => {
    const unit = units[code];
    if (!unit) return null;
    return (
      <Studio
        key={code}
        {...tileProps(unit, state)}
        scrollYProgress={scrollYProgress}
        bgHoverInterpolate={bgHoverInterpolate}
      />
    );
  });
}
