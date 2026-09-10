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

  const hoveredPerson = useMemo(
    () => (dmliens ?? []).find((person) => person.fullName === hover),
    [dmliens, hover],
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
            <div className="left-0 top-0 block h-full w-auto items-center justify-center text-white">
              <h2 className="w-full pb-2.5 font-SaansRegular text-5xl leading-[42px]">
                {hoveredPerson.fullName}
              </h2>
              {hoveredPerson.alumni && (
                <p className="w-full pb-2.5 font-SaansMed text-xl uppercase text-grey-3">
                  Alumni
                </p>
              )}
              <p className="w-full font-SaansRegular text-xl leading-[26px]">
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
              <div className="flex flex-col gap-[10px] pb-[30px] pt-[60px]">
                <h2
                  id="team-alumni-heading"
                  className="font-SaansMed text-xl uppercase text-label"
                >
                  Alumni
                </h2>
                <p className="max-w-[520px] font-SaansRegular text-xl leading-[26px] text-grey-3">
                  People who shaped this work and have since moved on. Their
                  contribution stays part of the record.
                </p>
              </div>
              <ul className={GRID_CLASSES}>
                {alumni.map((person) => (
                  <TeamMemberCard
                    key={person._id ?? person.fullName}
                    person={person}
                    onSelect={handleSelect}
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                  />
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
