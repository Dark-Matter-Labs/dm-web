import { animated } from '@react-spring/web';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Arc({
  title,
  short,
  activeState,
  setActive,
  setOpen,
  scrollYProgress,
  bgHoverInterpolate,
}) {
  return (
    <animated.div
      style={{
        backgroundColor: scrollYProgress.to(() =>
          bgHoverInterpolate(2, activeState),
        ),
      }}
      className={classNames(
        activeState ? ' text-white' : ' text-[#A8A8A8]',
        'my-1.5 flex h-[80px] w-[80px] cursor-crosshair flex-col  items-start justify-between pb-[6.5px] pl-2 pr-[6px] pt-[5px] tracking-wide',
      )}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setOpen(true)}
    >
      <p className="font-SaansRegular text-[17px] font-normal ">{short}</p>
      <p className="max-w-[60px] font-SaansRegular text-[12px] font-normal leading-[125%]">
        {title}
      </p>
    </animated.div>
  );
}

export default Arc;
