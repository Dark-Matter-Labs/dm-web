function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Initiative({
  title,
  arc,
  studio,
  activeState,
  hoverState,
  setActiveStudio,
  setActiveArc,
  setOpen,
}) {
  return (
    <div
      className={classNames(
        activeState
          ? 'bg-[#595959] text-white'
          : hoverState
            ? 'text-label bg-[#292929]'
            : 'text-label bg-[#212121]',
        'my-1.5 flex h-[80px] w-[80px] flex-col items-center justify-center hover:cursor-crosshair',
      )}
      onMouseEnter={() => {
        setActiveArc(true);
        setActiveStudio(true);
      }}
      onMouseLeave={() => {
        setActiveArc(false);
        setActiveStudio(false);
      }}
      onClick={() => {
        setOpen(true);
      }}
    >
      {activeState ? (
        <p className="font-SaansRegular px-1 text-center text-[12px] leading-[125%] font-normal">
          {title}
        </p>
      ) : (
        <p className="font-SaansRegular text-[12px] leading-[125%] font-normal">
          {' '}
          {arc}
          <span className="align-super text-[6.6px]">A</span> + {studio}
          <span className="align-super text-[6.6px]">S</span>
        </p>
      )}
    </div>
  );
}

export default Initiative;
