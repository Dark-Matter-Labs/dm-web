import { client } from '@/sanity/lib/client';

const baseUrl = 'https://darkmatterlabs.org';

const FEED_SITEMAP_QUERY = `
*[_type == "feedItem" && defined(slug.current)] | order(date desc) {
  "slug": slug.current,
  "lastmod": coalesce(_updatedAt, _createdAt)
}
`;

const INITIATIVE_SITEMAP_QUERY = `
*[_type == "initiative" && defined(slug.current)] | order(_updatedAt desc) {
  "slug": slug.current,
  "lastmod": coalesce(_updatedAt, _createdAt)
}
`;

export default async function sitemap() {
  const [feedItems, initiatives] = await Promise.all([
    client.fetch(FEED_SITEMAP_QUERY),
    client.fetch(INITIATIVE_SITEMAP_QUERY),
  ]);

  const staticRoutes = [
    '',
    '/feed',
    '/initiatives',
    '/team',
    '/jobs',
    '/contact',
    '/contribute',
    '/privacy-policy',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const feedRoutes =
    feedItems?.map((item) => ({
      url: `${baseUrl}/feed/${item.slug}`,
      lastModified: item.lastmod,
    })) ?? [];

  const initiativeRoutes =
    initiatives?.map((item) => ({
      url: `${baseUrl}/initiatives/${item.slug}`,
      lastModified: item.lastmod,
    })) ?? [];

  return [...staticRoutes, ...feedRoutes, ...initiativeRoutes];
}


