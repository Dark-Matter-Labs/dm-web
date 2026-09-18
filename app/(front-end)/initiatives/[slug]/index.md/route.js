import { client } from '@/sanity/lib/client';
import { ITEM_QUERY, buildItemMarkdown } from '@/utils/llms';

/**
 * /initiatives/<slug>/index.md — the Markdown version of an initiative.
 *
 * llmstxt.org v2 asks that pages offer a clean Markdown version "at the same
 * URL as the original page, either with .md appended or with the extension
 * replaced", and that URLs without a file name append `index.md`. These URLs
 * have no file name, so that is the form used here.
 */

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "initiative" && defined(slug.current)][].slug.current`,
  );
  return slugs.map((slug) => ({ slug }));
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const item = await client.fetch(
    ITEM_QUERY,
    { slug, type: 'initiative' },
    { next: { tags: ['initiative'] } },
  );

  const md = buildItemMarkdown(item, 'initiatives');
  if (!md) return new Response('Not found', { status: 404 });

  return new Response(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control':
        'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
