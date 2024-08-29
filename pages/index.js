import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useScroll, animated } from '@react-spring/web';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { startSticky, step, matrix_scale } from '../utils/constants';

import Navbar from '../components/Navbar';
import Arc from '../components/Arc';
import Lab from '../components/Lab';
import Studio from '../components/Studio';
import Initiative from '../components/Initiative';
import StudioInitiative from '../components/StudioInitiative';
import Popup from '../components/Popup';
import Footer from '../components/Footer';

import webIcon from '../images/website.svg';
import pubIcon from '../images/publication.svg';
import labsOverlay from '../images/labs.svg';
import arcsOverlay from '../images/arcs.svg';
import studiosOverlay from '../images/studio.svg';
import orgOverlay from '../images/orgdev.svg';
import vinnovaLogo from '../images/partners/Vinnova.png';
import VClogo from '../images/partners/VC.png';
import CKICLogo from '../images/partners/C-KIC.png';
import ArupLogo from '../images/partners/Arup.png';
import BHLogo from '../images/partners/Bloxhub.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const [classT, setClassT] = useState('');
  const [scrollFraction, setScrollFraction] = useState();

  const [classA, setClassA] = useState('');
  const [classAB, setClassAB] = useState('');

  const [classT2, setClassT2] = useState('t1');
  const [activeState, setActiveState] = useState(1);

  const [animateOn, setAnimateOn] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const animationStart = startSticky + step * 3;
  let newY;

  const { scrollYProgress } = useScroll();

  const listenScrollEvent = () => {
    setScrollY(window.scrollY);

    let scrollFrac =
      Math.min(
        (window.scrollY - animationStart) /
          (document.body.scrollHeight - window.innerHeight),
        1,
      ) * 10;
    let easeFrac = Math.pow(scrollFrac, 3);
    setScrollFraction(easeFrac);

    // base state
    if (window.scrollY < startSticky) {
      setClassT('');
      setClassA('');
      setClassAB('');

      setActiveState(1);

      setClassT2('t1');
      setAnimateOn('');
    }
    // matrix sticky state
    else if (
      window.scrollY >= startSticky &&
      window.scrollY < startSticky + step
    ) {
      setActiveState(2);

      setClassT('');

      setClassT2('t2');
      setAnimateOn('');
    }
    // labs colour state
    else if (
      window.scrollY >= startSticky + step &&
      window.scrollY < startSticky + 2 * step
    ) {
      setActiveState(3);

      setClassT2('t2');
      setAnimateOn('');
    }
    // arcs colour state
    else if (
      window.scrollY >= startSticky + 2 * step &&
      window.scrollY < startSticky + 3 * step
    ) {
      setActiveState(4);

      setClassT2('t2');
      setAnimateOn('');
    }
    // studio colour state + 2d projects
    else if (
      window.scrollY >= startSticky + 3 * step &&
      window.scrollY < startSticky + 4 * step
    ) {
      setActiveState(5);

      setClassT2('t2');

      if (window.scrollY > animationStart) {
        setAnimateOn('animate');
      }
    }
    // capability state
    else if (
      window.scrollY >= startSticky + step * 4 &&
      window.scrollY < startSticky + step * 5
    ) {
      setActiveState(7);

      setClassT2('t2');
    }
    // capability 2D state
    else if (
      window.scrollY >= startSticky + step * 5 &&
      window.scrollY < startSticky + step * 6
    ) {
      setActiveState(8);

      setClassT2('t2');
    }

    // matrix non sticky state
    if (window.scrollY >= startSticky + step * 5) {
      setClassT2('t3');
    }

    if (
      window.scrollY >= startSticky + step * 6 &&
      window.scrollY < startSticky + step * 7 + 1200
    ) {
      setActiveState(9);
    }
    if (window.scrollY >= startSticky + step * 6 + 1200) {
      setActiveState(10);
    }
  };

  // arcs states
  const [RCactive, setRCActive] = useState(false);
  const [ETCactive, setETCActive] = useState(false);
  const [NZactive, setNZActive] = useState(false);
  const [SGactive, setSGActive] = useState(false);
  const [M0active, setM0Active] = useState(false);
  const [REactive, setREActive] = useState(false);
  const [WIactive, setWIActive] = useState(false);
  const [BEactive, setBEActive] = useState(false);
  const [PCactive, setPCActive] = useState(false);

  //labs states
  const [NEactive, setNEActive] = useState(false);
  const [BLactive, setBLActive] = useState(false);
  const [CSactive, setCSActive] = useState(false);
  const [PFactive, setPFActive] = useState(false);
  const [PBactive, setPBActive] = useState(false);
  const [QDactive, setQDActive] = useState(false);
  const [BRactive, setBRActive] = useState(false);
  const [SMactive, setSMActive] = useState(false);

  //studio states
  const [CTactive, setCTActive] = useState(false);
  const [CDactive, setCDActive] = useState(false);
  const [FFactive, setFFActive] = useState(false);
  const [ODactive, setODActive] = useState(false);

  // open modal states
  const [openLEE, setOpenLEE] = useState(false);
  const [openCTC, setOpenCTC] = useState(false);
  const [openCIC, setOpenCIC] = useState(false);
  const [openRBF, setOpenRBF] = useState(false);
  const [openMC, setOpenMC] = useState(false);
  const [openTAI, setOpenTAI] = useState(false);
  const [openCL, setOpenCL] = useState(false);
  const [openRC, setOpenRC] = useState(false);
  const [openNZ, setOpenNZ] = useState(false);
  const [openSG, setOpenSG] = useState(false);
  const [openM0, setOpenM0] = useState(false);
  const [openNET, setOpenNET] = useState(false);
  const [openRE, setOpenRE] = useState(false);
  const [openBE, setOpenBE] = useState(false);
  const [openPC, setOpenPC] = useState(false);
  const [openETC, setOpenETC] = useState(false);
  const [openWI, setOpenWI] = useState(false);

  const [openNE, setOpenNE] = useState(false);
  const [openBL, setOpenBL] = useState(false);
  const [openCS, setOpenCS] = useState(false);
  const [openPF, setOpenPF] = useState(false);
  const [openPB, setOpenPB] = useState(false);
  const [openQD, setOpenQD] = useState(false);
  const [openBR, setOpenBR] = useState(false);
  const [openSM, setOpenSM] = useState(false);

  const [openCT, setOpenCT] = useState(false);
  const [openCD, setOpenCD] = useState(false);
  const [openFF, setOpenFF] = useState(false);
  const [openOD, setOpenOD] = useState(false);

  const [openDomainA, setOpenDomainA] = useState(false);
  const [openDomainA1, setOpenDomainA1] = useState(false);
  const [openDomainA2, setOpenDomainA2] = useState(false);
  const [openDomainA3, setOpenDomainA3] = useState(false);
  const [openDomainA4, setOpenDomainA4] = useState(false);

  const [openDomainB, setOpenDomainB] = useState(false);
  const [openDomainB1, setOpenDomainB1] = useState(false);
  const [openDomainB2, setOpenDomainB2] = useState(false);
  const [openDomainB3, setOpenDomainB3] = useState(false);
  const [openDomainB4, setOpenDomainB4] = useState(false);

  const [openDomainC, setOpenDomainC] = useState(false);
  const [openDomainC1, setOpenDomainC1] = useState(false);
  const [openDomainC2, setOpenDomainC2] = useState(false);
  const [openDomainC3, setOpenDomainC3] = useState(false);
  const [openDomainC4, setOpenDomainC4] = useState(false);
  const [openDomainC5, setOpenDomainC5] = useState(false);
  const [openDomainC6, setOpenDomainC6] = useState(false);

  const [openDomainD, setOpenDomainD] = useState(false);
  const [openDomainD1, setOpenDomainD1] = useState(false);
  const [openDomainD2, setOpenDomainD2] = useState(false);
  const [openDomainD3, setOpenDomainD3] = useState(false);
  const [openDomainD4, setOpenDomainD4] = useState(false);
  const [openDomainD5, setOpenDomainD5] = useState(false);

  const [openDomainE, setOpenDomainE] = useState(false);
  const [openDomainE1, setOpenDomainE1] = useState(false);
  const [openDomainE2, setOpenDomainE2] = useState(false);
  const [openDomainE3, setOpenDomainE3] = useState(false);
  const [openDomainE4, setOpenDomainE4] = useState(false);

  const [openDomainF, setOpenDomainF] = useState(false);
  const [openDomainF1, setOpenDomainF1] = useState(false);
  const [openDomainF2, setOpenDomainF2] = useState(false);
  const [openDomainF3, setOpenDomainF3] = useState(false);
  const [openDomainF4, setOpenDomainF4] = useState(false);

  const scrollInterpolate = (toInterpolate) => {
    let startScroll = startSticky + step * 3;
    let endScroll = startSticky + step * 4;

    let scrollFrac =
      Math.min((scrollY - startScroll) / (endScroll - startScroll), 1) * 2;
    let easeFrac = Math.pow(scrollFrac, 3);

    if (toInterpolate - toInterpolate * easeFrac > 0) {
      if (animateOn === 'animate') {
        return toInterpolate - toInterpolate * easeFrac;
      } else {
        return toInterpolate;
      }
    } else {
      return 0;
    }
  };

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
    } else return 300 * scrollFactor; // Linear interpolation for opacity
  };

  const sideMatrixOpacityInterpolate = () => {
    if (scrollY < startSticky) {
      let startScroll = 1100; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky) {
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step / 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - 0.8 * newOpacity;
    }
  };

  const sideLabsOpacityInterpolate = () => {
    if (scrollY < startSticky) {
      return 0;
    } else if (scrollY >= startSticky && scrollY < startSticky + step) {
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step / 2; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 0.8 * newOpacity;
    } else if (scrollY >= startSticky + step) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step + step / 2; // End of the range (scroll position in pixels)

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
      scrollY >= startSticky + step &&
      scrollY < startSticky + step * 2
    ) {
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
      let endScroll = startSticky + step * 2 + step / 2; // End of the range (scroll position in pixels)

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
      let endScroll = startSticky + step * 3 + step / 2; // End of the range (scroll position in pixels)

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
    if (scrollY < startSticky + step * 3) {
      return 0;
    } else if (
      scrollY >= startSticky + step * 3 &&
      scrollY < startSticky + step * 4
    ) {
      let startScroll = startSticky + step * 3; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step * 3 + step / 2; // End of the range (scroll position in pixels)

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

  const sideCapabilityOpacityInterpolate = () => {
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
      let endScroll = startSticky + step * 5 + step / 2; // End of the range (scroll position in pixels)

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

      // Calculate the interpolated color
      let newColor = {
        r: Math.round(endColor.r + (startColor.r - endColor.r) * scrollFactor),
        g: Math.round(endColor.g + (startColor.g - endColor.g) * scrollFactor),
        b: Math.round(endColor.b + (startColor.b - endColor.b) * scrollFactor),
      };
      return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    } else return `rgb(${startColor.r}, ${startColor.g}, ${startColor.b})`;
  };

  const arcOverlayOpacityInterpolate = () => {
    if (scrollY <= startSticky) {
      // Define the scroll range where the opacity change should happen
      let startScroll = 1100; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (scrollY <= startSticky + step) {
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - newOpacity;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + 2 * step
    ) {
      // Get the current scroll position

      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + 2 * step; // End of the range (scroll position in pixels)

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return newOpacity;
    } else if (
      scrollY > startSticky + 2 * step &&
      scrollY <= startSticky + 3 * step
    ) {
      let startScroll = startSticky + 2 * step;
      let endScroll = startSticky + 3 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 1 - newOpacity;
    } else return 0;
  };

  const labOverlayOpacityInterpolate = () => {
    if (scrollY <= startSticky) {
      // Define the scroll range where the opacity change should happen
      let startScroll = 1100; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (scrollY < startSticky + step) {
      return 1;
    } else if (
      scrollY >= startSticky + step &&
      scrollY <= startSticky + 2 * step
    ) {
      let startScroll = startSticky + step; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + 2 * step; // End of the range (scroll position in pixels)

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 1 - newOpacity;
    } else return 0;
  };

  const studioOverlayOpacityInterpolate = () => {
    if (scrollY <= startSticky) {
      // Define the scroll range where the opacity change should happen
      let startScroll = 1100; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (scrollY <= startSticky + step) {
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - newOpacity;
    } else if (
      scrollY > startSticky + step &&
      scrollY <= startSticky + 2 * step
    ) {
      return 0;
    } else if (
      scrollY > startSticky + 2 * step &&
      scrollY <= startSticky + 3 * step
    ) {
      let startScroll = startSticky + 2 * step;
      let endScroll = startSticky + 3 * step;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return newOpacity;
    } else if (
      scrollY > startSticky + 3 * step &&
      scrollY <= startSticky + 3 * step + step / 2
    ) {
      let startScroll = startSticky + 3 * step;
      let endScroll = startSticky + 3 * step + step / 2;

      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      let newOpacity = scrollFactor;

      return 1 - newOpacity;
    } else return 0;
  };

  const orgOverlayOpacityInterpolate = () => {
    if (scrollY <= startSticky) {
      // Define the scroll range where the opacity change should happen
      let startScroll = 1100; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return newOpacity;
    } else if (scrollY <= startSticky + step) {
      let startScroll = startSticky; // Offset for the start of the range (scroll position in pixels)
      let endScroll = startSticky + step; // End of the range (scroll position in pixels)

      // Normalize the scroll position within the defined range
      let scrollFactor = (scrollY - startScroll) / (endScroll - startScroll);

      // Clamp the scrollFactor between 0 and 1
      scrollFactor = Math.min(Math.max(scrollFactor, 0), 1);

      // Interpolate opacity between 0 (fully transparent) and 1 (fully opaque)
      let newOpacity = scrollFactor; // Linear interpolation for opacity

      return 1 - newOpacity;
    } else return 0;
  };

  const scrollYInterpolate = () => {
    let startScroll = startSticky + step * 3;
    let endScroll = startSticky + step * 4;

    let scrollFrac =
      Math.min((scrollY - startScroll) / (endScroll - startScroll), 1) * 2;
    let easeFrac = Math.pow(scrollFrac, 3);

    if (easeFrac >= 1) {
      return 120;
    }

    if (scrollY >= startScroll && scrollY < endScroll) {
      newY = startSticky * easeFrac * 0.1;
      return newY;
    }
    return 0;
  };

  return (
    <div>
      <Head>
        <title>Dark Matter Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Popup
        title="Capital Systems"
        openState={openCS}
        setOpen={setOpenCS}
        website="https://darkmatterlabs.capital/"
        publication=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            the DmCS Lab is working to reframe what is possible within the
            financial capital markets. This Lab is working with the hypothesis
            that the{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://uploads-ssl.webflow.com/5ddbd6d8c8721f339f8284ef/5ea18eb53e44c4667e1cfebf_0411_Building%20Civic%20Capital%20(compressed).pdf"
            >
              investment logic of the current system
            </a>{' '}
            needs to be rewired to catch up with the scale of societal
            transition that is underway. The Lab is developing a portfolio of
            investable projects and new asset classes (for example a swimmable
            river in Austria and microgrids in Africa), that recognise that long
            term value is grounded in our biophysical and social reality.
          </p>
        }
      />

      <Popup
        title="Radicle Civics"
        openState={openRC}
        setOpen={setOpenRC}
        website="https://radiclecivics.cc/"
        publication=""
        content={
          <p className="font-FKregular text-base text-[#C6C6C6]">
            Radicle Civics is a playful nod towards emergent shoots of
            possibility (in botany, the radicle is the first part of a seedling
            to emerge during the process of germination). This arc aims to build
            cultural demonstrations that support{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://provocations.darkmatterlabs.org/radicle-civics-building-proofs-of-possibilities-for-a-civic-economy-and-society-ee28baeeec70"
            >
              three
            </a>{' '}
            new ways of being in the world: from assets to agents, from
            externalities to entanglements, and from public/public to commoning.
          </p>
        }
      />

      {/* <Popup
       title=''
       openState={}
       setOpen={}
       website=''
       publication=''
       content={}
      /> */}

      <Transition.Root show={openNZ} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenNZ}>
          <div className="fixed left-[14.7%]  top-[25.5%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenNZ(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Net Zero Cities{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://netzerocities.eu/">
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The NZC Arc aspires to create smart cities that are carbon
                      neutral. This involves{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://netzerocities.eu/"
                      >
                        supporting cities
                      </a>{' '}
                      to develop local portfolios of coordinated actions across
                      multiple domains (e.g. technology, governance, policy,
                      finance innovation, social innovation) which accelerate
                      emission reductions.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openSG} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenSG}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenSG(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    7Gen Cities{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://www.7gencities.org/">
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      This collaborative arc fosters transformative thinking and
                      action for future cities. The aspiration is to create the
                      infrastructures for cities, inviting the next seven
                      generations of city dwellers to thrive in radically caring
                      and regenerative communities.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openM0} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenM0}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenM0(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    M0 Cities{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={pubIcon} alt="publish icon" />
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/19yPUJg-DZgdXVhaK3Hh_Rqj7NdEe-7ZT/view"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The M0 Arc is aiming to reimagine how we use and steward
                      materials in service of{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        herf="https://drive.google.com/file/d/19yPUJg-DZgdXVhaK3Hh_Rqj7NdEe-7ZT/view"
                      >
                        a regenerative built environment
                      </a>
                      . The Arc is asking questions around how we can innovate
                      our material inputs, adjust our understanding of comfort
                      (heating and cooling) and intelligently share existing
                      spaces.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openRE} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenRE}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenRE(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Regen Nutrition{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={pubIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://medium.com/9outof10-protein-shift-innovation-platform/universal-basic-nutrient-income-institutional-infrastructure-for-2040-food-preparedness-f00f70a84510"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The Rn Arc is working towards resilient, sustainable and
                      high quality food systems. Within this aspiration, cities
                      are a key area of focus and the team are working across
                      diverse sectors to identify and respond to likey pressure
                      points.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openBE} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenBE}>
          <div className="fixed left-[14.7%]  top-[25.5%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenBE(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Bioregional Economics{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The Be Arc is aiming to support the creation of nested
                      economies that protect and steward the integral health of
                      their base bioregions. This Arc works closely with the Sm
                      Lab to collate, map and visualise the value stocks and
                      flows of a bioregion. It also intersects with the Ne Lab
                      to propose how these entangled forms of value can be
                      integrated into our investment frameworks and decision
                      making structures.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openPC} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenPC}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenPC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Planetary Civics{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=zQJjfCSPvJI"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The Pc Arc is looking at how we can match the scale of our
                      planetary challenges with our global ambition to respond.
                      For example, how can we build bold, ambitious models of
                      meaningful repair for our earth systems? What would it
                      mean to embrace the idea of relatable hyperobjects
                      (dimensions of a scale that historically have been beyond
                      the scope of human understanding)?
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openNE} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenNE}>
          <div className="fixed left-[14.7%]  top-[25.5%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenNE(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Next Economics{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      the Ne Lab embodies the core philosophies of LEE. It aims
                      to stimulate a continuous and inclusive dialogue about how
                      we relate to the world and the implications for a
                      desirable future economy. The Lab is actively testing
                      three core worldview philosophies: what would a future
                      economy look and feel like if it was{' '}
                      <b>rooted in the recognition of the full web of life</b>,
                      grounded by a <b>non-bounded theory of value</b> and
                      enabled by <b>technological ecosystems of care</b>? In
                      parallel, the NE Lab is building practical pathways
                      towards systemic goals such as{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://drive.google.com/file/d/176CNiZYM1v2xcEzDVO4SHuEfRQoosCVL/view"
                      >
                        replacing profit as the collective goal
                      </a>{' '}
                      and demonstrating entangled value.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openPB} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenPB}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenPB(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Property & Beyond{' '}
                    <span className="align-super text-lg uppercase">Lab</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://www.darkmatterlabs.property/"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      the Pb Lab rejects the values of control and dominion as a
                      basis for private property systems. Instead this Lab aims
                      to build a diverse and proactive portfolio of alternative
                      forms of property; from collective ownership of land to
                      self-owning houses, land, and cameras.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openBR} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenBR}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenBR(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Beyond the Rules{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://darkmatterlabs.notion.site/Beyond-the-Rules-19e692bf98f54b44971ca34700e246fd"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      the Btr Lab practises new forms of organising and
                      governance. The Lab is particularly interested in the
                      deep, thoughtful and highly creative work required to
                      rewrite, reinvent or reimagine rules, norms and laws that
                      hold us in the current system. The Lab is working closely
                      with an ecosystem of partners to prototype and demonstrate
                      new forms of open contracts and multi-actor governance
                      structures.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openSM} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenSM}>
          <div className="fixed left-[14.7%]  top-[25.5%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenSM(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Sensing, Modeling & Mapping{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      the Sm Lab is working to improve the{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://docs.google.com/presentation/d/1fq-hmMDV5DnaDk8fSYhsQmQbvw_yo4SAzsGozWzWhw0/edit#slide=id.g1dcfb843b9e_0_167"
                      >
                        visibility of our interactions with the physical world
                      </a>
                      . From material and energy flows to land use, the Lab is
                      building tools and mapping systems that leverage
                      technology to build a dynamic understanding of how the
                      system is responding.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openBL} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenBL}>
          <div className="fixed left-[14.7%]  top-[25.5%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenBL(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Beyond Labour{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      We are interested in exploring the future of work in
                      relation to a rapidly changing world. What would it mean
                      if we shifted from humans being employed as resources to
                      vocations of creativity, purpose and care?
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openPF} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenPF}>
          <div className="fixed left-[14.7%]  top-[25.5%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenPF(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Philanthropy Futures{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The Pf Lab will explore the potential for philanthropic
                      capital to catalyse radical pathways in parallel to the
                      wider capital markets.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openQD} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenQD}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenQD(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Societal Decisions{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://sdl.darkmatterlabs.org/">
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The Sd Lab is still nascent. Once launched, it will aim to
                      build pathways towards distributed, data assisted decision
                      making.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCT} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenCT}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenCT(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Civic Tech{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Civic Tech Studio helps mould theory and vision from the
                      Dm ecosystem to testable prototypes and applications
                      geared towards long-term impact & maintenance. We see tech
                      with a critical and open-source lens rather than as an
                      extractive and inevitable solution.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openETC} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenETC}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenETC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Local Civics{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      this Arc recognises the transformative potential of
                      communities and neighbourhoods to design and steward their
                      own futures. There are a diverse range of initiatives
                      driving towards this goal; from citizen designed
                      indicators and city scale goals to neighbourhood
                      retrofitting and energy programmes.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCD} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenCD}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenCD(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Conversation Design{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      This studio is fundamental to how we communicate. What
                      exactly is Conversational Design? This is a good question
                      and we would like to invite you to explore it with us. The
                      ambition is to embed conversational frameworks at every
                      level of our work that help people to explore and
                      interrogate our thinking.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openFF} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenFF}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenFF(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Foresight & Futuring{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      This studio works across the ecosystem to build the craft
                      of speculative design and future scenario building. The
                      team has close links to the Sm Studio where they support
                      the mapping and visualisation of future value flows. They
                      also work across the Arcs to develop potential strategic
                      directions.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openOD} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenOD}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenOD(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Org Dev{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The OrgDev (organisational development) Studio provides
                      the critical infrastructure for the entire Dm ecosystem
                      and mission. This team is the foundational rock. Their
                      work unleashes and nourishes the creative potential of
                      Dm’s people and those who intersect with our work.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openWI} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenWI}>
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenWI(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Nature as Infrastructure{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      the Ni Arc is developing practical pathways to support
                      regenerative, respectful and resilient collaborations
                      between human and natural infrastructures. These
                      interventions are grounded in system dynamics such as
                      finance, regulation and data enabled decision making.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openMC} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => {
            setOpenMC(false);
            setRCActive(false);
            setNEActive(false);
          }}
        >
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenMC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    Multivalent Currencies{' '}
                    <span className="align-super text-lg uppercase">
                      project
                    </span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={pubIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://provocations.darkmatterlabs.org/towards-multivalent-currencies-bioregional-monetary-stewardship-and-a-distributed-global-reserve-dac459dc844e"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The NE lab is exploring the interaction between our
                      monetary systems and societal behaviour. To ground the
                      conceptual provocations, NE Lab has been collaborating
                      with the Radicle Civics Arc to prototype the first{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://provocations.darkmatterlabs.org/towards-multivalent-currencies-bioregional-monetary-stewardship-and-a-distributed-global-reserve-dac459dc844e"
                      >
                        distributed bioregional bank
                      </a>
                      .{' '}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openTAI} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => {
            setOpenTAI(false);
            setNZActive(false);
            setCSActive(false);
          }}
        >
          <div className="fixed left-[14.7%]  top-[25.5%]  w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenTAI(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    TreesAI{' '}
                    <span className="align-super text-lg uppercase">
                      project
                    </span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://treesasinfrastructure.com/"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Trees As Infrastructure (TreesAI) is a cloud-based
                      platform that aims to embed nature as a critical part of
                      urban infrastructure (alongside more traditional
                      structures such as bridges, roads and rail). Working with
                      the Dcs Lab in urban locations, the team is working to
                      develop strong business cases for scaled, sustainable
                      investment.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openNET} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => {
            setOpenNET(false);
            setNEActive(false);
            setM0Active(false);
          }}
        >
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenNET(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    New Economic Thinking{' '}
                    <span className="align-super text-lg uppercase">
                      project
                    </span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={pubIcon} alt="website icon" />
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/19yPUJg-DZgdXVhaK3Hh_Rqj7NdEe-7ZT/view"
                    >
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
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
                      work provided mapping and analysis of a just transition in
                      relation to Europe’s built environment. The work sat at
                      the intersection of the Ne Lab and M0 Arc, exploring the
                      physical constraints and potential response strategies for
                      a material light and socially just transition.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCL} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[60]"
          onClose={() => {
            setOpenCL(false);
            setNZActive(false);
            setSMActive(false);
          }}
        >
          <div className="fixed left-[14.7%]  top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenCL(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-SaansMed text-2xl text-[#F5F5F5]"
                  >
                    CircuLaw{' '}
                    <span className="align-super text-lg uppercase">
                      project
                    </span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://www.circulaw.nl/">
                      <p className="pl-1 font-SaansMed text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>

                  <div className="sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      CircuLaw emerged from Dm’s relationship with the City of
                      Amsterdam. The initiative aims to accelerate the
                      transition to a circular economy by identifying
                      opportunities within existing laws and regulations.
                      Working in partnership with legal experts and policy
                      makers, Dm has built an interactive legal knowledge
                      platform.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openLEE} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenLEE}>
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-b from-[#1B1B1B] to-[#303030] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenLEE(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Life-Ennobling Economics is a propositional vision and a
                      call to action. It is an ennobling invitation to break
                      free from ideological constraints, to embrace the radical
                      potential of emergent technologies, and to challenge the
                      structural codes of our current socio-economic systems.
                      Implicit in this opening position is an understanding that
                      the structure and values of the economy must be in service
                      to all forms of life (present, future, human, non-human
                      and machine) providing an inclusive scaffold of care and
                      respect. The central argument being put forward by the LEE
                      is that whilst we indisputably need to shift to a new
                      economy, we will not get there using the mental models,
                      tools or value systems of the current one. Instead, LEE
                      responds to the underlying drivers of the{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://www.pik-potsdam.de/en/news/latest-news/covid-19-climate-change-armed-conflicts-world2019s-crises-can-lead-to-interconnected-polycrisis"
                      >
                        polycrisis
                      </a>{' '}
                      by proposing a philosophical and action oriented
                      framework, centred on reconfiguring our relationships with
                      each other, with the planet and to our collective futures.
                      You can read more about{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://lee.darkmatterlabs.org/"
                      >
                        LEE here
                      </a>
                      .
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCTC} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenCTC}>
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenCTC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      City-scale tree canopies: as a pathway towards this
                      ambition, the{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://treesasinfrastructure.com/"
                      >
                        TreesAI
                      </a>{' '}
                      (Trees As Infrastructure) team has been working to create
                      investable asset classes for the planting and maintenance
                      of trees.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCIC} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenCIC}>
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenCIC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Collective intelligence of a city: the{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://drive.google.com/file/d/176CNiZYM1v2xcEzDVO4SHuEfRQoosCVL/view"
                      >
                        Cornerstone Indicator initiative
                      </a>{' '}
                      was developed to strengthen citizen engagement networks
                      that can sense what it means to thrive in different
                      contexts. The resultant indicators empower communities to
                      have agency over decisions and express their voices in a
                      continuous cycle of participatory governance. As this work
                      progresses we are aiming to link the indicators to smart
                      data to build a more coherent picture of civic experience.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openRBF} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenRBF}>
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenRBF(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Resilient bioregional food systems: we are working towards
                      this option in varied threads of our work. On the broader
                      topic of bioregional transitions we are exploring what a
                      regenerative bioregional economy might even look like. In
                      parallel, we are working with communities to design and
                      implement multi-sensory indicators that can be linked to
                      participatory governance systems, with the aim of{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://provocations.darkmatterlabs.org/towards-multivalent-currencies-bioregional-monetary-stewardship-and-a-distributed-global-reserve-dac459dc844e"
                      >
                        stewarding the regenerative health of a bioregion
                      </a>
                      .
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainA} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainA}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainA(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      Domain A: Ontology & epistemology
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Domain A relates to the values, wisdom, spirituality, ways
                      of being and ways of knowing that are dominant in our
                      culture. This domain results in the collective
                      sense-making of what it means to live a good life and it
                      is this value system that then shapes the political and
                      economic structures below.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainB} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainB}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainB(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      Domain B: Money & valuation logic
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Expresses the underlying theory of value that drives our
                      investment and institutional logic. Money is a powerful
                      expression of this axiology; a) who issues a currency, b)
                      the qualities it is given, and c) what it can be used for.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      Domain C: Financial processes & Investment
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Represents how we structure and allocate capital stocks
                      (this is currently dominated by financial capital but also
                      includes intangible and ecological stocks). This part of
                      the system determines which activities are viable and how
                      value flows through the system.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainD} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainD}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainD(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      Domain D: Ownership, law & governance
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      This domain determines who has the rights to the social
                      surplus and contains the jurisprudence to enforce social
                      norms and systems of organising.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainE} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainE}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainE(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      Domain E: Institutional logic and policy
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      This domain looks at the institutions and blueprints that
                      functionally underpin how we organise society. It includes
                      social engagement processes and the communication of
                      collective values into structural decision making.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainF} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainF}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainF(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      Domain F: Material, energy & land use
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      The physical domain represents the material and ecological
                      economies. This domain grounds the socio-economic and
                      ontological domains in the systems’ biophysical reality.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainA1} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainA1}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainA1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      A1: Fostering a relational worldview
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Helping people to see that relationships are the
                      fundamental basis of living systems. If we can understand
                      life as a series of interconnected relationships then an
                      extractive, overshoot economy will no longer make sense.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainA2} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainA2}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainA2(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      A2: Replacing profit as the collective goal
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      We want to show that profit is no longer an appropriate
                      signal of value. A true signal of value cannot be time or
                      geographically bound in its conception and must recognise
                      entanglement (i.e. there is nothing to externalise in an
                      interconnected system). This is more profound that beyond
                      GDP initiatives - instead we are aiming at regenerative
                      potential being the primary signal of wealth.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainA3} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainA3}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainA3(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      A3: Building political will
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Finding new ways of understanding common issues, together
                      with a clear communication of alternative response
                      strategies. Using the housing crisis as an example;
                      housing as a human right demands a different response than
                      housing as a store of wealth.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainA4} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainA4}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainA4(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      A4: Phenomenological measures of success (lived
                      experience)
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Defining and testing quantitative measures of sensory
                      experience. We want to use embodied metrics to protect and
                      respect intrinsic value.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainB1} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainB1}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainB1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      B1: Demonstrating entangled and long-term value
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      In our current economy, price is synonymous with value. We
                      need to visualise the vast unpriced web of relationships
                      that creates value, so that we can prevent further
                      degradation and make informed decisions about how we
                      interact with diverse forms of value.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainB2} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainB2}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainB2(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      B2: Decolonised, bioregional currency stewardship
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Finding ways to balance the need to exchange freely
                      between regions and countries with protecting the unique
                      contexts of our social & physical systems. For example,
                      creating bioregional banks.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainB3} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainB3}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainB3(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      B3: Alternative non-fungible currency systems
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Demonstrating the potential for new tokens of exchange
                      that are linked to tangible elements of our economy. We
                      want to show how individual resource backed currencies can
                      be linked to form a building block towards inter-regional
                      commons governance (links closely to B2).
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainB4} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainB4}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainB4(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      B4: Visualising finite and infinite economies
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      We need to communicate a vision that opens up the future
                      rather than closing it down. Whilst it is critical to
                      understand the constraints (e.g. energy and carbon), we
                      also need to seed a desire for non-competitive, infinite
                      economies such as solidarity and knowledge.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC1} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC1}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      C1: Making the investment case for entangled value (DEMAND
                      SIDE)
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Helping &#39;project developers&#39; and those that
                      steward assets with entangled value functions to build
                      adequate business models to be able to absorb capital.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC2} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC2}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC2(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      C2: Bridging demand & supply
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Building the protective governance and agreement
                      structures that prevent extractive and asymmetric
                      relationships between funders / investors and those
                      receiving funds.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC3} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC3}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC3(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      C3: Structuring capital & investments
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Developing the necessary instruments that allow current
                      capital holders to allocate it to assets with entangled
                      value functions.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC4} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC4}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC4(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      C4: Enabling strategic ecosystem investments
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Transforming investment logics and frameworks to
                      strategically manipulate desired shifts. For example a
                      single investor splitting their resource into for-profit /
                      lobbying / NFP tranches, to shift subsidies and political
                      will to drive up costs on an extractive technology whilst
                      uplifting a new technology.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC5} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC5}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC5(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      C5: Socialising the supportive narratives for alternative
                      financing pathways
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Opening the Overton window for public and private actors
                      in the financial system to embrace new approaches to
                      financing.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainC6} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainC6}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainC6(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      C6: Socialising transformational narratives for a
                      regenerative financial system
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Exploring the role of the financial system in the global
                      transition. For example, considering whether it has the
                      potential to tip into becoming a catalyst for change or
                      might need to collapse and be re-built for this purpose.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainD1} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainD1}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainD1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      D1: Using instruments (e.g contracts) to demonstrate
                      alternative theories of ownership
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Practical demonstration of contracts and operating
                      agreements that replace linear, owner-owned relationships
                      towards a fixed point with agent-to-agent relationships
                      towards broader goals. NB: we have previously used the
                      term many-to-many contracts to describe this capability.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainD2} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainD2}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainD2(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      D2: Elevating alternative models that recouple surplus
                      with stewardship
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Prevent extraction over time due perverse incentives that
                      are underpinned by corporate, tax, labour and patent laws
                      (among others); enable and support regeneratively designed
                      alternatives.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainD3} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainD3}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainD3(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      D3: Demonstrating multi-actor governance structures
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Practical demonstration of ways of organising and
                      governing together, as multiple actors with varying assets
                      to contribute. This work involves revealing, acknowledging
                      and taking coordinated action to govern emerging public
                      goods.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainD4} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainD4}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainD4(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      D4: Embedding data-augmented decision making
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Using modern technologies to collate and compute
                      wide-ranging data points in complex contexts, so that
                      options can be collectively understood, interrogated and
                      acted on effectively.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainD5} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainD5}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainD5(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      D5: Building deep respect for the other-than-human world,
                      ancestors and future generations
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Supporting pathways that can practically embed the
                      reconciliation of indigenous worldviews, and how this is
                      reflected through alternative legal & governance
                      mechanisms (such as the conceptualisations of justice
                      extending to the &#39;more-than-human world&#39;).
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainE1} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainE1}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainE1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      E1: Enabling public-civic efficacy to transform place
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Supporting the learning, capabilities and power of
                      public-civic partnerships to shape their streets,
                      neighbourhoods and places towards collective thriving.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainE2} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainE2}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainE2(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      E2: Building the foundations for planetary stewardship
                      institutions
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Developing the foundations for stewardship institutions
                      that extend beyond national states, to protect and govern
                      the global commons.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainE3} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainE3}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainE3(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      E3: Designing reflective, data-driven policy instruments
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Creation of instruments that are framed within ecological
                      and social boundaries & aspirations (with clear data
                      driven indicators) and adjust according to the context
                      (e.g. Covid guidance changing depending on % of population
                      infected).
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainE4} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainE4}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainE4(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      E4: Place-based, policy process design
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Policy design processes shaped by the geographical
                      context, which informs the economic, cultural and
                      environmental drivers. We want to use policy design &
                      co-creation as an opportunity to close the engagement gap
                      between grassroots and government.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainF1} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainF1}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainF1(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      F1: Developing collaborative, non-extractive interfaces
                      with the physical environment.
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Building the infrastructure that will allow human
                      activities to hold respectful, reciprocal relationships
                      with land (and other physical elements of our
                      environment). For example, transferring land into common
                      ownership and layered commoning structures, where we
                      overlay common style governance across multiple private
                      properties.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainF2} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainF2}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainF2(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      F2: Visualising material and energy flows
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Developing tools and methodologies to both track and
                      clearly communicate how we are collectively using our
                      shared common resources.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainF3} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainF3}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainF3(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      F3: Developing a stewardship data infrastructure for the
                      built environment
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Building a new data infrastructure that can hold cities,
                      regions and countries to account on how they are
                      stewarding the rights and responsibilities of using shared
                      common resources. Ultimately this must connect on a
                      planetary level.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openDomainF4} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenDomainF4}>
          <div className="fixed left-[14.7%] top-[25.5%] w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-[#1B1B1B] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-transparent text-[#9B9B9B] hover:text-gray-500"
                      onClick={() => setOpenDomainF4(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-SaansMed text-2xl text-[#F5F5F5]"
                    >
                      F4: Designing and demonstrating autonomous, regenerative
                      and affordable multi-purpose developments.
                    </Dialog.Title>

                    <p className="font-SaansRegular text-base text-[#C6C6C6]">
                      Exploring how we can re-common and repurpose land and
                      building in service of a shared, equitable, material and
                      energy light future.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="global-margin">
        <Navbar />
        <div className={`relative mt-28 sm:grid sm:grid-cols-12`}>
          <div className="col-span-5 hidden w-[400px] max-w-xs matrix:block">
            <animated.div
              style={{
                opacity: sideMatrixOpacityInterpolate(),
              }}
              className="mt-[1400px]"
            >
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">Matrix</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                We are not a think tank or consultancy with a single, neat
                theory of change. Instead, our collaborative approach is firmly
                grounded in the complex, messy reality of our existing
                socio-economic systems. Step-by-step, with the support of a
                growing ecosystem, we aim to build tangible pathways towards the
                options that we would like to manifest in the world. We have
                visualised our organisation’s response strategy across a
                three-dimensional matrix. The Matrix represents the dynamic
                interplay of our systemic goals, collaborations and context
                specific initiatives.
              </p>
            </animated.div>

            <animated.div
              style={{
                opacity: sideLabsOpacityInterpolate(),
              }}
              className="mt-[150px]"
            >
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">Labs</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                Each of our Labs is focused on a specific area of the
                socio-economic system and the everyday codes (e.g. norms,
                behaviours and institutional logic) that form its structural
                backbone. The Labs are exploring what might be possible, both
                within and beyond the current structures, and working to develop
                technical expertise in those areas. For example, the Beyond The
                Rules Lab focuses on aspects such as demonstrating multi-actor
                governance structures whereas the Capital Systems Lab is working
                to enable strategic ecosystem investments.
              </p>
            </animated.div>

            <animated.div
              style={{
                opacity: sideArcsOpacityInterpolate(),
              }}
              className="mt-[250px]"
            >
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">Arcs</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                Our Arc workflows are designed with clear, directional goals
                that guide our efforts toward impactful outcomes. For instance,
                Net Zero Cities aims to enable smart, carbon-neutral cities by
                2030, while Radicle Civics seeks to foster specific shifts in
                civic worldviews. These Arcs often involve collaboration with
                multiple Labs, integrating their technical expertise with
                tangible, real-world contexts.
              </p>
            </animated.div>

            <animated.div
              style={{
                opacity: sideStudioOpacityInterpolate(),
              }}
              className="mt-[300px]"
            >
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">Studios</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                Studios are the connective tissue that support both the Labs and
                Missions. The studios explore themes that help our work to be
                implemented and more widely understood. For instance, the Civ
                Tech Studio develops the technological tools and knowledge for
                prototypes tested across the Dm ecosystem. Meanwhile, the Org
                DevStudio, positioned at the base of the Matrix, provides
                critical infrastructure support for the entire Dm Ecosystem.
              </p>
            </animated.div>

            <animated.div
              style={{
                opacity: sideIntersectionOpacityInterpolate(),
              }}
              className="mt-[200px]"
            >
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">
                Intersections
              </h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                Each project in our portfolio contributes to a number of
                systemic capabilities. In doing so they intersect with the Labs,
                Arcs and Studios in various configurations. This allows us to
                prioritise flexible, compound learning across our internal and
                external ecosystems. Some projects are not part of an Arc, but
                each is attached to a Lab (or multiple Labs) where they
                contribute to building systemic capabilities.
              </p>
            </animated.div>

            <animated.div
              style={{
                opacity: sideCapabilityOpacityInterpolate(),
              }}
              className="mt-[300px]"
            >
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">Capabilities</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                The capabilities form the core of Dm’s Mission and sit at the
                centre of the Matrix. These are the systemic goals that we have
                set for ourselves as we strive to build pathways towards
                Life-Ennobling Economies. Some examples include decolonising
                currency stewardship, embedding data-augmented decision making
                and building the foundations for planetary stewardship
                institutions.
              </p>
            </animated.div>
          </div>
          <div className={`relative col-span-7 w-[690px] justify-self-end`}>
            <div id="real" className="">
              <h1 className="heading-7xl max-w-[42rem] pb-10 text-grey-5 ">
                We are building options for the next economies
              </h1>
              <p className="p-3xl max-w-[42rem] text-grey-6">
                At Dark Matter Labs, we view the interconnected crises of our
                time as symptoms of a deeper, structural miscoding of our
                economic systems. We understand these codes to be physical (e.g.
                biodiversity, energy, labour and materials), structural (e.g.
                money creation, embedded inequality and private property rights)
                and psychological (e.g. failure of the imagination). 
              </p>

              <p className="p-3xl max-w-[42rem] pt-10 text-grey-6">
                Recognising the complex, entangled reality of living systems, we
                are exploring alternative pathways for organising society and
                stewarding the shared planetary commons. Our working hypothesis
                is that these pathways must be rooted in a radical reframing of
                our relationship to everything; from technology and money to
                land and the other-than-human world. We are framing this
                transformation as a shift towards{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-crosshair"
                  onClick={() => setOpenLEE(true)}
                >
                  Life-Ennobling Economies.
                </span>
              </p>

              <h2 className="heading-5xl max-w-md pt-20 text-grey-1">
                Economic options are bold directional aspirations
              </h2>
              <p className="p-3xl pt-8 text-grey-6">
                What would it mean to align societal ambition to the magnitude
                of the transformation that is required? We cannot be sure how
                the future will play out or the specific infrastructures that
                will be required. However, we can build towards a range of
                economic options that are likely to be needed. We are imaging
                new investment opportunities for{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-crosshair"
                  onClick={() => setOpenCTC(true)}
                >
                  city-scale tree canopies
                </span>
                , community endowments and{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-crosshair"
                  onClick={() => setOpenRBF(true)}
                >
                  resilient bioregional food systems
                </span>
                . We envisage that the electrification of transport networks,
                the mental health of communities and the{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-crosshair"
                  onClick={() => setOpenCIC(true)}
                >
                  collective intelligence of cities
                </span>{' '}
                will become recognisable assets, understood as commitments to a
                regenerative future. We are also considering what might be
                unleashed if houses were self-owning and affordable in
                perpetuity. Or if rivers could express their need for care. We
                believe all these things are both possible and necessary. These
                are bold aspirations and will only be achieved by a collective
                movement of diverse communities and unusual allies. This is a
                story of practical empowerment that we are excited to put our
                energy behind.
              </p>

              <div className="pt-10">
                <p className="heading-5xl text-grey-2">
                  How do we structure our response? ↓
                </p>
              </div>
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
              className={`${classT2}`}
            >
              {activeState !== 5 && activeState !== 7 && activeState !== 8 && (
                <>
                  <animated.div
                    style={{
                      opacity: scrollYProgress.to(() =>
                        labOverlayOpacityInterpolate(),
                      ),
                    }}
                    className="absolute right-0 top-[16rem] z-[99]"
                  >
                    <Image src={labsOverlay} alt="labs overlay" />
                  </animated.div>

                  <animated.div
                    style={{
                      opacity: scrollYProgress.to(() =>
                        studioOverlayOpacityInterpolate(),
                      ),
                    }}
                    className="absolute right-0 top-[28.4rem] z-[99]"
                  >
                    <Image src={studiosOverlay} alt="studios overlay" />
                  </animated.div>

                  <animated.div
                    style={{
                      opacity: scrollYProgress.to(() =>
                        arcOverlayOpacityInterpolate(),
                      ),
                    }}
                    className="absolute left-0 top-[27.5rem] z-[99]"
                  >
                    <Image src={arcsOverlay} alt="arcs overlay" />
                  </animated.div>

                  <animated.div
                    style={{
                      opacity: scrollYProgress.to(() =>
                        orgOverlayOpacityInterpolate(),
                      ),
                    }}
                    className="absolute left-0 top-[38.8rem] z-[99]"
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
                  scale: matrix_scale,
                  translateY: scrollYProgress.to(() => scrollYInterpolate()),
                  translateX: -140,
                  opacity: scrollYProgress.to(() => {
                    if (
                      scrollY > startSticky + step * 4 &&
                      scrollY <= startSticky + step * 5
                    ) {
                      return partialOpacityInterpolateMult(
                        startSticky + step * 4,
                        startSticky + step * 5,
                        true,
                        1,
                      );
                    } else if (scrollY > startSticky + step * 5) {
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
                            startSticky + step * 3,
                            startSticky + step * 3 + step / 2,
                            false,
                          ),
                        }}
                        className="pb-4 text-base font-normal text-[#A8A8A8]"
                      >
                        Labs
                      </animated.h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-9 gap-0">
                    <div className="">
                      <div className="mb-1.5 ">
                        <animated.h2
                          style={{
                            opacity: opacityInterpolate(
                              startSticky + step * 3,
                              startSticky + step * 3 + step / 2,
                              false,
                            ),
                          }}
                          className="h-[80px] w-[80px] pl-2 pt-[3rem] text-base font-normal text-[#A8A8A8]"
                        >
                          Arcs
                        </animated.h2>
                      </div>

                      <Arc
                        title="Radicle Civics"
                        short="RC"
                        activeState={RCactive || openRC}
                        setActive={setRCActive}
                        setOpen={setOpenRC}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title="Local Civics"
                        short="LC"
                        activeState={ETCactive || openETC}
                        setActive={setETCActive}
                        setOpen={setOpenETC}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title="Net Zero Cities"
                        short="NZC"
                        activeState={NZactive || openNZ}
                        setActive={setNZActive}
                        setOpen={setOpenNZ}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title=" 7Gen Cities"
                        short="7G"
                        activeState={SGactive || openSG}
                        setActive={setSGActive}
                        setOpen={setOpenSG}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title="M0 Cities"
                        short="M0"
                        activeState={M0active || openM0}
                        setActive={setM0Active}
                        setOpen={setOpenM0}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title="Regen Nutrition"
                        short="RN"
                        activeState={REactive || openRE}
                        setActive={setREActive}
                        setOpen={setOpenRE}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title="Nature as Infrastructure"
                        short="NI"
                        activeState={WIactive || openWI}
                        setActive={setWIActive}
                        setOpen={setOpenWI}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title=" Bioregional Economics"
                        short="BE"
                        activeState={BEactive || openBE}
                        setActive={setBEActive}
                        setOpen={setOpenBE}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Arc
                        title="Planetary Civics"
                        short="PC"
                        activeState={PCactive || openPC}
                        setActive={setPCActive}
                        setOpen={setOpenPC}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />
                    </div>
                    <div>
                      <Lab
                        title="Next Economics"
                        short="NE"
                        activeState={NEactive || openNE}
                        setActive={setNEActive}
                        setOpen={setOpenNE}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      <Initiative
                        title=" Multivalent currencies"
                        arc="RC"
                        lab="NE"
                        activeState={(RCactive && NEactive) || openMC}
                        hoverState={RCactive || NEactive}
                        setActiveLab={setNEActive}
                        setActiveArc={setRCActive}
                        setOpen={setOpenMC}
                      />

                      {ETCactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {NZactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {SGactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      <Initiative
                        title="New Economic Thinking"
                        arc="M0"
                        lab="NE"
                        activeState={(M0active && NEactive) || openNET}
                        hoverState={M0active || NEactive}
                        setActiveLab={setNEActive}
                        setActiveArc={setM0Active}
                        setOpen={setOpenNET}
                      />

                      {REactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {WIactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {BEactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || NEactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setNEActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA} ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setNEActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title="Beyond Labour"
                        short="BL"
                        activeState={BLactive || openBL}
                        setActive={setBLActive}
                        setOpen={setOpenBL}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {NZactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {SGactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {WIactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {BEactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || BLactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setBLActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setBLActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title="Capital Systems"
                        short="CS"
                        activeState={openCS || CSactive}
                        setActive={setCSActive}
                        setOpen={setOpenCS}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {NZactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {SGactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      <Initiative
                        title="TreesAI"
                        arc="NI"
                        lab="CS"
                        activeState={(WIactive && CSactive) || openTAI}
                        hoverState={WIactive || CSactive}
                        setActiveLab={setCSActive}
                        setActiveArc={setWIActive}
                        setOpen={setOpenTAI}
                      />

                      {BEactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || CSactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setCSActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setCSActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title="Philanthropy Futures"
                        short="PF"
                        activeState={PFactive || openPF}
                        setActive={setPFActive}
                        setOpen={setOpenPF}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {NZactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {SGactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {WIactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {BEactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || PFactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setPFActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setPFActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title=" Property & Beyond"
                        short="PB"
                        activeState={PBactive || openPB}
                        setActive={setPBActive}
                        setOpen={setOpenPB}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {NZactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {SGactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {WIactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {BEactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || PBactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setPBActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setPBActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title="Societal Decisions"
                        short="SD"
                        activeState={QDactive || openQD}
                        setActive={setQDActive}
                        setOpen={setOpenQD}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {NZactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {SGactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {WIactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {BEactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || QDactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setQDActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2  ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setQDActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2  ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title="Beyond the Rules"
                        short="BTR"
                        activeState={BRactive || openBR}
                        setActive={setBRActive}
                        setOpen={setOpenBR}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {NZactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setNZActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setNZActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {SGactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {WIactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {BEactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || BRactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setBRActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA}  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setBRActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      <Lab
                        title="Sensing, Modeling, Mapping"
                        short="SMM"
                        activeState={SMactive || openSM}
                        setActive={setSMActive}
                        setOpen={setOpenSM}
                        scrollYProgress={scrollYProgress}
                        bgHoverInterpolate={bgHoverInterpolate}
                      />

                      {RCactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setRCActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setRCActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {ETCactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setETCActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setETCActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      <StudioInitiative
                        title="CircuLaw"
                        arc="NZ"
                        studio="CT"
                        activeState={(NZactive && CTactive) || openCL}
                        hoverState={NZactive || SMactive}
                        setActiveStudio={setCTActive}
                        setActiveArc={setNZActive}
                        setOpen={setOpenCL}
                      />

                      {SGactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setSGActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setSGActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {M0active || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setM0Active(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setM0Active(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}

                      {REactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setREActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setREActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {WIactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setWIActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setWIActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {BEactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setBEActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setBEActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classT} ${classA}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                      {PCactive || SMactive ? (
                        <div
                          onMouseLeave={() => {
                            setPCActive(false);
                            setSMActive(false);
                          }}
                          className={`my-1.5 bg-[#292929] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            setPCActive(true);
                            setSMActive(true);
                          }}
                          className={`my-1.5 bg-[#212121] p-2 ${classA}  ${classT} ${classAB}  h-[80px] w-[80px] `}
                        >
                          {' '}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(
                    activeState === 5
                      ? 'mt-[6.1em] block'
                      : 'mt-[5.89em] hidden',
                    'text-right opacity-0',
                  )}
                >
                  <div className="">
                    <h2
                      className={classNames(
                        activeState === 7
                          ? 'text-[#A8A8A8]'
                          : 'text-transparent',
                        'text-base font-normal ',
                      )}
                    >
                      Studios
                    </h2>
                  </div>

                  <Studio
                    title="Civic Tech"
                    short="CT"
                    activeState={CTactive || openCT}
                    setActive={setCTActive}
                    setOpen={setOpenCT}
                    scrollYProgress={scrollYProgress}
                    bgHoverInterpolate={bgHoverInterpolate}
                  />

                  <Studio
                    title="Conversational Design"
                    short="CD"
                    activeState={CDactive || openCD}
                    setActive={setCDActive}
                    setOpen={setOpenCD}
                    scrollYProgress={scrollYProgress}
                    bgHoverInterpolate={bgHoverInterpolate}
                  />

                  <Studio
                    title="Foresight & Futuring"
                    short="FF"
                    activeState={FFactive || openFF}
                    setActive={setFFActive}
                    setOpen={setOpenFF}
                    scrollYProgress={scrollYProgress}
                    bgHoverInterpolate={bgHoverInterpolate}
                  />

                  <animated.div
                    style={{
                      backgroundColor: scrollYProgress.to(() =>
                        bgHoverInterpolate(2, ODactive || openOD),
                      ),
                    }}
                    className={classNames(
                      ODactive || openOD ? ' text-white' : ' text-[#A8A8A8]',
                      'my-1.5 flex h-[80px] w-[80px] cursor-crosshair items-end justify-start px-2 py-2',
                    )}
                    onMouseOver={() => setODActive(true)}
                    onMouseLeave={() => setODActive(false)}
                    onClick={() => setOpenOD(true)}
                  >
                    <p className="text-base font-normal uppercase">Org Dev</p>
                  </animated.div>
                </div>
              </animated.div>

              <animated.div
                style={{
                  rotateX: scrollYProgress.to(() => scrollInterpolate(55)),
                  rotateY: 0,
                  scale: matrix_scale,
                  rotateZ: scrollYProgress.to(() => scrollInterpolate(45)),
                  top: scrollYProgress.to(() => scrollInterpolate(128)),
                  translateY: scrollYProgress.to(() => scrollYInterpolate()),
                  translateX: -140,
                  opacity: scrollYProgress.to(() => {
                    if (
                      scrollY >= startSticky + step * 4 &&
                      scrollY <= startSticky + step * 5
                    ) {
                      return partialOpacityInterpolateMult(
                        startSticky + step * 4,
                        startSticky + step * 5,
                        true,
                        1,
                      );
                    } else if (scrollY > startSticky + step * 5) {
                      return 0.2;
                    } else return 1;
                  }),
                }}
                className={classNames(
                  activeState === 7 || activeState === 8 ? '' : '',
                  ` absolute z-30`,
                )}
              >
                <div
                  className={classNames(
                    scrollY > startSticky + step * 6 ? 'hidden' : 'block',
                    ` backdrop-div w-[778px]`,
                  )}
                ></div>
                <div className="content-div shadow-layer grid w-[854px] grid-cols-12">
                  <div className="col-span-11">
                    <div className=" text-center">
                      <h2
                        className={classNames(
                          'pb-4 text-base font-normal opacity-0',
                        )}
                      >
                        Labs
                      </h2>
                    </div>

                    <div
                      className={classNames(
                        scrollFraction >= 1 ? 'opacity-0' : 'opacity-100',
                        `mt-[87px] grid w-[778px] grid-cols-9 `,
                      )}
                    >
                      <div className="studio-layer opacity-0"></div>

                      <div
                        className={classNames(
                          activeState === 7 || activeState === 8 ? '' : '',
                          `studio-layer  border-b border-l border-t border-[#262626]`,
                        )}
                      >
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}></div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2`}> </div>
                        <div className={`mt-1.5 h-[80px] w-[80px] p-2`}> </div>
                      </div>
                      <div className="studio-layer border-b border-r border-t border-[#262626]">
                        <div className={`h-[80px] w-[80px] p-2`}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

                        <div className={`my-1.5 h-[80px] w-[80px] p-2 `}> </div>

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
                        ? 'mt-[6.1em] '
                        : 'mt-[6.1em] ',
                      'block text-right',
                    )}
                  >
                    <div className="">
                      <animated.h2
                        style={{
                          opacity: opacityInterpolate(
                            startSticky + step * 3,
                            startSticky + step * 3 + step / 2,
                            false,
                          ),
                        }}
                        className="text-base font-normal text-[#A8A8A8]"
                      >
                        Studios
                      </animated.h2>
                    </div>

                    <Studio
                      title="Civic Tech"
                      short="CT"
                      activeState={CTactive || openCT}
                      setActive={setCTActive}
                      setOpen={setOpenCT}
                      scrollYProgress={scrollYProgress}
                      bgHoverInterpolate={bgHoverInterpolate}
                    />

                    <Studio
                      title="Conversational Design"
                      short="CD"
                      activeState={CDactive || openCD}
                      setActive={setCDActive}
                      setOpen={setOpenCD}
                      scrollYProgress={scrollYProgress}
                      bgHoverInterpolate={bgHoverInterpolate}
                    />

                    <Studio
                      title="Foresight & Futuring"
                      short="FF"
                      activeState={FFactive || openFF}
                      setActive={setFFActive}
                      setOpen={setOpenFF}
                      scrollYProgress={scrollYProgress}
                      bgHoverInterpolate={bgHoverInterpolate}
                    />

                    <animated.div
                      style={{
                        backgroundColor: scrollYProgress.to(() =>
                          bgHoverInterpolate(2, ODactive || openOD),
                        ),
                      }}
                      className={classNames(
                        ODactive || openOD ? ' text-white' : ' text-[#A8A8A8]',
                        'my-1.5 flex h-[80px] w-[80px] cursor-crosshair items-end justify-start px-2 py-2',
                      )}
                      onMouseOver={() => setODActive(true)}
                      onMouseLeave={() => setODActive(false)}
                      onClick={() => setOpenOD(true)}
                    >
                      <p className="text-base font-normal uppercase">Org Dev</p>
                    </animated.div>
                  </div>
                </div>
              </animated.div>

              <animated.div
                style={{
                  rotateX: scrollYProgress.to(() => scrollInterpolate(55)),
                  rotateY: 0,
                  scale: matrix_scale,
                  rotateZ: scrollYProgress.to(() => scrollInterpolate(45)),
                  top: scrollYProgress.to(() => scrollInterpolate(256)),
                  translateY: scrollYProgress.to(() => scrollYInterpolate()),
                  translateX: -140,
                  opacity: scrollYProgress.to(() => {
                    if (activeState === 5) {
                      return scrollInterpolate(1);
                    } else if (
                      scrollY >= startSticky + step * 4 &&
                      scrollY <= startSticky + step * 5
                    ) {
                      return capacityOpacityInterpolate(
                        startSticky + step * 4,
                        startSticky + step * 5,
                        false,
                      );
                    } else return 1;
                  }),
                }}
                className={classNames(
                  activeState === 7 || activeState === 8
                    ? 'opacity-100 transition delay-300 ease-in-out'
                    : 'opacity-0 ',
                  activeState === 7 || activeState === 8
                    ? 'z-50 transition delay-300 ease-in-out'
                    : 'z-20 ',
                  `shadow-layer absolute grid w-[854px] grid-cols-12`,
                )}
              >
                <div className="col-span-1">
                  <div className="ml-4"></div>
                </div>
                <div className="col-span-10 ">
                  <div className="mx-auto max-w-xl text-center">
                    <h2
                      className={classNames(
                        activeState === 5
                          ? 'text-transparent'
                          : 'text-[#A8A8A8]',
                        'pb-4 text-base font-normal',
                      )}
                    >
                      Domains
                    </h2>
                  </div>

                  <div className="kjmju1.5 ml-4 grid grid-cols-6">
                    <div className="">
                      <div
                        onClick={() => setOpenDomainA(true)}
                        className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#8E6413] p-2 text-[#FFF] hover:cursor-crosshair`}
                      >
                        <p className="font-SaansRegular text-base leading-tight ">
                          {' '}
                          A
                        </p>
                        <p className="font-SaansMed text-[9.6px] leading-tight">
                          Ontology & Epistemology
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainA1(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          A-1
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Fostering a relational worldview
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainA2(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          A-2
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Replacing profit as the collective goal
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainA3(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          A-3
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          <br />
                          Building political will
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainA4(true)}
                        className={`my-1.5 flex h-[80px] w-[109px]  flex-col justify-between border border-[#D29F3D] bg-[#212121] px-2 py-2 text-[#D29F3D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          A-4
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Phenomenological measures of success (lived
                          experience)
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
                        onClick={() => setOpenDomainB(true)}
                        className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#903C30]  p-2 text-[#FFF] hover:cursor-crosshair`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          B
                        </p>
                        <p className="font-SaansMed text-[9.6px] leading-tight">
                          Money & valuation logic
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainB1(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between  border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className=" font-SaansRegular text-base leading-tight">
                          B-1
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Demonstrating entangled and long-term value
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainB2(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          B-2
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Decolonised, bioregional currency stewardship
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainB3(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          B-3
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Alternative non-fungible currency systems
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainB4(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          B-4
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
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
                        onClick={() => setOpenDomainC(true)}
                        className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#206B35] p-2 text-[#FFF] hover:cursor-crosshair`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          C
                        </p>
                        <p className="font-SaansMed text-[9.6px] leading-tight">
                          Financial processes & investment
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainC1(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          C-1
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Making the investment case for entangled value
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainC2(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          C-2
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          <br /> Bridging demand & supply
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainC3(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          C-3
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Structuring capital & investments
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainC4(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          C-4
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Enabling strategic ecosystem investments
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainC5(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          C-5
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Socialising the supportive narratives for alternative
                          financing pathways
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainC6(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] py-2 pl-2 pr-1 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          C-6
                        </p>
                        <p className="self-stretch font-SaansMed text-[8px] leading-tight -tracking-[0.54px]">
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
                        onClick={() => setOpenDomainD(true)}
                        className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#205793] p-2 text-[#FFF] hover:cursor-crosshair`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          D
                        </p>
                        <p className="font-SaansMed text-[9.6px] leading-tight">
                          Ownership, law & governance
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainD1(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          D-1
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Using instruments to demonstrate alternative theories
                          of ownership
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainD2(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          D-2
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Elevating alternative models that recouple surplus
                          with stewardship
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainD3(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          D-3
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Demonstrating multi-actor governance structures
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainD4(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          D-4
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Embedding data-augmented decision making
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainD5(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4D90D8] bg-[#212121] px-2 py-2 text-[#4D90D8] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          D-5
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
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
                        onClick={() => setOpenDomainE(true)}
                        className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#8D2D55] p-2 text-[#FFF] hover:cursor-crosshair`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          {' '}
                          E
                        </p>
                        <p className="font-SaansMed text-[9.6px] leading-tight">
                          Institutional logic & policy
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainE1(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          E-1
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Enabling public-civic efficacy to transform place
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainE2(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          E-2
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Building the foundations for planetary stewardship
                          institutions
                        </p>
                      </div>
                      <div
                        onClick={() => setOpenDomainE3(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          E-3
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Designing reflective, data-driven policy instruments
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainE4(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#D15C8D] bg-[#212121] px-2 py-2 text-[#D15C8D] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          E-4
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
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
                        onClick={() => setOpenDomainF(true)}
                        className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#808080] p-2 text-[#FFF] hover:cursor-crosshair`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          F
                        </p>
                        <p className="font-SaansMed text-[9.6px] leading-tight">
                          Material, energy & land use
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainF1(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] py-2 pl-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          F-1
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Developing collaborative, non-extractive interfaces
                          with the physical environment
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainF2(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] px-2 py-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          F-2
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Visualising material and energy flows
                        </p>
                      </div>
                      <div
                        onClick={() => setOpenDomainF3(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] px-2 py-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="pb-2 font-SaansRegular text-base leading-tight">
                          F-3
                        </p>
                        <p className="font-SaansMed text-[8px] leading-tight tracking-tighter">
                          Developing a stewardship data infrastructure for the
                          built environment
                        </p>
                      </div>

                      <div
                        onClick={() => setOpenDomainF4(true)}
                        className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#C2C2C2] bg-[#212121] px-2 py-2 text-[#C2C2C2] hover:cursor-crosshair hover:bg-[#353535]`}
                      >
                        <p className="font-SaansRegular text-base leading-tight">
                          F-4
                        </p>
                        <p className="font-SaansMed text-[7px] leading-tight -tracking-[0.54px]">
                          Designing and demonstrating autonomous, regenerative
                          and affordable multi-purpose developments.
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

        <div className={`relative mt-[400px] sm:grid sm:grid-cols-12`}>
          <div className="col-span-5 hidden w-[400px] max-w-xs matrix:block">
            <div className="mt-[0px]">
              <h2 className="heading-5xl-Reg pb-2 text-grey-3">Contexts</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
                The overarching LEE Mission allows us to contextually adjust the
                horizons of our interactions and interventions, whilst building
                towards a coherent field of influence and change. A single
                theory of change feels wildly inadequate; instead we are holding
                open questions in a continuous process of landscape scanning and
                action:
              </p>
            </div>
          </div>
          <div className={`relative col-span-7 w-[690px] justify-self-end`}>
            <div id="context" className="mb-20 ">
              <div className="mb-8">
                <h2 className="heading-5xl text-grey-1">
                  Political landscapes
                </h2>
                <p className="p-3xl pb-4 text-grey-7">
                  How can we work intelligently with the constraints and
                  opportunities of political ideologies?
                </p>
                <p className="p-3xl text-grey-1">
                  A right wing context may provide more fertile ground for
                  rapidly mobilising complex technologies than a liberal
                  context. Or perhaps in a context like Ukraine where crisis and
                  instability has become an everyday reality, the motivation for
                  citizens to drive alternative governance models is heightened.
                  This could start from a desire to support the military via
                  voluntary crowdfunding and extend to new sectors and patterns
                  of behaviour.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="heading-5xl text-grey-1">
                  Geographical landscapes
                </h2>
                <p className="p-3xl pb-4 text-grey-7">
                  What can we leverage by deliberating targeting lead or
                  established markets to test a tool or concept?
                </p>
                <p className="p-3xl text-grey-1">
                  In some cases we may need to look to edge communities for an
                  idea to gain traction (e.g. a distributed currency), whereas
                  in others a supportive social infrastructure is needed to
                  establish agency (e.g. a material registry). Each country has
                  something to teach us; from land laws in Scotland to open data
                  systems in Taiwan, we are open to how our work can weave and
                  adapt to local contexts.
                </p>
              </div>

              <div className="mb-8 ">
                <h2 className="heading-5xl text-grey-1">Time horizons</h2>
                <p className="p-3xl pb-4 text-grey-7">
                  How can we leverage the broad spectrum of realities
                  represented across the global context?
                </p>
                <p className="p-3xl text-grey-1">
                  Recognising that a speculative policy in one context might
                  already be triage response in another can increase our
                  collective learning and ability to test edge ideas. This could
                  mean working with Indigenous communities on Turtle Island
                  (North America) to urgently finance the regeneration of
                  indigenous lands. It could also entail supporting marginalised
                  communities in England to seed alternative housing models in
                  response to the systemic crisis crisis.
                </p>
              </div>

              <div className="mb-8 ">
                <h2 className="heading-5xl text-grey-1">Alliances</h2>
                <p className="p-3xl pb-4 text-grey-7">
                  What could be unleashed if we can identify and engage unusual
                  (and often powerful actors) with converging aspirations?
                </p>
                <p className="p-3xl text-grey-1">
                  On the surface a central bank and an ecological activist may
                  have little in common. Yet, central banks have a mandate to
                  preserve stability, which in the future could involve
                  recoupling money issuance to ecological rights? This logic
                  might also extend to cultural intersectional points, such as
                  indigenous perspectives and state mandates in locations such
                  as Australia and India.
                </p>
              </div>
            </div>

            <hr className="text-[#333333]" />

            <div id="why">
              <div className="my-20 ">
                <p className="p-3xl-regular max-w-3xl pb-10 text-grey-6">
                  The Enlightenment, Industrial and Scientific revolutions
                  created many advances for society. But what about their impact
                  on deep ways of being and knowing? From the concept of
                  thingification to the devaluation of mother earth, the
                  psychological baseline of our many societies was fundamentally
                  altered. From our perspective, the worldview that condoned the
                  treatment of land and living beings as disposable, exploitable
                  resources, was also at play in the coding of our dominant
                  socioeconomic systems. Dark Matter Labs sets out to reject the
                  concept of separation and to reimagine our foundational
                  economic relationships. For example:
                </p>

                <div className="mb-8">
                  <h2 className="heading-5xl text-grey-1">Property</h2>
                  <p className="p-3xl pt-4 text-grey-1">
                    Words like property and ownership are often associated with
                    ideas of dominion and control, allowing us to treat elements
                    of the living world (such as land and rare earth minerals)
                    as objects. Deep down though, do we really believe that
                    timber holds more value than a forest? Or that a whale’s
                    life is interchangeable with a barrel of oil? What would it
                    mean to explore systems of organising that move beyond the
                    paradigm of control?
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="heading-5xl text-grey-1">Technology</h2>
                  <p className="p-3xl pt-4 text-grey-1">
                    Emergent technologies can be framed as a threat, but they
                    could also facilitate a new freedom to care. The field of
                    quantum physics has enabled a granular visualisation of the
                    shapeshifting and relational nature of living systems.
                    Perhaps what we have previously framed as{' '}
                    <a
                      className="text-[#A28CC6]"
                      target="_blank"
                      href="https://provocations.darkmatterlabs.org/the-necessity-of-a-boring-revolution-a71b1ae6f956"
                    >
                      a boring revolution
                    </a>{' '}
                    is also an invitation to sense and see the world through a
                    quantum lens. Perhaps in the future our governing
                    institutions will exist to advance and scaffold the
                    continuous learning of a self-aware system.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="heading-5xl text-grey-1">Money</h2>
                  <p className="p-3xl pt-4 text-grey-1">
                    Recognising that financial capital is intertwined and
                    enabled by living and social systems is foundational to our
                    work. Imagine how our relationship to finance might change
                    if we understood the act of investing to be a commitment to
                    our collective futures? What would a system look like where
                    the ways of creating and stewarding money are decentralised
                    and respectful of non-comparable value flows?
                  </p>
                </div>
              </div>

              <hr className="text-[#333333]" />

              <div className="py-20">
                <p className="p-3xl-regular max-w-3xl pb-10 text-grey-6">
                  Based on this new paradigm we are proposing three worldview
                  philosophies that we think could underpin a desirable future
                  economy. From there, we have identified six structural shifts
                  that we are hypothesising would need to occur for that to
                  become a reality. The philosophies and shifts are not fixed,
                  instead they are narratives that thread through the different
                  dimensions of our Ecosystem Matrix, as we seek to test them in
                  different contexts.
                </p>
                <h2 className="heading-5xl text-grey-1">
                  Worldview philosophies
                </h2>
                <div className="grid grid-cols-3 gap-10 py-8 ">
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Rooted in the recognition of the full web of life
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From violence, scarcity and separation to a thriving
                      planetary community of interbecoming. [Ne Lab with Radicle
                      Civics and Planetary Civics Arcs and Conversational Design
                      Studio]
                    </p>
                  </div>
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Grounded in a non-bounded understanding of value
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From extractive profit-driven goals to entangled,
                      intergenerational and distributed value systems. [Ne and
                      Cs Labs with Bioregional Economies and M0 Cities Arcs and
                      Conversational Design Studio]
                    </p>
                  </div>
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Enabled by technological ecosystems of care
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From the utilitarian ‘othering’ of technology to animistic
                      interfaces of wisdom and care. [Ne Lab with NZC Arc and
                      CivTech Studio]
                    </p>
                  </div>
                </div>

                <h2 className="heading-5xl text-grey-1">
                  Proposed structural shifts
                </h2>
                <div className="grid grid-cols-3 gap-x-10 gap-y-8 py-8">
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Beyond Property
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From exerting control over ‘objects’ to seeking reciprocal
                      relationships with the full web of life. [Pb Lab and
                      Radicle Civics Arc]
                    </p>
                  </div>
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Beyond Labour
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From humans employed as resources to vocations of
                      creativity, purpose and care. [Ne Lab, with 7-Gen Cities,
                      with Local Civics Arc and OrgDev Studio]
                    </p>
                  </div>
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Beyond Extraction
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From extractive resource claims to the infinite
                      guardianship of the global commons. [Sm Lab with M0
                      Cities, Planetary Civics and Regenerative Nutrition Arcs]
                    </p>
                  </div>
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Beyond Private Contracts
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From linear agreements that optimise for the few to
                      multi-party, dynamic, digital treaties of respect. [BTR
                      Lab with Radicle Civics and Local Civics Arcs]
                    </p>
                  </div>
                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Beyond Governance
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From centralised enforcement to nurturing institutions of
                      stewardship. [Sd & BTR Lab with NZC Arc]
                    </p>
                  </div>

                  <div>
                    <h3 className="p-xl-medium pb-3 text-grey-6">
                      Beyond Monetary Capital
                    </h3>
                    <p className="p-3xl text-grey-6 opacity-60">
                      From the accumulation of financial wealth to a social
                      contract that regeneratively stewards the diverse capitals
                      of life. [Cs and Ne Labs with 7-Gen Cities Arc]
                    </p>
                  </div>
                </div>
              </div>

              <hr className="text-[#333333]" />
              <div className="py-20">
                <p className="p-3xl-regular max-w-3xl pb-10 text-grey-6">
                  We are not doing it alone, we work with partners, clients, and
                  collaborators across the world.
                </p>
                <div className="grid h-[357px] grid-cols-6 gap-[27px] overflow-y-scroll pb-10">
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="opacity-20">
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="opacity-20">
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="opacity-20">
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="opacity-20">
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="opacity-20">
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="opacity-20">
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={VClogo}
                      alt="Viable Cities logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={CKICLogo}
                      alt="EIT CliamateKIC logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={ArupLogo}
                      alt="Arup logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={BHLogo}
                      alt="Bloxhub logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Image
                      src={vinnovaLogo}
                      alt="Vinnova logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>

              <div className="pb-60 pt-20">
                <h1 className="heading-7xl max-w-[22.8rem] pb-10 text-grey-5 ">
                  Help us build a better future
                </h1>
                <div className="flex gap-8">
                  <div className="border-2 border-white p-1.5 hover:cursor-crosshair">
                    <p className="float-right font-SaansMed text-[10px] text-white">
                      {'>'}
                    </p>
                    <p className="font-SaansMed text-2xl text-white">Contact</p>
                  </div>
                  <div className="border-2 border-white p-1.5 hover:cursor-crosshair">
                    <p className="float-right font-SaansMed text-[10px] text-white">
                      {'>'}
                    </p>
                    <p className="font-SaansMed text-2xl text-white">
                      Contribute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
