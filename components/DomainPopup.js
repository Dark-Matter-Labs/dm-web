import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Popup({ title, openState, setOpen, content, domain }) {
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
            {domain === 'A' ? (
              <div className="flex h-[400px]  max-w-[80px] flex-col items-center justify-center gap-[22px] bg-[#8E6413]">
                <p className="rotatae90  font-SaansRegular text-[20px] leading-[28px] text-white ">
                  A: Ontology & epistemology
                </p>
              </div>
            ) : domain === 'B' ? (
              <div className="flex h-[400px]  max-w-[80px] flex-col items-center justify-center gap-[22px] bg-[#903C30]">
                <p className="rotatae90  font-SaansRegular text-[20px] leading-[28px] text-white ">
                  B: Money & valuation logic
                </p>
              </div>
            ) : domain === 'C' ? (
              <div className="flex h-[400px]  max-w-[80px] flex-col items-center justify-center gap-[22px] bg-[#206B35]">
                <p className="rotatae90  font-SaansRegular text-[20px] leading-[28px] text-white ">
                  C: Financial processes & investment
                </p>
              </div>
            ) : domain === 'D' ? (
              <div className="flex h-[400px]  max-w-[80px] flex-col items-center justify-center gap-[22px] bg-[#205793]">
                <p className="rotatae90  font-SaansRegular text-[20px] leading-[28px] text-white ">
                  D: Ownership, law & governance
                </p>
              </div>
            ) : domain === 'E' ? (
              <div className="flex h-[400px]  max-w-[80px] flex-col items-center justify-center gap-[22px] bg-[#8D2D55]">
                <p className="rotatae90  font-SaansRegular text-[20px] leading-[28px] text-white ">
                  E: Institutional logic & policy
                </p>
              </div>
            ) : (
              <div className="flex h-[400px]  max-w-[80px] flex-col items-center justify-center gap-[22px] bg-[#808080]">
                <p className="rotatae90  font-SaansRegular text-[20px] leading-[28px] text-white ">
                  F: Material, energy & land use
                </p>
              </div>
            )}

            <div className="flex flex-col items-start justify-start gap-[16px] border-l-[0.5px] border-[#353535] py-[28px]  pl-[28px] pr-[32px]">
              <div className="flex items-center justify-between">
                <DialogTitle
                  as="h3"
                  className="font-SaansRegular text-[24px] leading-13 text-white"
                >
                  {title}
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
