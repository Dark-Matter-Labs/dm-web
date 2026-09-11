import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function BackButton({ text }) {
  return (
    <>
      {text === 'back to feed' ? (
        <Link href="/feed">
          <button className="flex items-center justify-center pb-[20px] p-xl-medium text-grey-3 uppercase hover:cursor-crosshair">
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            {text}
          </button>
        </Link>
      ) : (
        <Link href="/initiatives">
          <button className="flex items-center justify-center pb-[20px] p-xl-medium text-grey-3 uppercase hover:cursor-crosshair">
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            {text}
          </button>
        </Link>
      )}
    </>
  );
}

export default BackButton;
