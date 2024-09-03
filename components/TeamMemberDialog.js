import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

export default function MyDialog(props) {
  const { isOpen, selectedItem, handleClose } = props;
  console.log(isOpen);
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
    >
      <DialogPanel className="flex w-[762px] flex-row bg-[#161618]">
        <div className="flex w-[294px] flex-col">
          <div className="h-[294px] w-[294px] bg-red-200">Image</div>
          <div className="h-[200px] bg-blue-100"></div>
          <div className="h-[200px] bg-blue-200"></div>
        </div>
        <div className="flex flex-grow flex-col justify-between p-4">
          <div className="text-white">
            <h2 className="text-5xl">{selectedItem.fullName}</h2>

            <p>{selectedItem.bio}</p>
          </div>
          <div>
            <button
              className="text-white"
              onClick={() => {
                // YOUR UPDATE LOGIC
                //NOTE : YOU HAVE THE SELECTED ITEM
                handleClose();
              }}
            >
              Update
            </button>
            <button className="text-white" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
