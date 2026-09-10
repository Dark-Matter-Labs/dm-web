'use client';
import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';

import FeedItem from '@/components/FeedItem';
import FeedFilter from '@/components/FeedFilter';

const PAGE_SIZE = 24;

const ALL_UNITS = { title: 'All units', value: 'all' };
const ALL_YEARS = { title: 'All years', value: 'all' };

function yearOf(item) {
  return item.date ? String(item.date).slice(0, 4) : null;
}

export default function FeedList({ feed_list }) {
  // Stable identity, so the memos below don't recompute on every render when
  // `feed_list` is absent.
  const items = useMemo(() => feed_list ?? [], [feed_list]);

  const [unit, setUnit] = useState(ALL_UNITS);
  const [year, setYear] = useState(ALL_YEARS);
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Filter options come from the content itself, so a new Arc in Sanity shows
  // up here without a code change. Counts tell people where the work is
  // before they commit to a choice.
  const { unitOptions, yearOptions } = useMemo(() => {
    const unitCounts = new Map();
    const yearCounts = new Map();

    for (const item of items) {
      for (const u of item.units ?? []) {
        unitCounts.set(u.title, (unitCounts.get(u.title) ?? 0) + 1);
      }
      const y = yearOf(item);
      if (y) yearCounts.set(y, (yearCounts.get(y) ?? 0) + 1);
    }

    return {
      unitOptions: [
        { ...ALL_UNITS, count: items.length },
        ...[...unitCounts.entries()]
          .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
          .map(([title, count]) => ({ title, value: title, count })),
      ],
      yearOptions: [
        { ...ALL_YEARS, count: items.length },
        ...[...yearCounts.entries()]
          .sort((a, b) => b[0].localeCompare(a[0]))
          .map(([y, count]) => ({ title: y, value: y, count })),
      ],
    };
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (
        unit.value !== 'all' &&
        !(item.units ?? []).some((u) => u.title === unit.value)
      ) {
        return false;
      }
      if (year.value !== 'all' && yearOf(item) !== year.value) return false;
      return true;
    });
  }, [items, unit.value, year.value]);

  // A filter change should show the top of the new result set, not page 3.
  const handleUnit = useCallback((next) => {
    setUnit(next);
    setVisible(PAGE_SIZE);
  }, []);
  const handleYear = useCallback((next) => {
    setYear(next);
    setVisible(PAGE_SIZE);
  }, []);
  const clearFilters = useCallback(() => {
    setUnit(ALL_UNITS);
    setYear(ALL_YEARS);
    setVisible(PAGE_SIZE);
  }, []);

  const isFiltered = unit.value !== 'all' || year.value !== 'all';
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="feed-w mt-[60px] flex items-center justify-center pb-[50px] sm:mt-[100px]">
        <div className="feed-top flex flex-col gap-[36px]">
          <div className="w-auto flex-col items-start justify-center">
            <h1 className="heading-5xl-Reg sm:heading-7xl mb-[30px] text-white">
              Recent projects and news
            </h1>
            <p className="p-xl-regular sm:p-body2 max-w-[640px] text-white">
              Whether we’re focusing on streets, towns, cities or entire
              bioregions, we’re working to establish collective means of
              co-ordinating, and governing our common resources. Here you can
              find our latest projects, news, podcasts and articles from our
              team members.
            </p>
          </div>

          <div className="flex flex-wrap items-end gap-[24px]">
            <FeedFilter
              label="Unit"
              value={unit}
              options={unitOptions}
              onChange={handleUnit}
            />
            <FeedFilter
              label="Year"
              value={year}
              options={yearOptions}
              onChange={handleYear}
            />
            <div className="flex w-full items-center gap-[16px] sm:w-auto sm:pb-[7px]">
              <p aria-live="polite" className="p-xl-regular text-grey-3">
                {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
              </p>
              {isFiltered && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="p-xl-regular text-label underline hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-3"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grid shares the header's measure exactly — 690px at sm, 1200px at
          the matrix breakpoint — so cards line up with the h1 above them. */}
      <div className="flex w-full justify-center px-[20px] sm:px-0">
        <div className="flex w-full flex-col items-stretch pb-[150px] sm:w-[690px] matrix:w-[1200px]">
          {shown.length > 0 ? (
            <>
              <ul className="grid grid-cols-1 gap-x-[40px] gap-y-[50px] sm:grid-cols-2">
                {shown.map((item) => (
                  <li key={item._id} className="flex min-w-0">
                    {item.type === 'media' ? (
                      // A media item's destination is external. One item in
                      // the dataset has no link — render it as plain content
                      // rather than a dead anchor.
                      item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full hover:cursor-pointer"
                        >
                          <FeedItem item={item} />
                        </a>
                      ) : (
                        <div className="flex w-full">
                          <FeedItem item={item} />
                        </div>
                      )
                    ) : (
                      <Link
                        className="flex w-full hover:cursor-crosshair"
                        href={`/feed/${item.slug}`}
                      >
                        <FeedItem item={item} />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {remaining > 0 && (
                <div className="mt-[60px] flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="p-xl-regular border border-[#606060] px-[24px] py-[10px] text-white hover:bg-[#1e1e1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-3"
                  >
                    Load {Math.min(remaining, PAGE_SIZE)} more
                    <span className="text-label"> · {remaining} left</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-start gap-[16px] py-[40px]">
              <p className="p-xl-regular text-grey-1">
                Nothing matches those filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="p-xl-regular text-label underline hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-3"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
