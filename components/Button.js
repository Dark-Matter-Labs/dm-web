import Link from 'next/link';

export default function DMButton({ children, href, internal }) {
  return (
    <div className="duration-2000 border-2 border-white pb-[7px] pl-[8px] pr-[9px]  text-white hover:cursor-crosshair hover:bg-white hover:text-black">
      {internal ? (
        <Link
          href={href}
          className="flex flex-col items-end justify-start gap-[1px] hover:cursor-crosshair"
        >
          <p className="font-SaansRegular text-[16px] leading-[1em]">{'↗'}</p>
          <p className="font-SaansRegular text-2xl leading-[1em]">{children}</p>
        </Link>
      ) : (
        <a
          href={href}
          className="flex flex-col items-end justify-start gap-[1px]"
        >
          <p className="font-SaansRegular text-[16px] leading-[1em]">{'↗'}</p>
          <p className="font-SaansRegular text-2xl leading-[1em]">{children}</p>
        </a>
      )}
    </div>
  );
}
