'use client';
import { memo } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

/**
 * A single person tile in the team grid.
 *
 * Alumni are rendered in a deliberately quieter register — desaturated
 * headshot and a dimmer name — which resolves to the full-colour treatment on
 * hover or keyboard focus. This reads as "past team" without looking broken.
 */
function TeamMemberCard({ person, onSelect, onHoverStart, onHoverEnd }) {
  const isAlumni = Boolean(person.alumni);

  return (
    <li className="group">
      <button
        type="button"
        className="flex h-full w-full flex-col items-start justify-start hover:cursor-crosshair focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-grey-3"
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
          className={`mb-4 w-auto duration-200 group-hover:opacity-80 ${
            isAlumni
              ? 'opacity-75 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0'
              : ''
          }`}
          placeholder={person.metadata?.lqip ? 'blur' : 'empty'}
          blurDataURL={person.metadata?.lqip}
        />
        <div className="flex w-full flex-col items-start text-left">
          <h3
            className={`font-SaansRegular text-xl leading-[21px] duration-200 group-hover:opacity-80 ${
              isAlumni ? 'text-grey-3' : 'text-grey-1'
            }`}
          >
            {person.fullName}
          </h3>
          {person?.location?.map((loc, id) => (
            <p
              key={id}
              className="font-SaansRegular text-[14px] leading-[18px] text-label"
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
