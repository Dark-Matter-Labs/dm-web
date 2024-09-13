'use client';

import Image from 'next/image';
import { useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import BackButton from '@/components/BackButton';
import TeamPopUp from '@/components/TeamMemberDialog';
import SanityPopup from './SanityPopup';

export default function ProjectMetadata({ initiative, back_text }) {
  const [openTeam, setOpenTeam] = useState(false);
  const [dmlien, setDmlien] = useState({});

  const [unitType, setUnitType] = useState('false');
  const [openUnit, setOpenUnit] = useState(false);
  const [activeUnit, setActiveUnit] = useState({});

  return (
    <div className="meta-data flex gap-[20px] sm:gap-0 ">
      <div className="side-display">
        <BackButton text={back_text} />
      </div>
      <div className="meta-data-border flex w-full flex-col items-start justify-center gap-[10px] py-[20px] ">
        <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
          Links
        </p>
        {initiative.website && (
          <div className="">
            <a target="_blank" href={initiative.website}>
              <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                Website ↗
              </p>
            </a>
          </div>
        )}

        {initiative.publication && (
          <div className="">
            <a target="_blank" href={initiative.publication}>
              <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                Blog Series ↗
              </p>
            </a>
          </div>
        )}
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-[10px] py-[20px] md:w-[380px] md:border-b md:border-b-[#353535]">
        <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
          Team
        </p>
        {initiative?.team?.map((person) => (
          <div
            key={person.fullName}
            onClick={() => {
              setDmlien(person);
              setOpenTeam(true);
            }}
            className="group flex items-center justify-center gap-[10px] hover:cursor-crosshair"
          >
            <div className="h-[22px] w-[22px] group-hover:opacity-80">
              <Image
                src={urlForImage(person.image)}
                alt={person.fullName}
                width={22}
                height={22}
                style={{ objectFit: 'fill' }}
              />
            </div>
            <p className=" font-SaansRegular text-xl text-[#EBEBEB] group-hover:opacity-80">
              {person.fullName}
            </p>
          </div>
        ))}
        {back_text === 'back to feed' && (
          <p className="pb-[12px] pt-4 font-SaansMed text-xl uppercase text-[#595959]">
            Units
          </p>
        )}

        {back_text === 'back to feed' &&
          initiative?.labs?.map((lab) => (
            <div
              key={lab.title}
              className="group flex items-center justify-center gap-[10px] hover:cursor-crosshair"
              onClick={() => {
                setUnitType('lab');
                setActiveUnit(lab);
                setOpenUnit(true);
              }}
            >
              <div className="h-[22px] w-[22px] group-hover:opacity-80">
                <img
                  src={urlForImage(lab.image)}
                  alt={lab.title}
                  width={20}
                  height={20}
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <p className=" font-SaansRegular text-xl text-[#EBEBEB] group-hover:opacity-80">
                {lab.title}
              </p>
            </div>
          ))}
        {back_text === 'back to feed' &&
          initiative?.arcs?.map((arc) => (
            <div
              key={arc.title}
              className="group flex items-center justify-center gap-[10px] hover:cursor-crosshair"
              onClick={() => {
                setUnitType('arc');
                setActiveUnit(arc);
                setOpenUnit(true);
              }}
            >
              <div className="h-[22px] w-[22px] group-hover:opacity-80">
                <img
                  src={urlForImage(arc.image)}
                  alt={arc.title}
                  width={20}
                  height={20}
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <p className=" font-SaansRegular text-xl text-[#EBEBEB] group-hover:opacity-80">
                {arc.title}
              </p>
            </div>
          ))}
        {back_text === 'back to feed' &&
          initiative?.studios?.map((studio) => (
            <div
              key={studio.title}
              className="group flex items-center justify-center gap-[10px] hover:cursor-crosshair"
              onClick={() => {
                setUnitType('studio');
                setActiveUnit(studio);
                setOpenUnit(true);
              }}
            >
              <div className="h-[22px] w-[22px] group-hover:opacity-80">
                <img
                  src={urlForImage(studio.image)}
                  alt={studio.title}
                  width={20}
                  height={20}
                  style={{ objectFit: 'fill' }}
                />
              </div>
              <p className=" font-SaansRegular text-xl text-[#EBEBEB] group-hover:opacity-80">
                {studio.title}
              </p>
            </div>
          ))}
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-[10px] py-[20px] md:w-[380px]">
        <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
          Partners
        </p>

        {initiative?.partners?.map((partner) => (
          <div key={partner.Name} className="flex">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
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
        content={activeUnit.content}
      />
    </div>
  );
}
