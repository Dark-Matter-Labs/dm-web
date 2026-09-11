'use client';
import { useCallback, useMemo, useState } from 'react';

import TeamMemberCard from './TeamMemberCard';
import TeamPopUp from './TeamMemberDialog';

// Horizontal padding lives on the wrapper, not here, so both the current and
// alumni grids share one definition without conflicting Tailwind utilities.
const GRID_CLASSES =
  'grid w-full grid-cols-2 gap-4 border-b border-[#353535] pb-[60px] xs:grid-cols-3 sm:max-w-[690px] sm:grid-cols-4';

export default function TeamGrid({ dmliens }) {
  const [hover, setHover] = useState(null);
  const [openTeam, setOpenTeam] = useState(false);
  const [dmlien, setDmlien] = useState({});

  // Split once per data change rather than on every render.
  const { current, alumni } = useMemo(() => {
    const people = dmliens ?? [];
    return {
      current: people.filter((person) => !person.alumni),
      alumni: people.filter((person) => person.alumni),
    };
  }, [dmliens]);

  // Only current team can be hovered, so the bio panel never needs to
  // consider alumni.
  const hoveredPerson = useMemo(
    () => current.find((person) => person.fullName === hover),
    [current, hover],
  );

  const handleSelect = useCallback((person) => {
    setDmlien(person);
    setOpenTeam(true);
    setHover(null);
  }, []);

  const handleHoverStart = useCallback((fullName) => setHover(fullName), []);
  const handleHoverEnd = useCallback(() => setHover(null), []);

  return (
    <>
      <div className="people-grid relative mt-[40px] flex sm:mt-[100px]">
        {/* Bio panel: only the hovered person is rendered, rather than one
            hidden node per team member. */}
        <div className="people-detail top-44 z-10 h-full w-[400px] text-white">
          {hoveredPerson && (
            <div className="top-0 left-0 block h-full w-auto items-center justify-center text-white">
              <h2 className="font-SaansRegular w-full pb-2.5 text-5xl leading-14">
                {hoveredPerson.fullName}
              </h2>
              <p className="font-SaansRegular w-full text-xl leading-12">
                {hoveredPerson.bio}
              </p>
            </div>
          )}
        </div>

        <div className="flex w-full flex-col px-[20px] sm:max-w-[690px] sm:px-0">
          <ul className={GRID_CLASSES}>
            {current.map((person) => (
              <TeamMemberCard
                key={person._id ?? person.fullName}
                person={person}
                onSelect={handleSelect}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </ul>

          {alumni.length > 0 && (
            <section aria-labelledby="team-alumni-heading">
              <div className="flex flex-col gap-[10px] pt-[60px] pb-[30px]">
                <h2
                  id="team-alumni-heading"
                  className="font-SaansMed text-label text-xl uppercase"
                >
                  Alumni
                </h2>
                <p className="font-SaansRegular text-grey-3 max-w-[520px] text-xl leading-12">
                  People who shaped this work and have since moved on. Their
                  contribution stays part of the record.
                </p>
              </div>
              {/* Names only, and not interactive: we hold no headshot, bio or
                  current location for most alumni, so there is nothing for a
                  hover or a dialog to show.

                  Multi-column rather than a grid. In a grid, one name that
                  wraps to two lines makes its whole row taller and leaves a
                  gap under every single-line name beside it. Columns flow the
                  names as text, so a long one simply takes the space it needs
                  and the next name follows. Three columns at 690px gives
                  ~220px a column, which fits every current name on one line
                  anyway; `break-inside-avoid` keeps any future longer one
                  from splitting across a column break. */}
              <ul className="columns-2 gap-x-[24px] border-b border-[#353535] pb-[60px] sm:columns-3">
                {alumni.map((person) => (
                  <li
                    key={person._id ?? person.fullName}
                    className="font-SaansRegular text-grey-3 break-inside-avoid pb-[10px] text-xl leading-12"
                  >
                    {person.fullName}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <TeamPopUp openState={openTeam} setOpen={setOpenTeam} dmlien={dmlien} />
      </div>
    </>
  );
}
