import { sanityFetch } from '@/sanity/lib/client';

import FeedList from '@/components/FeedList';

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
  return <FeedList feed_list={feedItems} />;
}
