import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';
import Link from 'next/link';

function TeamPopUp({ dmlien, openState, setOpen }) {
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
            className="shadow-layer relative flex h-auto w-[762px] transform flex-row items-start justify-start overflow-hidden border-[0.5px] border-[#353535] bg-[#161618] text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex h-full basis-[294px] flex-col">
              {dmlien.image && (
                <Image
                  src={urlForImage(dmlien?.image)}
                  alt={dmlien?.fullName}
                  width={294}
                  height={294}
                  className="w-auto"
                />
              )}
              <div className="flex flex-col gap-3 border-r-[0.5px] border-t-[0.5px] border-[#353535] p-[30px] font-SaansRegular">
                <h3 className="text-xl uppercase text-[#595959] ">Contacts</h3>
                <ul>
                  <li className="text-lg text-white hover:underline">
                    <Link href="#">{dmlien.email} <Square2StackIcon className='h-4 w-4'/></Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex basis-[468px] flex-col items-start justify-start gap-[16px] border-l-[0.5px] border-[#353535]  py-[28px] pl-[28px] pr-[32px]">
              <div className="flex items-center justify-between">
                <DialogTitle
                  as="h3"
                  className="font-SaansRegular text-[24px] leading-13 text-white"
                >
                  {dmlien.fullName}
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
              <div className="text-white sm:flex sm:items-start">
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
