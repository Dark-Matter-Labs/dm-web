import Image from 'next/image';
import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import dmLogo from '../images/dm-logo.png';
import dmLogoHover from '../images/dm-logo-hover.png';

export default function Navbar() {
  const [hover, setHover] = useState(false);
  return (
    <div className="sticky top-0 z-[90] flex items-center justify-between bg-gradient-to-b from-[#111112FF] via-[#111112B3] to-[#11111200] py-[30px]">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="col-span-5 "
      >
        <Link href="/">
          {hover ? (
            <Image
              src={dmLogoHover}
              alt="Dm logo animation in multiple languages"
              width={200}
              height={40}
            />
          ) : (
            <Image
              src={dmLogo}
              alt="Dm logo animation in multiple languages"
              width={200}
              height={40}
            />
          )}
        </Link>
      </div>
      <div className="col-span-7 w-[690px]">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className=" ">
                <div className="">
                  <div className="hidden sm:block">
                    <div className="flex items-center justify-between">
                      <a
                        href="https://glorious-impact-532915.framer.app/feed"
                        className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white "
                      >
                        Feed
                      </a>
                      <a
                        href="https://glorious-impact-532915.framer.app/initiatives"
                        className="nav-xl py-2 text-grey-4 transition ease-in-out hover:text-white"
                      >
                        Initiatives
                      </a>
                      <a
                        href="https://glorious-impact-532915.framer.app/team"
                        className="nav-xl py-2 text-grey-4 transition ease-in-out hover:text-white"
                      >
                        Team
                      </a>
                      <a
                        href="https://glorious-impact-532915.framer.app/jobs"
                        className="nav-xl py-2 text-grey-4 transition ease-in-out hover:text-white"
                      >
                        Jobs
                      </a>
                      <a
                        href="https://glorious-impact-532915.framer.app/contacts"
                        className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white"
                      >
                        Contact
                      </a>
                      <a
                        href="https://glorious-impact-532915.framer.app/contribute"
                        className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white"
                      >
                        Support
                      </a>
                      <a
                        href="https://provocations.darkmatterlabs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-xl py-2  text-grey-4 transition ease-in-out hover:text-white"
                      >
                        Provocations↗
                      </a>
                    </div>
                  </div>
                  <div className="-mr-2 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {/* TODO: update mobile menu */}
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/team"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
