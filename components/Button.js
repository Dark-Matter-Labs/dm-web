export default function DMButton({ children, href }) {
  return (
    <div className="duration-2000 border-2 border-white px-2 pb-1.5 pt-0.5 text-white hover:cursor-crosshair hover:bg-white hover:text-black">
      <a href={href} className="flex flex-col items-end">
        <p className="font-SaansMed text-[18px]">{'↗'}</p>
        <p className="font-SaansMed text-2xl leading-[1em]">{children}</p>
      </a>
    </div>
  );
}
