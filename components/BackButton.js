'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function BackButton({ text }) {
  const router = useRouter();
  return (
    <button
      className="p-xl-medium flex items-center justify-center pb-[20px] uppercase text-grey-3"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className=" h-6 w-6" aria-hidden="true" />
      {text}
    </button>
  );
}

export default BackButton;
