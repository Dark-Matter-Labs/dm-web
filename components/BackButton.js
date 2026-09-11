import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function BackButton({ text }) {
  return (
    <>
      {text === 'back to feed' ? (
        <Link href="/feed">
          <button className="p-xl-medium text-grey-3 flex items-center justify-center pb-[20px] uppercase hover:cursor-crosshair">
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            {text}
          </button>
        </Link>
      ) : (
        <Link href="/initiatives">
          <button className="p-xl-medium text-grey-3 flex items-center justify-center pb-[20px] uppercase hover:cursor-crosshair">
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            {text}
          </button>
        </Link>
      )}
    </>
  );
}

export default BackButton;
