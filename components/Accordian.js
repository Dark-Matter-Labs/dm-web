import { React, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Accordion({ activeState, title, description, link, scrollPos }) {
  const [open, setOpen] = useState(false);
  let toggleHandler = (e) => {
    setOpen(!open);
  };

  useEffect(() => {
    if (activeState) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeState]);

  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '-10px' },
    to: { opacity: '1', maxHeight: open ? '420px' : '25px' },
    config: { duration: '300' },
  });

  return (
    <div className="relative pb-4">
      <div
        className="relative flex items-start space-x-3"
        onClick={toggleHandler}
      >
        <div className="min-w-0 flex-1">
          <animated.div
            style={openAnimation}
            className={classNames(
              activeState ? 'border-l border-l-grey-3' : '',
              '',
            )}
          >
            <animated.h4
              style={openAnimation}
              className={classNames(
                activeState ? 'text-grey-3' : 'text-grey-2',
                'heading_animate cursor-pointer pl-2 font-FKregular text-[17px] leading-[24.4px]',
              )}
              onClick={() =>
                window.scrollTo({
                  top: scrollPos,
                  behavior: 'smooth',
                })
              }
            >
              {link !== '' ? <Link href={link}>{title}</Link> : <>{title}</>}
            </animated.h4>
            {activeState && (
              <p className="text_animate pl-2 font-PPbook text-[15.8px] leading-[23.1px] text-grey-3">
                {description}
              </p>
            )}
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
