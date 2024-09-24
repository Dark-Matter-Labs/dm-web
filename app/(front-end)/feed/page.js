import { client, sanityFetch } from '@/sanity/lib/client';

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

export const FEED_PATHS_QUERY = `
*[_type == "feedItem" && defined(slug.current)][].slug.current
`;

export async function generateStaticParams() {
  const slugs = await client.fetch(FEED_PATHS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

export default async function Feed() {
  const feedItems = await sanityFetch({
    query: feedQuery,
    tags: ['feedItem'],
  });
  return <FeedList feed_list={feedItems} />;
}

export const metadata = {
  title: 'Feed - Dark Matter Labs',
  description:
    'Whether we’re focusing on streets, towns, cities or entire bioregions, we’re working to establish collective means of co-ordinating, and governing our common resources. Here you can find our latest projects, news, podcasts and articles from our team members.',
};
