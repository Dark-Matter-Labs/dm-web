import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import '../styles/Home.module.css';
import webIcon from '../images/website.svg';
import pubIcon from '../images/publication.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  // TODO: remove these state variables and just use activeState
  const [classT, setClassT] = useState('');
  const [classL, setClassL] = useState('');

  const [classA, setClassA] = useState('');
  const [classAT, setClassAT] = useState('');
  const [classAB, setClassAB] = useState('');

  const [classStudioBg, setClassStudioBg] = useState('');

  const [classT2, setClassT2] = useState('t1');
  const [activeState, setActiveState] = useState(1);

  const [animateOn, setAnimateOn] = useState('');
  const [capacity, setCapacity] = useState('capability-base');

  const startSticky = 1500;
  const step = 100;
  const animationStart = 1896;
  const stopSticky = 2056;

  const listenScrollEvent = () => {
    if (window.scrollY < startSticky) {
      setClassT('');
      setClassL('');
      setClassA('');
      setClassAT('');
      setClassAB('');

      setActiveState(1);
      setClassStudioBg('');

      setClassT2('t1');
      setAnimateOn('');
      setCapacity('capability-base');
    } else if (
      window.scrollY > startSticky &&
      window.scrollY < startSticky + step
    ) {
      setActiveState(2);
      setClassStudioBg('');

      setClassT('');
      setClassL('');
      setClassAT('');

      setClassT2('t2');
      setAnimateOn('');
      setCapacity('capability-base');
    } else if (
      window.scrollY > startSticky + step &&
      window.scrollY < startSticky + 2 * step
    ) {
      setActiveState(3);

      setClassAT('labs-top');

      setClassStudioBg('');
      setClassL('');

      setClassT2('t2');
      setAnimateOn('');
      setCapacity('capability-base');
    } else if (
      window.scrollY > startSticky + 2 * step &&
      window.scrollY < startSticky + 3 * step
    ) {
      setActiveState(4);
      setClassAT('');
      setClassL('arcs-left');

      setClassStudioBg('');

      setClassT2('t2');
      setAnimateOn('');
      setCapacity('capability-base');
    } else if (
      window.scrollY > startSticky + 3 * step &&
      window.scrollY < startSticky + 4 * step
    ) {
      setClassStudioBg('labs-top');
      setActiveState(5);
      setClassL('');
      setClassAT('');

      setClassT2('t2');
      setAnimateOn('');
      setCapacity('capability-base');
    } else if (
      window.scrollY > startSticky + 4 * step &&
      window.scrollY < startSticky + 5 * step
    ) {
      setClassStudioBg('');
      setActiveState(6);
      setClassL('');
      setClassAT('');

      setClassT2('t2_less_height');
      setCapacity('capability-hidden');
    } else if (
      window.scrollY > startSticky + 5 * step &&
      window.scrollY < startSticky + 6 * step
    ) {
      setClassStudioBg('');
      setActiveState(7);
      setClassL('');
      setClassAT('');

      setClassT2('t2_less_height');
      setCapacity('capability-active');
    } else if (window.scrollY > stopSticky) {
      setClassT2('t3');
    }

    if (window.scrollY > animationStart) {
      setAnimateOn('animate');
    }

    if (window.scrollY > animationStart + 500) {
      setActiveState(8);
    }
    if (window.scrollY > animationStart + 2000) {
      setActiveState(9);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  // arcs states
  const [RCactive, setRCActive] = useState(false);
  const [ETCactive, setETCActive] = useState(false);
  const [RCHover, setRCHover] = useState(false);
  const [NZactive, setNZActive] = useState(false);
  const [NZHover, setNZHover] = useState(false);
  const [WIHover, setWIHover] = useState(false);
  const [SGactive, setSGActive] = useState(false);
  const [M0active, setM0Active] = useState(false);
  const [M0Hover, setM0Hover] = useState(false);
  const [REactive, setREActive] = useState(false);
  const [WIactive, setWIActive] = useState(false);
  const [BEactive, setBEActive] = useState(false);
  const [PCactive, setPCActive] = useState(false);

  //labs states
  const [NEactive, setNEActive] = useState(false);
  const [NEHover, setNEHover] = useState(false);
  const [BLactive, setBLActive] = useState(false);
  const [CSactive, setCSActive] = useState(false);
  const [CSHover, setCSHover] = useState(false);
  const [PFactive, setPFActive] = useState(false);
  const [PBactive, setPBActive] = useState(false);
  const [QDactive, setQDActive] = useState(false);
  const [BRactive, setBRActive] = useState(false);
  const [SMactive, setSMActive] = useState(false);
  const [CTHover, setCTHover] = useState(false);

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

  return (
    <div>
      <Head>
        <title>Dark Matter Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Transition.Root show={openCS} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenCS}>
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                      onClick={() => setOpenCS(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Capital Systems{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://darkmatterlabs.capital/">
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
                      the DmCS Lab is working to reframe what is possible within
                      the financial capital markets. This Lab is working with
                      the hypothesis that the{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://uploads-ssl.webflow.com/5ddbd6d8c8721f339f8284ef/5ea18eb53e44c4667e1cfebf_0411_Building%20Civic%20Capital%20(compressed).pdf"
                      >
                        investment logic of the current system
                      </a>{' '}
                      needs to be rewired to catch up with the scale of societal
                      transition that is underway. The Lab is developing a
                      portfolio of investable projects and new asset classes
                      (for example a swimmable river in Austria and microgrids
                      in Africa), that recognise that long term value is
                      grounded in our biophysical and social reality.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openRC} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenRC}>
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                      onClick={() => setOpenRC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="font-FKmedium text-2xl text-[#F5F5F5]"
                    >
                      Radicle Civics{' '}
                      <span className="align-super text-lg uppercase">Arc</span>
                    </Dialog.Title>
                    <div className="flex py-2">
                      <Image src={webIcon} alt="website icon" />
                      <a target="_blank" href="https://radiclecivics.cc/">
                        <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                          Website
                        </p>
                      </a>
                    </div>
                    <p className="font-FKregular text-base text-[#C6C6C6]">
                      Radicle Civics is a playful nod towards emergent shoots of
                      possibility (in botany, the radicle is the first part of a
                      seedling to emerge during the process of germination).
                      This arc aims to build cultural demonstrations that
                      support{' '}
                      <a
                        className="text-[#737EA5]"
                        target="_blank"
                        href="https://provocations.darkmatterlabs.org/radicle-civics-building-proofs-of-possibilities-for-a-civic-economy-and-society-ee28baeeec70"
                      >
                        three
                      </a>{' '}
                      new ways of being in the world: from assets to agents,
                      from externalities to entanglements, and from
                      public/public to commoning.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openNZ} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={setOpenNZ}>
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Net Zero Cities{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://netzerocities.eu/">
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    7Gen Cities{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://www.7gencities.org/">
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Bioregional Economics{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Next Economics{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Sensing, Modeling & Mapping{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Beyond Labour{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] z-10 w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Philanthropic Futures{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Societal Decisions{' '}
                    <span className="align-super text-lg uppercase">lab</span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://sdl.darkmatterlabs.org/">
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Civic Tech{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Local Civics{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Conversation Design{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Foresight & Futuring{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Org Dev{' '}
                    <span className="align-super text-lg uppercase">
                      studio
                    </span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    Wild Infrastructure{' '}
                    <span className="align-super text-lg uppercase">Arc</span>
                  </Dialog.Title>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
                      the Wi Arc is developing practical pathways to support
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%]  w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
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
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Publication
                      </p>
                    </a>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
          <div className="fixed left-[14.8%] top-[30%] w-screen overflow-y-auto">
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
                    className="font-FKmedium text-2xl text-[#F5F5F5]"
                  >
                    CircuLaw{' '}
                    <span className="align-super text-lg uppercase">
                      project
                    </span>
                  </Dialog.Title>
                  <div className="flex py-2">
                    <Image src={webIcon} alt="website icon" />
                    <a target="_blank" href="https://www.circulaw.nl/">
                      <p className="pl-1 font-FKmedium text-base text-[#737EA5]">
                        Website
                      </p>
                    </a>
                  </div>

                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
                      onClick={() => setOpenRC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
                      onClick={() => setOpenRC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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
                      onClick={() => setOpenRC(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="max-w-md sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#C6C6C6]">
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

      <main className="mx-auto max-w-screen-xl">
        <Navbar />
        <div className={`relative mt-20 sm:grid sm:grid-cols-12`}>
          <SideNav activeState={activeState} />

          <div className={`relative col-span-8`}>
            <div id="real" className="">
              <h1 className="heading-7xl max-w-[38rem] pb-10 text-grey-1 ">
                We are building options for the next economies
              </h1>
              <p className="p-3xl text-grey-1">
                At Dark Matter Labs believe that the interconnected crises of
                our time are symptoms of a deeper, structural miscoding of our
                economic systems. We understand these codes to be physical (e.g.
                biodiversity, energy, labour and materials), structural (e.g.
                money creation, embedded inequality and private property rights)
                and psychological (e.g. failure of the imagination). 
              </p>

              <p className="p-3xl pt-10 text-grey-1">
                Recognising the complex, entangled reality of living systems, we
                are exploring alternative pathways for organising society and
                stewarding the shared planetary commons. Our working hypothesis
                is that these pathways must be rooted in a radical reframing of
                our relationship to everything; from technology and money to
                land and the other-than-human world. We are framing this
                transformation as a shift towards{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-pointer"
                  onClick={() => setOpenLEE(true)}
                >
                  Life-Ennobling Economies.
                </span>
              </p>

              <h2 className="heading-5xl max-w-md pt-20 text-grey-1">
                Economic options are bold directional aspirations
              </h2>
              <p className="p-3xl pt-8 text-grey-1">
                What would it mean to align societal ambition to the magnitude
                of the transformation that is required? We cannot be sure how
                the future will play out or the specific infrastructures that
                will be required. However, we can build towards a range of
                economic options that are likely to be needed. We are imaging
                new investment opportunities for{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-pointer"
                  onClick={() => setOpenCTC(true)}
                >
                  city-scale tree canopies
                </span>
                , community endowments and{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-pointer"
                  onClick={() => setOpenRBF(true)}
                >
                  resilient bioregional food systems
                </span>
                . We envisage that the electrification of transport networks,
                the mental health of communities and the{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-pointer"
                  onClick={() => setOpenCIC(true)}
                >
                  collective intelligence of cites
                </span>{' '}
                will become recognisable assets, understood as commitments to a
                regenerative future. We are also considering what might be
                unleashed if houses were self-owning and affordable in
                perpetuity. Or if rivers could express their need for care. At
                Dark Matter Labs, we believe all these things are both possible
                and necessary. These are bold aspirations and will only be
                achieved by a collective movement of diverse communities and
                unusual allies. This is a story of practical empowerment that we
                are excited to put our energy behind.
              </p>

              <div className="py-14">
                <p className="heading-5xl  text-grey-2">
                  ↓ How do we structure our response?
                </p>
              </div>
            </div>

            <div className={`${classT2}`}>
              <div className="h-screen font-FKregular">
                <div className={` `}>
                  <div
                    className={`threeD absolute z-50 grid w-full grid-cols-12 opacity-100 ${animateOn}`}
                  >
                    <div className="col-span-11">
                      <div className="text-center ">
                        <h2
                          className={classNames(
                            activeState === 7
                              ? 'text-transparent'
                              : 'text-[#A8A8A8]',
                            'pb-4 text-base font-normal',
                          )}
                        >
                          Labs
                        </h2>
                      </div>

                      <div className="grid grid-cols-9 gap-[6px] bg-[#151414]">
                        <div className="">
                          <div className="mb-1.5 bg-[#161617]">
                            <h2 className="h-[80px] pl-2 pt-[3rem] text-base font-normal  text-[#A8A8A8]">
                              Arcs
                            </h2>
                          </div>
                          {RCactive || openRC ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classAT}  h-[80px]`}
                              onClick={() => setOpenRC(true)}
                              onMouseLeave={() => setRCActive(false)}
                            >
                              <p className="text-base font-normal ">RC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Radicle <br />
                                Civics
                              </p>
                            </div>
                          ) : RCHover ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-between bg-[#353535] px-1.5 py-2  text-[#A8A8A8]">
                              <p className="text-base font-normal ">RC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Radicle <br />
                                Civics
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL} h-[80px]`}
                              onMouseOver={() => setRCActive(true)}
                              onClick={() => setOpenRC(true)}
                              onMouseLeave={() => setRCActive(false)}
                            >
                              <p className="text-base font-normal ">RC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Radicle <br />
                                Civics
                              </p>
                            </div>
                          )}

                          {ETCactive || openETC ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenETC(true)}
                              onMouseLeave={() => setETCActive(false)}
                            >
                              <p className="text-base font-normal ">LC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Local <br />
                                Civics
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px] `}
                              onMouseOver={() => setETCActive(true)}
                              onClick={() => setOpenETC(true)}
                              onMouseLeave={() => setETCActive(false)}
                            >
                              <p className="text-base font-normal ">LC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Local <br /> Civics
                              </p>
                            </div>
                          )}

                          {NZactive || openNZ ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenNZ(true)}
                              onMouseLeave={() => setNZActive(false)}
                            >
                              <p className="text-base font-normal ">NZC</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Net Zero Cities
                              </p>
                            </div>
                          ) : NZHover ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-between bg-[#353535] px-1.5 py-2  text-[#A8A8A8]">
                              <p className="text-base font-normal ">NZC</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Net Zero Cities
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setNZActive(true)}
                              onClick={() => setOpenNZ(true)}
                              onMouseLeave={() => setNZActive(false)}
                            >
                              <p className="text-base font-normal ">NZC</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Net Zero Cities
                              </p>
                            </div>
                          )}

                          {SGactive || openSG ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenSG(true)}
                              onMouseLeave={() => setSGActive(false)}
                            >
                              <p className="text-base font-normal ">7G</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                7Gen <br /> Cities
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setSGActive(true)}
                              onClick={() => setOpenSG(true)}
                              onMouseLeave={() => setSGActive(false)}
                            >
                              <p className="text-base font-normal ">7G</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                7Gen <br /> Cities
                              </p>
                            </div>
                          )}

                          {M0active || openM0 ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenM0(true)}
                              onMouseLeave={() => setM0Active(false)}
                            >
                              <p className="text-base font-normal ">M0</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                M0
                                <br /> Cities
                              </p>
                            </div>
                          ) : M0Hover ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-between bg-[#353535] px-1.5 py-2  text-[#A8A8A8]">
                              <p className="text-base font-normal ">M0</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                {' '}
                                M0
                                <br /> Cities
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setM0Active(true)}
                              onClick={() => setOpenM0(true)}
                              onMouseLeave={() => setM0Active(false)}
                            >
                              <p className="text-base font-normal ">M0</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                M0
                                <br /> Cities
                              </p>
                            </div>
                          )}

                          {REactive ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL} h-[80px]`}
                              onClick={() => setOpenRE(true)}
                              onMouseLeave={() => setREActive(false)}
                            >
                              <p className="text-base font-normal ">RN</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Regen Nutrition
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setREActive(true)}
                              onClick={() => setOpenRE(true)}
                              onMouseLeave={() => setREActive(false)}
                            >
                              <p className="text-base font-normal ">RN</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Regen Nutrition
                              </p>
                            </div>
                          )}

                          {WIactive || openWI ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenWI(true)}
                              onMouseLeave={() => setWIActive(false)}
                            >
                              <p className="text-base font-normal ">WI</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Wild Infrastructure
                              </p>
                            </div>
                          ) : WIHover ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-between bg-[#353535] px-1.5 py-2  text-[#A8A8A8]">
                              <p className="text-base font-normal ">WI</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Wild Infrastructure
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setWIActive(true)}
                              onClick={() => setOpenWI(true)}
                              onMouseLeave={() => setWIActive(false)}
                            >
                              <p className="text-base font-normal ">WI</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Wild Infrastructure
                              </p>
                            </div>
                          )}

                          {BEactive ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenBE(true)}
                              onMouseLeave={() => setBEActive(false)}
                            >
                              <p className="text-base font-normal ">BE</p>
                              <p className="text-[9.6px] font-normal leading-normal ">
                                Bioregional Economics
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setBEActive(true)}
                              onClick={() => setOpenBE(true)}
                              onMouseLeave={() => setBEActive(false)}
                            >
                              <p className="text-base font-normal ">BE</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Bioregional Economics
                              </p>
                            </div>
                          )}

                          {PCactive ? (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classL}  h-[80px]`}
                              onClick={() => setOpenPC(true)}
                              onMouseLeave={() => setPCActive(false)}
                            >
                              <p className="text-base font-normal ">PC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Planetary Civics
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classL}  h-[80px]`}
                              onMouseOver={() => setPCActive(true)}
                              onClick={() => setOpenPC(true)}
                              onMouseLeave={() => setPCActive(false)}
                            >
                              <p className="text-base font-normal ">PC</p>
                              <p className="text-[9.6px] font-normal leading-normal">
                                Planetary Civics
                              </p>
                            </div>
                          )}
                        </div>
                        <div>
                          {NEactive || openNE ? (
                            <div
                              className={` flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classA} ${classAT}  h-[80px]`}
                              onClick={() => setOpenNE(true)}
                              onMouseLeave={() => setNEActive(false)}
                            >
                              <p className="text-base font-normal ">NE</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Next Economics
                              </p>
                            </div>
                          ) : NEHover ? (
                            <div
                              className={` flex h-[80px] flex-col justify-between bg-[#353535] px-1.5 py-2  text-[#A8A8A8]`}
                            >
                              <p className="text-base font-normal ">NE</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Next Economics
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setNEActive(true)}
                              onClick={() => setOpenNE(true)}
                              onMouseLeave={() => setNEActive(false)}
                            >
                              <p className="text-base font-normal ">NE</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Next Economics
                              </p>
                            </div>
                          )}

                          {(RCactive || NEactive) && !openMC ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-center bg-[#292929] px-1.5 py-[1.68rem]  text-[#595959]">
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                RC
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + NE
                                <span className="align-super text-[6.6px]">
                                  L
                                </span>
                              </p>
                            </div>
                          ) : RCHover && NEHover ? (
                            <div
                              className="my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[1.26rem] text-white  hover:cursor-pointer"
                              onMouseLeave={() => {
                                setRCHover(false);
                                setNEHover(false);
                              }}
                              onMouseEnter={() => {
                                setRCHover(true);
                                setNEHover(true);
                              }}
                              onClick={() => {
                                setOpenMC(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal ">
                                Multivalent currencies
                              </p>
                            </div>
                          ) : openMC ? (
                            <div className=" my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[1.26rem]  text-white">
                              <p className=" text-[9.6px] font-normal leading-normal ">
                                Multivalent currencies
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-center bg-[#212121] px-1.5 py-[1.68rem] text-[#595959] ${classT} ${classA}  h-[80px]`}
                              onMouseEnter={() => {
                                setRCHover(true);
                                setNEHover(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                RC
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + NE
                                <span className="align-super text-[6.6px]">
                                  L
                                </span>
                              </p>
                            </div>
                          )}
                          {ETCactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {NZactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {SGactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {(M0active || NEactive) && !openNET ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-center bg-[#292929] px-1.5 py-[1.68rem]  text-[#595959]">
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                MO
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + NE
                                <span className="align-super text-[6.6px]">
                                  L
                                </span>
                              </p>
                            </div>
                          ) : M0Hover && NEHover ? (
                            <div
                              className="my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[0.8rem] text-white  hover:cursor-pointer"
                              onMouseLeave={() => {
                                setM0Hover(false);
                                setNEHover(false);
                              }}
                              onMouseEnter={() => {
                                setM0Hover(true);
                                setNEHover(true);
                              }}
                              onClick={() => {
                                setOpenNET(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal ">
                                New Economic Thinking
                              </p>
                            </div>
                          ) : openNET ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[0.8rem]  text-white">
                              <p className=" text-[9.6px] font-normal leading-normal">
                                New Economic Thinking
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-center bg-[#212121] px-1.5 py-[1.68rem] text-[#595959] ${classT} ${classA}  h-[80px]`}
                              onMouseEnter={() => {
                                setM0Hover(true);
                                setNEHover(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                M0
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + NE
                                <span className="align-super text-[6.6px]">
                                  L
                                </span>
                              </p>
                            </div>
                          )}

                          {REactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {WIactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {BEactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || NEactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA} ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {BLactive || openBL ? (
                            <div
                              className={`flex flex-col justify-between bg-[#595959] px-1.5 py-2 text-white hover:cursor-pointer ${classA} ${classAT}  h-[80px]`}
                              onClick={() => setOpenBL(true)}
                              onMouseLeave={() => setBLActive(false)}
                            >
                              <p className="text-base font-normal ">BL</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Beyond
                                <br /> Labour
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setBLActive(true)}
                              onClick={() => setOpenBL(true)}
                              onMouseLeave={() => setBLActive(false)}
                            >
                              <p className="text-base font-normal ">BL</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Beyond
                                <br /> Labour
                              </p>
                            </div>
                          )}
                          {RCactive || openRC || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {NZactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {SGactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {WIactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {BEactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || BLactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {openCS || CSactive ? (
                            <div
                              className="group flex h-[80px] flex-col justify-between bg-[#595959] px-1.5 py-2 text-white  hover:cursor-pointer"
                              onClick={() => setOpenCS(true)}
                              onMouseLeave={() => setCSActive(false)}
                            >
                              <p className="text-base font-normal ">CS</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Capital Systems
                              </p>
                            </div>
                          ) : CSHover ? (
                            <div className="flex h-[80px] flex-col justify-between bg-[#353535] px-1.5 py-2  text-[#A8A8A8]">
                              <p className="text-base font-normal ">CS</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Capital Systems
                              </p>
                            </div>
                          ) : (
                            <div
                              className={` mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] hover:cursor-pointer ${classA} ${classAT}  h-[80px]`}
                              onClick={() => {
                                setOpenCS(true);
                                setCSActive(true);
                              }}
                              onMouseOver={() => setCSActive(true)}
                              onMouseLeave={() => setCSActive(false)}
                            >
                              <p className="text-base font-normal ">CS</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Capital Systems
                              </p>
                            </div>
                          )}
                          {RCactive || openRC || CSactive || openCS ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || CSactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {NZactive || CSactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {SGactive || CSactive || openCS ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || CSactive || openCS ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || CSactive || openCS ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {(WIactive || CSactive) && !openTAI ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-center bg-[#292929] px-1.5 py-[1.68rem]  text-[#595959]">
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                NZ
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + CS
                                <span className="align-super text-[6.6px]">
                                  L
                                </span>
                              </p>
                            </div>
                          ) : WIHover && CSHover ? (
                            <div
                              className="my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[1.7rem] text-white  hover:cursor-pointer"
                              onMouseLeave={() => {
                                setWIHover(false);
                                setCSHover(false);
                                setCTHover(false);
                              }}
                              onMouseEnter={() => {
                                setWIHover(true);
                                setCSHover(true);
                                setCTHover(true);
                              }}
                              onClick={() => {
                                setOpenTAI(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal ">
                                TreesAI
                              </p>
                            </div>
                          ) : openTAI ? (
                            <div className=" my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[1.7rem]  text-white">
                              <p className=" text-[9.6px] font-normal leading-normal">
                                TreesAI
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-center bg-[#212121] px-1.5 py-[1.68rem] text-[#595959] ${classT} ${classA}  h-[80px]`}
                              onMouseEnter={() => {
                                setWIHover(true);
                                setCSHover(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                NZ
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + CS
                                <span className="align-super text-[6.6px]">
                                  L
                                </span>
                              </p>
                            </div>
                          )}
                          {BEactive || CSactive || openCS ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || CSactive || openCS ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {PFactive || openPF ? (
                            <div
                              className="flex h-[80px] flex-col justify-between bg-[#595959] px-1.5 py-2 text-white  hover:cursor-pointer"
                              onClick={() => setOpenPF(true)}
                              onMouseLeave={() => setPFActive(false)}
                            >
                              <p className="text-base font-normal ">PF</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Philanthropic Futures
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setPFActive(true)}
                              onClick={() => setOpenPF(true)}
                              onMouseLeave={() => setPFActive(false)}
                            >
                              <p className="text-base font-normal ">PF</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Philanthropic Futures
                              </p>
                            </div>
                          )}
                          {RCactive || openRC || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {NZactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {SGactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {WIactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {BEactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || PFactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px] `}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {PBactive || openPB ? (
                            <div
                              className="flex h-[80px] flex-col justify-between bg-[#595959] px-1.5 py-2 text-white  hover:cursor-pointer"
                              onClick={() => setOpenPB(true)}
                              onMouseLeave={() => setPBActive(false)}
                            >
                              <p className="text-base font-normal ">PB</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Property & Beyond
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setPBActive(true)}
                              onClick={() => setOpenPB(true)}
                              onMouseLeave={() => setPBActive(false)}
                            >
                              <p className="text-base font-normal ">PB</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Property & Beyond
                              </p>
                            </div>
                          )}
                          {RCactive || openRC || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {NZactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {SGactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {WIactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {BEactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || PBactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {QDactive || openQD ? (
                            <div
                              className="flex h-[80px] flex-col justify-between bg-[#595959] px-1.5 py-2 text-white  hover:cursor-pointer"
                              onClick={() => setOpenQD(true)}
                              onMouseLeave={() => setQDActive(false)}
                            >
                              <p className="text-base font-normal ">SD</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                Societal Decisions
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] hover:cursor-pointer ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setQDActive(true)}
                              onClick={() => setOpenQD(true)}
                              onMouseLeave={() => setQDActive(false)}
                            >
                              <p className="text-base font-normal ">SD</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                Societal Decisions
                              </p>
                            </div>
                          )}
                          {RCactive || openRC || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {NZactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {SGactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {WIactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {BEactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || QDactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem]  ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem]  ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {BRactive || openBR ? (
                            <div
                              className="flex h-[80px] flex-col justify-between bg-[#595959] px-1.5 py-2 text-white  hover:cursor-pointer"
                              onClick={() => setOpenBR(true)}
                              onMouseLeave={() => setBRActive(false)}
                            >
                              <p className="text-base font-normal ">BTR</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Beyond the Rules
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setBRActive(true)}
                              onClick={() => setOpenBR(true)}
                              onMouseLeave={() => setBRActive(false)}
                            >
                              <p className="text-base font-normal ">BTR</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Beyond the Rules
                              </p>
                            </div>
                          )}
                          {RCactive || openRC || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {NZactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {SGactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {WIactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {BEactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || BRactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA}  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>

                        <div>
                          {SMactive || openSM ? (
                            <div
                              className="flex h-[80px] flex-col justify-between bg-[#595959] px-1.5 py-2 text-white  hover:cursor-pointer"
                              onClick={() => setOpenSM(true)}
                              onMouseLeave={() => setSMActive(false)}
                            >
                              <p className="text-base font-normal ">SMM</p>
                              <p className=" text-[9.6px] font-normal leading-normal">
                                Sensing, Modeling
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`mb-1 flex flex-col justify-between bg-[#292929] px-1.5 py-2 text-[#A8A8A8] ${classA} ${classAT}  h-[80px]`}
                              onMouseOver={() => setSMActive(true)}
                              onClick={() => setOpenSM(true)}
                              onMouseLeave={() => setSMActive(false)}
                            >
                              <p className="text-base font-normal ">SMM</p>
                              <p className="  text-[9.6px] font-normal  leading-normal">
                                Sensing, Modeling
                              </p>
                            </div>
                          )}
                          {RCactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {ETCactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {(NZactive || SMactive) && !openCL ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-center bg-[#292929] px-1.5 py-[1.68rem]  text-[#595959]">
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                NZ
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + CT
                                <span className="align-super text-[6.6px]">
                                  S
                                </span>
                              </p>
                            </div>
                          ) : NZHover && CTHover ? (
                            <div
                              className="my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[1.7rem] text-white  hover:cursor-pointer"
                              onMouseLeave={() => {
                                setNZHover(false);
                                setCTHover(false);
                              }}
                              onClick={() => {
                                setOpenCL(true);
                              }}
                              onMouseEnter={() => {
                                setNZHover(true);
                                setCTHover(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal ">
                                CircuLaw
                              </p>
                            </div>
                          ) : openCL ? (
                            <div className="my-1.5 flex h-[80px] flex-col justify-center bg-[#595959] px-1.5 py-[1.7rem]  text-white">
                              <p className=" text-[9.6px] font-normal leading-normal ">
                                CircuLaw
                              </p>
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 flex flex-col justify-center bg-[#212121] px-1.5 py-[1.68rem] text-[#595959] ${classT} ${classA}  h-[80px]`}
                              onMouseEnter={() => {
                                setNZHover(true);
                                setCTHover(true);
                              }}
                            >
                              <p className=" text-[9.6px] font-normal leading-normal">
                                {' '}
                                NZ
                                <span className="align-super text-[6.6px]">
                                  A
                                </span>{' '}
                                + CT
                                <span className="align-super text-[6.6px]">
                                  S
                                </span>
                              </p>
                            </div>
                          )}
                          {SGactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {M0active || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}

                          {REactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {WIactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {BEactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classT} ${classA}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                          {PCactive || SMactive ? (
                            <div
                              className={`my-1.5 bg-[#292929] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          ) : (
                            <div
                              className={`my-1.5 bg-[#212121] px-2 py-[2.14rem] ${classA}  ${classT} ${classAB}  h-[80px]`}
                            >
                              {' '}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`threeD absolute top-[20rem] opacity-100  ${capacity} w-full ${animateOn} grid grid-cols-12 gap-[8px]`}
                  >
                    <div className="col-span-1">
                      <div className="ml-4"></div>
                    </div>
                    <div className="col-span-10">
                      <div className="mx-auto max-w-xl text-center">
                        <h2
                          className={classNames(
                            activeState === 6
                              ? 'text-transparent'
                              : 'text-[#A8A8A8]',
                            'pb-4 text-base font-normal',
                          )}
                        >
                          Domains
                        </h2>
                      </div>

                      <div className="ml-4 grid grid-cols-6 gap-1.5">
                        <div className="">
                          <div
                            className={` h-[80px] bg-[#8E6413]  p-2 text-[#FFF]`}
                          >
                            <p className="font-FKregular text-base "> A</p>
                            <p className="font-PPmedium text-[9.6px]">
                              Ontology & Epistemology
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D29F3D] bg-[#212121] py-[0.38rem] pl-1 text-[#D29F3D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">A-1</p>
                            <p className="font-PPmedium text-[8px]">
                              Fostering a relational worldview
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D29F3D] bg-[#212121] py-[0.38rem] pl-1 text-[#D29F3D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">A-2</p>
                            <p className="font-PPmedium text-[8px]">
                              Replacing profit as the collective goal
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D29F3D] bg-[#212121] py-[0.38rem] pl-1 text-[#D29F3D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">A-3</p>
                            <p className="font-PPmedium text-[8px]">
                              <br />
                              Building political will
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D29F3D] bg-[#212121] py-[0.38rem] pl-1 text-[#D29F3D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">A-4</p>
                            <p className="font-PPmedium text-[8px]">
                              Phenomenological measures of success
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                        </div>

                        <div className="">
                          <div
                            className={`h-[80px] bg-[#903C30]  p-2 text-[#FFF]`}
                          >
                            <p className="font-FKregular text-base">B</p>
                            <p className="font-PPmedium text-[9.6px]">
                              Money & valuation <br /> logic
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D46E61] bg-[#212121] py-[0.38rem] pl-1 text-[#D46E61]`}
                          >
                            <p className="pb-2 font-FKregular text-base">B-1</p>
                            <p className="font-PPmedium text-[8px]">
                              Demonstrating entangled and long-term value
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D46E61] bg-[#212121] py-[0.38rem] pl-1 text-[#D46E61]`}
                          >
                            <p className="pb-2 font-FKregular text-base">B-2</p>
                            <p className="font-PPmedium text-[8px]">
                              Decolonised, bioregional currency stewardship
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D46E61] bg-[#212121] py-[0.38rem] pl-1 text-[#D46E61]`}
                          >
                            <p className="pb-2 font-FKregular text-base">B-3</p>
                            <p className="font-PPmedium text-[8px]">
                              Alternative non-fungible currency systems
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D46E61] bg-[#212121] py-[0.38rem] pl-1 text-[#D46E61]`}
                          >
                            <p className="pb-2 font-FKregular text-base">B-4</p>
                            <p className="font-PPmedium text-[8px]">
                              Visualising finite and infinite economies
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                        </div>

                        <div className="">
                          <div
                            className={` h-[80px] bg-[#206B35] p-2 text-[#FFF]`}
                          >
                            <p className="font-FKregular text-base">C</p>
                            <p className="font-PPmedium text-[9.6px]">
                              Financial processes & investment
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4CA866] bg-[#212121] py-[0.38rem] pl-1 text-[#4CA866]`}
                          >
                            <p className="pb-2 font-FKregular text-base">C-1</p>
                            <p className="font-PPmedium text-[8px]">
                              Making the investment case for entangled value
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4CA866] bg-[#212121] py-[0.38rem] pl-1 text-[#4CA866]`}
                          >
                            <p className="pb-2 font-FKregular text-base">C-2</p>
                            <p className="font-PPmedium text-[8px]">
                              <br /> Bridging demand & supply
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4CA866] bg-[#212121] py-[0.38rem] pl-1 text-[#4CA866]`}
                          >
                            <p className="pb-2 font-FKregular text-base">C-3</p>
                            <p className="font-PPmedium text-[8px]">
                              Structuring capital & investments
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4CA866] bg-[#212121] py-[0.38rem] pl-1 text-[#4CA866]`}
                          >
                            <p className="pb-2 font-FKregular text-base">C-4</p>
                            <p className="font-PPmedium text-[8px]">
                              Enabling strategic ecosystem investments
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4CA866] bg-[#212121] py-[0.38rem] pl-1 text-[#4CA866]`}
                          >
                            <p className="pb-2 font-FKregular text-base">C-5</p>
                            <p className="font-PPmedium text-[8px]">
                              Socialising the supportive narratives for
                              alternative financing pathways
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4CA866] bg-[#212121] py-[0.38rem] pl-1 text-[#4CA866]`}
                          >
                            <p className="pb-2 font-FKregular text-base">C-6</p>
                            <p className="font-PPmedium text-[8px]">
                              Socialising transformational narratives for a
                              regenerative financial system
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                        </div>

                        <div className="">
                          <div
                            className={`h-[80px] bg-[#205793] p-2 text-[#FFF]`}
                          >
                            <p className="font-FKregular text-base">D</p>
                            <p className="font-PPmedium text-[9.6px]">
                              Ownership, law & governance
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4D90D8] bg-[#212121] py-[0.38rem] pl-1 text-[#4D90D8]`}
                          >
                            <p className="pb-2 font-FKregular text-base">D-1</p>
                            <p className="font-PPmedium text-[8px]">
                              Using instruments to demonstrate alternative
                              theories of ownership
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4D90D8] bg-[#212121] py-[0.38rem] pl-1 text-[#4D90D8]`}
                          >
                            <p className="pb-2 font-FKregular text-base">D-2</p>
                            <p className="font-PPmedium text-[8px]">
                              Elevating alternative models that recouple surplus
                              with stewardship
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4D90D8] bg-[#212121] py-[0.38rem] pl-1 text-[#4D90D8]`}
                          >
                            <p className="pb-2 font-FKregular text-base">D-3</p>
                            <p className="font-PPmedium text-[8px]">
                              Demonstrating multi-actor governance structures
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4D90D8] bg-[#212121] py-[0.38rem] pl-1 text-[#4D90D8]`}
                          >
                            <p className="pb-2 font-FKregular text-base">D-4</p>
                            <p className="font-PPmedium text-[8px]">
                              Embedding data-augmented decision making
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#4D90D8] bg-[#212121] py-[0.38rem] pl-1 text-[#4D90D8]`}
                          >
                            <p className="font-FKregular text-base ">D-5</p>
                            <p className="font-PPmedium text-[8px]">
                              Building deep respect for the other-than-human
                              world, ancestors and future generations
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                        </div>

                        <div className="">
                          <div
                            className={`h-[80px] bg-[#8D2D55] p-2 text-[#FFF]`}
                          >
                            <p className="font-FKregular text-base"> E</p>
                            <p className="font-PPmedium text-[9.6px]">
                              Institutional logic <br />& policy
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D15C8D] bg-[#212121] py-[0.38rem] pl-1 text-[#D15C8D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">E-1</p>
                            <p className="font-PPmedium text-[8px]">
                              Enabling public-civic efficacy to transform place
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D15C8D] bg-[#212121] py-[0.38rem] pl-1 text-[#D15C8D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">E-2</p>
                            <p className="font-PPmedium text-[8px]">
                              Building the foundations for planetary stewardship
                              institutions
                            </p>
                          </div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#D15C8D] bg-[#212121] py-[0.38rem] pl-1 text-[#D15C8D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">E-3</p>
                            <p className="font-PPmedium text-[8px]">
                              Designing reflective, data-driven policy
                              instruments
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#D15C8D] bg-[#212121] py-[0.38rem] pl-1 text-[#D15C8D]`}
                          >
                            <p className="pb-2 font-FKregular text-base">E-4</p>
                            <p className="font-PPmedium text-[8px]">
                              Place-based, policy process design
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                        </div>

                        <div className="">
                          <div
                            className={`h-[80px] bg-[#808080] p-2 text-[#FFF]`}
                          >
                            <p className="font-FKregular text-base">F</p>
                            <p className="font-PPmedium text-[9.6px]">
                              Material, energy & land use
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#C2C2C2] bg-[#212121] py-[0.38rem] pl-1 text-[#C2C2C2]`}
                          >
                            <p className="pb-2 font-FKregular text-base">F-1</p>
                            <p className="font-PPmedium text-[8px]">
                              Developing collaborative, non-extractive
                              interfaces with the physical environment
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#C2C2C2] bg-[#212121] py-[0.38rem] pl-1 text-[#C2C2C2]`}
                          >
                            <p className="pb-2 font-FKregular text-base">F-2</p>
                            <p className="font-PPmedium text-[8px]">
                              Visualising material and energy flows
                            </p>
                          </div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#C2C2C2] bg-[#212121] py-[0.38rem] pl-1 text-[#C2C2C2]`}
                          >
                            <p className="pb-2 font-FKregular text-base">F-3</p>
                            <p className="font-PPmedium text-[8px]">
                              Developing a stewardship data infrastructure for
                              the built environment
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#C2C2C2] bg-[#212121] py-[0.38rem] pl-1 text-[#C2C2C2]`}
                          >
                            <p className="font-FKregular text-base">F-4</p>
                            <p className="font-PPmedium text-[8px]">
                              Designing and demonstrating autonomous,
                              regenerative and affordable multi-purpose
                              developments.
                            </p>
                          </div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>

                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                          <div
                            className={`my-1.5 h-[80px] border border-[#1A1919] bg-[#1A1919] px-2 py-[2.14rem]`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={classNames(
                      activeState === 6 || activeState === 7
                        ? 'backdrop-blur-none'
                        : 'backdrop-blur-xl',
                      `threeD absolute top-[12rem] z-30 w-full  ${animateOn} `,
                    )}
                  >
                    <div className="grid grid-cols-12 gap-1.5  ">
                      <div className=" studio-layer col-span-11">
                        <div className=" px-20 py-[28rem]"> </div>
                      </div>
                      <div className="backdrop-blur-none">
                        <div className=" mt-1.5 ">
                          <h2 className="pl-2 pt-[5.5rem] text-base font-normal text-[#A8A8A8]">
                            Studios
                          </h2>
                        </div>
                        {CTactive || openCT ? (
                          <div
                            className={`flex flex-col justify-between bg-[#595959] px-[2.5rem] py-2 text-white hover:cursor-pointer ${classStudioBg} mb-1.5 mt-2 h-[80px]`}
                            onClick={() => setOpenCT(true)}
                            onMouseLeave={() => setCTActive(false)}
                          >
                            <p className="text-base font-normal ">CT</p>
                            <p className=" text-[9.6px] font-normal leading-normal">
                              Civic <br /> Tech
                            </p>
                          </div>
                        ) : CTHover ? (
                          <div
                            className={`mb-1.5 mt-2 flex h-[80px] flex-col justify-between bg-[#353535] px-[2.5rem] py-2 text-[#A8A8A8]`}
                          >
                            <p className="text-base font-normal ">CT</p>
                            <p className=" text-[9.6px] font-normal leading-normal">
                              Civic <br /> Tech
                            </p>
                          </div>
                        ) : (
                          <div
                            className={`mb-1.5 mt-2 flex h-[80px] flex-col items-start justify-between bg-[#292929] px-[2.5rem] py-2 text-[#A8A8A8] ${classStudioBg}`}
                            onMouseOver={() => setCTActive(true)}
                            onClick={() => setOpenCT(true)}
                            onMouseLeave={() => setCTActive(false)}
                          >
                            <p className="text-base font-normal ">CT</p>
                            <p className=" text-[9.6px] font-normal leading-normal">
                              Civic <br /> Tech
                            </p>
                          </div>
                        )}

                        {CDactive || openCD ? (
                          <div
                            className={`my-1.5 flex h-[80px] flex-col justify-between bg-[#595959] px-[2.5rem] py-2 text-white hover:cursor-pointer ${classStudioBg}`}
                            onClick={() => setOpenCD(true)}
                            onMouseLeave={() => setCDActive(false)}
                          >
                            <p className="text-base font-normal ">CD</p>
                            <p className="self-center text-right text-[9.6px] font-normal leading-normal">
                              Conversational Design
                            </p>
                          </div>
                        ) : (
                          <div
                            className={`my-1.5 flex h-[80px] flex-col items-start justify-between bg-[#292929] px-[2.5rem] py-2 text-[#A8A8A8] ${classStudioBg}`}
                            onMouseOver={() => setCDActive(true)}
                            onClick={() => setOpenCD(true)}
                            onMouseLeave={() => setCDActive(false)}
                          >
                            <p className="text-base font-normal ">CD</p>
                            <p className="self-center text-right text-[9.6px] font-normal leading-normal">
                              Conversational Design
                            </p>
                          </div>
                        )}

                        {FFactive || openFF ? (
                          <div
                            className={`my-1.5 flex h-[80px] flex-col justify-between bg-[#595959] px-[2.5rem] py-2 text-white hover:cursor-pointer ${classStudioBg}`}
                            onClick={() => setOpenFF(true)}
                            onMouseLeave={() => setFFActive(false)}
                          >
                            <p className="text-base font-normal ">FF</p>
                            <p className="self-center text-right text-[9.6px] font-normal leading-normal">
                              Foresight& Futuring
                            </p>
                          </div>
                        ) : (
                          <div
                            className={`my-1.5 flex h-[80px] flex-col items-start justify-between bg-[#292929] px-[2.5rem] py-2 text-[#A8A8A8] ${classStudioBg}`}
                            onMouseOver={() => setFFActive(true)}
                            onClick={() => setOpenFF(true)}
                            onMouseLeave={() => setFFActive(false)}
                          >
                            <p className="text-base font-normal ">FF</p>
                            <p className="self-center text-right text-[9.6px] font-normal leading-normal">
                              Foresight& Futuring
                            </p>
                          </div>
                        )}

                        {ODactive || openOD ? (
                          <div
                            className={`my-1.5 flex h-[80px] flex-col justify-between bg-[#595959] px-[2.5rem] py-2 text-white hover:cursor-pointer ${classStudioBg}`}
                            onClick={() => setOpenOD(true)}
                            onMouseLeave={() => setODActive(false)}
                          >
                            <p className=" text-base font-normal uppercase">
                              Org Dev
                            </p>
                          </div>
                        ) : (
                          <div
                            className={`my-1.5 flex h-[80px] flex-col items-start justify-between bg-[#292929] px-[2.5rem] py-2  text-[#A8A8A8] ${classStudioBg}`}
                            onMouseOver={() => setODActive(true)}
                            onClick={() => setOpenOD(true)}
                            onMouseLeave={() => setODActive(false)}
                          >
                            <p className=" text-base font-normal uppercase">
                              Org Dev
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="context" className="mt-[50rem]">
              <p className="p-4xl-medium max-w-3xl pb-8 text-grey-3">
                The overarching LEE Mission allows us to contextually adjust the
                horizons of our interactions and interventions, whilst building
                towards a coherent field of influence and change. A single
                theory of change feels wildly inadequate; instead we are holding
                open questions in a continuous process of landscape scanning and
                action: 
              </p>
              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">
                  Political landscapes
                </h3>
                <p className="p-3xl text-grey-1">
                  how can we work intelligently with the constraints and
                  opportunities of political ideologies? A right wing context
                  may provide more fertile ground for rapidly mobilising complex
                  technologies than a liberal context. Or perhaps in a context
                  like Ukraine where crisis and instability has become an
                  everyday reality, the motivation for citizens to drive
                  alternative governance models is heightened. This could start
                  from a desire to support the military via voluntary
                  crowdfunding and extend to new sectors and patterns of
                  behaviour.
                </p>
              </div>

              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">
                  Geographical landscapes
                </h3>
                <p className="p-3xl text-grey-1">
                  what can we leverage by deliberating targeting lead or
                  established markets to test a tool or concept? In some cases
                  we may need to look to edge communities for an idea to gain
                  traction (e.g. a distributed currency), whereas in others a
                  supportive social infrastructure is needed to establish agency
                  (e.g. a material registry). Each country has something to
                  teach us; from land laws in Scotland to open data systems in
                  Taiwan, we are open to how our work can weave and adapt to
                  local contexts.
                </p>
              </div>

              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">Time horizons</h3>
                <p className="p-3xl text-grey-1">
                  how can we leverage the broad spectrum of realities
                  represented across the global context? Recognising that a
                  speculative policy in one context might already be triage
                  response in another can increase our collective learning and
                  ability to test edge ideas. This could mean working with
                  Indigenous communities on Turtle Island (North America) to
                  urgently finance the regeneration of indigenous lands. It
                  could also entail supporting marginalised communities in
                  England to seed alternative housing models in response to the
                  systemic crisis crisis.
                </p>
              </div>

              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">Alliances</h3>
                <p className="p-3xl text-grey-1">
                  what could be unleashed if we can identify and engage unusual
                  (and often powerful actors) with converging aspirations? On
                  the surface a central bank and an ecological activist may have
                  little in common. Yet, central banks have a mandate to
                  preserve stability, which in the future could involve
                  recoupling money issuance to ecological rights? This logic
                  might also extend to cultural intersectional points, such as
                  indigenous perspectives and state mandates in locations such
                  as Australia and India.
                </p>
              </div>
            </div>

            <div id="why" className="my-40">
              <p className="p-4xl-medium max-w-3xl pb-8 text-grey-3">
                The Enlightenment, Industrial and Scientific revolutions created
                many advances for society. But what about their impact on deep
                ways of being and knowing? From the concept of thingification to
                the devaluation of mother earth, the psychological baseline of
                our many societies was fundamentally altered. From our
                perspective, the worldview that condoned the treatment of land
                and living beings as disposable, exploitable resources, was also
                at play in the coding of our dominant socioeconomic systems.
                Dark Matter Labs sets out to reject the concept of separation
                and to reimagine our foundational economic relationships. For
                example:
              </p>

              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">Property</h3>
                <p className="p-3xl text-grey-1">
                  words like property and ownership are often associated with
                  ideas of dominion and control, allowing us to treat elements
                  of the living world (such as land and rare earth minerals) as
                  objects. Deep down though, do we really believe that timber
                  holds more value than a forest? Or that a whale’s life is
                  interchangeable with a barrel of oil? What would it mean to
                  explore systems of organising that move beyond the paradigm of
                  control?
                </p>
              </div>

              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">Technology</h3>
                <p className="p-3xl text-grey-1">
                  emergent technologies can be framed as a threat, but they
                  could also facilitate a new freedom to care. The field of
                  quantum physics has enabled a granular visualisation of the
                  shapeshifting and relational nature of living systems. Perhaps
                  what we have previously framed as{' '}
                  <a
                    className="text-[#A28CC6]"
                    target="_blank"
                    href="https://provocations.darkmatterlabs.org/the-necessity-of-a-boring-revolution-a71b1ae6f956"
                  >
                    a boring revolution
                  </a>{' '}
                  is also an invitation to sense and see the world through a
                  quantum lens. Perhaps in the future our governing institutions
                  will exist to advance and scaffold the continuous learning of
                  a self-aware system.
                </p>
              </div>

              <div className="mb-8 border-l border-grey-3 pl-10">
                <h3 className="p-4xl-regular text-white">Money</h3>
                <p className="p-3xl text-grey-1">
                  recognising that financial capital is intertwined and enabled
                  by living and social systems is foundational to our work.
                  Imagine how our relationship to finance might change if we
                  understood the act of investing to be a commitment to our
                  collective futures? What would a system look like where the
                  ways of creating and stewarding money are decentralised and
                  respectful of non-comparable value flows?
                </p>
              </div>

              <p className="p-4xl-medium max-w-3xl py-8 text-grey-3">
                Based on this new paradigm we are proposing three worldview
                philosophies that we think could underpin a desirable future
                economy. From there, we have identified six structural shifts
                that we are hypothesising would need to occur for that to become
                a reality. The philosophies and shifts are not fixed, instead
                they are narratives that thread through the different dimensions
                of our Ecosystem Matrix, as we seek to test them in different
                contexts.
              </p>
              <h3 className="p-4xl-regular text-white">
                Worldview philosophies
              </h3>
              <ul className="p-3xl ml-4 list-disc text-grey-1">
                <li>
                  Rooted in the recognition of the full web of life: From
                  violence, scarcity and separation to a thriving planetary
                  community of interbecoming. [Ne Lab, Radicle Civics &
                  Planetary Civics Arc, Conversational Design Studio]
                </li>
                <li>
                  Grounded in a non-bounded understanding of value: From
                  extractive profit-driven goals to entangled, intergenerational
                  and distributed value systems. [Ne & Cs Labs, Bioregional
                  Economies and M0 Cities Arc, Conversational Design Studio]
                </li>
                <li>
                  Enabled by technological ecosystems of care: From the
                  utilitarian ‘othering’ of technology to animistic interfaces
                  of wisdom and care. [Ne Lab, NZC Arc, CivTech Studio]
                </li>
              </ul>

              <h3 className="p-4xl-regular pt-8 text-white">
                Proposed structural shifts
              </h3>
              <ul className="p-3xl ml-4 list-disc text-grey-1">
                <li>
                  Beyond Property: From exerting control over ‘objects’ to
                  seeking reciprocal relationships with the full web of life.
                  [Pb Lab, Radicle Civics]
                </li>
                <li>
                  Beyond Labour: From humans employed as resources to vocations
                  of creativity, purpose and care. [Ne Lab, 7-Gen Cities, &
                  Empowered Thriving Communities Arc, OrgDev Studio]
                </li>
                <li>
                  Beyond Extraction: From extractive resource claims to the
                  infinite guardianship of the global commons. [Sm Lab M0
                  Cities, Planetary Civics, Regenerative Nutrition Arcs]
                </li>
                <li>
                  Beyond Private Contracts: From linear agreements that optimise
                  for the few to multi-party, dynamic, digital treaties of
                  respect. [BTR Lab, Radicle Civics & Empowered Thriving
                  Communities Arc]
                </li>
                <li>
                  Beyond Governance: From centralised enforcement to nurturing
                  institutions of stewardship. [Qd & BTR Lab, NZC Arc]
                </li>

                <li>
                  Beyond Monetary Capital: From the accumulation of financial
                  wealth to a social contract that regeneratively stewards the
                  diverse capitals of life. [Cs & Ne Lab, 7-Gen Cities Arc]
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-20"></div>
      </main>
    </div>
  );
}
