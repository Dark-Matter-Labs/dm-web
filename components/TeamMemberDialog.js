'use client';
import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';

function TeamPopUp({ dmlien, openState, setOpen }) {
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  return (
    <Dialog open={openState} onClose={setOpen} className="relative z-60">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#111112]/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center py-24 text-center sm:items-center">
          <DialogPanel
            transition
            className="shadow-layer relative flex w-4/5 transform flex-col items-center justify-between overflow-hidden border-[0.5px] border-[#353535] bg-[#161618] text-left transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:min-h-full sm:w-[762px] sm:flex-row sm:items-stretch sm:justify-start data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            {/* Close control is available at every breakpoint — on mobile the
                only previous way out was tapping the backdrop. */}
            <div className="absolute top-0 right-0 z-10 pt-4 pr-4">
              <button
                type="button"
                className="rounded-md bg-transparent text-grey-3 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-3"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex flex-col self-stretch border-r-[0.5px] border-[#353535] sm:min-h-full">
              {dmlien.image && (
                <Image
                  src={urlForImage(dmlien?.image)}
                  alt={dmlien?.fullName}
                  placeholder={dmlien?.metadata?.lqip ? 'blur' : 'empty'}
                  blurDataURL={dmlien?.metadata?.lqip}
                  width={294}
                  height={294}
                  className="w-auto border-b-[0.5px] border-[#353535] object-cover sm:w-full"
                />
              )}

              <div className="flex h-full flex-col gap-3 self-stretch p-[30px] font-SaansRegular">
                <h3 className="font-SaansMed text-xl text-label uppercase">
                  Contacts
                </h3>
                <ul>
                  <li className="font-SaansRegular text-lg text-white hover:underline">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(dmlien.email);
                        setShowLinkCopied(true);
                        setTimeout(() => {
                          setShowLinkCopied(false);
                        }, 2000);
                      }}
                      className="flex items-center gap-[8px] text-left hover:cursor-pointer"
                    >
                      {dmlien.email}
                      <span title="Copy email to clipboard">
                        <Square2StackIcon className="h-4 w-4" />
                      </span>
                    </button>
                  </li>
                </ul>
                <p aria-live="polite" className="p-lg-regular text-gray-100">
                  {showLinkCopied ? 'Email copied!' : ''}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] py-[28px] pr-[32px] pl-[28px] sm:min-h-full sm:basis-[468px]">
              <div className="flex items-center justify-between">
                <DialogTitle
                  as="h3"
                  className="font-SaansRegular text-[24px] leading-13 text-white"
                >
                  {dmlien.fullName}
                </DialogTitle>
              </div>
              <div className="font-SaansRegular text-white sm:flex sm:items-start">
                {dmlien.bio}
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default TeamPopUp;
