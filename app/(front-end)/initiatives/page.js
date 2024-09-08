import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

const INITIATIVES_QUEARY = `
*[_type == 'initiative'] {
 "image": image.asset->.url,
  "metadata": image.asset->metadata,
...
}
`;

export default async function Initiatives() {
  const initiatives = await sanityFetch({
    query: INITIATIVES_QUEARY,
    tags: ['initiative'],
  });

  return (
    <div className="mt-[40px] flex flex-col items-center justify-center sm:mt-[100px] md:items-start md:justify-start">
      <div className="flex flex-col items-start justify-start gap-[30px] sm:w-[690px] md:w-full">
        <h1 className="heading-5xl-Reg sm:heading-7xl font-SaansRegular text-white">
          Initiatives
        </h1>
        <p className="p-xl-regular sm:p-body2 max-w-md text-white sm:max-w-[600px]">
          Our initiatives represent areas of work where we have been able to go
          deeper and build focused expertise over time. Underpinned by strong
          partnerships, these long-term explorations have allowed us to iterate
          our approach and lean into adjacent opportunities.
        </p>
      </div>

      <ul className="mt-[40px] grid w-full grid-cols-1 sm:mt-[100px] sm:w-[690px] md:w-full md:grid-cols-2">
        {initiatives.map((initiative, id) => (
          <li
            key={id}
            className="flex flex-col border-t-[0.5px] border-[#353535] py-[34px] last:border-b-[0.5px] md:odd:border-r-[0.5px] md:odd:pr-[34px] md:even:pl-[34px] [&:nth-last-child(2)]:border-b-[0.5px] group"
          >
            <Link href={`/initiatives/${initiative.slug.current}`}>
              <div className="relative mb-[30px] h-[352px]">
                <Image
                  src={urlForImage(initiative?.image)}
                  alt={initiative.image.alt}
                  fill
                  sizes="
              (max-width: 768px) 90vw,
              (max-width: 1200px) 60vw,
              90vw"
                  className="w-full object-cover group-hover:opacity-80"
                  placeholder="blur"
                  blurDataURL={initiative?.metadata.lqip}
                />
              </div>
              <h2 className="mb-[18px] font-SaansRegular text-5xl text-white group-hover:opacity-80">
                {initiative.title}
              </h2>
              <p className="pb-[20px] font-SaansRegular text-xl text-[#A8A8A8]">
                {initiative.short_description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
