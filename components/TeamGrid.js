'use client';
import Image from 'next/image';
import { urlForImage } from '../sanity/lib/image';
import { use, useEffect, useState } from 'react';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';

export default function TeamGrid({ dmliens }) {
  const [hover, setHover] = useState();
  const [isOpen, setIsOpen] = useState(false);

  console.log(hover)

  return (
    <div className="relative mt-[100px] flex items-start justify-between">
      <div className="sticky top-44 z-10 flex h-full w-[400px]  text-white">
        {dmliens.map((person, id) => (
          <div
            key={id}
            className={`${person.fullName === hover ? 'block' : 'hidden'} left-0 top-0 block h-full w-auto items-center justify-center text-white`}
          >
            <h2 className="w-full pb-2.5 font-SaansRegular text-5xl leading-[42px]">
              {person.fullName}
            </h2>
            <p className="w-full font-SaansRegular text-xl leading-[26px]">
              {person.bio}
            </p>
          </div>
        ))}
      </div>
      <ul className="grid w-full max-w-[690px] grid-cols-4 gap-4 border-b border-[#353535] pb-[60px]">
        {dmliens.map((dmlien, id) => (
          <li key={id} className="group cursor-pointer" id="headlessui-portal-root">
            <button
              className="flex h-full w-full flex-col items-start justify-start"
              onMouseEnter={() => setHover(dmlien.fullName)}
              onMouseLeave={() => setHover(null)}
              onClick={() => {
                setIsOpen(true);

              }}
            >
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
              >
                <DialogBackdrop className="fixed inset-0 bg-transparent" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel static className="max-w-lg space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold">
                      Deactivate account
                    </DialogTitle>
                    <Description>
                      This will permanently deactivate your account
                    </Description>
                    <p>
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed.
                    </p>
                    <div className="flex gap-4">
                      <button onClick={() => setIsOpen(false)}>Cancel</button>
                      <button onClick={() => setIsOpen(false)}>
                        Deactivate
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </Dialog>
              <Image
                src={urlForImage(dmlien.image)}
                alt={dmlien.fullName}
                width={157}
                height={157}
                className="mb-4 w-auto duration-200 group-hover:opacity-80"
              />
              <div className="flex w-full flex-col items-start text-left">
                <h2 className="font-SaansRegular text-xl leading-[21px] text-grey-1 duration-200 group-hover:opacity-80">
                  {dmlien.fullName}
                </h2>
                <h3 className="font-SaansRegular text-[14px] leading-[18px] text-[#707070]">
                  {dmlien.location}
                </h3>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
