'use client';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';
import { useState } from 'react';

import TeamPopUp from './TeamMemberDialog';
export default function TeamGrid({ dmliens }) {
  const [hover, setHover] = useState();
  const [openTeam, setOpenTeam] = useState(false);
  const [dmlien, setDmlien] = useState({});
  return (
    <>
      <div className="relative mt-[40px] flex items-center justify-center sm:mt-[100px] md:items-start md:justify-between">
        <div className="top-44 z-10 hidden h-full w-[400px] text-white md:sticky  md:flex">
          {dmliens.map((person, id) => (
            <div
              key={id}
              className={`${person.fullName === hover ? 'block' : 'hidden'} left-0 top-0 block h-full w-auto items-center justify-center text-white`}
            >
              <h2 className="w-full pb-2.5 font-SaansRegular text-5xl leading-[42px]">
                {person.fullName}
              </h2>
              <p className="w-full font-SaansRegular text-xl leading-[26px]">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
        <ul className="grid w-full max-w-[390px] grid-cols-2 gap-4 border-b border-[#353535] px-[20px] pb-[60px] sm:max-w-[690px] sm:grid-cols-4 sm:px-0">
          {dmliens.map((dmlien, id) => (
            <li key={id} className="group cursor-pointer">
              <button
                className="flex h-full w-full flex-col items-start justify-start"
                onMouseEnter={() => setHover(dmlien.fullName)}
                onMouseLeave={() => setHover(null)}
                onClick={() => {
                  setOpenTeam(true);
                  setDmlien(dmlien);
                  setHover(null);
                }}
              >
                <Image
                  src={urlForImage(dmlien.image)}
                  alt={dmlien.fullName}
                  width={157}
                  height={157}
                  className="mb-4 w-auto duration-200 group-hover:opacity-80"
                />
                <div className="flex w-full flex-col items-start text-left">
                  <h2 className="font-SaansRegular text-xl leading-[21px] text-grey-1 duration-200 group-hover:opacity-80">
                    {dmlien.fullName}
                  </h2>
                  {dmlien?.location?.map((loc, id) => (
                    <h3
                      key={id}
                      className="font-SaansRegular text-[14px] leading-[18px] text-[#707070]"
                    >
                      <span className="align-super text-[9.5px]">
                        {loc.countryCode}{' '}
                      </span>
                      {loc.city}
                    </h3>
                  ))}
                </div>
              </button>
            </li>
          ))}
        </ul>
        <TeamPopUp openState={openTeam} setOpen={setOpenTeam} dmlien={dmlien} />
      </div>
    </>
  );
}
