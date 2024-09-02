
export default function DMButton({ children, href }) {
  return (
    <div className="border-2 border-white px-2 pb-1.5 pt-0.5 hover:cursor-crosshair hover:bg-white hover:text-black text-white duration-2000">
      <a href={href} className="flex flex-col items-end">
        <p className="font-SaansMed text-[18px]">
          {'↗'}
        </p>
        <p className="font-SaansMed text-2xl leading-[1em]">
          {children}
        </p>
      </a>
    </div>
  );
}
