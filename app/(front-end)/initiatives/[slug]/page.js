import { sanityFetch } from '@/sanity/lib/client';

const INITIATIVE_SLUG_QUERY = `
*[_type == "initiative" && slug.current == $slug][0] {
  ...,
}
`;

export default async function InitiativePage({ params }) {
  const initiative = await sanityFetch({
    query: INITIATIVE_SLUG_QUERY,
    tags: ['initiative'],
    qParams: { slug: params.slug },
  });
  return <div className="h-96 text-white">{initiative?.title}</div>;
}
