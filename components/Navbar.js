'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SocialPills from './SocialPills';

import dmLogo from '../images/dm-logo.png';
import dmLogoHover from '../images/dm-logo-hover.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ jobsCount, jobsCountMobile }) {
  const pathname = usePathname();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  return (
    <div className="sticky top-0 z-90 bg-linear-to-b from-[#111112FF] via-[#111112B3] to-[#11111200] py-[30px]">
      <div className="nav-w global-margin flex items-center justify-between">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="logo-w"
        >
          <Link href="/">
            {hover ? (
              <Image
                src={dmLogoHover}
                alt="Dark Matter Labs logo"
                width={180}
                height={40}
                priority
              />
            ) : (
              <Image
                src={dmLogo}
                alt="Dark Matter Labs logo"
                width={180}
                height={40}
                priority
              />
            )}
          </Link>
        </div>
        <div className="sm:w-[690px]">
          <Disclosure as="nav">
            {({ open }) => (
              <>
                <div className="hidden sm:block">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/feed"
                      className={classNames(
                        pathname === '/feed'
                          ? 'text-white'
                          : 'text-grey-4 hover:text-white',
                        'py-2 nav-xl transition ease-in-out',
                      )}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/initiatives"
                      className={classNames(
                        pathname === '/initiatives'
                          ? 'text-white'
                          : 'text-grey-4 hover:text-white',
                        'py-2 nav-xl transition ease-in-out',
                      )}
                    >
                      Initiatives
                    </Link>
                    <Link
                      href="/team"
                      className={classNames(
                        pathname === '/team'
                          ? 'text-white'
                          : 'text-grey-4 hover:text-white',
                        'side-display hidden py-2 nav-xl transition ease-in-out',
                      )}
                    >
                      Team
                    </Link>
                    <Link
                      href="/jobs"
                      className={classNames(
                        pathname === '/jobs'
                          ? 'text-white'
                          : 'text-grey-4 hover:text-white',
                        'side-display hidden py-2 nav-xl transition ease-in-out',
                      )}
                    >
                      {/* The counter is positioned out of flow, so it cannot
                          shift this label whether it renders or not. */}
                      <p className="relative">
                        Jobs
                        {jobsCount}
                      </p>
                    </Link>
                    <Link
                      href="/contact"
                      className={classNames(
                        pathname === '/contact'
                          ? 'text-white'
                          : 'text-grey-4 hover:text-white',
                        'side-display hidden py-2 nav-xl transition ease-in-out',
                      )}
                    >
                      Contact
                    </Link>
                    <a
                      href="https://provocations.darkmatterlabs.org/"
                      target="_blank"
                      rel="noopener"
                      className="py-2 nav-xl text-grey-4 transition ease-in-out hover:text-white"
                    >
                      Provocations↗
                    </a>
                    <div className="nav-btn -mr-2 flex">
                      {/* Mobile menu button */}
                      <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition ease-in-out hover:text-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars2Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </DisclosureButton>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                <DisclosurePanel
                  transition
                  className="overlay shadow-layer h-screen w-screen origin-top overflow-hidden px-5 backdrop-blur-md transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0 sm:px-8 md:hidden"
                >
                  <DisclosureButton className="relative float-right inline-flex items-center justify-center rounded-md p-2 pt-[34px] text-gray-400 hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>

                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </DisclosureButton>
                  <div className="flex h-[95%] flex-col justify-between">
                    <div className="space-y-1 px-2 pt-[100px] pb-3">
                      <DisclosureButton
                        as={Link}
                        href="/feed"
                        className="block py-2 heading-4xl text-white transition ease-in-out hover:text-white sm:hidden"
                      >
                        Projects
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/initiatives"
                        className="block py-2 heading-4xl text-white transition ease-in-out hover:text-white sm:hidden"
                      >
                        Initiatives
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/team"
                        className="block py-2 heading-4xl text-white transition ease-in-out hover:text-white"
                      >
                        Team
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/jobs"
                        className="block py-2 heading-4xl text-white transition ease-in-out hover:text-white"
                      >
                        <p className="relative inline-block">
                          Jobs
                          {jobsCountMobile}
                        </p>
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/contact"
                        className="block py-2 heading-4xl text-white transition ease-in-out hover:text-white"
                      >
                        Contact
                      </DisclosureButton>
                      <DisclosureButton
                        as="a"
                        href="https://provocations.darkmatterlabs.org/"
                        className="block py-2 heading-4xl text-white transition ease-in-out hover:text-white sm:hidden"
                      >
                        Provocations↗
                      </DisclosureButton>
                    </div>
                    <SocialPills />
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
