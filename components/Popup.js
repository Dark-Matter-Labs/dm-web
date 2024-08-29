import {
  Transition,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

import test from '../images/Leee.png';

function Popup({ title, openState, setOpen, website, publication, content }) {
  return (
    <Dialog open={openState} onClose={setOpen} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#111112] bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center">
          <DialogPanel
            transition
            className="shadow-layer relative flex h-auto w-[690px] transform items-start justify-start overflow-hidden border-[0.5px] border-[#353535] bg-[#161618] text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex flex-col items-start justify-start gap-[22px] border-r-[0.5px] border-[#353535] pb-[80px]">
              <div className="h-[200px] w-[200px]">
                <Image
                  src={test}
                  style={{ objectFit: 'fill' }}
                  width={200}
                  height={200}
                  alt="cover image"
                />
              </div>
              <div className=" pl-[20px]">
                <p className="pb-[12px] font-SaansMed text-xl uppercase text-[#595959]">
                  Links
                </p>
                {website !== '' && (
                  <div className="">
                    <a target="_blank" href={website}>
                      <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                        Website ↗
                      </p>
                    </a>
                  </div>
                )}
                <div className="">
                  <a target="_blank" href={website}>
                    <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                      Blog Series ↗
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-16 py-[28px] pl-[28px] pr-[32px]">
              <div className="flex items-center justify-between">
                <DialogTitle
                  as="h3"
                  className="font-SaansRegular text-[24px] leading-13 text-white"
                >
                  {title} [ARC]
                </DialogTitle>
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
              </div>
              <div className="sm:flex sm:items-start">{content}</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Popup;
