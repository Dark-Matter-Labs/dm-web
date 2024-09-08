'use client';
import Image from 'next/image';
import { React, useState } from 'react';
import Link from 'next/link';
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SocialPills from './SocialPills';

import dmLogo from '../images/dm-logo.png';
import dmLogoHover from '../images/dm-logo-hover.png';

export default function Navbar({ numberOfJobs }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="sticky top-0 z-[90] bg-gradient-to-b from-[#111112FF] via-[#111112B3] to-[#11111200] py-[30px] ">
      <div className="global-margin matrix:w-[1200px] flex items-center justify-between sm:w-full">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="logo-w "
        >
          <Link href="/">
            {hover ? (
              <Image
                src={dmLogoHover}
                alt="Dm logo animation in multiple languages"
                width={180}
              />
            ) : (
              <Image
                src={dmLogo}
                alt="Dm logo animation in multiple languages"
                width={180}
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
                      className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white "
                    >
                      Feed
                    </Link>
                    <Link
                      href="/initiatives"
                      className="nav-xl py-2 text-grey-4 transition ease-in-out hover:text-white"
                    >
                      Initiatives
                    </Link>
                    <Link
                      href="/team"
                      className="nav-xl side-display hidden py-2 text-grey-4 transition ease-in-out hover:text-white"
                    >
                      Team
                    </Link>
                    <Link
                      href="/jobs"
                      className="nav-xl side-display -mt-1 hidden py-2 text-grey-4 transition ease-in-out hover:text-white"
                    >
                      {numberOfJobs === 0 ? (
                        <p>
                          Jobs
                          <span className="align-super text-[9.5px]">
                            {numberOfJobs}
                          </span>
                        </p>
                      ) : (
                        <p>
                          Jobs
                          <span className="align-super text-[9.5px] text-[#737EA5]">
                            {numberOfJobs}
                          </span>
                        </p>
                      )}
                    </Link>
                    <Link
                      href="/contact"
                      className="nav-xl side-display hidden py-2  text-grey-4 transition ease-in-out hover:text-white"
                    >
                      Contact
                    </Link>
                    {/* <a
                          href="https://glorious-impact-532915.framer.app/contribute"
                          className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white"
                        >
                          Contribute
                        </a> */}
                    <a
                      href="https://provocations.darkmatterlabs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white"
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
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white ">
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
                  className="overlay shadow-layer h-[100vh] w-[100vw] origin-top overflow-hidden px-5 backdrop-blur-md transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 sm:px-8 md:hidden"
                >
                  <DisclosureButton className="relative float-right inline-flex items-center justify-center rounded-md p-2 pt-[34px] text-gray-400  hover:text-white ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>

                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  </DisclosureButton>
                  <div className="flex h-[95%] flex-col justify-between">
                    <div className="space-y-1 px-2 pb-3 pt-[100px]">
                      <DisclosureButton
                        as={Link}
                        href="/feed"
                        className="heading-4xl block py-2 text-white  transition ease-in-out hover:text-white sm:hidden"
                      >
                        Feed
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/initiatives"
                        className="heading-4xl  block py-2 text-white transition ease-in-out hover:text-white sm:hidden"
                      >
                        Initiatives
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/team"
                        className="heading-4xl block py-2  text-white transition ease-in-out hover:text-white"
                      >
                        Team
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/jobs"
                        className="heading-4xl block py-2  text-white transition ease-in-out hover:text-white"
                      >
                        {numberOfJobs === 0 ? (
                          <p>
                            Jobs
                            <span className="align-super text-[12px]">
                              {numberOfJobs}
                            </span>
                          </p>
                        ) : (
                          <p>
                            Jobs
                            <span className="align-super text-[12px] text-[#737EA5]">
                              {numberOfJobs}
                            </span>
                          </p>
                        )}
                      </DisclosureButton>
                      <DisclosureButton
                        as={Link}
                        href="/contact"
                        className="heading-4xl block py-2  text-white transition ease-in-out hover:text-white"
                      >
                        Contact
                      </DisclosureButton>
                      <DisclosureButton
                        as="a"
                        href="https://provocations.darkmatterlabs.org/"
                        className="heading-4xl  block py-2 text-white  transition ease-in-out hover:text-white sm:hidden"
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
