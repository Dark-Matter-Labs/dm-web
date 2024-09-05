import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const INITIATIVES_QUEARY = `
*[_type == 'initiative'] {
 "image": image.asset->.url,
...
}
`;

export default async function Initiatives() {
  const initiatives = await sanityFetch({
    query: INITIATIVES_QUEARY,
    tags: ['initiative'],
  });
  console.log(initiatives);
  return (
    <div className="mt-[100px] flex flex-col">
      <h1 className="mb-[30px] font-SaansRegular text-7xl text-white">
        Initiatives
      </h1>
      <p className="max-w-[600px] font-SaansRegular text-xl text-white">
        Our initiatives represent areas of work where we have been able to go
        deeper and build focused expertise over time. Underpinned by strong
        partnerships, these long-term explorations have allowed us to iterate
        our approach and lean into adjacent opportunities.
      </p>
      <ul className="mt-[100px] grid grid-cols-2">
        {initiatives.map((initiative, id) => (
          <li
            key={id}
            className="flex flex-col border-t-[0.5px] border-[#353535] py-[34px] last:border-b-[0.5px] odd:border-r-[0.5px] odd:pr-[34px] even:pl-[34px] [&:nth-last-child(2)]:border-b-[0.5px]"
          >
            <Link href={`/initiatives/${initiative.slug.current}`}>
              <div className="relative mb-[30px] h-[352px]">
                <Image
                  src={urlForImage(initiative?.image)}
                  alt={initiative.image.alt}
                  fill
                  className="w-full object-cover"
                />
              </div>
              <h2 className="mb-[18px] font-SaansRegular text-5xl text-white">
                {initiative.title}
              </h2>
              <p className="pb-[20px] font-SaansRegular text-xl text-[#A8A8A8]">
                {initiative.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
