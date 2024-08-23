import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

import webIcon from '../images/website.svg';
import pubIcon from '../images/publication.svg';

function Popup({ title, openState, setOpen, website, publication, content }) {
  return (
    <Transition.Root show={openState} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={setOpen}>
        <div className="fixed left-[14.7%] top-[25.5%] z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="font-SaansMed text-2xl text-[#F5F5F5]"
                >
                  {title}
                  <span className="align-super text-lg uppercase">lab</span>
                </Dialog.Title>
                {website !== '' && (
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href={website}>
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                )}

                <div className="sm:flex sm:items-start">{content}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Popup;
