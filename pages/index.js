import Head from 'next/head';
import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import '../styles/Home.module.css';
import landscapeImg from '../images/landscape.png';

export default function Home() {
  const [classT, setClassT] = useState('base');
  const [classL, setClassL] = useState('base');
  const [classR, setClassR] = useState('base');

  const [classA, setClassA] = useState('');
  const [classAT, setClassAT] = useState('');
  const [classAB, setClassAB] = useState('');

  const [classStudio, setClassStudio] = useState('');

  const [classT2, setClassT2] = useState('t1');
  const [activeState, setActiveState] = useState(1);

  const [animateOn, setAnimateOn] = useState('');
  const [animateOnLayer2, setAnimateOnLayer2] = useState('');
  const [animateOnLayer3, setAnimateOnLayer3] = useState('');
  const [animateOnLayer4, setAnimateOnLayer4] = useState('');

  const [animate2DOn, setAnimate2DOn] = useState('');

  const listenScrollEvent = () => {
    console.log(window.scrollY);
    if (window.scrollY < 1300) {
      setClassT('base');
      setClassL('base');
      setClassR('base');
      setClassA('');
      setClassAT('');
      setClassAB('');

      setActiveState(1);
      setClassStudio('');

      setClassT2('t1');
      setAnimateOn('');
      setAnimateOnLayer2('');
      setAnimateOnLayer3('');
      setAnimateOnLayer4('');
      setAnimate2DOn('');
    } else if (window.scrollY > 1300 && window.scrollY < 1400) {
      setActiveState(2);
      setClassStudio('');

      setClassT('base');
      setClassL('base');
      setClassR('base');
      setClassA('');
      setClassAT('');
      setClassAB('');

      setClassT2('t2');
      setAnimateOn('');
      setAnimateOnLayer2('');
      setAnimateOnLayer3('');
      setAnimateOnLayer4('');
      setAnimate2DOn('');
    } else if (window.scrollY > 1400 && window.scrollY < 1500) {
      setActiveState(3);
      setClassT('labs');
      setClassL('labs-left');
      setClassR('labs-right');
      setClassA('');
      setClassAT('');
      setClassAB('');

      setClassStudio('');

      setClassT2('t2');
      setAnimateOn('');
      setAnimateOnLayer2('');
      setAnimateOnLayer3('');
      setAnimateOnLayer4('');
      setAnimate2DOn('');
    } else if (window.scrollY > 1500 && window.scrollY < 1600) {
      setActiveState(4);
      setClassT('base');
      setClassL('base');
      setClassR('base');

      setClassA('arcs');
      setClassAT('arcs-top');
      setClassAB('arcs-bottom');

      setClassStudio('');

      setClassT2('t2');
      setAnimateOn('');
      setAnimateOnLayer2('');
      setAnimateOnLayer3('');
      setAnimateOnLayer4('');
      setAnimate2DOn('');
    } else if (window.scrollY > 1600 && window.scrollY < 1700) {
      setClassStudio('studio');
      setActiveState(5);
      setClassT('base');
      setClassL('base');
      setClassR('base');

      setClassA('');
      setClassAT('');
      setClassAB('');

      setClassT2('t2');
      setAnimateOn('');
      setAnimateOnLayer2('');
      setAnimateOnLayer3('');
      setAnimateOnLayer4('');
      setAnimate2DOn();
    } else if (window.scrollY > 1800 && window.scrollY < 2500) {
      setClassStudio('');
      setActiveState(6);
      setClassT('base');
      setClassL('base');
      setClassR('base');

      setClassA('');
      setClassAT('');
      setClassAB('');

      setClassT2('t2');
    } else if (window.scrollY > 2500) {
      setClassT2('t1');
    }

    if (window.scrollY > 1650) {
      setAnimateOn('animate');
      setAnimateOnLayer2('animateLayer2');
      setAnimateOnLayer3('animateLayer3');
      setAnimateOnLayer4('animateLayer4');
      setAnimate2DOn('');
    }

    if (window.scrollY > 2200) {
      setAnimate2DOn('animate2DLayer');
      setActiveState(7);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  // arcs states
  const [RCactive, setRCActive] = useState(false);
  const [RCHover, setRCHover] = useState(false);
  const [NZactive, setNZActive] = useState(false);
  const [NZHover, setNZHover] = useState(false);
  const [SGactive, setSGActive] = useState(false);
  const [M0active, setM0Active] = useState(false);
  const [M0Hover, setM0Hover] = useState(false);
  const [REactive, setREActive] = useState(false);
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

  return (
    <div>
      <Head>
        <title>Dark Matter Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Transition.Root show={openCS} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenCS}>
          <div className="fixed left-36 top-40 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      DmCS Lab is working to reframe what is possible within the
                      financial capital markets. This Lab is working with the
                      hypothesis that the investment logic of the current system
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
        <Dialog as="div" className="relative z-20" onClose={setOpenRC}>
          <div className="fixed left-56 top-80 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      Radicle Civics is a playful nod towards emergent shoots of
                      possibility (in botany, the radicle is the first part of a
                      seedling to emerge during the process of germination).
                      This arc aims to build cultural demonstrations that
                      support three new ways of being in the world: from assets
                      to agents, from externalities to entanglements, and from
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
        <Dialog as="div" className="relative z-20" onClose={setOpenNZ}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      The NZC Arc aspires to create smart cities that are carbon
                      neutral. This involves supporting cities to develop local
                      portfolios of coordinated actions across multiple domains
                      (e.g. technology, governance, policy, finance innovation,
                      social innovation) which accelerate emission reductions.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openSG} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenSG}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenM0}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      The M0 Arc is aiming to reimagine how we use and steward
                      materials in service of a regenerative built environment.
                      The Arc is asking questions around how we can innovate our
                      material inputs, adjust our understanding of comfort
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
        <Dialog as="div" className="relative z-20" onClose={setOpenRE}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenBE}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenPC}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenNE}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      the Ne Lab embodies the core philosophies of LEE. It aims
                      to stimulate a continuous and inclusive dialogue about how
                      we relate to the world and the implications for a
                      desirable future economy. The Lab is actively testing
                      three core worldview philosophies: what would a future
                      economy look and feel like if it was rooted in the
                      recognition of the full web of life, grounded by a
                      non-bounded theory of value and enabled by technological
                      ecosystems of care? In parallel, the NE Lab is building
                      practical pathways towards systemic goals such as
                      replacing profit as the collective goal and demonstrating
                      entangled value.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openPB} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenPB}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      The Pb Lab rejects the values of control and dominion as a
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
        <Dialog as="div" className="relative z-20" onClose={setOpenBR}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenSM}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      The Sm Lab is working to improve the visibility of our
                      interactions with the physical world. From material and
                      energy flows to land use, the Lab is building tools and
                      mapping systems that leverage technology to build a
                      dynamic understanding of how the system is responding.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openBL} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenBL}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenPF}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenQD}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      The Qd Lab is still nascent. Once launched, it will aim to
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
        <Dialog as="div" className="relative z-20" onClose={setOpenCT}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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

      <Transition.Root show={openCD} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenCD}>
          <div className="fixed right-60 top-60 z-10 w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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

      <Transition.Root show={openMC} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => {
            setOpenMC(false);
            setRCActive(false);
            setNEActive(false);
          }}
        >
          <div className="fixed right-28 top-48  w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      The NE lab is exploring the interaction between our
                      monetary systems and societal behaviour. To ground the
                      conceptual provocations, NE Lab has been collaborating
                      with the Radicle Civics Arc to prototype the first
                      distributed bioregional bank.{' '}
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
          className="relative z-20"
          onClose={() => {
            setOpenTAI(false);
            setNZActive(false);
            setCSActive(false);
          }}
        >
          <div className="fixed right-28 top-48  w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
          className="relative z-20"
          onClose={() => {
            setOpenNET(false);
            setNEActive(false);
            setM0Active(false);
          }}
        >
          <div className="fixed right-28 top-48  w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      he New Economic Thinking work provided mapping and
                      analysis of a just transition in relation to Europe’s
                      built environment. The work sat at the intersection of the
                      Ne Lab and M0 Arc, exploring the physical constraints and
                      potential response strategies for a material light and
                      socially just transition.
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
          className="relative z-20"
          onClose={() => {
            setOpenCL(false);
            setNZActive(false);
            setSMActive(false);
          }}
        >
          <div className="fixed right-28 top-48  w-screen overflow-y-auto">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
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
        <Dialog as="div" className="relative z-20" onClose={setOpenLEE}>
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      Life-Ennobling Economics is an invitational vision and a
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
                      responds to the underlying drivers of the polycrisis by
                      proposing a philosophical and action oriented framework,
                      centred on reconfiguring our relationships with each
                      other, with the planet and to our collective futures. You
                      can read more about LEE here.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCTC} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenCTC}>
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      City-scale tree canopies: as a pathway towards this
                      ambition, the TreesAI (Trees As Infrastructure) Team has
                      been working to create investable asset classes for the
                      planting and maintenance of trees.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openCIC} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenCIC}>
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      Collective intelligence of a city: the Cornerstone
                      Indicator initiative was developed to strengthen citizen
                      engagement networks that can sense what it means to thrive
                      in different contexts. The resultant indicators empower
                      communities to have agency over decisions and express
                      their voices in a continuous cycle of participatory
                      governance. As this work progresses we are aiming to link
                      the indicators to smart data to build a more coherent
                      picture of civic experience.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openRBF} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={setOpenRBF}>
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
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block"></div>
                  <div className="sm:flex sm:items-start">
                    <p className="font-FKregular text-base text-[#353535]">
                      Resilient bioregional food systems: we are working towards
                      this option in varied threads of our work. On the broader
                      topic of bioregional transitions we are exploring what a
                      regenerative bioregional economy might even look like. In
                      parallel, we are working with communities to design and
                      implement multi-sensory indicators that can be linked to
                      participatory governance systems, with the aim of
                      stewarding the regenerative health of a bioregion.
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

          <div className={`relative col-span-7`}>
            <div id="real" className="">
              <h1 className="font-FKmedium text-4xl text-white">
                Dark matter labs{' '}
                <span className="align-super text-3xl text-[#6D6D6D]">
                  season 4
                </span>
              </h1>
              <h2 className="max-w-[28rem] pb-10 pt-4 font-FKlight text-4xl text-white">
                We are building options for the next economies
              </h2>
              <p className="font-FKregular text-lg text-white">
                We believe that the interconnected crises of our time are
                symptoms of a deeper, structural miscoding of our economic
                systems. We understand these codes to be physical (e.g.
                biodiversity, energy, labour and materials), structural (e.g.
                money creation, embedded inequality and private property rights)
                and psychological (e.g. failure of the imagination).
              </p>

              <p className="pt-10 font-FKregular text-lg text-white">
                Recognising the complex, entangled reality of living systems, we
                are exploring alternative pathways for organising society and
                stewarding the shared planetary commons. Our working hypothesis
                is that these pathways must be rooted in a radical reframing of
                our relationship to everything; from technology and money to
                land and the other-than-human world. We are framing this
                transformation as a shift towards what we call:{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-pointer"
                  onClick={() => setOpenLEE(true)}
                >
                  Life-Ennobling Economies.
                </span>
              </p>

              <h3 className="max-w-md pt-20 font-FKregular text-3xl text-white">
                Economic options are bold directional aspirations
              </h3>
              <p className="pt-10 font-FKregular text-lg text-white">
                What would it mean to align societal ambition to the magnitude
                of the transformation that is required? We cannot possibly know
                how the future will play out or the specific infrastructures
                that we will need, but we can build towards a range of options.
                We are imaging new investment opportunities for{' '}
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
                . Perhaps the city-wide electrification of transport networks,
                the mental health of a community or the{' '}
                <span
                  className="text-[#A28CC6] hover:cursor-pointer"
                  onClick={() => setOpenCIC(true)}
                >
                  collective intelligence of a city
                </span>{' '}
                will become recognisable assets, understood as commitments to a
                regenerative future. What would be unleashed if houses were
                self-owning and affordable in perpetuity and rivers could
                express their need for care? At Dark Matter Labs, we believe all
                these things are both possible and necessary. These are bold
                aspirations and will only be achieved by a collective movement
                of diverse communities and unusual allies. This is a story of
                practical empowerment that we are proud to put our energy
                behind.
              </p>

              <div className="py-10 text-center">
                <p className="font-FKRegular text-xl text-white">
                  How do we structure our response? ↓
                </p>
              </div>
            </div>

            <div className={`${classT2}`}>
              <div id="eco" className="h-screen">
                <div className={`my-20 -ml-10 `}>
                  <div
                    className={`threeD absolute top-0 z-40 w-full opacity-100 ${animateOn}`}
                  >
                    <div className="grid grid-cols-8 gap-0.5">
                      <div>
                        {RCactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setRCActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setRCActive(true)}
                            onMouseLeave={() => setRCActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {RCactive || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}

                        {RCactive || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {RCactive || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {RCactive || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {RCactive || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {RCactive || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {RCactive || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classL} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classL} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>

                      <div>
                        {NZactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setNZActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setNZActive(true)}
                            onMouseLeave={() => setNZActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {NZactive || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                      <div>
                        {SGactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setSGActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setSGActive(true)}
                            onMouseLeave={() => setSGActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {SGactive || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                      <div>
                        {M0active ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setM0Active(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setM0Active(true)}
                            onMouseLeave={() => setM0Active(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {M0active || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                      <div>
                        {REactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setREActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setREActive(true)}
                            onMouseLeave={() => setREActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {REactive || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                      <div>
                        {BEactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setBEActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setBEActive(true)}
                            onMouseLeave={() => setBEActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {BEactive || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                      <div>
                        {PCactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseLeave={() => setPCActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-t hover:border-t-white hover:bg-[#414041] ${classA} ${classAT}`}
                            onMouseOver={() => setPCActive(true)}
                            onMouseLeave={() => setPCActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || NEactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || BLactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || CSactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || PFactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || PBactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || QDactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA}`}
                          >
                            {' '}
                          </div>
                        )}
                        {PCactive || BRactive ? (
                          <div
                            className={`bg-[#4C4B4B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#2C2B2B] py-8 ${classT} ${classA} ${classAB}`}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className=" bg-[#151414] py-8 "> </div>
                        {NEactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setNEActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setNEActive(true)}
                            onMouseLeave={() => setNEActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {BLactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setBLActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setBLActive(true)}
                            onMouseLeave={() => setBLActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {CSactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setCSActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setCSActive(true)}
                            onMouseLeave={() => setCSActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {PFactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setPFActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setPFActive(true)}
                            onMouseLeave={() => setPFActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {PBactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setPBActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setPBActive(true)}
                            onMouseLeave={() => setPBActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {QDactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setQDActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setQDActive(true)}
                            onMouseLeave={() => setQDActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                        {BRactive ? (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseLeave={() => setBRActive(false)}
                          >
                            {' '}
                          </div>
                        ) : (
                          <div
                            className={`bg-[#232222] py-8 hover:border-r hover:border-r-white hover:bg-[#414041]  ${classR}`}
                            onMouseOver={() => setBRActive(true)}
                            onMouseLeave={() => setBRActive(false)}
                          >
                            {' '}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`threeD absolute top-20 z-40 w-full opacity-40 ${classStudio} ${animateOnLayer2}`}
                  >
                    <div className=" grid max-w-4xl grid-cols-8 gap-0">
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className="bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>

                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`threeD capability-bg absolute top-40 z-20 w-full opacity-60 ${animateOnLayer3}`}
                  >
                    <div className=" grid max-w-4xl grid-cols-8 gap-0">
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className=" py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>

                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                      </div>
                      <div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8  "> </div>
                        <div className="  py-8 "> </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`threeD absolute top-60 z-20 w-full opacity-20 ${animateOnLayer4}`}
                  >
                    <div className=" grid max-w-4xl grid-cols-8 gap-0">
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className="bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>

                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                      </div>
                      <div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8  "> </div>
                        <div className=" bg-[#2C2B2B] py-8 "> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-80 font-FKmedium`}>
              <div
                className={`grid h-screen grid-cols-12 opacity-0 ${animate2DOn}`}
              >
                <div className="col-span-11">
                  <div className="grid max-w-6xl grid-cols-9 gap-0 ">
                    <div className="col-span-1"></div>
                    <h2 className="pb-4 text-xl font-light text-[#9F9F9F]">
                      Labs
                    </h2>
                  </div>

                  <div className="bg-alpha grid max-w-6xl grid-cols-9 gap-0.5">
                    <div className="">
                      <div className="bg-[#151414]">
                        <h2 className="pb-2 pt-[3.25rem] text-xl font-light text-[#9F9F9F]">
                          Arcs
                        </h2>
                      </div>
                      {RCactive || openRC ? (
                        <div
                          className="max-w-32 bg-[#FFFFFF] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenRC(true)}
                          onMouseLeave={() => setRCActive(false)}
                        >
                          <p className="text-xs font-medium ">Radicle Civics</p>
                        </div>
                      ) : RCHover ? (
                        <div className="max-w-32 border-l-2 border-l-white bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF]">
                          <p className="text-xs font-medium ">Radicle Civics</p>
                        </div>
                      ) : (
                        <div
                          className="max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF]"
                          onMouseOver={() => setRCActive(true)}
                          onClick={() => setOpenRC(true)}
                          onMouseLeave={() => setRCActive(false)}
                        >
                          <p className="text-xs font-medium ">Radicle Civics</p>
                        </div>
                      )}
                      {NZactive || openNZ ? (
                        <div
                          className="my-2 max-w-32 bg-[#EBEBEB] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenNZ(true)}
                          onMouseLeave={() => setNZActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Net Zero Cities
                          </p>
                        </div>
                      ) : NZHover ? (
                        <div className="mt-2 max-w-32 border-l-2 border-l-white bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF]">
                          <p className="text-xs font-medium ">
                            Net Zero Cities
                          </p>
                        </div>
                      ) : (
                        <div
                          className="my-2 max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF] "
                          onMouseOver={() => setNZActive(true)}
                          onClick={() => setOpenNZ(true)}
                          onMouseLeave={() => setNZActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Net Zero Cities
                          </p>
                        </div>
                      )}

                      {SGactive || openSG ? (
                        <div
                          className="my-2 max-w-32 bg-[#EBEBEB] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenSG(true)}
                          onMouseLeave={() => setSGActive(false)}
                        >
                          <p className="text-xs font-medium ">7Gen Cities</p>
                        </div>
                      ) : (
                        <div
                          className="my-2 max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF] "
                          onMouseOver={() => setSGActive(true)}
                          onClick={() => setOpenSG(true)}
                          onMouseLeave={() => setSGActive(false)}
                        >
                          <p className="text-xs font-medium ">7Gen Cities</p>
                        </div>
                      )}

                      {M0active || openM0 ? (
                        <div
                          className="my-2 max-w-32 bg-[#EBEBEB] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenM0(true)}
                          onMouseLeave={() => setM0Active(false)}
                        >
                          <p className="text-xs font-medium ">
                            M0
                            <br /> Cities
                          </p>
                        </div>
                      ) : (
                        <div
                          className="my-2 max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF]"
                          onMouseOver={() => setM0Active(true)}
                          onClick={() => setOpenM0(true)}
                          onMouseLeave={() => setM0Active(false)}
                        >
                          <p className="text-xs font-medium ">
                            M0
                            <br /> Cities
                          </p>
                        </div>
                      )}

                      {REactive ? (
                        <div
                          className="my-2 max-w-32 bg-[#EBEBEB] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenRE(true)}
                          onMouseLeave={() => setREActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Regen Nutrition
                          </p>
                        </div>
                      ) : (
                        <div
                          className="my-2 max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                          onMouseOver={() => setREActive(true)}
                          onClick={() => setOpenRE(true)}
                          onMouseLeave={() => setREActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Regen Nutrition
                          </p>
                        </div>
                      )}

                      {BEactive ? (
                        <div
                          className="my-2 max-w-32 bg-[#EBEBEB] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenBE(true)}
                          onMouseLeave={() => setBEActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Bioregional Economics
                          </p>
                        </div>
                      ) : (
                        <div
                          className="my-2 max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF]"
                          onMouseOver={() => setBEActive(true)}
                          onClick={() => setOpenBE(true)}
                          onMouseLeave={() => setBEActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Bioregional Economics
                          </p>
                        </div>
                      )}

                      {PCactive ? (
                        <div
                          className="my-2 max-w-32 bg-[#EBEBEB] pb-2 pl-2 pr-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenPC(true)}
                          onMouseLeave={() => setPCActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Planetary Civics
                          </p>
                        </div>
                      ) : (
                        <div
                          className="my-2 max-w-32 bg-[#2C2B2B] pb-2 pl-2 pr-2 pt-2 text-[#FFF]"
                          onMouseOver={() => setPCActive(true)}
                          onClick={() => setOpenPC(true)}
                          onMouseLeave={() => setPCActive(false)}
                        >
                          <p className="text-xs font-medium ">
                            Planetary Civics
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      {NEactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenNE(true)}
                          onMouseLeave={() => setNEActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            Next Economics Lab
                          </p>
                        </div>
                      ) : NEHover ? (
                        <div className="max-w-28 border-t-2 border-t-white bg-[#2C2B2B] px-2 pb-8 pt-1.5 text-[#FFF]">
                          <p className=" text-xs font-medium">
                            Next Economics Lab
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                          onMouseOver={() => setNEActive(true)}
                          onClick={() => setOpenNE(true)}
                          onMouseLeave={() => setNEActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            Next Economics Lab
                          </p>
                        </div>
                      )}

                      {(RCactive || NEactive) && !openMC ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : RCHover && NEHover ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] py-2 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onMouseLeave={() => {
                            setRCHover(false);
                            setNEHover(false);
                          }}
                          onClick={() => {
                            setOpenMC(true);
                          }}
                        >
                          <p className=" text-xs font-medium ">
                            Multivalent currencies
                          </p>
                        </div>
                      ) : openMC ? (
                        <div className=" max-w-28 bg-[#EBEBEB] py-2 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer">
                          <p className=" text-xs font-medium">
                            Multivalent currencies
                          </p>
                        </div>
                      ) : (
                        <div
                          className="hover:cursor-pointer] bg-[#414040] py-10 pl-1 pt-2"
                          onMouseEnter={() => {
                            setRCHover(true);
                            setNEHover(true);
                          }}
                        ></div>
                      )}
                      {NZactive || NEactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}

                      {SGactive || NEactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {(M0active || NEactive) && !openNET ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : M0Hover && NEHover ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] py-2 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onMouseLeave={() => {
                            setM0Hover(false);
                            setNEHover(false);
                          }}
                          onClick={() => {
                            setOpenNET(true);
                          }}
                        >
                          <p className=" text-xs font-medium ">
                            New Economic Thinking
                          </p>
                        </div>
                      ) : openNET ? (
                        <div className=" max-w-28 bg-[#EBEBEB] py-2 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer">
                          <p className=" text-xs font-medium">
                            New Economic Thinking
                          </p>
                        </div>
                      ) : (
                        <div
                          className="hover:cursor-pointer] mt-2 bg-[#414040] py-10 pl-1 pt-2"
                          onMouseEnter={() => {
                            setM0Hover(true);
                            setNEHover(true);
                          }}
                        ></div>
                      )}

                      {REactive || NEactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}

                      {BEactive || NEactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || NEactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {BLactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenBL(true)}
                          onMouseLeave={() => setBLActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            Beyond Labour
                            <br />
                            <br />
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF]"
                          onMouseOver={() => setBLActive(true)}
                          onClick={() => setOpenBL(true)}
                          onMouseLeave={() => setBLActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            Beyond Labour
                            <br />
                            <br />
                          </p>
                        </div>
                      )}
                      {RCactive || openRC || BLactive ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {NZactive || BLactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {SGactive || BLactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || BLactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || BLactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || BLactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || BLactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {openCS || CSactive ? (
                        <div
                          className="group max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenCS(true)}
                          onMouseLeave={() => setCSActive(false)}
                        >
                          <p className="mb-4 text-xs font-medium">
                            Capital Systems
                            <span className="inline">↗</span>
                          </p>
                        </div>
                      ) : CSHover ? (
                        <div className="max-w-28 border-t-2 border-t-white bg-[#2C2B2B] px-2 pb-[2.87rem] pt-2 text-[#FFF] ">
                          <p className=" text-xs font-medium">
                            Capital Systems
                          </p>
                        </div>
                      ) : (
                        <div
                          className="group max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                          onClick={() => {
                            setOpenCS(true);
                            setCSActive(true);
                          }}
                          onMouseOver={() => setCSActive(true)}
                          onMouseLeave={() => setCSActive(false)}
                        >
                          <p className="mb-4 text-xs font-medium">
                            Capital Systems
                            <span className="hidden group-hover:inline">
                              ↗
                            </span>
                          </p>
                        </div>
                      )}
                      {RCactive || openRC || CSactive || openCS ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {(NZactive || CSactive) && !openTAI ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2">
                          {' '}
                        </div>
                      ) : NZHover && CSHover ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] py-8 pl-2 pt-2  text-[#5965A3] hover:cursor-pointer"
                          onMouseLeave={() => {
                            setNZHover(false);
                            setCSHover(false);
                          }}
                          onClick={() => {
                            setOpenTAI(true);
                          }}
                        >
                          <p className=" text-xs font-medium ">TreesAI</p>
                        </div>
                      ) : openTAI ? (
                        <div className=" max-w-28 bg-[#EBEBEB] py-8 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer">
                          <p className=" text-xs font-medium">TreesAI</p>
                        </div>
                      ) : (
                        <div
                          className="mt-2 bg-[#414040] py-10 pt-2"
                          onMouseEnter={() => {
                            setNZHover(true);
                            setCSHover(true);
                          }}
                        ></div>
                      )}
                      {SGactive || CSactive || openCS ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || CSactive || openCS ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || CSactive || openCS ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || CSactive || openCS ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || CSactive || openCS ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {PFactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenPF(true)}
                          onMouseLeave={() => setPFActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            Philanthrop. Futures
                            <br />
                            <br />
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF]"
                          onMouseOver={() => setPFActive(true)}
                          onClick={() => setOpenPF(true)}
                          onMouseLeave={() => setPFActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            Philanthrop. Futures
                            <br />
                            <br />
                          </p>
                        </div>
                      )}
                      {RCactive || openRC || PFactive ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {NZactive || PFactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {SGactive || PFactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || PFactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || PFactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || PFactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || PFactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {PBactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenPB(true)}
                          onMouseLeave={() => setPBActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            Property & Beyond
                            <br />
                            <br />
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF]"
                          onMouseOver={() => setPBActive(true)}
                          onClick={() => setOpenPB(true)}
                          onMouseLeave={() => setPBActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            Property & Beyond
                            <br />
                            <br />
                          </p>
                        </div>
                      )}
                      {RCactive || openRC || PBactive ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {NZactive || PBactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {SGactive || PBactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || PBactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || PBactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || PBactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || PBactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {QDactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenQD(true)}
                          onMouseLeave={() => setQDActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            {' '}
                            Quantum Decisions
                            <br />
                            <br />
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                          onMouseOver={() => setQDActive(true)}
                          onClick={() => setOpenQD(true)}
                          onMouseLeave={() => setQDActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            {' '}
                            Quantum Decisions
                            <br />
                            <br />
                          </p>
                        </div>
                      )}
                      {RCactive || openRC || QDactive ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {NZactive || QDactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {SGactive || QDactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || QDactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || QDactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || QDactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || QDactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {BRactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenBR(true)}
                          onMouseLeave={() => setBRActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            Beyond the Rules
                            <br />
                            <br />
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF]"
                          onMouseOver={() => setBRActive(true)}
                          onClick={() => setOpenBR(true)}
                          onMouseLeave={() => setBRActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            Beyond the Rules
                            <br />
                            <br />
                          </p>
                        </div>
                      )}
                      {RCactive || openRC || BRactive ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {NZactive || BRactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {SGactive || BRactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || BRactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || BRactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || BRactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || BRactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>

                    <div>
                      {SMactive ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                          onClick={() => setOpenSM(true)}
                          onMouseLeave={() => setSMActive(false)}
                        >
                          <p className=" text-xs font-medium ">
                            Sensing, Modeling, Mapping
                          </p>
                        </div>
                      ) : (
                        <div
                          className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF]"
                          onMouseOver={() => setSMActive(true)}
                          onClick={() => setOpenSM(true)}
                          onMouseLeave={() => setSMActive(false)}
                        >
                          <p className=" text-xs font-medium">
                            Sensing, Modeling, Mapping
                          </p>
                        </div>
                      )}
                      {RCactive || SMactive ? (
                        <div className="max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {(NZactive || SMactive) && !openCL ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2">
                          {' '}
                        </div>
                      ) : NZHover && CTHover ? (
                        <div
                          className="max-w-28 bg-[#EBEBEB] py-8 pl-2 pt-2  text-[#5965A3] hover:cursor-pointer"
                          onMouseLeave={() => {
                            setNZHover(false);
                            setCTHover(false);
                          }}
                          onClick={() => {
                            setOpenCL(true);
                          }}
                        >
                          <p className=" text-xs font-medium ">CircuLaw</p>
                        </div>
                      ) : openCL ? (
                        <div className=" max-w-28 bg-[#EBEBEB] py-8 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer">
                          <p className=" text-xs font-medium">CircuLaw</p>
                        </div>
                      ) : (
                        <div
                          className="mt-2 bg-[#414040] py-10 pt-2"
                          onMouseEnter={() => {
                            setNZHover(true);
                            setCTHover(true);
                          }}
                        ></div>
                      )}
                      {SGactive || SMactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {M0active || SMactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {REactive || SMactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {BEactive || SMactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                      {PCactive || SMactive ? (
                        <div className="mt-2 max-w-28 bg-[#575657] py-10 pt-2 ">
                          {' '}
                        </div>
                      ) : (
                        <div className="mt-2 max-w-28 bg-[#414040] py-10 pt-2 ">
                          {' '}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="pt-[5.5rem]">
                  <div className="  ">
                    <h2 className="pl-4 pt-4 text-xl font-light text-[#9F9F9F]">
                      Studios
                    </h2>
                  </div>
                  {CTactive ? (
                    <div
                      className="h-14 w-20 bg-[#EBEBEB] px-2 py-3 hover:cursor-pointer"
                      onClick={() => setOpenCT(true)}
                      onMouseLeave={() => setCTActive(false)}
                    >
                      <p className=" pt-2 text-xs font-medium text-[#5965A3] ">
                        Civic Tech
                      </p>
                    </div>
                  ) : CTHover ? (
                    <div className="h-14 w-20 border-r-2 border-r-white bg-[#252424] px-2 py-3">
                      <p className=" pt-2 text-xs font-medium text-[#fff]">
                        Civic Tech
                      </p>
                    </div>
                  ) : (
                    <div
                      className="h-14 w-20 bg-[#252424] px-2 py-3"
                      onMouseOver={() => setCTActive(true)}
                      onClick={() => setOpenCT(true)}
                      onMouseLeave={() => setCTActive(false)}
                    >
                      <p className=" pt-2 text-xs font-medium text-[#fff]">
                        Civic Tech
                      </p>
                    </div>
                  )}
                  <div className="max-w-8 bg-[#252424] py-1 "> </div>
                  {CDactive ? (
                    <div
                      className="h-14 w-20 bg-[#EBEBEB] px-2 py-1 hover:cursor-pointer"
                      onClick={() => setOpenCD(true)}
                      onMouseLeave={() => setCDActive(false)}
                    >
                      <p className="text-xs font-medium text-[#5965A3] ">
                        Conversat-
                        <br /> ional Design
                      </p>
                    </div>
                  ) : (
                    <div
                      className="h-14 w-20 bg-[#252424] px-2 py-1"
                      onMouseOver={() => setCDActive(true)}
                      onClick={() => setOpenCD(true)}
                      onMouseLeave={() => setCDActive(false)}
                    >
                      <p className="text-xs font-medium text-[#fff]">
                        Conversat-
                        <br /> ional Design
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="max-w-xl  font-FKregular text-3xl text-white">
                The overarching LEE Mission allows us to contextually adjust the
                horizons  of our interactions and interventions, whilst building
                towards a coherent field of influence and change. 
              </h3>
              <p className="pt-10 font-FKregular text-lg text-white">
                How can we interact with the stunning complexity of life? Is it
                possible to combine a deep awe and respect for emergence with a
                desire to shift and mould the world we live in? It would be an
                understatement to say that we have no solid answers to these
                questions. And yet... the aspiration to strive and work towards
                a survivable future is a yearning that outweighs everything
                else. Holding that perspective, we are organising across
                multiple dimensions and working concurrently with varied
                cultural frames, geographical contexts and time horizons. 
              </p>
              <p className="pt-10 font-FKregular text-lg text-white">
                A single theory of change feels wildly inadequate; instead we
                using the following framework to structure a continuous process
                of landscape scanning and action:
              </p>
              <Image
                src={landscapeImg}
                className="mx-auto my-10"
                alt="world map with dm matrix"
                height={500}
                width={500}
              />
              <h3 className="max-w-xl  font-FKregular text-3xl text-white">
                Political landscapes
              </h3>
              <p className="pb-8 pt-10 font-FKregular text-lg text-white">
                A right wing context may provide more fertile ground for rapidly
                mobilising complex technologies than a liberal context. Or
                perhaps in a context like Ukraine where crisis and instability
                has become an everyday reality, the motivation for citizens to
                drive alternative governance models is heightened. This could
                start from a desire to support the military via voluntary
                crowdfunding and extend to new sectors and patterns of
                behaviour.
              </p>

              <h3 className="max-w-xl  font-FKregular text-3xl text-white">
                Geographical landscapes
              </h3>
              <p className="pb-8 pt-10 font-FKregular text-lg text-white">
                In some cases we may need to look to edge communities for an
                idea to gain traction (e.g. a distributed currency), whereas in
                others a supportive social infrastructure is needed to establish
                agency (e.g. a material registry). Each country has something to
                teach us; from land laws in Scotland to open data systems in
                Taiwan, we are open to how our work can weave and adapt to local
                contexts.
              </p>

              <h3 className="max-w-xl  font-FKregular text-3xl text-white">
                Time horizons
              </h3>
              <p className="pb-8 pt-10 font-FKregular text-lg text-white">
                Recognising that a speculative policy in one context might
                already be triage response in another can increase our
                collective learning and ability to test edge ideas. This could
                mean working with Indigenous communities on Turtle Island (North
                America) to urgently finance the regeneration of indigenous
                lands. It could also entail supporting marginalised communities
                in England to seed alternative housing models in response to the
                systemic crisis crisis.
              </p>

              <h3 className="max-w-xl  font-FKregular text-3xl text-white">
                Alliances
              </h3>
              <p className="pt-10 font-FKregular text-lg text-white">
                On the surface a central bank and an ecological activist may
                have little in common. Yet, central banks have a mandate to
                preserve stability, which in the future could involve recoupling
                money issuance to ecological rights? This logic might also
                extend to cultural intersectional points, such as indigenous
                perspectives and state mandates in locations such as Australia
                and India.
              </p>
            </div>
          </div>
        </div>
        <div className="py-80"></div>
      </main>
    </div>
  );
}
