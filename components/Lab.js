import { animated } from '@react-spring/web';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Lab({
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
          bgHoverInterpolate(1, activeState),
        ),
      }}
      className={classNames(
        activeState ? ' text-white' : ' text-[#A8A8A8]',
        'flex h-[80px] w-[80px] cursor-crosshair flex-col justify-between p-2',
      )}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setOpen(true)}
    >
      <p className="text-base font-normal ">{short}</p>
      <p className="max-w-[50px] text-[9.6px] font-normal leading-normal">
        {title}
      </p>
    </animated.div>
  );
}

export default Lab;
