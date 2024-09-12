import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityFetch } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import ProjectMetadata from '@/components/ProjectMetadata';
import BackButton from '@/components/BackButton';
import { portableTextComponents } from '@/sanity/lib/portable-text/pt-componets';

const feed_project_query = `
*[_type == "feedItem" && slug.current == $slug][0] {
  ...,
  "metadata": image.asset->metadata,
  team[]->{
  ...,
  "image": headshot.asset->.url,
  "metadata": headshot.asset->metadata,
  },
  labs[]->{
  ...,
  "image": image.asset->.url,
  "metadata": image.asset->metadata,
  },
  arcs[]->{
  ...,
  "image": image.asset->.url,
  "metadata": image.asset->metadata,
  },
  studios[]->{
  ...,
  "image": image.asset->.url,
  "metadata": image.asset->metadata,
  },
  partners[]->{
  ...,
  },
  "next": *[_type == "feedItem" && type == 'project' && date < ^.date] | order(date desc)[0] { 
  title,
    "image": image.asset->.url,
  },
  "previous": *[_type == "feedItem" && type == 'project' && date > ^.date] | order(date desc)[0] { 
  title,
    "image": image.asset->.url,
  }
}
`;

export default async function feed_itemPage({ params }) {
  const feed_item = await sanityFetch({
    query: feed_project_query,
    tags: ['feedItem'],
    qParams: { slug: params.slug },
  });

  if (!feed_item) {
    notFound();
  }

  return (
    <div className="initiative-grid flex pb-[100px] pt-[60px] sm:pt-28">
      <div className="side-display">
        <ProjectMetadata initiative={feed_item} back_text={'back to feed'} />
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-[30px] sm:w-[690px]">
        <div className="project-back">
          <BackButton text="back to feed" />
        </div>
        <Image
          src={urlForImage(feed_item.image)}
          alt="team member"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur"
          blurDataURL={feed_item.metadata.lqip}
        />
        <h1 className="heading-5xl-Reg text-grey-1">{feed_item.title}</h1>
        <h2 className="heading-4xl text-grey-3">{feed_item.subtitle}</h2>
        <div className="meta-mobile">
          <ProjectMetadata initiative={feed_item} back_text={'back to feed'} />
        </div>
        <div className="border-y border-y-[#353535] pb-[100px] pt-[30px]">
          <PortableText
            value={feed_item.description}
            components={portableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
