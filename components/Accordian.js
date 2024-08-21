import { React, useState, useEffect } from 'react';
import { animated, useScroll } from '@react-spring/web';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Accordion({
  activeState,
  title,
  description,
  link,
  scrollPos,
  scrollY,
}) {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (activeState) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeState]);

  // from: { opacity: '0', maxHeight: '-10px' },
  // to: { opacity: '1', maxHeight: open ? '420px' : '25px' },

  const opacityInterpolate = (startScroll, endScroll) => {

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 and 1
      return scrollFactor; // Linear interpolation for opacity
    
  };

  const colorInterpolate = (startScroll, endScroll) => {
    // Starting color: #595959
    let startColor = { r: 89, g: 89, b: 89 };

    // Ending color: #a8a8a8
    let endColor = { r: 169, g: 169, b: 168 };

    if (activeState) {
      return `rgb(${endColor.r}, ${endColor.g}, ${endColor.b})`;
    } else if (scrollY >= startScroll && scrollY < endScroll) {
      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Calculate the interpolated color
      let newColor = {
        r: Math.round(endColor.r + (startColor.r - endColor.r) * scrollFactor),
        g: Math.round(endColor.g + (startColor.g - endColor.g) * scrollFactor),
        b: Math.round(endColor.b + (startColor.b - endColor.b) * scrollFactor),
      };
      return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    } else return `rgb(${startColor.r}, ${startColor.g}, ${startColor.b})`;
  };

  return (
    <div className="relative pb-4">
      <div className="relative flex items-start">
        <animated.div className="min-w-0 flex-1">
          <animated.div
            className={classNames(
              activeState ? 'border-l border-l-grey-3' : '',
              '',
            )}
          >
            <animated.h4
              style={{
                color: scrollYProgress.to(() =>
                  colorInterpolate(scrollPos, scrollPos + 400),
                ),
              }}
              className="heading_animate cursor-pointer pl-2 font-FKregular text-[17px] leading-[24.4px]"
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
              <animated.p
                // style={{
                //   opacity: scrollYProgress.to(() =>
                //     opacityInterpolate(scrollPos - 400, scrollPos+200),
                //   ),
                // }}
                className="text_animate pl-2 font-PPbook text-[15.8px] leading-[23.1px] text-grey-3"
              >
                {description}
              </animated.p>
            )}
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Accordion;
