import Image from 'next/image';
import DMButton from '@/components/Button';
import TeamGrid from '@/components/TeamGrid';
import { sanityFetch } from '@/sanity/lib/client';

const dmlienQuery = `
*[_type == 'dmlien'] | order(fullName asc) {
    "image": headshot.asset->.url,
    ...,
}
`;

export default async function TeamPage() {
  const dmliens = await sanityFetch({
    query: dmlienQuery,
    tags: ['dmlien', 'initiative'],
  });
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] flex w-full items-start md:items-center justify-center md:justify-end gap-0 text-white ">
        <div className="max-w-[690px] border-b border-[#353535] font-SaansRegular">
          <div className="mb-[30px] heading-5xl-Reg sm:heading-7xl text-white">
            Team
          </div>
          <p className="mb-[60px] p-xl-regular sm:p-body2">
          We’re a multidisciplinary team with a shared passion for applying innovative approaches to complex societal challenges. With expertise in disciplines ranging from accountancy, policy and law through to urban design and organisational culture, we work in fluid teams to ensure compound learning.
          </p>
        </div>
      </div>
      <TeamGrid dmliens={dmliens} />
      <div className="mt-[40px] sm:mt-[100px] flex items-center sm:items-start justify-center md:justify-end px-[20px] sm:px-0">
        <div className="relative h-[220px] sm:h-[400px] w-4/5 sm:w-[690px] pt-[100px]">
          <Image
            src="/team.avif"
            alt="team photo"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
      <div className="mb-[30px] mt-[63px] flex items-center md:items-start justify-center md:justify-end px-[20px] sm:px-0">
        <div className="flex flex-col items-center md:items-start justify-center md:justify-end w-4/5 sm:w-[690px]">
          <p className=" text-white">
            We are a distributed global team collaborating at the intersection of continents, languages, time zones and cultural backgrounds. A critical part of our annual rhythm is for the full team to gather in-person to reconnect, reflect, learn and celebrate.
          </p>
          <div className="mt-[30px] self-start">
            <DMButton internal href="/jobs">
              Join our team
            </DMButton>
          </div>
        </div>
      </div>
    </>
  );
}
