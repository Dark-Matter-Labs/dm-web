'use client';
import { useState, useMemo } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import Link from 'next/link';
import FeedItem from '@/components/FeedItem';

const typeOptions = [
  { title: 'All Types', current: true, value: 'all' },
  { title: 'Projects', current: false, value: 'project' },
  { title: 'Media', current: false, value: 'media' },
  { title: 'Updates', current: false, value: 'update' },
];

export default function FeedList({ feed_list }) {
  const [filterType, setFilterType] = useState(typeOptions[0]);

  // Memoize filtered feed items to avoid recalculating on every render
  const filteredFeedItems = useMemo(() => {
    if (!feed_list) return [];
    if (filterType.value === 'all') return feed_list;
    return feed_list.filter((item) => item.type === filterType.value);
  }, [feed_list, filterType.value]);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="feed-w mt-[60px] flex items-center justify-center pb-[90px] sm:mt-[100px]">
        <div className="feed-top flex  gap-[36px]">
          <div className="w-auto flex-col items-start justify-center gap-[40px]">
            <h1 className="heading-5xl-Reg sm:heading-7xl mb-[30px]  text-white">
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
          <div className="flex items-end justify-center gap-[36px]">
            <Listbox value={filterType} onChange={setFilterType}>
              <Label className="sr-only">Filter by type of feed item</Label>
              <div className="relative">
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <p className="p-xl-regular uppercase text-[#595959]">type</p>
                  <ListboxButton className=" w-[140px] border border-[#353535] bg-transparent px-[12px] py-[4px] hover:bg-[#1e1e1e]">
                    <div className="">
                      <p className="p-xl-regular text-white">
                        {filterType.title}
                      </p>
                    </div>
                  </ListboxButton>
                </div>

                <ListboxOptions
                  transition
                  className="absolute left-0 z-10  mt-2 w-60 origin-top-right overflow-hidden border border-[#353535] bg-[#1D1D1F] shadow-lg focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:right-0"
                >
                  {typeOptions.map((option) => (
                    <ListboxOption
                      key={option.title}
                      value={option}
                      className="p-xl-regular group cursor-default select-none p-[10px] text-[#A8A8A8] data-[focus]:bg-grey-2 data-[focus]:text-white"
                    >
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className="group-data-[selected]:p-xl-medium font-normal">
                            {option.title}
                          </p>
                          <span className="text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden"></span>
                        </div>
                      </div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      <div className="feed-grid flex gap-[10px] ">
        <div className="flex flex-col items-center justify-center gap-[60px] pb-[150px] sm:gap-0">
          {filteredFeedItems.length > 0 ? (
            filteredFeedItems.map((item) =>
              item.type === 'media' ? (
                <a
                  key={item._id || item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer"
                >
                  <FeedItem item={item} />
                </a>
              ) : (
                <Link
                  className="hover:cursor-crosshair"
                  key={item._id || item.title}
                  href={`/feed/${item.slug.current}`}
                >
                  <FeedItem item={item} />
                </Link>
              ),
            )
          ) : (
            <p className="p-xl-regular text-grey-1">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
