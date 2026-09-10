import { PortableText } from '@portabletext/react';
import Popup from '@/components/Popup';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';
import { UNIT_LOGOS } from './unit-logos';
import { ALL_UNIT_CODES } from './matrix-layout';

/**
 * Popups for the 21 Matrix units.
 *
 * Replaces 21 hardcoded <Popup> blocks — each carrying its own copy of the
 * unit's description and links — with one component reading Sanity. Only the
 * open unit is rendered, since only one popup can be open at a time.
 *
 * Logos stay local (see unit-logos.js); everything else is content.
 */
export default function UnitPopups({ units, openPopup, closePopup }) {
  const unit = openPopup ? units[openPopup] : null;

  // Guard against an id that isn't a unit — the project, concept and domain
  // popups share the same `openPopup` state.
  if (!unit || !ALL_UNIT_CODES.includes(unit.id)) return null;

  return (
    <Popup
      type={unit.kind}
      title={unit.title}
      image={UNIT_LOGOS[unit.id]}
      links={unit.links}
      openState
      setOpen={closePopup}
      content={
        <PortableText
          value={unit.content}
          components={portableTextComponents}
        />
      }
    />
  );
}
