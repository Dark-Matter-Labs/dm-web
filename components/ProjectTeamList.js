'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

function TeamRow({ person, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(person)}
      className="group focus-visible:outline-grey-3 flex items-center justify-start gap-[10px] text-left hover:cursor-crosshair focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div className="h-[22px] w-[22px] shrink-0 group-hover:opacity-80">
        <Image
          src={urlForImage(person.image)}
          alt=""
          width={22}
          height={22}
          style={{ objectFit: 'fill' }}
        />
      </div>
      <span className="font-SaansRegular text-xl text-[#EBEBEB] group-hover:opacity-80">
        {person.fullName}
      </span>
    </button>
  );
}

/**
 * Team block for a project or initiative page.
 *
 * Current team members are listed first, with headshot and a dialog. Anyone
 * marked as alumni in Sanity is listed by name alone under "Past team", so
 * credit is preserved without implying they are still reachable at Dm — and
 * because we hold no headshot or bio for most of them.
 */
export default function ProjectTeamList({ team, onSelect }) {
  const { current, alumni } = useMemo(() => {
    const people = team ?? [];
    return {
      current: people.filter((person) => !person.alumni),
      alumni: people.filter((person) => person.alumni),
    };
  }, [team]);

  if (current.length === 0 && alumni.length === 0) return null;

  return (
    <>
      <p className="font-SaansMed text-label pb-[12px] text-xl uppercase">
        Team
      </p>

      <div className="flex flex-col items-start gap-[10px]">
        {current.map((person) => (
          <TeamRow
            key={person._id ?? person.fullName}
            person={person}
            onSelect={onSelect}
          />
        ))}
      </div>

      {alumni.length > 0 && (
        <div className="mt-[20px] flex w-full flex-col items-start gap-[10px] border-t border-t-[#353535] pt-[18px]">
          <p className="font-SaansMed text-label text-xl uppercase">
            Past team
          </p>
          {/* Names only, and not interactive — there is no headshot or bio
              behind an alumnus to open. */}
          {alumni.map((person) => (
            <p
              key={person._id ?? person.fullName}
              className="font-SaansRegular text-grey-3 text-xl"
            >
              {person.fullName}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
