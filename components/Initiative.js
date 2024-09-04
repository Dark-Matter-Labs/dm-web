function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Initiative({
  title,
  arc,
  lab,
  activeState,
  hoverState,
  setActiveLab,
  setActiveArc,
  setOpen,
}) {
  return (
    <div
      className={classNames(
        activeState
          ? 'bg-[#595959] text-white'
          : hoverState
            ? 'bg-[#292929]  text-[#595959]'
            : ' bg-[#212121] text-[#595959]',
        'my-1.5 flex h-[80px]  w-[80px] flex-col  items-center justify-center hover:cursor-crosshair ',
      )}
      onMouseEnter={() => {
        setActiveArc(true);
        setActiveLab(true);
      }}
      onMouseLeave={() => {
        setActiveArc(false);
        setActiveLab(false);
      }}
      onClick={() => {
        setOpen(true);
      }}
    >
      {activeState ? (
        <p className="px-1 text-center font-SaansRegular text-[12px] font-normal leading-[125%]">
          {title}
        </p>
      ) : (
        <p className="font-SaansRegular text-[12px] font-normal leading-[125%]">
          {' '}
          {arc}
          <span className="align-super text-[6.6px]">A</span> + {lab}
          <span className="align-super text-[6.6px]">L</span>
        </p>
      )}
    </div>
  );
}

export default Initiative;
