import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req) {
  try {
    // Prefer the non-public name. The NEXT_PUBLIC_ variant is only a
    // fallback so revalidation keeps working until the Vercel env var is
    // renamed; a NEXT_PUBLIC_ prefix would ship this secret to the browser
    // the moment anything referenced it from a client component.
    const revalidateSecret =
      process.env.SANITY_REVALIDATE_SECRET ||
      process.env.NEXT_PUBLIC_SANITY_REVALIDATE_SECRET;

    const { isValidSignature, body } = await parseBody(req, revalidateSecret);

    if (!isValidSignature) {
      const message = 'Invalid signature';
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    }

    if (!body?._type) {
      return new Response(body, { status: 400 });
    }

    // All `client.fetch` calls with `{next: {tags: [_type]}}` will be revalidated
    revalidateTag(body._type);
    console.log(`Revalidated ${body._type}`);

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 });
    }
    return new Response('Error', { status: 500 });
  }
}
