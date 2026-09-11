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
        activeState ? 'text-white' : 'text-grey-3',
        'flex h-[80px] w-[80px] cursor-crosshair flex-col justify-between pt-[5px] pr-[6px] pb-[6.5px] pl-2 tracking-wide',
      )}
      onMouseOver={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setOpen(true)}
    >
      <p className="font-SaansRegular text-[17px] font-normal">{short}</p>
      <p className="max-w-[60px] font-SaansRegular text-[12px] leading-[125%] font-normal">
        {title}
      </p>
    </animated.div>
  );
}

export default Lab;
