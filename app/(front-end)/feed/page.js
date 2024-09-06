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
    <div>
      <div className="mt-[100px] flex flex-col pb-[90px]">
        <h1 className="mb-[30px] font-SaansRegular text-7xl text-white">
          Latest projects and news
        </h1>
        <p className="p-body2 max-w-[600px] text-white">
          Whether we’re focusing on streets, towns, cities or entire bioregions,
          we’re working to establish collective means of co-ordinating, and
          governing our common resources.
        </p>
      </div>
      <div className="flex items-center justify-center gap-[10px] ">
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
