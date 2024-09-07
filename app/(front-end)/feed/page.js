import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';

import FeedItem from '@/components/FeedItem';

const feedQuery = `
*[_type == 'feedItem'] | order(date desc) {
    "image": image.asset->.url,
    ...,
    labs[]->{
    ...,
    },
    arcs[]->{
    ...,
    },
    studios[]->{
    ...,
    },
}
`;
export default async function Feed() {
  const feedItems = await sanityFetch({
    query: feedQuery,
  });
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="mt-[60px] flex w-full flex-col items-start justify-center pb-[90px] sm:mt-[100px] sm:w-[690px] md:w-full">
        <h1 className="heading-5xl-Reg sm:heading-7xl mb-[30px]  text-white">
          Latest projects and news
        </h1>
        <p className="p-xl-regular sm:p-body2 max-w-[640px] text-white">
          Whether we’re focusing on streets, towns, cities or entire bioregions,
          we’re working to establish collective means of co-ordinating, and
          governing our common resources.
        </p>
      </div>
      <div className="flex w-full items-start justify-between gap-[10px] sm:w-[690px] sm:items-center sm:justify-center md:w-full">
        <div className="flex flex-col items-center justify-center pb-[150px]">
          {feedItems?.map((item) =>
            item.type === 'media' ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FeedItem item={item} />
              </a>
            ) : (
              <Link key={item.title} href={`/feed/${item.slug.current}`}>
                <FeedItem item={item} />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
