import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
    slug
  },
  "previous": *[_type == "feedItem" && type == 'project' && date > ^.date] | order(date asc)[0] { 
  title,
    "image": image.asset->.url,
    slug
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

        <div className="flex w-full flex-col items-stretch justify-center gap-[30px] sm:flex-row sm:justify-between sm:gap-0 ">
          {feed_item.previous && (
            <Link href={feed_item.previous.slug.current}>
              <div className="flex flex-row items-start justify-center gap-[16px] hover:cursor-crosshair">
                {/* <div className="">
                  <Image
                    src={urlForImage(feed_item.previous.image)}
                    alt="previous project image"
                    width={80}
                    height={50}
                  />
                </div> */}
                <div className="flex h-full w-full flex-col items-start justify-start gap-[0px] sm:w-[189px] sm:justify-center">
                  <div>
                    <button className="p-xl-medium flex items-center justify-center uppercase text-grey-3  hover:cursor-crosshair">
                      <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
                      <span>previous</span>
                    </button>
                  </div>
                  <span className="p-xl-regular text-[#EBEBEB]">
                    {feed_item.previous.title}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {feed_item.next && (
            <Link href={feed_item.next.slug.current}>
              <div className="flex flex-row items-start justify-end gap-[16px] hover:cursor-crosshair">
                {/* <div className="">
                  <Image
                    src={urlForImage(feed_item.next.image)}
                    alt="next project image"
                    width={80}
                    height={50}
                  />
                </div> */}
                <div className="flex h-full flex-col items-end justify-center gap-[0px] ">
                  <span className="p-xl-regular text-[#EBEBEB]">
                    {feed_item.next.title}
                  </span>
                  <div>
                    <button className="p-xl-medium flex items-center justify-end uppercase text-grey-3 hover:opacity-80  hover:cursor-crosshair sm:justify-center">
                      <span>next</span>
                      <ChevronRightIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
