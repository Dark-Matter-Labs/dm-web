'use client';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

/**
 * One labelled dropdown in the feed filter bar.
 *
 * The control border is #606060 rather than the site's decorative #353535
 * hairline: WCAG 1.4.11 asks for 3:1 on the boundary of an interactive
 * element, and #353535 on #111112 is 1.54:1.
 */
export default function FeedFilter({ label, value, options, onChange }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="flex flex-col items-start justify-center gap-[8px]">
        <Label className="p-xl-regular text-label uppercase">{label}</Label>
        <div className="relative">
          <ListboxButton className="flex w-[190px] items-center justify-between gap-[8px] border border-[#606060] bg-transparent px-[12px] py-[6px] text-left hover:bg-[#1e1e1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-3">
            <span className="truncate p-xl-regular text-white">
              {value.title}
            </span>
            <span aria-hidden="true" className="p-xl-regular text-label">
              ↓
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute left-0 z-20 mt-2 max-h-[320px] w-[240px] origin-top overflow-y-auto border border-[#606060] bg-[#1D1D1F] shadow-lg focus:outline-none data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.value}
                value={option}
                className="group flex cursor-default items-center justify-between gap-[10px] p-[10px] p-xl-regular text-grey-3 select-none data-focus:bg-grey-2 data-focus:text-white"
              >
                <span className="font-normal group-data-selected:p-xl-medium">
                  {option.title}
                </span>
                {typeof option.count === 'number' && (
                  <span className="nav-xl text-label tabular-nums group-data-focus:text-white">
                    {option.count}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
}
