import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import BackButton from '@/components/BackButton';

export default function ProjectMetadata({ initiative, back_text }) {
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
            className="flex items-center justify-center gap-[10px]"
          >
            <div className="h-[22px] w-[22px]">
              <Image
                src={urlForImage(person.image)}
                alt={person.fullName}
                width={22}
                height={22}
                style={{ objectFit: 'fill' }}
              />
            </div>
            <p className=" font-SaansRegular text-xl text-[#EBEBEB]">
              {person.fullName}
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
    </div>
  );
}
