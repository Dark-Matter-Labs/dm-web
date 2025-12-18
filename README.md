## Dark Matter Labs Website

This repository contains the Dark Matter Labs public website, built with **Next.js (App Router)** and **Sanity** as a headless CMS.

### Tech stack

- **Framework**: Next.js (App Router, React 18, server components + client components)
- **Styling**: Tailwind CSS + custom global styles
- **CMS**: Sanity (content types such as initiatives, feed items, jobs, team members, studios, labs, arcs)
- **Deployment**: Vercel (recommended), with `vercel.json` in this repo
- **Analytics**: Simple Analytics (loaded via `next/script` in the root layout)

### Project structure (high level)

- `app/`
  - `(front-end)/` – public facing site (home, feed, initiatives, jobs, static pages, etc.)
  - `api/` – API routes (e.g. ISR revalidation)
  - `studio/` – embedded Sanity Studio
  - `sitemap.js` – dynamic sitemap for static + Sanity-driven pages
- `components/` – shared React components (navigation, feed, initiatives, team, popups, etc.)
- `sanity/` – Sanity configuration, client, and schemas
- `styles/` – global CSS and Tailwind configuration
- `public/` – static assets (favicons, partner logos, etc.)

### Local development

1. **Install dependencies**

```bash
yarn install
# or
npm install
```

2. **Configure environment**

Create a `.env.local` file (not committed) and provide the required Sanity + Next.js environment variables. Typical variables look like:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
SANITY_API_READ_TOKEN=optional_if_needed # keep this secret, never commit
SANITY_REVALIDATE_SECRET=some-long-random-string # used for Sanity webhooks, keep secret
```

Check `sanity/env.js` for the exact names used in this project.

3. **Run the dev server**

```bash
yarn dev
# or
npm run dev
```

The site will typically be available at `http://localhost:3000`.

### Content model (Sanity)

Key document types (see `sanity/schemas`):

- `feedItem` – items shown on the feed (projects, media, updates)
- `initiative` – long-running initiatives with detail pages
- `jobObject` – job postings shown on `/jobs` and in the navbar counter
- `dmlien` – team members shown on the `/team` page
- `lab`, `arc`, `studio`, `partner` – various entities linked from initiatives and feed items

The front-end uses `sanity/lib/client.js` and the `sanityFetch` helper to:

- Cache responses in production while using `no-store` in development
- Tag responses for revalidation via the `/api/revalidate` route

### Routing and SEO

- All public pages live in `app/(front-end)/`.
- Global metadata and Open Graph defaults are defined in `app/(front-end)/layout.js`.
- Dynamic metadata for individual initiatives and feed items is generated via `generateMetadata` in their respective `[slug]/page.js` files.
- A sitemap is generated from Sanity slugs and key static routes via `app/sitemap.js`.
- `public/robots.txt` is configured to allow crawling of the site.

### Performance notes

- Heavy pages that require interaction (home, feed filters, team interactions) are implemented as client components where needed.
- Images use `next/image` and Sanity image helpers where possible for optimised loading, responsive sizing, and blur-up placeholders.
- Analytics are loaded with `strategy="lazyOnload"` so they do not block first paint.

When making changes, prefer:

- Server components and static data fetching (`generateStaticParams`) where possible
- Streaming / Suspense for heavy sections
- Re-using Sanity queries and tags to keep caching behaviour predictable

### Scripts

Common package scripts (see `package.json`):

- `dev` – start the Next.js development server
- `build` – create a production build
- `start` – start the production server
- `lint` – run linting

### Deployment

The project is designed to be deployed on **Vercel**:

- Connect the Git repository to Vercel.
- Configure the same environment variables used locally.
- Deploy from the Vercel dashboard or via `vercel` CLI.

On deploy, Vercel will:

- Build the Next.js app
- Host static assets and dynamic routes
- Provide the `sitemap.xml` and `robots.txt` endpoints automatically from the `app/` and `public/` setup.

