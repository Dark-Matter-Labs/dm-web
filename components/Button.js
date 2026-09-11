import Link from 'next/link';

export default function DMButton({ children, href, internal }) {
  return (
    <div className="border-2 border-white pr-[9px] pb-[7px] pl-[8px] text-white duration-2000 hover:cursor-crosshair hover:bg-white hover:text-black">
      {internal ? (
        <Link
          href={href}
          className="flex flex-col items-end justify-start gap-px hover:cursor-crosshair"
        >
          <p className="font-SaansRegular text-[16px] leading-[1em]">{'↗'}</p>
          <p className="font-SaansRegular text-2xl leading-[1em]">{children}</p>
        </Link>
      ) : (
        <a href={href} className="flex flex-col items-end justify-start gap-px">
          <p className="font-SaansRegular text-[16px] leading-[1em]">{'↗'}</p>
          <p className="font-SaansRegular text-2xl leading-[1em]">{children}</p>
        </a>
      )}
    </div>
  );
}
