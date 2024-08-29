import { animated } from '@react-spring/web';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Studio({
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
          bgHoverInterpolate(3, activeState),
        ),
      }}
      className={classNames(
        activeState ? ' text-white' : ' text-[#A8A8A8]',
        'my-1.5 flex h-[80px] w-[80px] cursor-crosshair flex-col items-end justify-between px-2 py-2',
      )}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setOpen(true)}
    >
      <p className="text-base font-normal ">{short}</p>
      <p className="-max-w-[40px]  text-right text-[9.6px] font-normal leading-normal ">
        {title}
      </p>
    </animated.div>
  );
}

export default Studio;
