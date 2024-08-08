import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import dmLogo from '../images/DML.gif';

export default function Navbar() {
  return (
    <div className="mt-20 grid grid-cols-12 gap-0 ">
      <div className="col-span-4 justify-self-start">
        <Link href="/">
          <Image
            src={dmLogo}
            alt="Dm logo animation in multiple languages"
            width={300}
          />
        </Link>
      </div>
      <div className="col-span-8 justify-self-start">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-7xl ">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden sm:block">
                      <div className="flex space-x-8">
                        <a href="#" className="nav-2xl py-2 pr-3 text-white">
                          Feed
                        </a>
                        <Link
                          href="/team"
                          className="nav-2xl py-2 pr-3 text-white"
                        >
                          Team
                        </Link>
                        <a href="#" className="nav-2xl py-2 pr-3 text-white">
                          Partnerships
                        </a>
                        <a href="#" className="nav-2xl py-2 pr-3 text-white">
                          Jobs
                        </a>
                        <a href="#" className="nav-2xl py-2 pr-3 text-white">
                          Contact
                        </a>
                        <a href="#" className="nav-2xl py-2 pr-3 text-white">
                          Provocations↗
                        </a>
                      </div>
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
