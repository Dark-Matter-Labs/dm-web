import { Fragment } from 'react';

const CONTRACT_TYPE_LABELS = {
  fulltime: 'Full-time',
  parttime: 'Part-time',
  subcontract: 'Subcontract',
};

const closingDateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // `close_date` is a Sanity `date`, so 'YYYY-MM-DD' parses as UTC midnight.
  // Formatting in local time would show the previous day west of Greenwich.
  timeZone: 'UTC',
});

function formatClosingDate(closeDate) {
  const parsed = new Date(closeDate);
  if (Number.isNaN(parsed.getTime())) return null;
  return closingDateFormat.format(parsed);
}

function formatLength(months) {
  if (typeof months !== 'number' || months <= 0) return null;
  return `${months} ${months === 1 ? 'month' : 'months'}`;
}

/**
 * A single open role.
 *
 * Every field below `positionName` is optional in the schema, so the meta
 * line is assembled from whatever is actually set and omitted entirely when
 * nothing is. Nothing here is dimmed: this is the detail a reader needs to
 * decide whether to click, which is the last thing to render faintly.
 */
export default function JobCard({ job }) {
  const locations = (job.location ?? []).filter((loc) => loc?.city);
  const closingDate = job.close_date ? formatClosingDate(job.close_date) : null;

  const meta = [
    CONTRACT_TYPE_LABELS[job.contract_type] ?? null,
    formatLength(job.length),
    locations.length > 0 ? (
      <>
        {locations.map((loc, index) => (
          <Fragment key={`${loc.countryCode}-${loc.city}-${index}`}>
            {index > 0 && ', '}
            {loc.countryCode && (
              <span className="align-super text-[9.5px]">
                {loc.countryCode}{' '}
              </span>
            )}
            {loc.city}
          </Fragment>
        ))}
      </>
    ) : null,
    // Expired roles are filtered out of the query, so "Closes" is still
    // true by the time it reaches the page. Kept on one line: a date broken
    // across two is the one thing here a reader is scanning for.
    closingDate ? (
      <time className="whitespace-nowrap" dateTime={job.close_date}>
        Closes {closingDate}
      </time>
    ) : null,
  ].filter(Boolean);

  return (
    <div>
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        <h3 className="heading-4xl text-white">{job.positionName} ↗</h3>
      </a>
      {meta.length > 0 && (
        <p className="mt-1 p-xl-regular text-[#EBEBEB]">
          {meta.map((item, index) => (
            <Fragment key={index}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              {item}
            </Fragment>
          ))}
        </p>
      )}
    </div>
  );
}
