'use client';
import { memo } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

/**
 * A single person tile in the team grid.
 *
 * Current team only. Alumni are listed by name in `TeamGrid` because we hold
 * no headshot, bio or current location for most of them.
 */
function TeamMemberCard({ person, onSelect, onHoverStart, onHoverEnd }) {
  return (
    <li className="group">
      <button
        type="button"
        className="focus-visible:outline-grey-3 flex h-full w-full flex-col items-start justify-start hover:cursor-crosshair focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        onMouseEnter={() => onHoverStart?.(person.fullName)}
        onMouseLeave={() => onHoverEnd?.()}
        onFocus={() => onHoverStart?.(person.fullName)}
        onBlur={() => onHoverEnd?.()}
        onClick={() => onSelect?.(person)}
      >
        <Image
          src={urlForImage(person.image)}
          alt={person.fullName}
          width={157}
          height={157}
          className="mb-4 w-auto duration-200 group-hover:opacity-80"
          placeholder={person.metadata?.lqip ? 'blur' : 'empty'}
          blurDataURL={person.metadata?.lqip}
        />
        <div className="flex w-full flex-col items-start text-left">
          <h3 className="font-SaansRegular text-grey-1 text-xl leading-[21px] duration-200 group-hover:opacity-80">
            {person.fullName}
          </h3>
          {person?.location?.map((loc, id) => (
            <p
              key={id}
              className="font-SaansRegular text-label text-[14px] leading-[18px]"
            >
              <span className="align-super text-[9.5px]">
                {loc.countryCode}{' '}
              </span>
              {loc.city}
            </p>
          ))}
        </div>
      </button>
    </li>
  );
}

export default memo(TeamMemberCard);
