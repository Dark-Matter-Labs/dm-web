import { client } from '@/sanity/lib/client';
import { LLMS_QUERY, buildIndex } from '@/utils/llms';

/**
 * /llms.txt — an index of the site in plain text, for agents that would
 * rather not parse the HTML. https://llmstxt.org
 *
 * This is the part of Cloudflare's "Markdown for Agents" we can do ourselves.
 * That feature is an edge transform, and darkmatterlabs.org is DNS-only on
 * Cloudflare - the A record points straight at Vercel - so nothing Cloudflare
 * offers at the edge sits in this request path. Generating it here is also
 * better in one respect: it is built from Sanity, so it says what the CMS
 * currently says rather than what the HTML happened to render.
 */

export const revalidate = 3600;

export async function GET() {
  const data = await client.fetch(LLMS_QUERY, {}, { next: { tags: ['llms'] } });

  return new Response(buildIndex(data), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control':
        'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
