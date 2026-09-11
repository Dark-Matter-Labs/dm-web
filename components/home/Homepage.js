'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useScroll, animated } from '@react-spring/web';

import { startSticky, step } from '@/utils/constants';
import { throttle } from '@/utils/throttle';

import Arc from '@/components/Arc';
import Lab from '@/components/Lab';
import Studio from '@/components/Studio';
import Initiative from '@/components/Initiative';
import StudioInitiative from '@/components/StudioInitiative';
import StudioLabInitiative from '@/components/StudioLabInitiative';
import Popup from '@/components/Popup';
import DomainPopup from '@/components/DomainPopup';
import Contexts from '@/components/Contexts';
import Paradigms from '@/components/Paradigms';
import MatrixGrid from '@/components/home/MatrixGrid';
import { ArcColumn, StudioRow } from '@/components/home/UnitTiles';
import UnitPopups from '@/components/home/UnitPopups';

import labsOverlay from '@/images/labs.svg';
import arcsOverlay from '@/images/arcs.svg';
import studiosOverlay from '@/images/studio.svg';
import orgOverlay from '@/images/orgdev.svg';

import LEElogo from '@/images/popups/LEE.png';
import PBlogo from '@/images/labs/PB.png';
import TAIlogo from '@/images/projects/Intersection_TreesAI.jpg';
import CLlogo from '@/images/projects/Intersection_CircuLaw.jpg';
import PtCpic from '@/images/projects/Intersection_Permissioning the city.jpg';
import retrofitPic from '@/images/projects/Intersection_Retrofit.jpg';
import CIpic from '@/images/projects/Intersection_Cornerstone Indicators.jpg';
import matrPic from '@/images/projects/Intersection_MatR.jpg';
import MCPic from '@/images/projects/Intersection_Multivalent Currencies.jpg';
import NETPic from '@/images/projects/Intersection_New Economic Thinking.jpg';

import CIconceptPic from '@/images/concepts/Concept_Collective inelligence of cities.jpg';
import BRconceptPic from '@/images/concepts/Concept_Resilient bioregional food systems.jpg';

import matrixMobile1 from '@/images/Matrix1.webp';
import matrixMobile2 from '@/images/Matrix2.webp';
import matrixMobile3 from '@/images/Matrix3.webp';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Frozen empty array so the initial active-set keeps a stable identity.
const EMPTY_ACTIVE = [];

export default function Homepage({ units }) {
  // Codes of the units currently lit up. Replaces 21 separate booleans;
  // some cells activate two or three at once, so the setters below compose
  // through functional updates rather than overwriting each other.
  const [activeUnits, setActiveUnits] = useState(EMPTY_ACTIVE);

  // Only one popup is ever open, so one id replaces 68 booleans.
  const [openPopup, setOpenPopup] = useState(null);

  const isActive = useCallback(
    (code) => activeUnits.includes(code),
    [activeUnits],
  );

  // Plain factories, not caches. An earlier version memoised these per code
  // so the memoised Matrix cells could skip re-rendering — but those cells
  // also receive inline arrow closures for onEnter/onLeave, so their memo
  // missed on every render regardless and the cache bought nothing. Both
  // react-hooks/refs and react-hooks/immutability flagged the cache, and
  // there was no benefit to weigh against them.
  const unitSetter = useCallback(
    (code) => (on) =>
      setActiveUnits((prev) =>
        on
          ? prev.includes(code)
            ? prev
            : [...prev, code]
          : prev.filter((c) => c !== code),
      ),
    [],
  );

  // Headless UI closes with onClose(false), so anything falsy closes.
  const openPopupFor = useCallback(
    (id) =>
      (on = true) =>
        setOpenPopup(on ? id : null),
    [],
  );

  const closePopup = useCallback(() => setOpenPopup(null), []);

  // Paradigms renders 434 lines of static prose and takes 17 popup setters.
  // Built inline as `openPopupFor('NE')` they were fresh closures on every
  // render, so wrapping Paradigms in memo() would never have hit. Built once
  // here, its props are referentially stable and it renders once rather than
  // on every scroll tick.
  const paradigmSetters = useMemo(
    () =>
      Object.freeze({
        setOpenNE: openPopupFor('NE'),
        setOpenRC: openPopupFor('RC'),
        setOpenSM: openPopupFor('RI'),
        setOpenRE: openPopupFor('RF'),
        setOpenCT: openPopupFor('CT'),
        setOpenPC: openPopupFor('PC'),
        setOpenPB: openPopupFor('PB'),
        setOpenBR: openPopupFor('BR'),
        setOpenCD: openPopupFor('CD'),
        setOpenQD: openPopupFor('SD'),
        setOpenETC: openPopupFor('NF'),
        setOpenOD: openPopupFor('OD'),
        setOpenBE: openPopupFor('BE'),
        setOpenSG: openPopupFor('7G'),
        setOpenCS: openPopupFor('CS'),
        setOpenM0: openPopupFor('X0'),
        setOpenNZ: openPopupFor('NZC'),
      }),
    [openPopupFor],
  );

  const [scrollFraction, setScrollFraction] = useState();

  const [classT2, setClassT2] = useState('t1');
  const [activeState, setActiveState] = useState(1);

  const [animateOn, setAnimateOn] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const animationStart = useMemo(() => startSticky + step * 4, []);

  const { scrollYProgress } = useScroll();

  const listenScrollEvent = useCallback(() => {
    // Guard against SSR - window and document may not be available
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const scrollY = window.scrollY;
    setScrollY(scrollY);

    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = bodyHeight - windowHeight;

    // Guard against division by zero or invalid calculations
    if (maxScroll <= 0) {
      return;
    }

    const scrollFrac = Math.min((scrollY - animationStart) / maxScroll, 1) * 10;
    const easeFrac = Math.pow(scrollFrac, 3);
    setScrollFraction(easeFrac);

    // base state
    if (scrollY < startSticky) {
      setActiveState(1);
      setClassT2('t1');
      setAnimateOn('');
    }
    // matrix sticky state
    else if (scrollY >= startSticky && scrollY < startSticky + step) {
      setActiveState(2);
      setClassT2('t2');
      setAnimateOn('');
    }
    // labs colour state
    else if (
      scrollY >= startSticky + step &&
      scrollY < startSticky + 2 * step
    ) {
      setActiveState(3);
      setClassT2('t2');
      setAnimateOn('');
    }
    // arcs colour state
    else if (
      scrollY >= startSticky + 2 * step &&
      scrollY < startSticky + 3 * step
    ) {
      setActiveState(4);
      setClassT2('t2');
      setAnimateOn('');
    }
    // studio colour state +
    else if (
      scrollY >= startSticky + 3 * step &&
      scrollY < startSticky + 4 * step
    ) {
      setActiveState(5);
      setAnimateOn('');
      setClassT2('t2');
    }
    //  2d projects state
    else if (
      scrollY >= startSticky + step * 4 &&
      scrollY < startSticky + step * 5 + 500
    ) {
      setActiveState(7);
      if (scrollY > animationStart) {
        setAnimateOn('animate');
      }
      setClassT2('t2');
    }
    // capability 2D state
    else if (
      scrollY >= startSticky + step * 5 + 500 &&
      scrollY < startSticky + step * 6
    ) {
      setActiveState(8);
      setClassT2('t2');
    }

    // matrix non sticky state
    if (scrollY >= startSticky + step * 6 + 200) {
      setClassT2('t3');
    }

    if (
      scrollY >= startSticky + step * 6 &&
      scrollY < startSticky + step * 7 + 1200
    ) {
      setActiveState(9);
    }
    if (scrollY >= startSticky + step * 6 + 1200) {
      setActiveState(10);
    }
  }, [animationStart]);

  // Throttle scroll event to improve performance (16ms ≈ 60fps)
  const throttledScrollHandler = useMemo(
    () => throttle(listenScrollEvent, 16),
    [listenScrollEvent],
  );

  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', throttledScrollHandler, {
      passive: true,
    });

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', throttledScrollHandler);
      }
    };
  }, [throttledScrollHandler]);

  // arcs states

  //labs states

  //studio states

  // open modal states

  const scrollInterpolate = useCallback(
    (toInterpolate) => {
      // Guard against SSR and invalid scrollY
      if (typeof window === 'undefined' || scrollY === undefined) {
        return toInterpolate;
      }

      const startScroll = startSticky + step * 4;
      const endScroll = startSticky + step * 5;

      // Guard against division by zero
      if (endScroll <= startScroll) {
        return toInterpolate;
      }

      const scrollFrac = Math.min(
        (scrollY - startScroll) / (endScroll - startScroll),
        1,
      );
      const easeFrac = Math.pow(scrollFrac, 3);

      if (toInterpolate - toInterpolate * easeFrac > 0) {
        if (animateOn === 'animate') {
          return toInterpolate - toInterpolate * easeFrac;
        } else {
          return toInterpolate;
        }
      } else {
        return 0;
      }
    },
    [scrollY, animateOn],
  );

  const opacityInterpolate = (startScroll, endScroll, flip) => {
    // Normalize the scroll position within the defined range
    let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

    // Clamp the scrollFactor between 0 and 1
    scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

    // Interpolate opacity between 0 and 1

    if (flip) {
      return 1 - scrollFactor;
    } else return scrollFactor; // Linear interpolation for opacity
  };

  const partialOpacityInterpolateMult = (
    startScroll,
    endScroll,
    flip,
    multiplier,
  ) => {
    // Normalize the scroll position within the defined range
    let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

    // Clamp the scrollFactor between 0 and 1
    scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

    // Interpolate opacity between 0 and 1

    if (flip) {
      return 1 - 0.8 * scrollFactor * multiplier;
    } else return multiplier * 0.8 * scrollFactor; // Linear interpolation for opacity
  };

  const matrixOpacityInterpolateMult = (
    startScroll,
    endScroll,
    flip,
    multiplier,
  ) => {
    // Normalize the scroll position within the defined range
    let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

    // Clamp the scrollFactor between 0 and 1
    scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

    // Interpolate opacity between 0 and 1

    if (flip) {
      return 1 - 0.8 * scrollFactor * multiplier;
    } else return 0.8 * multiplier * scrollFactor; // Linear interpolation for opacity
  };

  const capacityOpacityInterpolate = (startScroll, endScroll, flip) => {
    // Normalize the scroll position within the defined range
    let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

    // Clamp the scrollFactor between 0 and 1
    scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

    if (flip) {
      return 1 * scrollFactor;
    } else return scrollFactor; // Linear interpolation for opacity
  };

  const sideMatrixOpacityInterpolate = () => {
    if (scrollY < startSticky + step) {
      let startScroll = startSticky - step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity * 2;
    }
  };

  const sideLabsOpacityInterpolate = () => {
    if (scrollY < startSticky) {
      return 0;
    } else if (scrollY >= startSticky && scrollY < startSticky + step * 2) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step * 2) {
      let startScroll = startSticky + step * 2; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 3; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    }
  };

  const sideArcsOpacityInterpolate = () => {
    if (scrollY < startSticky + step) {
      return 0;
    } else if (
      scrollY >= startSticky + step * 2 &&
      scrollY < startSticky + step * 3
    ) {
      let startScroll = startSticky + step * 2; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 3; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step * 3) {
      let startScroll = startSticky + step * 3; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 4; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    }
  };

  const sideStudioOpacityInterpolate = () => {
    if (scrollY < startSticky + step * 2) {
      return 0;
    } else if (
      scrollY >= startSticky + step * 3 &&
      scrollY < startSticky + step * 4
    ) {
      let startScroll = startSticky + step * 3; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 4; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step * 4) {
      let startScroll = startSticky + step * 4; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 5; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    }
  };

  const sideIntersectionOpacityInterpolate = () => {
    if (scrollY < startSticky + step * 4) {
      return 0;
    } else if (
      scrollY >= startSticky + step * 4 &&
      scrollY < startSticky + step * 5
    ) {
      let startScroll = startSticky + step * 4; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 5; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step * 5) {
      let startScroll = startSticky + step * 5; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 6; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    }
  };

  const sideCapabilityOpacityInterpolate = () => {
    if (scrollY < startSticky + step * 5) {
      return 0;
    } else if (
      scrollY >= startSticky + step * 5 &&
      scrollY < startSticky + step * 6
    ) {
      let startScroll = startSticky + step * 5; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 6; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step * 6) {
      let startScroll = startSticky + step * 6; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 7; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    }
  };

  const bgHoverInterpolate = (stepMultiplier, isActive) => {
    // Starting color: #292929 (rgb(41, 41, 41))
    let startColor = { r: 41, g: 41, b: 41 };

    // Ending color: #595959 (rgb(89, 89, 89))
    let endColor = { r: 89, g: 89, b: 89 };

    if (isActive) {
      return `rgb(${endColor.r}, ${endColor.g}, ${endColor.b})`;
    }

    let scrollTop = scrollY;

    if (
      scrollY > startSticky + stepMultiplier * step &&
      scrollY <= startSticky + (stepMultiplier + 1) * step
    ) {
      let startScroll = startSticky + stepMultiplier * step; // Start of the range (scroll position in pixels)
      let endScroll = startSticky + (stepMultiplier + 1) * step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollTop - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);
      scrollFactor = Math.pow(scrollFactor, 3);

      // Calculate the interpolated color
      let newColor = {
        r: Math.round(
          startColor.r + (endColor.r - startColor.r) * scrollFactor,
        ),
        g: Math.round(
          startColor.g + (endColor.g - startColor.g) * scrollFactor,
        ),
        b: Math.round(
          startColor.b + (endColor.b - startColor.b) * scrollFactor,
        ),
      };
      return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    } else if (
      scrollY > startSticky + (stepMultiplier + 1) * step &&
      scrollY <= startSticky + (stepMultiplier + 2) * step
    ) {
      let startScroll = startSticky + (stepMultiplier + 1) * step; // Start of the range (scroll position in pixels)
      let endScroll = startSticky + (stepMultiplier + 2) * step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollTop - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);
      scrollFactor = 1 - Math.pow(1 - scrollFactor, 3);

      // Calculate the interpolated color
      let newColor = {
        r: Math.round(endColor.r + (startColor.r - endColor.r) * scrollFactor),
        g: Math.round(endColor.g + (startColor.g - endColor.g) * scrollFactor),
        b: Math.round(endColor.b + (startColor.b - endColor.b) * scrollFactor),
      };
      return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    } else return `rgb(${startColor.r}, ${startColor.g}, ${startColor.b})`;
  };

  const arcOverlayOpacityInterpolate = useCallback(() => {
    // Guard against SSR and invalid scrollY
    if (typeof window === 'undefined' || scrollY === undefined) {
      return 0;
    }

    if (scrollY <= startSticky) {
      return 0;
    } else if (scrollY > startSticky && scrollY <= startSticky + step) {
      // Define the scroll range where the opacity change should happen
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + step * 2
    ) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    } else if (
      scrollY > startSticky + step * 2 &&
      scrollY <= startSticky + 3 * step
    ) {
      // Get the current scroll position

      let startScroll = startSticky + step * 2; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + 3 * step; // End of the range (scroll position in pixels)

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 0.2 + newOpacity * 0.8;
    } else if (
      scrollY > startSticky + 3 * step &&
      scrollY <= startSticky + 4 * step
    ) {
      let startScroll = startSticky + 3 * step;
      let endScroll = startSticky + 4 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 1 - newOpacity * 0.8;
    } else if (
      scrollY > startSticky + 4 * step &&
      scrollY <= startSticky + 5 * step
    ) {
      let startScroll = startSticky + 4 * step;
      let endScroll = startSticky + 5 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);
      scrollFactor = 1 - Math.pow(1 - scrollFactor, 3);

      let newOpacity = scrollFactor;

      return 0.2 - scrollFactor * 0.2;
    } else return 0;
  }, [scrollY]);

  const labOverlayOpacityInterpolate = useCallback(() => {
    // Guard against SSR and invalid scrollY
    if (typeof window === 'undefined' || scrollY === undefined) {
      return 0;
    }

    if (scrollY > startSticky && scrollY <= startSticky + step) {
      // Define the scroll range where the opacity change should happen
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + step * 2
    ) {
      return 1;
    } else if (
      scrollY >= startSticky + step * 2 &&
      scrollY <= startSticky + 3 * step
    ) {
      let startScroll = startSticky + step * 2; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + 3 * step; // End of the range (scroll position in pixels)

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 1 - 0.8 * newOpacity;
    } else if (
      scrollY >= startSticky + step * 3 &&
      scrollY <= startSticky + 4 * step
    ) {
      return 0.2;
    } else if (
      scrollY > startSticky + 4 * step &&
      scrollY <= startSticky + 5 * step
    ) {
      let startScroll = startSticky + 4 * step;
      let endScroll = startSticky + 5 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);
      scrollFactor = 1 - Math.pow(1 - scrollFactor, 3);

      let newOpacity = scrollFactor;

      return 0.2 - scrollFactor * 0.2;
    } else return 0;
  }, [scrollY]);

  const studioOverlayOpacityInterpolate = useCallback(() => {
    // Guard against SSR and invalid scrollY
    if (typeof window === 'undefined' || scrollY === undefined) {
      return 0;
    }

    if (scrollY > startSticky && scrollY <= startSticky + step) {
      // Define the scroll range where the opacity change should happen
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + step * 2
    ) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    } else if (
      scrollY > startSticky + step * 2 &&
      scrollY <= startSticky + 3 * step
    ) {
      return 0.2;
    } else if (
      scrollY > startSticky + 3 * step &&
      scrollY <= startSticky + 4 * step
    ) {
      let startScroll = startSticky + 3 * step;
      let endScroll = startSticky + 4 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 0.2 + newOpacity * 0.8;
    } else if (
      scrollY > startSticky + 4 * step &&
      scrollY <= startSticky + 5 * step
    ) {
      let startScroll = startSticky + 4 * step;
      let endScroll = startSticky + 5 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);
      scrollFactor = 1 - Math.pow(1 - scrollFactor, 3);

      let newOpacity = scrollFactor;

      return 1 - newOpacity;
    } else return 0;
  }, [scrollY]);

  const orgOverlayOpacityInterpolate = useCallback(() => {
    // Guard against SSR and invalid scrollY
    if (typeof window === 'undefined' || scrollY === undefined) {
      return 0;
    }

    if (scrollY > startSticky && scrollY <= startSticky + step) {
      // Define the scroll range where the opacity change should happen
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + step * 2
    ) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - newOpacity * 0.8;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + step * 4
    ) {
      return 0.2;
    } else if (
      scrollY > startSticky + 4 * step &&
      scrollY <= startSticky + 5 * step
    ) {
      let startScroll = startSticky + 4 * step;
      let endScroll = startSticky + 5 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);
      scrollFactor = 1 - Math.pow(1 - scrollFactor, 3);

      let newOpacity = scrollFactor;

      return 0.2 - scrollFactor * 0.2;
    } else return 0;
  }, [scrollY]);

  const scrollYInterpolate = useCallback(() => {
    // Guard against SSR and invalid scrollY
    if (typeof window === 'undefined' || scrollY === undefined) {
      return 0;
    }

    const startScroll = startSticky + step * 4;
    const endScroll = startSticky + step * 5;

    // Guard against division by zero
    if (endScroll <= startScroll) {
      return 0;
    }

    const scrollFrac = Math.min(
      (scrollY - startScroll) / (endScroll - startScroll),
      1,
    );
    const easeFrac = Math.pow(scrollFrac, 3);

    if (easeFrac >= 1) {
      return 110;
    }

    if (scrollY >= startScroll && scrollY < endScroll) {
      const newY = startSticky * easeFrac * 0.1;
      return newY;
    }
    return 0;
  }, [scrollY]);

  const scaleInterpolate = useCallback(() => {
    // Guard against SSR and invalid scrollY
    if (typeof window === 'undefined' || scrollY === undefined) {
      return 0.6; // Return default start scale
    }

    const startScroll = startSticky + step * 4; // Start of the scroll range
    const endScroll = startSticky + step * 5; // End of the scroll range

    // Guard against division by zero
    if (endScroll <= startScroll) {
      return 0.6;
    }

    // Define the scale range
    const startScale = 0.6; // Starting scale value
    const endScale = 0.72; // Ending scale value

    // Calculate the normalized scroll factor
    let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);
    scrollFactor = Math.min(Math.max(scrollFactor, 0), 1); // Clamp between 0 and 1
    scrollFactor = Math.pow(scrollFactor, 3);

    // Interpolate the scale value
    const scale = startScale + (endScale - startScale) * scrollFactor;

    if (scrollY >= startScroll && scrollY < endScroll) {
      return scale;
    } else if (scrollY >= endScroll) {
      return endScale;
    }
    return startScale;
  }, [scrollY]);

  const divOpacityInterpolate = (startScroll, endScroll) => {
    // Define the opacity range
    const startOpacity = 0.2; // Starting opacity value
    const endOpacity = 1; // Ending opacity value

    // Calculate the normalized scroll factor
    let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);
    scrollFactor = Math.min(Math.max(scrollFactor, 0), 1); // Clamp between 0 and 1

    // Interpolate the opacity value
    const opacity = startOpacity + (endOpacity - startOpacity) * scrollFactor;

    return opacity;
  };

  return (
    <div>
      <UnitPopups units={units} openPopup={openPopup} closePopup={closePopup} />

      <Popup
        type="project"
        title="Multivalent Currencies"
        openState={openPopup === 'MC'}
        setOpen={openPopupFor('MC')}
        image={MCPic}
        website=""
        publication="https://provocations.darkmatterlabs.org/towards-multivalent-currencies-bioregional-monetary-stewardship-and-a-distributed-global-reserve-dac459dc844e"
        publicationLabel="Blog"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The NE lab is exploring the interaction between our monetary systems
            and societal behaviour. To ground the conceptual provocations, NE
            Lab has been collaborating with the Radicle Civics Arc to prototype
            the first{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://provocations.darkmatterlabs.org/towards-multivalent-currencies-bioregional-monetary-stewardship-and-a-distributed-global-reserve-dac459dc844e"
            >
              distributed bioregional bank
            </a>
            .{' '}
          </p>
        }
      />

      <Popup
        type="project"
        title="TreesAI"
        image={TAIlogo}
        openState={openPopup === 'TAI'}
        setOpen={openPopupFor('TAI')}
        website="https://treesasinfrastructure.com/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Trees As Infrastructure (TreesAI) is a cloud-based platform that
            aims to embed nature as a critical part of urban infrastructure
            (alongside more traditional structures such as bridges, roads and
            rail). Working with the Dcs Lab in urban locations, the team is
            working to develop strong business cases for scaled, sustainable
            investment.
          </p>
        }
      />

      <Popup
        type="project"
        title="New Economic Thinking"
        openState={openPopup === 'NET'}
        setOpen={openPopupFor('NET')}
        image={NETPic}
        website=""
        publication="https://drive.google.com/file/d/19yPUJg-DZgdXVhaK3Hh_Rqj7NdEe-7ZT/view"
        publicationLabel="Report"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://drive.google.com/file/d/19yPUJg-DZgdXVhaK3Hh_Rqj7NdEe-7ZT/view"
            >
              {' '}
              New Economic Thinking
            </a>{' '}
            work provided mapping and analysis of a just transition in relation
            to Europe’s built environment. The work sat at the intersection of
            the Ne Lab and X0 Arc, exploring the physical constraints and
            potential response strategies for a material light and socially just
            transition.
          </p>
        }
      />

      <Popup
        type="project"
        title="CircuLaw"
        image={CLlogo}
        openState={openPopup === 'CL'}
        setOpen={openPopupFor('CL')}
        website="https://www.circulaw.nl/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            CircuLaw emerged from Dm’s relationship with the City of Amsterdam.
            The initiative aims to accelerate the transition to a circular
            economy by identifying opportunities within existing laws and
            regulations. Working in partnership with legal experts and policy
            makers, Dm has built an interactive legal knowledge platform.
          </p>
        }
      />

      <Popup
        type="project"
        title="Life-Ennobling Economics dialogue"
        openState={openPopup === 'LEED'}
        setOpen={openPopupFor('LEED')}
        image={LEElogo}
        website="https://led.darkmatterlabs.org/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The NE lab and Conversational Design Studio worked as an integrated
            team to develop the{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://drive.google.com/file/d/1B3x9hYWM3n0zqyTnFzetGDSdlnspRzOr/view?usp=sharing"
            >
              first conversational publications
            </a>{' '}
            for Life-Ennobling Economics. In sharing this vision, both teams
            felt strongly that the material should be offered as a continuous
            and inclusive dialogue, thus shaping the future direction of the LEE
            movement.
          </p>
        }
      />

      <Popup
        type="project"
        title="Cornerstone Indicators"
        image={CIpic}
        openState={openPopup === 'CI'}
        setOpen={openPopupFor('CI')}
        website="https://cornerstoneindicators.com/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://drive.google.com/file/d/176CNiZYM1v2xcEzDVO4SHuEfRQoosCVL/view"
            >
              The Cornerstone Indicators
            </a>{' '}
            concept is centred on developing non-linear, intuitively
            understandable indicators. The initiative is now in its third
            iteration and has spread from Sweden to Scotland and Canada. The
            current project is looking at holistic indicators of success for
            bioregional regeneration.
          </p>
        }
      />

      <Popup
        type="project"
        title="Permissioning the City"
        image={PtCpic}
        openState={openPopup === 'PTC'}
        setOpen={openPopupFor('PTC')}
        website="https://www.permissioning.city/"
        publication="https://provocations.darkmatterlabs.org/re-permissioning-the-city-unlocking-cities-growing-underutilised-spatial-assets-for-an-emergent-1550997714a4"
        publicationLabel="Blog"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://provocations.darkmatterlabs.org/re-permissioning-the-city-unlocking-cities-growing-underutilised-spatial-assets-for-an-emergent-1550997714a4"
            >
              Permissioning the City
            </a>{' '}
            aims to unlock vacant and underutilised urban spaces for a thriving
            civic economy. This project explores community-led governance and
            open permissions systems.
          </p>
        }
      />

      <Popup
        type="project"
        title="MatR"
        image={matrPic}
        openState={openPopup === 'MATR'}
        setOpen={openPopupFor('MATR')}
        website=""
        publication="https://drive.google.com/file/d/1y-GW6fJet4LrX7X3iDjqaeIDCTvijX38/view"
        publicationLabel="Deck"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://drive.google.com/file/d/1y-GW6fJet4LrX7X3iDjqaeIDCTvijX38/view"
            >
              MatR (Material Registry)
            </a>{' '}
            is an open source{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://provocations.darkmatterlabs.org/datas-role-for-a-post-carbon-built-environment-7a31b4ebc934"
            >
              web tool
            </a>{' '}
            designed to reimagine our relationship with buildings by logging and
            monitoring their materials and performance data.
          </p>
        }
      />

      <Popup
        type="project"
        title="Property & Beyond portfolio"
        image={PBlogo}
        openState={openPopup === 'PBP'}
        setOpen={openPopupFor('PBP')}
        website="https://www.darkmatterlabs.property/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://www.darkmatterlabs.property/"
            >
              The Property & Beyond
            </a>{' '}
            portfolio aims to build a diverse and proactive portfolio of
            alternative forms of property, from collective ownership of land to
            self-owning houses, land, and cameras.
          </p>
        }
      />

      <Popup
        type="project"
        title="City & Community Retrofit"
        image={retrofitPic}
        openState={openPopup === 'CCR'}
        setOpen={openPopupFor('CCR')}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            City & Community Retrofit is a portfolio of work in{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://medium.com/neighbourhood-public-square/3%C2%BAc-neighbourhood-582903b050b2"
            >
              Birmingham
            </a>{' '}
            and London. It inspires collective action for regenerative
            investment in the civic sector, particularly for retrofitting homes
            and neighbourhoods.
          </p>
        }
      />

      <Popup
        type="content"
        title="Life-Ennobling Economics"
        image={LEElogo}
        openState={openPopup === 'LEE'}
        setOpen={openPopupFor('LEE')}
        website="https://lee.darkmatterlabs.org/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Life-Ennobling Economics is a propositional vision and a call to
            action. It is an ennobling invitation to break free from ideological
            constraints, to embrace the radical potential of emergent
            technologies, and to challenge the structural codes of our current
            socio-economic systems. Implicit in this opening position is an
            understanding that the structure and values of the economy must be
            in service to all forms of life (present, future, human, non-human
            and machine) providing an inclusive scaffold of care and respect.
            The central argument being put forward by the LEE is that whilst we
            indisputably need to shift to a new economy, we will not get there
            using the mental models, tools or value systems of the current one.
            Instead, LEE responds to the underlying drivers of the{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://www.pik-potsdam.de/en/news/latest-news/covid-19-climate-change-armed-conflicts-world2019s-crises-can-lead-to-interconnected-polycrisis"
            >
              polycrisis
            </a>{' '}
            by proposing a philosophical and action oriented framework, centred
            on reconfiguring our relationships with each other, with the planet
            and to our collective futures. You can read more about{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://lee.darkmatterlabs.org/"
            >
              LEE here
            </a>
            .
          </p>
        }
      />

      <Popup
        type="content"
        title="City-scale tree canopies"
        image={TAIlogo}
        openState={openPopup === 'CTC'}
        setOpen={openPopupFor('CTC')}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            City-scale tree canopies: as a pathway towards this ambition, the{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://treesasinfrastructure.com/"
            >
              TreesAI
            </a>{' '}
            (Trees As Infrastructure) team has been working to create investable
            asset classes for the planting and maintenance of trees.
          </p>
        }
      />

      <Popup
        type="content"
        title="Collective intelligence of cities"
        image={CIconceptPic}
        openState={openPopup === 'CIC'}
        setOpen={openPopupFor('CIC')}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Collective intelligence of a city: the{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://cornerstoneindicators.com/"
            >
              Cornerstone Indicator initiative
            </a>{' '}
            was developed to strengthen citizen engagement networks that can
            sense what it means to thrive in different contexts. The resultant
            indicators empower communities to have agency over decisions and
            express their voices in a continuous cycle of participatory
            governance. As this work progresses we are aiming to link the
            indicators to smart data to build a more coherent picture of civic
            experience.
          </p>
        }
      />

      <Popup
        type="content"
        title="Resilient bioregional food systems"
        image={BRconceptPic}
        openState={openPopup === 'RBF'}
        setOpen={openPopupFor('RBF')}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Resilient bioregional food systems: we are working towards this
            option in varied threads of our work. On the broader topic of
            bioregional transitions we are exploring what a regenerative
            bioregional economy might even look like. In parallel, we are
            working with communities to design and implement multi-sensory
            indicators that can be linked to participatory governance systems,
            with the aim of{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://provocations.darkmatterlabs.org/towards-multivalent-currencies-bioregional-monetary-stewardship-and-a-distributed-global-reserve-dac459dc844e"
            >
              stewarding the regenerative health of a bioregion
            </a>
            .
          </p>
        }
      />

      <DomainPopup
        domain="A"
        title="A: Ontology & epistemology"
        openState={openPopup === 'DomainA'}
        setOpen={openPopupFor('DomainA')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Domain A relates to the values, wisdom, spirituality, ways of being
            and ways of knowing that are dominant in our culture. This domain
            results in the collective sense-making of what it means to live a
            good life and it is this value system that then shapes the political
            and economic structures below.
          </p>
        }
      />

      <DomainPopup
        domain="B"
        title="B: Money & valuation logic"
        openState={openPopup === 'DomainB'}
        setOpen={openPopupFor('DomainB')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Expresses the underlying theory of value that drives our investment
            and institutional logic. Money is a powerful expression of this
            axiology; a) who issues a currency, b) the qualities it is given,
            and c) what it can be used for.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title="C: Financial processes & Investment"
        openState={openPopup === 'DomainC'}
        setOpen={openPopupFor('DomainC')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Represents how we structure and allocate capital stocks (this is
            currently dominated by financial capital but also includes
            intangible and ecological stocks). This part of the system
            determines which activities are viable and how value flows through
            the system.
          </p>
        }
      />

      <DomainPopup
        domain="D"
        title="D: Ownership, law & governance"
        openState={openPopup === 'DomainD'}
        setOpen={openPopupFor('DomainD')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            This domain determines who has the rights to the social surplus and
            contains the jurisprudence to enforce social norms and systems of
            organising.
          </p>
        }
      />

      <DomainPopup
        domain="E"
        title="E: Institutional logic and policy"
        openState={openPopup === 'DomainE'}
        setOpen={openPopupFor('DomainE')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            This domain looks at the institutions and blueprints that
            functionally underpin how we organise society. It includes social
            engagement processes and the communication of collective values into
            structural decision making.
          </p>
        }
      />

      <DomainPopup
        domain="F"
        title="F: Material, energy & land use"
        openState={openPopup === 'DomainF'}
        setOpen={openPopupFor('DomainF')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The physical domain represents the material and ecological
            economies. This domain grounds the socio-economic and ontological
            domains in the systems’ biophysical reality.
          </p>
        }
      />

      <DomainPopup
        domain="A"
        title="A1: Fostering a relational worldview"
        openState={openPopup === 'DomainA1'}
        setOpen={openPopupFor('DomainA1')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Helping people to see that relationships are the fundamental basis
            of living systems. If we can understand life as a series of
            interconnected relationships then an extractive, overshoot economy
            will no longer make sense.
          </p>
        }
      />

      <DomainPopup
        domain="A"
        title="A2: Replacing profit as the collective goal"
        openState={openPopup === 'DomainA2'}
        setOpen={openPopupFor('DomainA2')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            We want to show that profit is no longer an appropriate signal of
            value. A true signal of value cannot be time or geographically bound
            in its conception and must recognise entanglement (i.e. there is
            nothing to externalise in an interconnected system). This is more
            profound that beyond GDP initiatives - instead we are aiming at
            regenerative potential being the primary signal of wealth.
          </p>
        }
      />

      <DomainPopup
        domain="A"
        title="A3: Building political will"
        openState={openPopup === 'DomainA3'}
        setOpen={openPopupFor('DomainA3')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Finding new ways of understanding common issues, together with a
            clear communication of alternative response strategies. Using the
            housing crisis as an example; housing as a human right demands a
            different response than housing as a store of wealth.
          </p>
        }
      />

      <DomainPopup
        domain="A"
        title="A4: Phenomenological measures of success (lived
                      experience)"
        openState={openPopup === 'DomainA4'}
        setOpen={openPopupFor('DomainA4')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Defining and testing quantitative measures of sensory experience. We
            want to use embodied metrics to protect and respect intrinsic value.
          </p>
        }
      />

      <DomainPopup
        domain="B"
        title="B1: Demonstrating entangled and long-term value"
        openState={openPopup === 'DomainB1'}
        setOpen={openPopupFor('DomainB1')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            In our current economy, price is synonymous with value. We need to
            visualise the vast unpriced web of relationships that creates value,
            so that we can prevent further degradation and make informed
            decisions about how we interact with diverse forms of value.
          </p>
        }
      />

      <DomainPopup
        domain="B"
        title="B2: Decolonised, bioregional currency stewardship"
        openState={openPopup === 'DomainB2'}
        setOpen={openPopupFor('DomainB2')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Finding ways to balance the need to exchange freely between regions
            and countries with protecting the unique contexts of our social &
            physical systems. For example, creating bioregional banks.
          </p>
        }
      />

      <DomainPopup
        domain="B"
        title="B3: Alternative non-fungible currency systems"
        openState={openPopup === 'DomainB3'}
        setOpen={openPopupFor('DomainB3')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Demonstrating the potential for new tokens of exchange that are
            linked to tangible elements of our economy. We want to show how
            individual resource backed currencies can be linked to form a
            building block towards inter-regional commons governance (links
            closely to B2).
          </p>
        }
      />

      <DomainPopup
        domain="B"
        title="B4: Visualising finite and infinite economies"
        openState={openPopup === 'DomainB4'}
        setOpen={openPopupFor('DomainB4')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            We need to communicate a vision that opens up the future rather than
            closing it down. Whilst it is critical to understand the constraints
            (e.g. energy and carbon), we also need to seed a desire for
            non-competitive, infinite economies such as solidarity and
            knowledge.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title="C1: Making the investment case for entangled value (DEMAND
                      SIDE)"
        openState={openPopup === 'DomainC1'}
        setOpen={openPopupFor('DomainC1')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Helping &#39;project developers&#39; and those that steward assets
            with entangled value functions to build adequate business models to
            be able to absorb capital.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title="C2: Bridging demand & supply"
        openState={openPopup === 'DomainC2'}
        setOpen={openPopupFor('DomainC2')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Building the protective governance and agreement structures that
            prevent extractive and asymmetric relationships between funders /
            investors and those receiving funds.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title=" C3: Structuring capital & investments"
        openState={openPopup === 'DomainC3'}
        setOpen={openPopupFor('DomainC3')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Developing the necessary instruments that allow current capital
            holders to allocate it to assets with entangled value functions.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title="C4: Enabling strategic ecosystem investments"
        openState={openPopup === 'DomainC4'}
        setOpen={openPopupFor('DomainC4')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Transforming investment logics and frameworks to strategically
            manipulate desired shifts. For example a single investor splitting
            their resource into for-profit / lobbying / NFP tranches, to shift
            subsidies and political will to drive up costs on an extractive
            technology whilst uplifting a new technology.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title="C5: Socialising the supportive narratives for alternative
                      financing pathways"
        openState={openPopup === 'DomainC5'}
        setOpen={openPopupFor('DomainC5')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Opening the Overton window for public and private actors in the
            financial system to embrace new approaches to financing.
          </p>
        }
      />

      <DomainPopup
        domain="C"
        title="C6: Socialising transformational narratives for a
                      regenerative financial system"
        openState={openPopup === 'DomainC6'}
        setOpen={openPopupFor('DomainC6')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Exploring the role of the financial system in the global transition.
            For example, considering whether it has the potential to tip into
            becoming a catalyst for change or might need to collapse and be
            re-built for this purpose.
          </p>
        }
      />

      <DomainPopup
        domain="D"
        title="D1: Using instruments (e.g contracts) to demonstrate
                      alternative theories of ownership"
        openState={openPopup === 'DomainD1'}
        setOpen={openPopupFor('DomainD1')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Practical demonstration of contracts and operating agreements that
            replace linear, owner-owned relationships towards a fixed point with
            agent-to-agent relationships towards broader goals. NB: we have
            previously used the term many-to-many contracts to describe this
            capability.
          </p>
        }
      />

      <DomainPopup
        domain="D"
        title="D2: Elevating alternative models that recouple surplus
                      with stewardship"
        openState={openPopup === 'DomainD2'}
        setOpen={openPopupFor('DomainD2')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Prevent extraction over time due perverse incentives that are
            underpinned by corporate, tax, labour and patent laws (among
            others); enable and support regeneratively designed alternatives.
          </p>
        }
      />

      <DomainPopup
        domain="D"
        title="D3: Demonstrating multi-actor governance structures"
        openState={openPopup === 'DomainD3'}
        setOpen={openPopupFor('DomainD3')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Practical demonstration of ways of organising and governing
            together, as multiple actors with varying assets to contribute. This
            work involves revealing, acknowledging and taking coordinated action
            to govern emerging public goods.
          </p>
        }
      />

      <DomainPopup
        domain="D"
        title="D4: Embedding data-augmented decision making"
        openState={openPopup === 'DomainD4'}
        setOpen={openPopupFor('DomainD4')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Using modern technologies to collate and compute wide-ranging data
            points in complex contexts, so that options can be collectively
            understood, interrogated and acted on effectively.
          </p>
        }
      />

      <DomainPopup
        domain="D"
        title="D5: Building deep respect for the other-than-human world,
                      ancestors and future generations"
        openState={openPopup === 'DomainD5'}
        setOpen={openPopupFor('DomainD5')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Supporting pathways that can practically embed the reconciliation of
            indigenous worldviews, and how this is reflected through alternative
            legal & governance mechanisms (such as the conceptualisations of
            justice extending to the &#39;more-than-human world&#39;).
          </p>
        }
      />

      <DomainPopup
        domain="E"
        title="E1: Enabling public-civic efficacy to transform place"
        openState={openPopup === 'DomainE1'}
        setOpen={openPopupFor('DomainE1')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Supporting the learning, capabilities and power of public-civic
            partnerships to shape their streets, neighbourhoods and places
            towards collective thriving.
          </p>
        }
      />

      <DomainPopup
        domain="E"
        title="E2: Building the foundations for planetary stewardship
                      institutions"
        openState={openPopup === 'DomainE2'}
        setOpen={openPopupFor('DomainE2')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Developing the foundations for stewardship institutions that extend
            beyond national states, to protect and govern the global commons.
          </p>
        }
      />

      <DomainPopup
        domain="E"
        title="E3: Designing reflective, data-driven policy instruments"
        openState={openPopup === 'DomainE3'}
        setOpen={openPopupFor('DomainE3')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Creation of instruments that are framed within ecological and social
            boundaries & aspirations (with clear data driven indicators) and
            adjust according to the context (e.g. Covid guidance changing
            depending on % of population infected).
          </p>
        }
      />

      <DomainPopup
        domain="E"
        title="E4: Place-based, policy process design"
        openState={openPopup === 'DomainE4'}
        setOpen={openPopupFor('DomainE4')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Policy design processes shaped by the geographical context, which
            informs the economic, cultural and environmental drivers. We want to
            use policy design & co-creation as an opportunity to close the
            engagement gap between grassroots and government.
          </p>
        }
      />

      <DomainPopup
        domain="F"
        title="F1: Developing collaborative, non-extractive interfaces
                      with the physical environment"
        openState={openPopup === 'DomainF1'}
        setOpen={openPopupFor('DomainF1')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Building the infrastructure that will allow human activities to hold
            respectful, reciprocal relationships with land (and other physical
            elements of our environment). For example, transferring land into
            common ownership and layered commoning structures, where we overlay
            common style governance across multiple private properties.
          </p>
        }
      />

      <DomainPopup
        domain="F"
        title="F2: Visualising material and energy flows"
        openState={openPopup === 'DomainF2'}
        setOpen={openPopupFor('DomainF2')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Developing tools and methodologies to both track and clearly
            communicate how we are collectively using our shared common
            resources.
          </p>
        }
      />

      <DomainPopup
        domain="F"
        title="F3: Developing a stewardship data infrastructure for the
                      built environment"
        openState={openPopup === 'DomainF3'}
        setOpen={openPopupFor('DomainF3')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Building a new data infrastructure that can hold cities, regions and
            countries to account on how they are stewarding the rights and
            responsibilities of using shared common resources. Ultimately this
            must connect on a planetary level.
          </p>
        }
      />

      <DomainPopup
        domain="F"
        title="F4: Designing and demonstrating autonomous, regenerative
                      and affordable multi-purpose developments."
        openState={openPopup === 'DomainF4'}
        setOpen={openPopupFor('DomainF4')}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Exploring how we can re-common and repurpose land and building in
            service of a shared, equitable, material and energy light future.
          </p>
        }
      />

      <div className={`matrix-break relative mt-10 sm:mt-28`}>
        <div className="col-span-5 hidden w-[400px] max-w-xs matrix:block">
          <animated.div
            style={{
              opacity: sideMatrixOpacityInterpolate(),
            }}
            className="mt-[1800px]"
          >
            <h2 className="pb-2 heading-4xl text-grey-3">Matrix</h2>
            <p className="max-w-[380px] p-xl-regular text-grey-3">
              Our collaborative approach is firmly grounded in the complex,
              messy reality of our existing socio-economic systems.
              Step-by-step, with the support of a growing ecosystem, we aim to
              build tangible pathways towards the options that we would like to
              manifest in the world. We have visualised our organisation’s
              response strategy across a three-dimensional matrix. The Matrix
              represents the dynamic interplay of our systemic goals,
              collaborations and context specific initiatives.
            </p>
          </animated.div>

          <animated.div
            style={{
              opacity: sideLabsOpacityInterpolate(),
            }}
            className="mt-[300px]"
          >
            <h2 className="pb-2 heading-4xl text-grey-3">Labs</h2>
            <p className="max-w-[380px] p-xl-regular text-grey-3">
              Each of our Labs is focused on a specific area of the
              socio-economic system and the everyday codes (e.g. norms,
              behaviours and institutional logic) that form its structural
              backbone. The Labs are exploring what might be possible, both
              within and beyond the current structures, and working to develop
              technical expertise in those areas. For example, the{' '}
              <span
                onClick={() => openPopupFor('BR')(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Beyond The Rules{' '}
              </span>
              <span className="align-super text-[9.5px] uppercase">Lab</span>{' '}
              focuses on aspects such as demonstrating multi-actor governance
              structures whereas the{' '}
              <span
                onClick={() => openPopupFor('CS')(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Capital Systems
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">Lab</span> is
              working to enable strategic ecosystem investments.
            </p>
          </animated.div>

          <animated.div
            style={{
              opacity: sideArcsOpacityInterpolate(),
            }}
            className="mt-[270px]"
          >
            <h2 className="pb-2 heading-4xl text-grey-3">Arcs</h2>
            <p className="max-w-[380px] p-xl-regular text-grey-3">
              Our Arc workflows are designed with clear, directional goals that
              guide our efforts toward impactful outcomes. For instance,{' '}
              <span
                onClick={() => openPopupFor('NZC')(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Net Zero Cities
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">arc</span>{' '}
              aims to enable climate-neutral and smart cities by 2030, while{' '}
              <span
                onClick={() => openPopupFor('RC')(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Radicle Civics
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">arc</span>{' '}
              seeks to foster specific shifts in civic worldviews. These Arcs
              often involve collaboration with multiple Labs, integrating their
              technical expertise with tangible, real-world contexts.
            </p>
          </animated.div>

          <animated.div
            style={{
              opacity: sideStudioOpacityInterpolate(),
            }}
            className="mt-[320px]"
          >
            <h2 className="pb-2 heading-4xl text-grey-3">Studios</h2>
            <p className="max-w-[380px] p-xl-regular text-grey-3">
              Studios are the connective tissue that support both the Labs and
              Arcs. The studios explore themes that help our work to be
              implemented and more widely understood. For instance, the{' '}
              <span
                onClick={() => openPopupFor('CT')(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Civic Tech
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">Studio</span>{' '}
              develops the technological tools and knowledge for prototypes
              tested across the Dm ecosystem. Meanwhile, the{' '}
              <span
                onClick={() => openPopupFor('OD')(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Org Dev
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">Studio</span>
              , positioned at the base of the Matrix, provides critical
              infrastructure support for the entire Dm Ecosystem.
            </p>
          </animated.div>

          <animated.div
            style={{
              opacity: sideIntersectionOpacityInterpolate(),
            }}
            className="mt-[360px]"
          >
            <h2 className="pb-2 heading-4xl text-grey-3">Intersections</h2>
            <p className="max-w-[380px] p-xl-regular text-grey-3">
              Each project in our portfolio contributes to a number of systemic
              capabilities. In doing so they intersect with the Labs, Arcs and
              Studios in various configurations. This allows us to prioritise
              flexible, compound learning across our internal and external
              ecosystems. Some projects are not part of an Arc, but each is
              attached to a Lab (or multiple Labs) where they contribute to
              building systemic capabilities.
            </p>
          </animated.div>

          <animated.div
            style={{
              opacity: sideCapabilityOpacityInterpolate(),
            }}
            className="mt-[250px]"
          >
            <h2 className="pb-2 heading-4xl text-grey-3">Capabilities</h2>
            <p className="max-w-[380px] p-xl-regular text-grey-3">
              The capabilities form the core of Dm’s Mission and sit at the
              centre of the Matrix. These are the systemic goals that we have
              set for ourselves as we strive to build pathways towards
              Life-Ennobling Economies. Some examples include decolonising
              currency stewardship, embedding data-augmented decision making and
              building the foundations for planetary stewardship institutions.
            </p>
          </animated.div>
        </div>
        <div className={`matrix-justify relative col-span-7 sm:w-[690px]`}>
          <div id="real" className="">
            <h1 className="max-w-160 pb-10 heading-7xl text-grey-5">
              We are building options for the next economies
            </h1>
            <p className="max-w-2xl p-3xl text-grey-6">
              At Dark Matter Labs, we view the interconnected crises of our time
              as symptoms of a deeper, structural miscoding of our economic
              systems. We understand these codes to be physical (e.g.
              biodiversity, energy, labour and materials), structural (e.g.
              money creation, embedded inequality and private property rights)
              and psychological (e.g. failure of the imagination). 
            </p>

            <p className="max-w-2xl pt-10 p-3xl text-grey-6">
              Recognising the complex, entangled reality of living systems, we
              are exploring alternative pathways for organising society and
              stewarding the shared planetary commons. Our working hypothesis is
              that these pathways must be rooted in a radical reframing of our
              relationship to everything; from technology and money to land and
              the other-than-human world. We are framing this transformation as
              a shift towards{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => openPopupFor('LEE')(true)}
              >
                Life-Ennobling Economies.
              </span>
            </p>

            <h2 className="pt-20 heading-4xl text-grey-1">
              Economic options are bold directional aspirations
            </h2>
            <p className="pt-8 p-3xl text-grey-6">
              What would it mean to align societal ambition to the magnitude of
              the transformation that is required? We cannot be sure how the
              future will play out or the specific infrastructures that will be
              required. However, we can build towards a range of economic
              options that are likely to be needed. We are imagining new
              investment opportunities for{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => openPopupFor('CTC')(true)}
              >
                city-scale tree canopies
              </span>
              , community endowments and{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => openPopupFor('RBF')(true)}
              >
                resilient bioregional food systems
              </span>
              . We envisage that the electrification of transport networks, the
              mental health of communities and the{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => openPopupFor('CIC')(true)}
              >
                collective intelligence of cities
              </span>{' '}
              will become recognisable assets, understood as commitments to a
              regenerative future. We are also considering what might be
              unleashed if houses were self-owning and affordable in perpetuity.
              Or if rivers could express their need for care. We believe all
              these things are both possible and necessary. These are bold
              aspirations and will only be achieved by a collective movement of
              diverse communities and unusual allies. This is a story of
              practical reimagining that we are excited to put our energy
              behind.
            </p>

            <div className="pt-10">
              <p className="heading-4xl text-grey-2">
                How do we structure our response? ↓
              </p>
            </div>
          </div>

          <div className="block sm:hidden">
            <div className="flex flex-col items-center justify-center py-8">
              <h2 className="pb-4 p-3xl-regular text-grey-3">Matrix</h2>
              <p className="max-w-[380px] p-xl-regular text-grey-3">
                Our collaborative approach is firmly grounded in the complex,
                messy reality of our existing socio-economic systems.
                Step-by-step, with the support of a growing ecosystem, we aim to
                build tangible pathways towards the options that we would like
                to manifest in the world. We have visualised our organisation’s
                response strategy across a three-dimensional matrix. The Matrix
                represents the dynamic interplay of our systemic goals,
                collaborations and context specific initiatives.
              </p>
            </div>
            <Image
              src={matrixMobile1}
              alt=""
              sizes="92vw"
              placeholder="blur"
              className="h-auto w-full"
              style={{ paddingBottom: '20px' }}
            />
            <div className="flex flex-col items-center justify-center py-8">
              <h2 className="heading-3xl-regular pb-4 text-grey-3">
                Intersections
              </h2>
              <p className="max-w-[380px] p-xl-regular text-grey-3">
                Each project in our portfolio contributes to a number of
                systemic capabilities. In doing so they intersect with the Labs,
                Arcs and Studios in various configurations. This allows us to
                prioritise flexible, compound learning across our internal and
                external ecosystems. Some projects are not part of an Arc, but
                each is attached to a Lab (or multiple Labs) where they
                contribute to building systemic capabilities.
              </p>
            </div>
            <Image
              src={matrixMobile2}
              alt=""
              sizes="92vw"
              placeholder="blur"
              className="h-auto w-full"
              style={{ paddingBottom: '20px' }}
            />
            <div className="flex flex-col items-center justify-center py-8">
              <h2 className="heading-3xl-regular pb-4 text-grey-3">
                Capabilities
              </h2>
              <p className="max-w-[380px] p-xl-regular text-grey-3">
                The capabilities form the core of Dm’s Mission and sit at the
                centre of the Matrix. These are the systemic goals that we have
                set for ourselves as we strive to build pathways towards
                Life-Ennobling Economies. Some examples include decolonising
                currency stewardship, embedding data-augmented decision making
                and building the foundations for planetary stewardship
                institutions.
              </p>
            </div>
            <Image
              src={matrixMobile3}
              alt=""
              sizes="92vw"
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>

          <animated.div
            style={{
              opacity: scrollYProgress.to(() => {
                if (scrollY < startSticky - step) {
                  return 0;
                } else if (
                  scrollY >= startSticky - step &&
                  scrollY <= startSticky
                ) {
                  return matrixOpacityInterpolateMult(
                    startSticky - step,
                    startSticky,
                    false,
                    1,
                  );
                } else return 1;
              }),
            }}
            className={`${classT2} hidden sm:block`}
          >
            {scrollY < startSticky + 5 * step && (
              <>
                <animated.div
                  style={{
                    opacity: scrollYProgress.to(() =>
                      labOverlayOpacityInterpolate(),
                    ),
                  }}
                  className="absolute top-64 right-0 z-99"
                >
                  <Image src={labsOverlay} alt="labs overlay" />
                </animated.div>

                <animated.div
                  style={{
                    opacity: scrollYProgress.to(() =>
                      studioOverlayOpacityInterpolate(),
                    ),
                  }}
                  className="absolute top-[28.4rem] right-0 z-99"
                >
                  <Image src={studiosOverlay} alt="studios overlay" />
                </animated.div>

                <animated.div
                  style={{
                    opacity: scrollYProgress.to(() =>
                      arcOverlayOpacityInterpolate(),
                    ),
                  }}
                  className="absolute top-110 left-0 z-99"
                >
                  <Image src={arcsOverlay} alt="arcs overlay" />
                </animated.div>

                <animated.div
                  style={{
                    opacity: scrollYProgress.to(() =>
                      orgOverlayOpacityInterpolate(),
                    ),
                  }}
                  className="absolute top-[38.8rem] left-0 z-99"
                >
                  <Image src={orgOverlay} alt="org dev overlay" />
                </animated.div>
              </>
            )}

            <animated.div
              style={{
                rotateX: scrollYProgress.to(() => scrollInterpolate(55)),
                rotateY: 0,
                rotateZ: scrollYProgress.to(() => scrollInterpolate(45)),
                scale: scrollYProgress.to(() => scaleInterpolate()),
                translateY: scrollYProgress.to(() => scrollYInterpolate()),
                translateX: -140,
                opacity: scrollYProgress.to(() => {
                  if (
                    scrollY > startSticky + step * 5 + 500 &&
                    scrollY <= startSticky + step * 6
                  ) {
                    return partialOpacityInterpolateMult(
                      startSticky + step * 5 + 500,
                      startSticky + step * 6,
                      true,
                      1,
                    );
                  } else if (scrollY > startSticky + step * 6) {
                    return 0.2;
                  } else return 1;
                }),
              }}
              className={classNames(
                activeState === 8 || activeState === 9 ? '' : ' ',
                `shadow-layer absolute z-50 grid w-[856px] grid-cols-12`,
              )}
            >
              <div className="col-span-11">
                <div>
                  <div className="ml-20 text-center">
                    <animated.h2
                      style={{
                        opacity: opacityInterpolate(
                          startSticky + step * 4,
                          startSticky + step * 5,
                          false,
                        ),
                      }}
                      className="pb-4 font-SaansRegular text-[17px] font-normal text-grey-3"
                    >
                      Labs
                    </animated.h2>
                  </div>
                </div>

                <div className="grid grid-cols-9 gap-0">
                  <div className="">
                    <div className="mb-1.5 flex h-[80px] w-[80px] flex-col items-center justify-end pt-[5px] pr-[6px] pb-[6.5px] pl-2">
                      <animated.h2
                        style={{
                          opacity: opacityInterpolate(
                            startSticky + step * 4,
                            startSticky + step * 5,
                            false,
                          ),
                        }}
                        className="font-SaansRegular text-[17px] font-normal text-grey-3"
                      >
                        Arcs
                      </animated.h2>
                    </div>

                    <ArcColumn
                      units={units}
                      isActive={isActive}
                      unitSetter={unitSetter}
                      openPopup={openPopup}
                      openPopupFor={openPopupFor}
                      scrollYProgress={scrollYProgress}
                      bgHoverInterpolate={bgHoverInterpolate}
                    />
                  </div>
                  <MatrixGrid
                    units={units}
                    isActive={isActive}
                    unitSetter={unitSetter}
                    openPopup={openPopup}
                    openPopupFor={openPopupFor}
                    closePopup={closePopup}
                    scrollYProgress={scrollYProgress}
                    bgHoverInterpolate={bgHoverInterpolate}
                  />
                </div>
              </div>
              <div
                className={classNames(
                  activeState === 7 ? 'mt-[2.6em] block' : 'mt-[2.6em] hidden',
                  'text-right opacity-0',
                )}
              >
                <div className="flex h-[80px] w-[80px] flex-col items-center justify-end pt-[5px] pr-[6px] pb-[6.5px] pl-2">
                  <h2
                    className={classNames(
                      activeState === 7 ? 'text-grey-3' : 'text-transparent',
                      'font-SaansRegular text-[17px] font-normal',
                    )}
                  >
                    Studios
                  </h2>
                </div>

                <StudioRow
                  units={units}
                  isActive={isActive}
                  unitSetter={unitSetter}
                  openPopup={openPopup}
                  openPopupFor={openPopupFor}
                  scrollYProgress={scrollYProgress}
                  bgHoverInterpolate={bgHoverInterpolate}
                />

                <animated.div
                  style={{
                    backgroundColor: scrollYProgress.to(() =>
                      bgHoverInterpolate(
                        3,
                        isActive('OD') || openPopup === 'OD',
                      ),
                    ),
                  }}
                  className={classNames(
                    isActive('OD') || openPopup === 'OD'
                      ? 'text-white'
                      : 'text-grey-3',
                    'my-1.5 flex h-[80px] w-[80px] cursor-crosshair items-end justify-start pt-[5px] pr-[6px] pb-[6.5px] pl-2',
                  )}
                  onMouseOver={() => unitSetter('OD')(true)}
                  onMouseLeave={() => unitSetter('OD')(false)}
                  onClick={() => openPopupFor('OD')(true)}
                >
                  <p className="font-SaansRegular text-[17px] font-normal uppercase">
                    Org Dev
                  </p>
                </animated.div>
              </div>
            </animated.div>

            <animated.div
              style={{
                rotateX: scrollYProgress.to(() => scrollInterpolate(55)),
                rotateY: 0,
                scale: scrollYProgress.to(() => scaleInterpolate()),
                rotateZ: scrollYProgress.to(() => scrollInterpolate(45)),
                top: scrollYProgress.to(() => scrollInterpolate(128)),
                translateY: scrollYProgress.to(() => scrollYInterpolate()),
                translateX: -140,
                opacity: scrollYProgress.to(() => {
                  if (
                    scrollY >= startSticky + step * 5 + 500 &&
                    scrollY <= startSticky + step * 6
                  ) {
                    return partialOpacityInterpolateMult(
                      startSticky + step * 5 + 500,
                      startSticky + step * 6,
                      true,
                      1,
                    );
                  } else if (scrollY > startSticky + step * 6) {
                    return 0.2;
                  } else return 1;
                }),
              }}
              className={classNames(
                activeState === 7 || activeState === 8 ? '' : '',
                `absolute z-30`,
              )}
            >
              <div
                className={classNames(
                  scrollY > startSticky + step * 6 ? 'hidden' : 'block',
                  `backdrop-div w-[778px]`,
                )}
              ></div>
              <div className="content-div shadow-layer grid w-[854px] grid-cols-12">
                <div className="col-span-11">
                  <div className="text-center">
                    <h2
                      className={classNames(
                        'pb-4 font-SaansRegular text-[17px] font-normal opacity-0',
                      )}
                    >
                      Labs
                    </h2>
                  </div>

                  <div
                    className={classNames(
                      scrollFraction >= 1 ? 'opacity-0' : 'opacity-100',
                      `mt-[87px] grid w-[778px] grid-cols-9`,
                    )}
                  >
                    <div className="studio-layer opacity-0"></div>

                    <div
                      className={classNames(
                        activeState === 7 || activeState === 8 ? '' : '',
                        `studio-layer border-t border-b border-l border-[#262626]`,
                      )}
                    >
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                    </div>
                    <div className="studio-layer border-t border-r border-b border-[#262626]">
                      <div className={`h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                      <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                      <div className={`my-1.t h-[80px] w-[80px] p-2`}> </div>
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    activeState === 7 || activeState === 8
                      ? 'mt-[2.61em]'
                      : 'mt-[2.61em]',
                    'block text-right',
                  )}
                >
                  <div className="flex h-[80px] w-[80px] flex-col items-center justify-end pt-[5px] pr-[6px] pb-[6.5px] pl-2">
                    <animated.h2
                      style={{
                        opacity: opacityInterpolate(
                          startSticky + step * 4,
                          startSticky + step * 5,
                          false,
                        ),
                      }}
                      className="font-SaansRegular text-[17px] font-normal text-grey-3"
                    >
                      Studios
                    </animated.h2>
                  </div>

                  <StudioRow
                    units={units}
                    isActive={isActive}
                    unitSetter={unitSetter}
                    openPopup={openPopup}
                    openPopupFor={openPopupFor}
                    scrollYProgress={scrollYProgress}
                    bgHoverInterpolate={bgHoverInterpolate}
                  />

                  <animated.div
                    style={{
                      backgroundColor: scrollYProgress.to(() =>
                        bgHoverInterpolate(
                          3,
                          isActive('OD') || openPopup === 'OD',
                        ),
                      ),
                    }}
                    className={classNames(
                      isActive('OD') || openPopup === 'OD'
                        ? 'text-white'
                        : 'text-grey-3',
                      'my-1.5 flex h-[80px] w-[80px] cursor-crosshair items-end justify-start pt-[5px] pr-[6px] pb-[6.5px] pl-2 tracking-wide',
                    )}
                    onMouseOver={() => unitSetter('OD')(true)}
                    onMouseLeave={() => unitSetter('OD')(false)}
                    onClick={() => openPopupFor('OD')(true)}
                  >
                    <p className="font-SaansRegular text-[17px] leading-[125%] font-normal uppercase">
                      Org Dev
                    </p>
                  </animated.div>
                </div>
              </div>
            </animated.div>

            <animated.div
              style={{
                rotateX: scrollYProgress.to(() => scrollInterpolate(55)),
                rotateY: 0,
                scale: scrollYProgress.to(() => scaleInterpolate()),
                rotateZ: scrollYProgress.to(() => scrollInterpolate(45)),
                top: scrollYProgress.to(() => scrollInterpolate(256)),
                translateY: scrollYProgress.to(() => scrollYInterpolate()),
                translateX: -140,
                opacity: scrollYProgress.to(() => {
                  if (activeState === 7) {
                    return scrollInterpolate(1);
                  } else if (
                    scrollY >= startSticky + step * 5 + 500 &&
                    scrollY <= startSticky + step * 6
                  ) {
                    return capacityOpacityInterpolate(
                      startSticky + step * 5 + 500,
                      startSticky + step * 6,
                      false,
                    );
                  } else return 1;
                }),
              }}
              className={classNames(
                scrollY >= startSticky + step * 5 + 310 ? 'z-50' : 'z-20',
                `shadow-layer absolute grid w-[854px] grid-cols-12 font-SaansRegular`,
              )}
            >
              <div className="col-span-1">
                <div className="ml-4"></div>
              </div>
              <div className="col-span-10">
                <div className="mx-auto max-w-xl text-center">
                  <h2
                    className={classNames(
                      activeState === 5 ? 'text-transparent' : 'text-grey-3',
                      'pb-4 text-base font-normal',
                    )}
                  >
                    Domains
                  </h2>
                </div>

                <div className="mb-1.5 ml-4 grid grid-cols-6">
                  <div className="">
                    <div
                      onClick={() => openPopupFor('DomainA')(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#8E6413] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        {' '}
                        A
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Ontology & Epistemology
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainA1')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        A-1
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Fostering a relational worldview
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainA2')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        A-2
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Replacing profit as the collective goal
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainA3')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        A-3
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        <br />
                        Building political will
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainA4')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        A-4
                      </p>
                      <p className="max-w-[80px] font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Phenomenological measures of success (lived experience)
                      </p>
                    </div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                  </div>

                  <div className="">
                    <div
                      onClick={() => openPopupFor('DomainB')(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#903C30] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Money & valuation logic
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainB1')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B-1
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Demonstrating entangled and long-term value
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainB2')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B-2
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Decolonised, bioregional currency stewardship
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainB3')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B-3
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Alternative non-fungible currency systems
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainB4')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B-4
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Visualising finite and infinite economies
                      </p>
                    </div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                  </div>

                  <div className="">
                    <div
                      onClick={() => openPopupFor('DomainC')(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#206B35] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        C
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Financial processes & investment
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainC1')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        C-1
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Making the investment case for entangled value
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainC2')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        C-2
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        <br /> Bridging demand & supply
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainC3')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        C-3
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Structuring capital & investments
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainC4')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        C-4
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Enabling strategic ecosystem investments
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainC5')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        C-5
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Socialising the supportive narratives for alternative
                        financing pathways
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainC6')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] py-2 pr-1 pl-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        C-6
                      </p>
                      <p className="self-stretch font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Socialising transformational narratives for a
                        regenerative financial system
                      </p>
                    </div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                  </div>

                  <div className="">
                    <div
                      onClick={() => openPopupFor('DomainD')(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#205793] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        D
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Ownership, law & governance
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainD1')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        D-1
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Using instruments to demonstrate alternative theories of
                        ownership
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainD2')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        D-2
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Elevating alternative models that recouple surplus with
                        stewardship
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainD3')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        D-3
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Demonstrating multi-actor governance structures
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainD4')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        D-4
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Embedding data-augmented decision making
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainD5')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        D-5
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Building deep respect for the other-than-human world,
                        ancestors and future generations
                      </p>
                    </div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                  </div>

                  <div className="">
                    <div
                      onClick={() => openPopupFor('DomainE')(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#8D2D55] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        {' '}
                        E
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Institutional logic & policy
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainE1')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        E-1
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Enabling public-civic efficacy to transform place
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainE2')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        E-2
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Building the foundations for planetary stewardship
                        institutions
                      </p>
                    </div>
                    <div
                      onClick={() => openPopupFor('DomainE3')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        E-3
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Designing reflective, data-driven policy instruments
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainE4')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        E-4
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Place-based, policy process design
                      </p>
                    </div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                  </div>

                  <div className="">
                    <div
                      onClick={() => openPopupFor('DomainF')(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-grey-4 p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        F
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Material, energy & land use
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainF1')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] py-2 pl-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        F-1
                      </p>
                      <p className="max-w-[90px] font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Developing collaborative, non-extractive interfaces with
                        the physical environment
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainF2')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] px-2 py-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        F-2
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Visualising material and energy flows
                      </p>
                    </div>
                    <div
                      onClick={() => openPopupFor('DomainF3')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] px-2 py-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        F-3
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Developing a stewardship data infrastructure for the
                        built environment
                      </p>
                    </div>

                    <div
                      onClick={() => openPopupFor('DomainF4')(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] px-2 py-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        F-4
                      </p>
                      <p className="font-SaansRegular text-[7px] leading-tight tracking-tight">
                        Designing and demonstrating autonomous, regenerative and
                        affordable multi-purpose developments.
                      </p>
                    </div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>

                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                    <div
                      className={`my-1.5 h-[80px] w-[109px] border border-[#1A1919] bg-[#1A1919] p-2`}
                    ></div>
                  </div>
                </div>
              </div>
            </animated.div>
          </animated.div>
        </div>
      </div>

      <animated.div
        style={{
          opacity: scrollYProgress.to(() =>
            divOpacityInterpolate(
              startSticky + step * 7,
              startSticky + step * 7 + 300,
            ),
          ),
        }}
        className={`context-margin mobile-always-visible relative flex justify-center matrix:grid matrix:grid-cols-12`}
      >
        <Contexts />
      </animated.div>

      <animated.div
        style={{
          opacity: scrollYProgress.to(() =>
            divOpacityInterpolate(
              startSticky + step * 8 + 400,
              startSticky + step * 8 + 700,
            ),
          ),
        }}
        className={`mobile-always-visible relative flex justify-center matrix:grid matrix:grid-cols-12`}
      >
        <Paradigms {...paradigmSetters} />
      </animated.div>
    </div>
  );
}
