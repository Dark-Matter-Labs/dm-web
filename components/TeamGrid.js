'use client';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';
import { useState } from 'react';

export default function TeamGrid({ dmliens }) {
  const [hover, setHover] = useState();
  return (
    <div className="mt-[100px] flex items-start justify-between">
      <div className="relative h-auto w-[400px] text-white">
        {dmliens.map((person, id) => (
          <div
            key={id}
            className={`${person.fullName === hover ? 'block' : 'hidden'} absolute left-0 top-0 w-auto text-white`}
          >
            <h2 className="w-full">{person.fullName}</h2>
            <p className="w-full">{person.bio}</p>
          </div>
        ))}
      </div>
      <ul className="grid w-full max-w-[690px] grid-cols-4 gap-4 border-b border-[#353535] pb-[60px]">
        {dmliens.map((dmlien, id) => (
          <li
            key={id}
            className="group flex cursor-pointer flex-col items-start justify-start"
            onMouseEnter={() => setHover(dmlien.fullName)}
            onMouseLeave={() => setHover(null)}
          >
            <Image
              src={urlForImage(dmlien.image)}
              alt={dmlien.fullName}
              width={157}
              height={157}
              className="mb-4 w-auto duration-200 group-hover:opacity-80"
            />
            <div className="flex w-full flex-col items-start">
              <h2 className="font-SaansRegular text-xl leading-[21px] text-grey-1 duration-200 group-hover:opacity-80">
                {dmlien.fullName}
              </h2>
              <h3 className="font-SaansRegular text-[14px] leading-[18px] text-[#707070]">
                {dmlien.location}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
