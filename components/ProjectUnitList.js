'use client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const UNIT_GROUPS = [
  { key: 'labs', type: 'lab' },
  { key: 'arcs', type: 'arc' },
  { key: 'studios', type: 'studio' },
];

/**
 * Labs / Arcs / Studios attached to a feed item, rendered as one flat list.
 * Replaces three near-identical inline blocks.
 */
export default function ProjectUnitList({ item, onSelect }) {
  const units = UNIT_GROUPS.flatMap(({ key, type }) =>
    (item?.[key] ?? []).map((unit) => ({ unit, type })),
  );

  if (units.length === 0) return null;

  return (
    <>
      <p className="pt-4 pb-[12px] font-SaansMed text-xl text-label uppercase">
        Units
      </p>
      {units.map(({ unit, type }) => (
        <button
          key={`${type}-${unit._id ?? unit.title}`}
          type="button"
          onClick={() => onSelect(type, unit)}
          className="group flex items-center justify-start gap-[10px] text-left hover:cursor-crosshair focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-3"
        >
          <div className="h-[22px] w-[22px] shrink-0 group-hover:opacity-80">
            <Image
              src={urlForImage(unit.image)}
              alt=""
              width={22}
              height={22}
              style={{ objectFit: 'fill' }}
            />
          </div>
          <span className="font-SaansRegular text-xl text-[#EBEBEB] group-hover:opacity-80">
            {unit.title}
          </span>
        </button>
      ))}
    </>
  );
}
