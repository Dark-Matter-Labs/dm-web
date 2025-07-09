'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScroll, animated } from '@react-spring/web';

import { startSticky, step } from '@/utils/constants';

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

import labsOverlay from '@/images/labs.svg';
import arcsOverlay from '@/images/arcs.svg';
import studiosOverlay from '@/images/studio.svg';
import orgOverlay from '@/images/orgdev.svg';

import LEElogo from '@/images/popups/LEE.png';
import RClogo from '@/images/arcs/RC.png';
import NZZlogo from '@/images/arcs/NZC.png';
import PBlogo from '@/images/labs/PB.png';
import BTRlogo from '@/images/labs/BTR.jpg';
import TAIlogo from '@/images/projects/Intersection_TreesAI.jpg';
import CLlogo from '@/images/projects/Intersection_CircuLaw.jpg';
import PtCpic from '@/images/projects/Intersection_Permissioning the city.jpg';
import retrofitPic from '@/images/projects/Intersection_Retrofit.jpg';
import CIpic from '@/images/projects/Intersection_Cornerstone Indicators.jpg';
import matrPic from '@/images/projects/Intersection_MatR.jpg';
import MCPic from '@/images/projects/Intersection_Multivalent Currencies.jpg';
import NETPic from '@/images/projects/Intersection_New Economic Thinking.jpg';

import BElogo from '@/images/arcs/Be Arc.svg';
import LClogo from '@/images/arcs/Lc Arc.svg';
import M0logo from '@/images/arcs/M0 Arc.svg';
import NIlogo from '@/images/arcs/Ni Arc.svg';
import PClogo from '@/images/arcs/Pc Arc.svg';
import RNlogo from '@/images/arcs/Rn Arc.svg';
import BLlogo from '@/images/labs/Bl Lab.svg';
import CSlogo from '@/images/labs/Cs Lab.svg';
import NElogo from '@/images/labs/Ne Lab.svg';
import PFlogo from '@/images/labs/Pf Lab.svg';
import SDlogo from '@/images/labs/Sd Lab.svg';
import SMlogo from '@/images/labs/Sm Lab.svg';
import CDlogo from '@/images/studios/Cd Studio.svg';
import CTlogo from '@/images/studios/Ct Studio.svg';
import ODlogo from '@/images/studios/Od Studio.svg';
import FFlogo from '@/images/studios/Ff Studio.svg';
import SGlogo from '@/images/arcs/Arc_7G.svg';

import CIconceptPic from '@/images/concepts/Concept_Collective inelligence of cities.jpg';
import BRconceptPic from '@/images/concepts/Concept_Resilient bioregional food systems.jpg';

import matrixMobile1 from '@/images/Matrix1.png';
import matrixMobile2 from '@/images/Matrix2.png';
import matrixMobile3 from '@/images/Matrix3.png';

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

  const animationStart = startSticky + step * 4;
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
    // studio colour state +
    else if (
      window.scrollY >= startSticky + 3 * step &&
      window.scrollY < startSticky + 4 * step
    ) {
      setActiveState(5);
      setAnimateOn('');

      setClassT2('t2');
    }
    //  2d projects state
    else if (
      window.scrollY >= startSticky + step * 4 &&
      window.scrollY < startSticky + step * 5 + 500
    ) {
      setActiveState(7);

      if (window.scrollY > animationStart) {
        setAnimateOn('animate');
      }

      setClassT2('t2');
    }
    // capability 2D state
    else if (
      window.scrollY >= startSticky + step * 5 + 500 &&
      window.scrollY < startSticky + step * 6
    ) {
      setActiveState(8);

      setClassT2('t2');
    }

    // matrix non sticky state
    if (window.scrollY >= startSticky + step * 6 + 200) {
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

  const [openLEED, setOpenLEED] = useState(false);
  const [openCI, setOpenCI] = useState(false);
  const [openPTC, setOpenPTC] = useState(false);
  const [openMATR, setOpenMATR] = useState(false);
  const [openPBP, setOpenPBP] = useState(false);
  const [openCCR, setOpenCCR] = useState(false);

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
    let startScroll = startSticky + step * 4;
    let endScroll = startSticky + step * 5;

    let scrollFrac = Math.min(
      (scrollY - startScroll) / (endScroll - startScroll),
      1,
    );
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

  const arcOverlayOpacityInterpolate = () => {
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
  };

  const labOverlayOpacityInterpolate = () => {
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
  };

  const studioOverlayOpacityInterpolate = () => {
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
  };

  const orgOverlayOpacityInterpolate = () => {
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
  };

  const scrollYInterpolate = () => {
    let startScroll = startSticky + step * 4;
    let endScroll = startSticky + step * 5;

    let scrollFrac = Math.min(
      (scrollY - startScroll) / (endScroll - startScroll),
      1,
    );
    let easeFrac = Math.pow(scrollFrac, 3);

    if (easeFrac >= 1) {
      return 110;
    }

    if (scrollY >= startScroll && scrollY < endScroll) {
      newY = startSticky * easeFrac * 0.1;

      return newY;
    }
    return 0;
  };

  const scaleInterpolate = () => {
    const startScroll = startSticky + step * 4; // Start of the scroll range
    const endScroll = startSticky + step * 5; // End of the scroll range

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
  };

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
      <Popup
        type="lab"
        image={CSlogo}
        title="Capital Systems"
        openState={openCS}
        setOpen={setOpenCS}
        website="https://darkmatterlabs.capital/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#EBEBEB]">
            The DmCS Lab is working to reframe what is possible within the
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
        type="arc"
        title="Radicle Civics"
        openState={openRC}
        setOpen={setOpenRC}
        website="https://radiclecivics.cc/"
        publication=""
        publicationLabel=""
        image={RClogo}
        content={
          <p className="font-SaansRegular text-base text-[#EBEBEB]">
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

      <Popup
        type="arc"
        title="Net Zero Cities"
        image={NZZlogo}
        openState={openNZ}
        setOpen={setOpenNZ}
        website="https://netzerocities.eu/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The NZC Arc aims to enable climate-neutral and smart cities by 2030.
            This involves{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://netzerocities.eu/"
            >
              supporting cities
            </a>{' '}
            to develop local portfolios of coordinated actions across multiple
            domains (e.g. technology, governance, policy, finance innovation,
            social innovation) which accelerate emission reductions.
          </p>
        }
      />

      <Popup
        type="arc"
        title="7Gen Cities"
        image={SGlogo}
        openState={openSG}
        setOpen={setOpenSG}
        website="https://www.7gencities.org/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            This collaborative arc fosters transformative thinking and action
            for future cities. The aspiration is to create the infrastructures
            for cities, inviting the next seven generations of city dwellers to
            thrive in radically caring and regenerative communities.
          </p>
        }
      />

      <Popup
        type="arc"
        title="M0 Cities"
        openState={openM0}
        image={M0logo}
        setOpen={setOpenM0}
        website=""
        publication="https://www.irresistiblecircularsociety.eu/assets/uploads/News/DML-NEBE-White-paper-_-Desire-Sep2024.pdf"
        publicationLabel="Whitepaper"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The M0 Arc is aiming to reimagine how we use and steward materials
            in service of{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://www.irresistiblecircularsociety.eu/assets/uploads/News/DML-NEBE-White-paper-_-Desire-Sep2024.pdf"
            >
              a regenerative built environment
            </a>
            . The Arc is asking questions around how we can innovate our
            material inputs, adjust our understanding of comfort (heating and
            cooling) and intelligently share existing spaces.
          </p>
        }
      />

      <Popup
        type="arc"
        title="Regen Nutrition"
        image={RNlogo}
        openState={openRE}
        setOpen={setOpenRE}
        website=""
        publication="https://medium.com/9outof10-protein-shift-innovation-platform/universal-basic-nutrient-income-institutional-infrastructure-for-2040-food-preparedness-f00f70a84510"
        publicationLabel="Blog"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Rn Arc is working towards resilient, sustainable and high
            quality food systems. Within this aspiration, cities are a key area
            of focus and the team are working across diverse sectors to identify
            and respond to likely pressure points.
          </p>
        }
      />

      <Popup
        type="arc"
        title="Bioregional Economics"
        image={BElogo}
        openState={openBE}
        setOpen={setOpenBE}
        website="https://bioregions.darkmatterlabs.org/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Be Arc is aiming to support the creation of nested economies
            that protect and steward the integral health of their base
            bioregions. This Arc works closely with the Sm Lab to collate, map
            and visualise the value stocks and flows of a bioregion. It also
            intersects with the Ne Lab to propose how these entangled forms of
            value can be integrated into our investment frameworks and decision
            making structures.
          </p>
        }
      />

      <Popup
        type="arc"
        title="Planetary Civics"
        image={PClogo}
        openState={openPC}
        setOpen={setOpenPC}
        website="https://www.planetarycivics.net/"
        publication="https://www.youtube.com/watch?v=zQJjfCSPvJI"
        publicationLabel="Keynote"
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Pc Arc is looking at how we can match the scale of our planetary
            challenges with our global ambition to respond. For example, how can
            we build bold, ambitious models of meaningful repair for our earth
            systems? What would it mean to embrace the idea of relatable
            hyperobjects (dimensions of a scale that historically have been
            beyond the scope of human understanding)?
          </p>
        }
      />

      <Popup
        type="lab"
        title="Next Economics"
        image={NElogo}
        openState={openNE}
        setOpen={setOpenNE}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Ne Lab embodies the core philosophies of LEE. It aims to
            stimulate a continuous and inclusive dialogue about how we relate to
            the world and the implications for a desirable future economy. The
            Lab is actively testing three core worldview philosophies: what
            would a future economy look and feel like if it was{' '}
            <b>rooted in the recognition of the full web of life</b>, grounded
            by a <b>non-bounded theory of value</b> and enabled by{' '}
            <b>technological ecosystems of care</b>? In parallel, the NE Lab is
            building practical pathways towards systemic goals such as{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://drive.google.com/file/d/176CNiZYM1v2xcEzDVO4SHuEfRQoosCVL/view"
            >
              replacing profit as the collective goal
            </a>{' '}
            and demonstrating entangled value.
          </p>
        }
      />

      <Popup
        type="lab"
        title="Property & Beyond"
        openState={openPB}
        image={PBlogo}
        setOpen={setOpenPB}
        website="https://www.darkmatterlabs.property/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Pb Lab rejects the values of control and dominion as a basis for
            private property systems. Instead this Lab aims to build a diverse
            and proactive portfolio of alternative forms of property; from
            collective ownership of land to self-owning houses, land, and
            cameras.
          </p>
        }
      />

      <Popup
        type="lab"
        title="Beyond the Rules"
        image={BTRlogo}
        openState={openBR}
        setOpen={setOpenBR}
        website="https://darkmatterlabs.notion.site/Beyond-the-Rules-19e692bf98f54b44971ca34700e246fd"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Btr Lab practises new forms of organising and governance. The
            Lab is particularly interested in the deep, thoughtful and highly
            creative work required to rewrite, reinvent or reimagine rules,
            norms and laws that hold us in the current system. The Lab is
            working closely with an ecosystem of partners to prototype and
            demonstrate new forms of open contracts and multi-actor governance
            structures.
          </p>
        }
      />

      <Popup
        type="lab"
        title="Sensing, Modeling & Mapping"
        image={SMlogo}
        openState={openSM}
        setOpen={setOpenSM}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Sm Lab is working to improve the{' '}
            <a
              className="text-[#737EA5]"
              target="_blank"
              href="https://docs.google.com/presentation/d/1fq-hmMDV5DnaDk8fSYhsQmQbvw_yo4SAzsGozWzWhw0/edit#slide=id.g1dcfb843b9e_0_167"
            >
              visibility of our interactions with the physical world
            </a>
            . From material and energy flows to land use, the Lab is building
            tools and mapping systems that leverage technology to build a
            dynamic understanding of how the system is responding.
          </p>
        }
      />

      <Popup
        type="lab"
        title="Beyond Labour"
        image={BLlogo}
        openState={openBL}
        setOpen={setOpenBL}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            We are interested in exploring the future of work in relation to a
            rapidly changing world. What would it mean if we shifted from humans
            being employed as resources to vocations of creativity, purpose and
            care?
          </p>
        }
      />

      <Popup
        type="lab"
        title="Philanthropy Futures"
        image={PFlogo}
        openState={openPF}
        setOpen={setOpenPF}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Pf Lab will explore the potential for philanthropic capital to
            catalyse radical pathways in parallel to the wider capital markets.
          </p>
        }
      />

      <Popup
        type="lab"
        title="Societal Decisions"
        image={SDlogo}
        openState={openQD}
        setOpen={setOpenQD}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Sd Lab is still nascent. Once launched, it will aim to build
            pathways towards distributed, data assisted decision making.
          </p>
        }
      />

      <Popup
        type="studio"
        title="Civic Tech"
        image={CTlogo}
        openState={openCT}
        setOpen={setOpenCT}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Civic Tech Studio helps mould theory and vision from the Dm
            ecosystem to testable prototypes and applications geared towards
            long-term impact & maintenance. We see tech with a critical and
            open-source lens rather than as an extractive and inevitable
            solution.
          </p>
        }
      />

      <Popup
        type="arc"
        title="Neighbourhood Futures"
        image={LClogo}
        openState={openETC}
        setOpen={setOpenETC}
        website="https://darkmatterlabs.notion.site/DML-Retrofit-4159fbbb94064df88ee8053101847ca7?pvs=74"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            This Arc recognises the transformative potential of communities and
            neighbourhoods to design and steward their own futures. There are a
            diverse range of initiatives driving towards this goal; from citizen
            designed indicators and city scale goals to neighbourhood
            retrofitting and energy programmes.
          </p>
        }
      />

      <Popup
        type="studio"
        title="Conversation Design"
        image={CDlogo}
        openState={openCD}
        setOpen={setOpenCD}
        website="https://cds.darkmatterlabs.org/"
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            This studio is fundamental to how we communicate. What exactly is
            Conversational Design? This is a good question and we would like to
            invite you to explore it with us. The ambition is to embed
            conversational frameworks at every level of our work that help
            people to explore and interrogate our thinking.
          </p>
        }
      />

      <Popup
        type="studio"
        title="Foresight & Futuring"
        openState={openFF}
        image={FFlogo}
        setOpen={setOpenFF}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            This studio works across the ecosystem to build the craft of
            speculative design and future scenario building. The team has close
            links to the Sm Studio where they support the mapping and
            visualisation of future value flows. They also work across the Arcs
            to develop potential strategic directions.
          </p>
        }
      />

      <Popup
        type="studio"
        title="Org Dev"
        image={ODlogo}
        openState={openOD}
        setOpen={setOpenOD}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The OrgDev (organisational development) Studio provides the critical
            infrastructure for the entire Dm ecosystem and mission. This team is
            the foundational rock. Their work unleashes and nourishes the
            creative potential of Dm’s people and those who intersect with our
            work.
          </p>
        }
      />

      <Popup
        type="arc"
        title="Nature as Infrastructure"
        image={NIlogo}
        openState={openWI}
        setOpen={setOpenWI}
        website=""
        publication=""
        publicationLabel=""
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            The Ni Arc is developing practical pathways to support regenerative,
            respectful and resilient collaborations between human and natural
            infrastructures. These interventions are grounded in system dynamics
            such as finance, regulation and data enabled decision making.
          </p>
        }
      />

      <Popup
        type="project"
        title="Multivalent Currencies"
        openState={openMC}
        setOpen={setOpenMC}
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
        openState={openTAI}
        setOpen={setOpenTAI}
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
        openState={openNET}
        setOpen={setOpenNET}
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
            the Ne Lab and M0 Arc, exploring the physical constraints and
            potential response strategies for a material light and socially just
            transition.
          </p>
        }
      />

      <Popup
        type="project"
        title="CircuLaw"
        image={CLlogo}
        openState={openCL}
        setOpen={setOpenCL}
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
        openState={openLEED}
        setOpen={setOpenLEED}
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
        openState={openCI}
        setOpen={setOpenCI}
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
        openState={openPTC}
        setOpen={setOpenPTC}
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
        openState={openMATR}
        setOpen={setOpenMATR}
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
        openState={openPBP}
        setOpen={setOpenPBP}
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
        openState={openCCR}
        setOpen={setOpenCCR}
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
        openState={openLEE}
        setOpen={setOpenLEE}
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
        openState={openCTC}
        setOpen={setOpenCTC}
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
        openState={openCIC}
        setOpen={setOpenCIC}
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
        openState={openRBF}
        setOpen={setOpenRBF}
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
        openState={openDomainA}
        setOpen={setOpenDomainA}
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
        openState={openDomainB}
        setOpen={setOpenDomainB}
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
        openState={openDomainC}
        setOpen={setOpenDomainC}
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
        openState={openDomainD}
        setOpen={setOpenDomainD}
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
        openState={openDomainE}
        setOpen={setOpenDomainE}
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
        openState={openDomainF}
        setOpen={setOpenDomainF}
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
        openState={openDomainA1}
        setOpen={setOpenDomainA1}
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
        openState={openDomainA2}
        setOpen={setOpenDomainA2}
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
        openState={openDomainA3}
        setOpen={setOpenDomainA3}
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
        openState={openDomainA4}
        setOpen={setOpenDomainA4}
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
        openState={openDomainB1}
        setOpen={setOpenDomainB1}
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
        openState={openDomainB2}
        setOpen={setOpenDomainB2}
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
        openState={openDomainB3}
        setOpen={setOpenDomainB3}
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
        openState={openDomainB4}
        setOpen={setOpenDomainB4}
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
        openState={openDomainC1}
        setOpen={setOpenDomainC1}
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
        openState={openDomainC2}
        setOpen={setOpenDomainC2}
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
        openState={openDomainC3}
        setOpen={setOpenDomainC3}
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
        openState={openDomainC4}
        setOpen={setOpenDomainC4}
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
        openState={openDomainC5}
        setOpen={setOpenDomainC5}
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
        openState={openDomainC6}
        setOpen={setOpenDomainC6}
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
        openState={openDomainD1}
        setOpen={setOpenDomainD1}
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
        openState={openDomainD2}
        setOpen={setOpenDomainD2}
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
        openState={openDomainD3}
        setOpen={setOpenDomainD3}
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
        openState={openDomainD4}
        setOpen={setOpenDomainD4}
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
        openState={openDomainD5}
        setOpen={setOpenDomainD5}
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
        openState={openDomainE1}
        setOpen={setOpenDomainE1}
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
        openState={openDomainE2}
        setOpen={setOpenDomainE2}
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
        openState={openDomainE3}
        setOpen={setOpenDomainE3}
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
        openState={openDomainE4}
        setOpen={setOpenDomainE4}
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
        openState={openDomainF1}
        setOpen={setOpenDomainF1}
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
        openState={openDomainF2}
        setOpen={setOpenDomainF2}
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
        openState={openDomainF3}
        setOpen={setOpenDomainF3}
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
        openState={openDomainF4}
        setOpen={setOpenDomainF4}
        content={
          <p className="font-SaansRegular text-base text-[#C6C6C6]">
            Exploring how we can re-common and repurpose land and building in
            service of a shared, equitable, material and energy light future.
          </p>
        }
      />

      <div className={`matirx-break relative mt-10 sm:mt-28`}>
        <div className="col-span-5 hidden w-[400px] max-w-xs matirx:block">
          <animated.div
            style={{
              opacity: sideMatrixOpacityInterpolate(),
            }}
            className="mt-[1800px]"
          >
            <h2 className="heading-4xl pb-2 text-grey-3">Matrix</h2>
            <p className="p-xl-regular max-w-[380px] text-grey-3">
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
            <h2 className="heading-4xl pb-2 text-grey-3">Labs</h2>
            <p className="p-xl-regular max-w-[380px] text-grey-3">
              Each of our Labs is focused on a specific area of the
              socio-economic system and the everyday codes (e.g. norms,
              behaviours and institutional logic) that form its structural
              backbone. The Labs are exploring what might be possible, both
              within and beyond the current structures, and working to develop
              technical expertise in those areas. For example, the{' '}
              <span
                onClick={() => setOpenBR(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Beyond The Rules{' '}
              </span>
              <span className="align-super text-[9.5px] uppercase">Lab</span>{' '}
              focuses on aspects such as demonstrating multi-actor governance
              structures whereas the{' '}
              <span
                onClick={() => setOpenCS(true)}
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
            <h2 className="heading-4xl pb-2 text-grey-3">Arcs</h2>
            <p className="p-xl-regular max-w-[380px] text-grey-3">
              Our Arc workflows are designed with clear, directional goals that
              guide our efforts toward impactful outcomes. For instance,{' '}
              <span
                onClick={() => setOpenNZ(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Net Zero Cities
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">arc</span>{' '}
              aims to enable climate-neutral and smart cities by 2030, while{' '}
              <span
                onClick={() => setOpenRC(true)}
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
            <h2 className="heading-4xl pb-2 text-grey-3">Studios</h2>
            <p className="p-xl-regular max-w-[380px] text-grey-3">
              Studios are the connective tissue that support both the Labs and
              Missions. The studios explore themes that help our work to be
              implemented and more widely understood. For instance, the{' '}
              <span
                onClick={() => setOpenCT(true)}
                className="font-SaansMed hover:cursor-crosshair"
              >
                Civ Tech
              </span>{' '}
              <span className="align-super text-[9.5px] uppercase">Studio</span>{' '}
              develops the technological tools and knowledge for prototypes
              tested across the Dm ecosystem. Meanwhile, the{' '}
              <span
                onClick={() => setOpenOD(true)}
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
            <h2 className="heading-4xl pb-2 text-grey-3">Intersections</h2>
            <p className="p-xl-regular max-w-[380px] text-grey-3">
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
            <h2 className="heading-4xl pb-2 text-grey-3">Capabilities</h2>
            <p className="p-xl-regular max-w-[380px] text-grey-3">
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
            <h1 className="heading-7xl max-w-[40rem] pb-10 text-grey-5 ">
              We are building options for the next economies
            </h1>
            <p className="p-3xl max-w-[42rem] text-grey-6">
              At Dark Matter Labs, we view the interconnected crises of our time
              as symptoms of a deeper, structural miscoding of our economic
              systems. We understand these codes to be physical (e.g.
              biodiversity, energy, labour and materials), structural (e.g.
              money creation, embedded inequality and private property rights)
              and psychological (e.g. failure of the imagination). 
            </p>

            <p className="p-3xl max-w-[42rem] pt-10 text-grey-6">
              Recognising the complex, entangled reality of living systems, we
              are exploring alternative pathways for organising society and
              stewarding the shared planetary commons. Our working hypothesis is
              that these pathways must be rooted in a radical reframing of our
              relationship to everything; from technology and money to land and
              the other-than-human world. We are framing this transformation as
              a shift towards{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => setOpenLEE(true)}
              >
                Life-Ennobling Economies.
              </span>
            </p>

            <h2 className="heading-4xl pt-20 text-grey-1">
              Economic options are bold directional aspirations
            </h2>
            <p className="p-3xl pt-8 text-grey-6">
              What would it mean to align societal ambition to the magnitude of
              the transformation that is required? We cannot be sure how the
              future will play out or the specific infrastructures that will be
              required. However, we can build towards a range of economic
              options that are likely to be needed. We are imaging new
              investment opportunities for{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => setOpenCTC(true)}
              >
                city-scale tree canopies
              </span>
              , community endowments and{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => setOpenRBF(true)}
              >
                resilient bioregional food systems
              </span>
              . We envisage that the electrification of transport networks, the
              mental health of communities and the{' '}
              <span
                className="underline hover:cursor-crosshair"
                onClick={() => setOpenCIC(true)}
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
              <h2 className="p-3xl-regular pb-4 text-grey-3">Matrix</h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
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
              width={0}
              height={0}
              sizes="100vw"
              alt="mobile matrx"
              style={{ width: '100%', height: 'auto', paddingBottom: '20px' }}
            />
            <div className="flex flex-col items-center justify-center py-8">
              <h2 className="heading-3xl-regular pb-4 text-grey-3">
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
            </div>
            <Image
              src={matrixMobile2}
              width={0}
              height={0}
              sizes="100vw"
              alt="mobile matrx"
              style={{ width: '100%', height: 'auto', paddingBottom: '20px' }}
            />
            <div className="flex flex-col items-center justify-center py-8">
              <h2 className="heading-3xl-regular pb-4 text-grey-3">
                Capabilities
              </h2>
              <p className="p-xl-regular max-w-[380px] text-grey-3">
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
              width={0}
              height={0}
              sizes="100vw"
              alt="mobile matrx"
              style={{ width: '100%', height: 'auto' }}
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
                      className="pb-4 font-SaansRegular text-[17px] font-normal text-[#A8A8A8]"
                    >
                      Labs
                    </animated.h2>
                  </div>
                </div>

                <div className="grid grid-cols-9 gap-0">
                  <div className="">
                    <div className="mb-1.5 flex h-[80px] w-[80px] flex-col items-center justify-end pb-[6.5px] pl-2 pr-[6px] pt-[5px]">
                      <animated.h2
                        style={{
                          opacity: opacityInterpolate(
                            startSticky + step * 4,
                            startSticky + step * 5,
                            false,
                          ),
                        }}
                        className="  font-SaansRegular text-[17px] font-normal text-[#A8A8A8]"
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
                      title="Neighbour. Futures"
                      short="NF"
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
                      title="7Gen Cities"
                      short="7G"
                      activeState={SGactive || openSG}
                      setActive={setSGActive}
                      setOpen={setOpenSG}
                      scrollYProgress={scrollYProgress}
                      bgHoverInterpolate={bgHoverInterpolate}
                    />

                    <Arc
                      title="Material 0 Cities"
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
                      title="Nature as Infrastruct."
                      short="NI"
                      activeState={WIactive || openWI}
                      setActive={setWIActive}
                      setOpen={setOpenWI}
                      scrollYProgress={scrollYProgress}
                      bgHoverInterpolate={bgHoverInterpolate}
                    />

                    <Arc
                      title="Bioregional Economics"
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
                      title="Multivalent currencies"
                      arc="RC"
                      lab="NE"
                      activeState={(RCactive && NEactive) || openMC}
                      hoverState={RCactive || NEactive}
                      setActiveLab={setNEActive}
                      setActiveArc={setRCActive}
                      setOpen={setOpenMC}
                    />

                    <StudioInitiative
                      title="Life-Ennobling Economics dialogue"
                      arc="NE"
                      studio="CD"
                      activeState={
                        (CDactive && NEactive && !BEactive) || openLEED
                      }
                      hoverState={ETCactive || NEactive}
                      setActiveStudio={setCDActive}
                      setActiveArc={setNEActive}
                      setOpen={setOpenLEED}
                    />

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

                    <StudioLabInitiative
                      title="Cornerstone Indicators"
                      arc="NE"
                      studio="CD"
                      activeState={(CDactive && NEactive && BEactive) || openCI}
                      hoverState={BEactive || NEactive}
                      setActiveStudio={setCDActive}
                      setActiveArc={setBEActive}
                      setActiveLab={setNEActive}
                      setOpen={setOpenCI}
                    />

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

                    <Initiative
                      title="City & Community Retrofit"
                      arc="NF"
                      lab="CS"
                      activeState={(ETCactive && CSactive) || openCCR}
                      hoverState={ETCactive || CSactive}
                      setActiveLab={setCSActive}
                      setActiveArc={setETCActive}
                      setOpen={setOpenCCR}
                    />

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
                      title="Philanthr. Futures"
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
                      title="Property & Beyond"
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
                    <Initiative
                      title="Property & Beyond portfolio"
                      arc="7G"
                      lab="PB"
                      activeState={(SGactive && PBactive) || openPBP}
                      hoverState={SGactive || PBactive}
                      setActiveLab={setPBActive}
                      setActiveArc={setSGActive}
                      setOpen={setOpenPBP}
                    />

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

                    <Initiative
                      title="Permissioning the City"
                      arc="RC"
                      lab="SD"
                      activeState={(RCactive && QDactive) || openPTC}
                      hoverState={RCactive || QDactive}
                      setActiveLab={setQDActive}
                      setActiveArc={setRCActive}
                      setOpen={setOpenPTC}
                    />

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
                      short="BR"
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
                      title="Sensing & Modeling"
                      short="SM"
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

                    <Initiative
                      title="MatR"
                      arc="M0"
                      lab="SM"
                      activeState={(M0active && SMactive) || openMATR}
                      hoverState={M0active || SMactive}
                      setActiveLab={setSMActive}
                      setActiveArc={setM0Active}
                      setOpen={setOpenMATR}
                    />

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
                  activeState === 7 ? 'mt-[2.6em] block' : 'mt-[2.6em] hidden',
                  'text-right opacity-0',
                )}
              >
                <div className="flex h-[80px] w-[80px] flex-col  items-center justify-end pb-[6.5px] pl-2 pr-[6px] pt-[5px]">
                  <h2
                    className={classNames(
                      activeState === 7 ? 'text-[#A8A8A8]' : 'text-transparent',
                      'font-SaansRegular text-[17px] font-normal ',
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
                      bgHoverInterpolate(3, ODactive || openOD),
                    ),
                  }}
                  className={classNames(
                    ODactive || openOD ? ' text-white' : ' text-[#A8A8A8]',
                    'my-1.5 flex h-[80px] w-[80px] cursor-crosshair items-end justify-start pb-[6.5px] pl-2 pr-[6px] pt-[5px]',
                  )}
                  onMouseOver={() => setODActive(true)}
                  onMouseLeave={() => setODActive(false)}
                  onClick={() => setOpenOD(true)}
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
                        'pb-4 font-SaansRegular text-[17px] font-normal opacity-0',
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
                        `studio-layer border-b border-l border-t border-[#262626]`,
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
                      ? 'mt-[2.61em] '
                      : 'mt-[2.61em] ',
                    'block text-right',
                  )}
                >
                  <div className="flex h-[80px] w-[80px] flex-col  items-center justify-end pb-[6.5px] pl-2 pr-[6px] pt-[5px]">
                    <animated.h2
                      style={{
                        opacity: opacityInterpolate(
                          startSticky + step * 4,
                          startSticky + step * 5,
                          false,
                        ),
                      }}
                      className="font-SaansRegular text-[17px] font-normal text-[#A8A8A8]"
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
                    title="Conversat. Design"
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
                        bgHoverInterpolate(3, ODactive || openOD),
                      ),
                    }}
                    className={classNames(
                      ODactive || openOD ? ' text-white' : ' text-[#A8A8A8]',
                      'my-1.5 flex h-[80px] w-[80px] cursor-crosshair items-end justify-start pb-[6.5px] pl-2 pr-[6px] pt-[5px] tracking-wide',
                    )}
                    onMouseOver={() => setODActive(true)}
                    onMouseLeave={() => setODActive(false)}
                    onClick={() => setOpenOD(true)}
                  >
                    <p className="font-SaansRegular  text-[17px] font-normal uppercase leading-[125%]">
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
                scrollY >= startSticky + step * 5 + 310 ? 'z-50' : 'z-20 ',
                `shadow-layer absolute grid w-[854px] grid-cols-12 font-SaansRegular`,
              )}
            >
              <div className="col-span-1">
                <div className="ml-4"></div>
              </div>
              <div className="col-span-10 ">
                <div className="mx-auto max-w-xl text-center">
                  <h2
                    className={classNames(
                      activeState === 5 ? 'text-transparent' : 'text-[#A8A8A8]',
                      'pb-4 text-base font-normal',
                    )}
                  >
                    Domains
                  </h2>
                </div>

                <div className="mb-1.5 ml-4 grid grid-cols-6">
                  <div className="">
                    <div
                      onClick={() => setOpenDomainA(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#8E6413] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight ">
                        {' '}
                        A
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
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
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
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
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
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
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
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
                      onClick={() => setOpenDomainB(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#903C30]  p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
                        Money & valuation logic
                      </p>
                    </div>

                    <div
                      onClick={() => setOpenDomainB1(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between  border border-[#D46E61] bg-[#212121] px-2 py-2 text-[#D46E61] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        B-1
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
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
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
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
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight">
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
                      onClick={() => setOpenDomainC(true)}
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
                      onClick={() => setOpenDomainC1(true)}
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
                      onClick={() => setOpenDomainC2(true)}
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
                      onClick={() => setOpenDomainC3(true)}
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
                      onClick={() => setOpenDomainC4(true)}
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
                      onClick={() => setOpenDomainC5(true)}
                      className={`my-1.5 flex h-[80px] w-[109px] flex-col justify-between border border-[#4CA866] bg-[#212121] px-2 py-2 text-[#4CA866] hover:cursor-crosshair hover:bg-[#353535]`}
                    >
                      <p className="pb-2 font-SaansRegular text-base leading-tight">
                        C-5
                      </p>
                      <p className="font-SaansRegular text-[8px] leading-tight tracking-tight ">
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
                      onClick={() => setOpenDomainD(true)}
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
                      onClick={() => setOpenDomainD1(true)}
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
                      onClick={() => setOpenDomainD2(true)}
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
                      onClick={() => setOpenDomainD3(true)}
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
                      onClick={() => setOpenDomainD4(true)}
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
                      onClick={() => setOpenDomainD5(true)}
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
                      onClick={() => setOpenDomainE(true)}
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
                      onClick={() => setOpenDomainE1(true)}
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
                      onClick={() => setOpenDomainE2(true)}
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
                      onClick={() => setOpenDomainE3(true)}
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
                      onClick={() => setOpenDomainE4(true)}
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
                      onClick={() => setOpenDomainF(true)}
                      className={`flex h-[80px] w-[109px] flex-col justify-between bg-[#808080] p-2 text-[#212121] hover:cursor-crosshair`}
                    >
                      <p className="font-SaansRegular text-base leading-tight">
                        F
                      </p>
                      <p className="font-SaansRegular text-[12px] leading-none">
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
                      <p className="max-w-[90px] font-SaansRegular text-[8px] leading-tight tracking-tight">
                        Developing collaborative, non-extractive interfaces with
                        the physical environment
                      </p>
                    </div>

                    <div
                      onClick={() => setOpenDomainF2(true)}
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
                      onClick={() => setOpenDomainF3(true)}
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
                      onClick={() => setOpenDomainF4(true)}
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
        className={`context-margin sm;items-center relative hidden sm:flex sm:justify-center matirx:grid matirx:grid-cols-12 `}
      >
        <Contexts />
      </animated.div>

      <div className="relative mt-20 sm:hidden">
        <Contexts />
      </div>

      <animated.div
        style={{
          opacity: scrollYProgress.to(() =>
            divOpacityInterpolate(
              startSticky + step * 8 + 400,
              startSticky + step * 8 + 700,
            ),
          ),
        }}
        className={`sm;items-center relative hidden sm:flex sm:justify-center matirx:grid matirx:grid-cols-12 `}
      >
        <Paradigms
          setOpenNE={setOpenNE}
          setOpenRC={setOpenRC}
          setOpenSM={setOpenSM}
          setOpenRE={setOpenRE}
          setOpenCT={setOpenCT}
          setOpenPC={setOpenPC}
          setOpenPB={setOpenPB}
          setOpenBR={setOpenBR}
          setOpenCD={setOpenCD}
          setOpenQD={setOpenQD}
          setOpenETC={setOpenETC}
          setOpenOD={setOpenOD}
          setOpenBE={setOpenBE}
          setOpenSG={setOpenSG}
          setOpenCS={setOpenCS}
          setOpenM0={setOpenM0}
          setOpenNZ={setOpenNZ}
        />
      </animated.div>

      <div className="relative mt-20 sm:hidden">
        <Paradigms
          setOpenNE={setOpenNE}
          setOpenRC={setOpenRC}
          setOpenSM={setOpenSM}
          setOpenRE={setOpenRE}
          setOpenCT={setOpenCT}
          setOpenPC={setOpenPC}
          setOpenPB={setOpenPB}
          setOpenBR={setOpenBR}
          setOpenCD={setOpenCD}
          setOpenQD={setOpenQD}
          setOpenETC={setOpenETC}
          setOpenOD={setOpenOD}
          setOpenBE={setOpenBE}
          setOpenSG={setOpenSG}
          setOpenCS={setOpenCS}
          setOpenM0={setOpenM0}
          setOpenNZ={setOpenNZ}
        />
      </div>
    </div>
  );
}
