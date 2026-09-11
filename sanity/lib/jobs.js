/**
 * One definition of "open" for both the jobs page and the nav counter.
 *
 * `close_date` is optional in the schema (`sanity/schemas/job.js` sets no
 * `Rule.required()` on it), so a role can legitimately have no closing date
 * at all. A naive `close_date > now()` would silently hide those roles —
 * and, because `close_date` is a `date` (`YYYY-MM-DD`) while `now()` is a
 * full datetime, it would also hide a role closing *today*: the string
 * '2026-09-11' sorts before '2026-09-11T11:00:00Z'.
 *
 * So: keep a role if it has no closing date, or if that date has not yet
 * passed. `>=` makes the closing day itself the last day to apply, which is
 * how "last date to apply by" reads in the schema description.
 */
export const openJobsFilter = `_type == 'jobObject' && (!defined(close_date) || close_date >= $today)`;

/**
 * Today in UTC as `YYYY-MM-DD`, to compare against a Sanity `date` field.
 *
 * Passed as a query parameter rather than inlined so the Next data cache
 * keys on it: a new day is a new cache key, so the filtered list can never
 * be served from yesterday's entry.
 */
export function openJobsParams() {
  return { today: new Date().toISOString().slice(0, 10) };
}
