import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { client, sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import ProjectMetadata from '@/components/ProjectMetadata';
import BackButton from '@/components/BackButton';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';

const INITIATIVE_SLUG_QUERY = `
*[_type == "initiative" && slug.current == $slug][0] {
  ...,
  "metadata": image.asset->metadata,
  team[]->{
  ...,
  "image": headshot.asset->.url,
  "metadata": headshot.asset->metadata,
  },
  partners[]->{
  ...,
  },
}
`;

export default async function InitiativePage({ params }) {
  const initiative = await sanityFetch({
    query: INITIATIVE_SLUG_QUERY,
    tags: ['initiative'],
    qParams: { slug: params.slug },
  });

  if (!initiative) {
    notFound();
  }

  return (
    <div className="initiative-grid flex pb-[100px] pt-[60px] sm:pt-28">
      <div className="side-display">
        <ProjectMetadata
          initiative={initiative}
          back_text={'back to initiatives'}
        />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-[30px] sm:w-[690px]">
        <div className="project-back">
          <BackButton text="back to initiatives" />
        </div>
        <Image
          src={urlForImage(initiative.image)}
          alt="team member"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur"
          blurDataURL={initiative.metadata.lqip}
        />
        <h1 className="heading-5xl-Reg text-grey-1">{initiative.title}</h1>
        <h2 className="heading-4xl text-grey-3">{initiative.subtitle}</h2>
        <div className="meta-mobile ">
          <ProjectMetadata
            initiative={initiative}
            back_text={'back to initiatives'}
          />
        </div>
        <div className="p-xl-regular border-y border-y-[#353535] pb-[100px] pt-[30px] text-[#EBEBEB]">
          <PortableText
            value={initiative.description}
            components={portableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;
  // fetch data
  const initiativeData = await client.fetch(
    INITIATIVE_SLUG_QUERY,
    { slug },
    {
      next: { tags: ['initiative'] },
    },
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: initiativeData.title + ' - Dark Matter Labs',
    description: initiativeData.subtitle,
    openGraph: {
      images: [urlForImage(initiativeData.image), ...previousImages],
    },
  };
}
