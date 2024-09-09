import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { convertImage, toBase64 } from '@/utils/imageLoad';
import { portableTextComponents } from '../sanity/lib/portable-text/pt-componets';

import test from '../images/Leee.png';

function SanityPopup({
  title,
  openState,
  setOpen,
  website,
  publication,
  content,
  type,
  image,
  blurImage,
}) {
  return (
    <Dialog open={openState} onClose={setOpen} className="relative z-[60]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#111112] bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center py-24 text-center sm:items-center">
          <DialogPanel
            transition
            className="shadow-layer relative flex h-auto w-4/5 transform flex-col items-center justify-center overflow-hidden border-[0.5px] border-[#353535] bg-[#161618] text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-[690px] sm:flex-row sm:items-start sm:justify-start data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex flex-col items-start justify-start gap-[22px] border-[#353535] pb-4 sm:border-r-[0.5px] sm:pb-[80px]">
              <div className="h-[200px] w-[200px] py-4 sm:py-0">
                {image ? (
                  <Image
                    src={image}
                    style={{ objectFit: 'fill' }}
                    width={200}
                    height={200}
                    alt="cover image"
                    placeholder="blur"
                    blurDataURL={blurImage.lqip}
                  />
                ) : (
                  <Image
                    src={test}
                    style={{ objectFit: 'fill' }}
                    width={200}
                    height={200}
                    alt="cover image"
                  />
                )}
              </div>
              <div className=" pl-0 sm:pl-[20px]">
                <p className="pb-2 font-SaansMed text-xl uppercase text-[#595959] sm:pb-[12px]">
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
                {publication !== '' && (
                  <div className="">
                    <a target="_blank" href={publication}>
                      <p className="pb-[4px] font-SaansRegular text-xl text-[#EBEBEB]">
                        Blog Series ↗
                      </p>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] border-l-[0.5px] border-[#353535] px-4 py-8  sm:py-[28px] sm:pl-[28px] sm:pr-[32px]">
              <div className="flex items-center justify-between ">
                {type === 'arc' ? (
                  <DialogTitle
                    as="h3"
                    className="font-SaansRegular text-[24px] leading-13 text-white"
                  >
                    {title} <span className="align-super">[ARC]</span>
                  </DialogTitle>
                ) : type === 'lab' ? (
                  <DialogTitle
                    as="h3"
                    className="font-SaansRegular text-[24px] leading-13 text-white"
                  >
                    {title} <span className="align-super">[LAB]</span>
                  </DialogTitle>
                ) : type === 'studio' ? (
                  <DialogTitle
                    as="h3"
                    className="font-SaansRegular text-[24px] leading-13 text-white"
                  >
                    {title} <span className="align-super">[STUDIO]</span>
                  </DialogTitle>
                ) : (
                  <DialogTitle
                    as="h3"
                    className="font-SaansRegular text-[24px] leading-13 text-white"
                  >
                    {title}
                  </DialogTitle>
                )}

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
              <div className="sm:flex sm:items-start">
                <PortableText
                  value={content}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default SanityPopup;
