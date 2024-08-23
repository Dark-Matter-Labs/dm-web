// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Navbar from '../../components/Navbar';
import { client } from '../../sanity/lib/client';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { urlForImage } from '../../sanity/lib/image';
import Image from 'next/image';

const dmlienQuery = `
*[_type == 'dmlien'] | order(fullName asc) {
    "image": headshot.asset->.url,
    ...,
}
`;

export default function TeamPage({ dmliens }) {
  return (
    <>
      <main className="mx-auto max-w-screen-xl">
        <Navbar />
        <div className="grid w-full grid-cols-12 items-center justify-end gap-0 text-white">
          <div className="col-span-5"></div>
          <div className="col-span-12 mt-36 font-SaansRegular text-4xl font-light leading-[54px] md:col-span-7">
            We’re a multidisciplinary team with a shared passion for taking on
            societal challenges in education, food systems, urban design,
            logistics, data, policy, finance, healthcare, governance and
            organisational culture.
            <div className="mt-12 font-SaansRegular text-[27px] text-[#6A6A6A]">
              Meet the team <ArrowDownIcon className="inline h-6 w-6" />
            </div>
          </div>
        </div>
        <ul className="mt-12 grid w-full grid-cols-12 items-start justify-center gap-6 pb-32 text-white">
          {dmliens.map((dmlien, id) => (
            <li
              key={id}
              className="col-span-12 flex flex-col items-center justify-center md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <Image
                src={urlForImage(dmlien.image)}
                alt={dmlien.fullName}
                width={340}
                height={340}
                className="mb-6"
              />
              <div className="flex w-full flex-col items-start">
                <h2 className="font-SaansRegular text-[24px] font-normal ">
                  {dmlien.fullName}
                </h2>
                <h3 className="font-SaansRegular text-[24px] font-normal text-[#A8A8A8]">
                  {dmlien.location}
                </h3>
              </div>
              <p className="mt-6 font-SaansRegular text-[18px] font-normal">
                {dmlien.bio}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const dmliens = await client.fetch(dmlienQuery);
  return { props: { dmliens } };
}
