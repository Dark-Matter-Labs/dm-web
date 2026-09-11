'use client';

import { useCallback, useState } from 'react';
import BackButton from '@/components/BackButton';
import TeamPopUp from '@/components/TeamMemberDialog';
import ProjectTeamList from '@/components/ProjectTeamList';
import ProjectUnitList from '@/components/ProjectUnitList';
import SanityPopup from './SanityPopup';

export default function ProjectMetadata({
  initiative,
  back_text,
  showUnits = false,
}) {
  const [openTeam, setOpenTeam] = useState(false);
  const [dmlien, setDmlien] = useState({});

  const [unitType, setUnitType] = useState('false');
  const [openUnit, setOpenUnit] = useState(false);
  const [activeUnit, setActiveUnit] = useState({});

  const handleSelectPerson = useCallback((person) => {
    setDmlien(person);
    setOpenTeam(true);
  }, []);

  const handleSelectUnit = useCallback((type, unit) => {
    setUnitType(type);
    setActiveUnit(unit);
    setOpenUnit(true);
  }, []);

  return (
    <div className="meta-data flex gap-[20px] sm:gap-0">
      <div className="side-display">
        <BackButton text={back_text} />
      </div>
      <div className="meta-data-border flex w-full flex-col items-start justify-center gap-[10px] py-[20px]">
        <p className="pb-[12px] font-SaansMed text-xl text-label uppercase">
          Links
        </p>
        {initiative.links?.map((link) => (
          <div key={link.linkUrl} className="">
            <a target="_blank" href={link.linkUrl}>
              <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB] hover:opacity-80">
                {link.linkText} ↗
              </p>
            </a>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-[10px] py-[20px] md:w-[380px] md:border-b md:border-b-[#353535]">
        <ProjectTeamList
          team={initiative?.team}
          onSelect={handleSelectPerson}
        />

        {showUnits && (
          <ProjectUnitList item={initiative} onSelect={handleSelectUnit} />
        )}
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-[10px] py-[20px] md:w-[380px]">
        <p className="pb-[12px] font-SaansMed text-xl text-label uppercase">
          Partners
        </p>

        {initiative?.partners?.map((partner) => (
          <div key={partner.Name} className="flex">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB] hover:opacity-80">
                {partner.Name}
              </p>
            </a>
          </div>
        ))}
      </div>
      <TeamPopUp openState={openTeam} setOpen={setOpenTeam} dmlien={dmlien} />
      <SanityPopup
        type={unitType}
        title={activeUnit.title}
        image={activeUnit.image}
        blurImage={activeUnit.metadata}
        openState={openUnit}
        setOpen={setOpenUnit}
        website={activeUnit.website}
        publication={activeUnit.publication}
        links={activeUnit.links}
        content={activeUnit.content}
      />
    </div>
  );
}
