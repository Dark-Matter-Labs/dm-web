import { sanityFetch } from '@/sanity/lib/client';
import { openJobsFilter, openJobsParams } from '@/sanity/lib/jobs';

// Only the number is needed, so count in the query rather than fetching
// every job document to call .length on it.
//
// Shares `openJobsFilter` with the jobs page on purpose. Counting every
// jobObject while the page listed only unexpired ones would put a number in
// the nav that the page it links to contradicts.
const jobsCountQuery = `count(*[${openJobsFilter}])`;

/**
 * The open-roles counter beside "Jobs" in the nav.
 *
 * A server component of its own so the root layout no longer has to await a
 * Sanity query before rendering anything — one query for a superscript
 * number used to gate the first paint of every page on the site.
 *
 * Absolutely positioned on purpose. `align-super` in normal flow raises the
 * line box, which pushed the Jobs link below its siblings and needed a
 * `-mt-1` on the link to compensate — a compensation that then broke when
 * the counter was hidden at zero. Out of flow, the counter cannot affect
 * the label's alignment whether it renders or not.
 */
export default async function JobsCount({ className = '' }) {
  const count = await sanityFetch({
    query: jobsCountQuery,
    qParams: openJobsParams(),
    tags: ['jobObject'],
  });

  if (!count) return null;

  return (
    <span
      className={`absolute top-0 left-full pl-px text-[#737EA5] ${className}`}
    >
      {count}
      <span className="sr-only"> open positions</span>
    </span>
  );
}
