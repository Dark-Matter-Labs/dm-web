import Image from 'next/image';
import DMButton from '@/components/Button';
import TeamGrid from '@/components/TeamGrid';
import { sanityFetch } from '@/sanity/lib/client';

const dmlienQuery = `
*[_type == 'dmlien'] | order(fullName asc) {
    "image": headshot.asset->.url,
    "metadata": headshot.asset->metadata,
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
      <div className="mt-[40px] flex w-full items-start justify-center gap-0 text-white sm:mt-[100px] md:items-center md:justify-end ">
        <div className="max-w-[690px] border-b border-[#353535] font-SaansRegular">
          <div className="heading-5xl-Reg sm:heading-7xl mb-[30px] text-white">
            Team
          </div>
          <p className="p-xl-regular sm:p-body2 mb-[60px]">
            We’re a multidisciplinary team with a shared passion for applying
            innovative approaches to complex societal challenges. With expertise
            in disciplines ranging from accountancy, policy and law through to
            urban design and organisational culture, we work in fluid teams to
            ensure compound learning.
          </p>
        </div>
      </div>
      <TeamGrid dmliens={dmliens} />
      <div className="mt-[40px] flex items-center justify-center px-[20px] sm:mt-[100px] sm:items-start sm:px-0 md:justify-end">
        <div className="relative h-[220px] w-4/5 pt-[100px] sm:h-[400px] sm:w-[690px]">
          <Image
            src="/team.avif"
            alt="team photo"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
      <div className="mb-[30px] mt-[63px] flex items-center justify-center px-[20px] sm:px-0 md:items-start md:justify-end">
        <div className="flex w-4/5 flex-col items-center justify-center sm:w-[690px] md:items-start md:justify-end">
          <p className=" text-white">
            We are a distributed global team collaborating at the intersection
            of continents, languages, time zones and cultural backgrounds. A
            critical part of our annual rhythm is for the full team to gather
            in-person to reconnect, reflect, learn and celebrate.
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
