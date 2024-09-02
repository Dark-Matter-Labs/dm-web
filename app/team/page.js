import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import Image from 'next/image';
import DMButton from '../../components/Button';

const dmlienQuery = `
*[_type == 'dmlien'] | order(fullName asc) {
    "image": headshot.asset->.url,
    ...,
}
`;

export async function getDmliens() {
  const dmliens = await client.fetch(dmlienQuery);
  return dmliens;
}

export default async function TeamPage() {
  const dmliens = await getDmliens();
  return (
    <>
      <div className="mt-[100px] flex w-full items-center justify-end gap-0 text-white ">
        <div className="max-w-[690px] border-b border-[#353535] font-SaansRegular">
          <div className="mb-[30px] font-SaansRegular text-7xl text-white">
            Team
          </div>
          <p className="mb-[60px] text-3xl leading-[30px]">
            We’re a multidisciplinary team with a shared passion for taking on
            societal challenges in education, food systems, urban design,
            logistics, data, policy, finance, healthcare, governance and
            organisational culture.
          </p>
        </div>
      </div>
      <div className="mt-[100px] flex items-start justify-end">
        <ul className="grid w-full max-w-[690px] grid-cols-4 gap-4 border-b border-[#353535] pb-[60px]">
          {dmliens.map((dmlien, id) => (
            <li
              key={id}
              className="group flex cursor-pointer flex-col items-start justify-start"
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
      <div className="mt-[100px] flex items-start justify-end">
        <div className="relative h-[400px] w-[690px] pt-[100px]">
          <Image
            src="/team.avif"
            alt="team photo"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
      <div className="mb-[30px] mt-[63px] flex items-start justify-end">
        <div className="flex flex-col">
          <p className="w-[690px] text-white">
            We’re a multidisciplinary team with a shared passion for taking on
            societal challenges in education, food systems, urban design,
            logistics, data, policy, finance, healthcare, governance and
            organisational culture.
          </p>
          <div className="mt-[30px] flex">
            <DMButton>Join</DMButton>
          </div>
        </div>
      </div>
    </>
  );
}
