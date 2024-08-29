import {
  Transition,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

import webIcon from '../images/website.svg';
import pubIcon from '../images/publication.svg';

function Popup({ title, openState, setOpen, website, publication, content }) {
  return (
    <Dialog open={openState} onClose={setOpen} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#111112] bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden  bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
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
            <DialogTitle
              as="h3"
              className="font-SaansMed text-2xl text-[#F5F5F5]"
            >
              {title}
              <span className="align-super text-lg uppercase">lab</span>
            </DialogTitle>
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Popup;
