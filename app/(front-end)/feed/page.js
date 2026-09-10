import { sanityFetch } from '@/sanity/lib/client';

import FeedList from '@/components/FeedList';

/**
 * Card-shaped projection.
 *
 * This deliberately does NOT spread `...`. Doing so pulled every field of
 * every feed item into the page — including the full `description` portable
 * text of all 76 items, none of which the list renders. Naming the fields the
 * card actually uses is what keeps this page small.
 */
const feedQuery = `
*[_type == 'feedItem'] | order(date desc) {
    _id,
    title,
    subtitle,
    type,
    date,
    link,
    "slug": slug.current,
    "image": image.asset->.url,
    "lqip": image.asset->metadata.lqip,
    "units": [
      ...labs[]->{ _id, title, "kind": "lab" },
      ...arcs[]->{ _id, title, "kind": "arc" },
      ...studios[]->{ _id, title, "kind": "studio" }
    ]
}
`;

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
