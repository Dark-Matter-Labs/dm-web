import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import ProjectMetadata from '@/components/ProjectMetadata';
import BackButton from '@/components/BackButton';

const INITIATIVE_SLUG_QUERY = `
*[_type == "initiative" && slug.current == $slug][0] {
  ...,
  team[]->{
  ...,
  "image": headshot.asset->.url
  }
}
`;

export default async function InitiativePage({ params }) {
  const initiative = await sanityFetch({
    query: INITIATIVE_SLUG_QUERY,
    tags: ['initiative'],
    qParams: { slug: params.slug },
  });

  return (
    <div className="flex flex-col items-center justify-center pb-[100px] pt-[60px] sm:pt-28 md:flex-row md:items-start md:justify-between">
      <div className="hidden md:block">
        <ProjectMetadata initiative={initiative} />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-[30px] sm:w-[690px]">
        <div className="block md:hidden">
          <BackButton text="back to initiatives" />
        </div>
        <Image
          src={urlForImage(initiative.image)}
          alt="team member"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <h1 className="heading-5xl-Reg text-grey-1">{initiative.title}</h1>
        <h2 className="heading-4xl text-grey-3">{initiative.subtitle}</h2>
        <div className="block md:hidden">
          <ProjectMetadata initiative={initiative} />
        </div>
        <div className="border-y border-y-[#353535] pb-[100px] pt-[30px]">
          <p className="p-xl-regular text-[#EBEBEB]">
            {initiative.description}
          </p>
        </div>
      </div>
    </div>
  );
}
