import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/client';

import FeedItem from '@/components/FeedItem';

const feedQuery = `
*[_type == 'feedItem'] | order(date desc) {
    "image": image.asset->.url,
    "metadata": image.asset->metadata,
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
    tags: ['feedItem'],
  });
  return (
    <div className="flex flex-col items-center justify-start ">
      <div className="feed-w mt-[60px] flex flex-col items-start justify-center pb-[90px] sm:mt-[100px]">
        <h1 className="heading-5xl-Reg sm:heading-7xl mb-[30px]  text-white">
          Recent projects and news
        </h1>
        <p className="p-xl-regular sm:p-body2 max-w-[640px] text-white">
          Whether we’re focusing on streets, towns, cities or entire bioregions,
          we’re working to establish collective means of co-ordinating, and
          governing our common resources. Here you can find our latest projects,
          news, podcasts and articles from our team members.
        </p>
      </div>
      <div className="feed-grid flex gap-[10px] ">
        <div className="flex flex-col items-center justify-center pb-[150px]">
          {feedItems?.map((item) =>
            item.type === 'media' ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
              >
                <FeedItem item={item} />
              </a>
            ) : (
              <Link
                className="hover:cursor-crosshair"
                key={item.title}
                href={`/feed/${item.slug.current}`}
              >
                <FeedItem item={item} />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
