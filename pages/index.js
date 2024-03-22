import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Disclosure, Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';
import { ScrollParallax } from 'react-just-parallax';
import dmLogo from '../images/DML.gif';
import '../styles/Home.module.css';

const activity = [
  {
    id: 1,
    active: true,
    title: 'Ecosystem Matrix',
    description:
      'We are not a think tank, consultancy, or design studio. We  and we do not have a single, neat theory of change. Instead, we arrange our efforts across an ecosystem of collaborations, and ground our approach is firmly grounded in the complex, messy reality of our existing socio-economic systems. Step-by-step, through multi-scalar global collaborationwith the support of a growing ecosystem, we aim to build tangible pathways towards the options that we would like to manifest in the world.',
  },
  {
    id: 2,
    active: false,
    title: 'Labs',
    description: 'Short snappy description',
  },
  {
    id: 3,
    active: false,
    title: 'Arcs',
    description: 'Short snappy description',
  },
  {
    id: 4,
    active: false,
    title: 'Studios',
    description: 'Short snappy description',
  },
];

const activity2 = [
  {
    id: 1,
    active: false,
    title: 'Ecosystem Matrix',
    description: 'Organizational response strategy',
  },
  {
    id: 2,
    active: true,
    title: 'Labs',
    description:
      'Each of our Labs is focused on a specific area of the socio-economic system and the everyday codes (e.g. norms, behaviours and institutional logic) that form its structural backbone. The Labs are exploring what might be possible, both within and beyond the current structures, and working to develop technical expertise in those areas. For example, the Beyond The RulesLab focuses on aspects such as demonstrating multi-actor governance structures whereas the Capital SystemsLab is working to enable strategic ecosystem investments.',
  },
  {
    id: 3,
    active: false,
    title: 'Arcs',
    description: 'Short snappy description',
  },
  {
    id: 4,
    active: false,
    title: 'Studios',
    description: 'Short snappy description',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  // arcs states
  const [RCactive, setRCActive] = useState(false);
  const [NZactive, setNZActive] = useState(false);
  const [SGactive, setSGActive] = useState(false);
  const [M0active, setM0Active] = useState(false);
  const [REactive, setREActive] = useState(false);
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

  // open modal states
  const [openLEE, setOpenLEE] = useState(false);
  const [openMC, setOpenMC] = useState(false);
  const [openRC, setOpenRC] = useState(false);
  const [openNZ, setOpenNZ] = useState(false);
  const [openSG, setOpenSG] = useState(false);
  const [openM0, setOpenM0] = useState(false);
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                <Dialog.Panel className="relative transform overflow-hidden bg-gradient-to-r from-[#F4F4F4] to-[#A7A7A7] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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

      <main className="mx-auto max-w-screen-xl">
        <div className="mt-20 flex justify-between gap-x-0">
          <div className="">
            <Image
              src={dmLogo}
              alt="Dm logo animation in multiple languages"
              height={500}
              width={500}
            />
          </div>
          <div className="">
            <Disclosure as="nav">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            <a
                              href="#"
                              className=" text-md px-3 py-2 font-FKmedium text-white"
                            >
                              Feed
                            </a>
                            <a
                              href="#"
                              className="text-md rounded-md px-3 py-2 font-FKmedium text-white"
                            >
                              Team
                            </a>
                            <a
                              href="#"
                              className="text-md rounded-md px-3 py-2 font-FKmedium text-white"
                            >
                              Partnerships
                            </a>
                            <a
                              href="#"
                              className="text-md rounded-md px-3 py-2 font-FKmedium text-white"
                            >
                              Jobs
                            </a>
                            <a
                              href="#"
                              className="text-md rounded-md px-3 py-2 font-FKmedium text-white"
                            >
                              Contact
                            </a>
                            <a
                              href="#"
                              className="text-md rounded-md px-3 py-2 font-FKmedium text-white"
                            >
                              Provocations↗
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="-mr-2 flex sm:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {/* TODO: update mobile menu */}
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                      >
                        Dashboard
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Team
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Projects
                      </Disclosure.Button>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Calendar
                      </Disclosure.Button>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="font-FKmedium text-4xl text-white">
              Dark matter labs{' '}
              <span className="align-super text-3xl text-[#6D6D6D]">
                season 4
              </span>
            </h1>
            <h2 className="max-w-[28rem] pb-10 pt-20 font-FKlight text-4xl text-white">
              We are building options for the next economies
            </h2>
            <p className="font-FKregular text-xl text-[#6A6A6A]">
              ↘ Real world options
            </p>
            <p className="font-FKregular text-xl text-[#6A6A6A]">
              ↘ Ecosystem matrix
            </p>
            <p className="font-FKregular text-xl text-[#6A6A6A]">
              ↘ Contexts weaving
            </p>
            <p className="font-FKregular text-xl text-[#6A6A6A]">
              ↘ Deep paradigm
            </p>
          </div>

          <div>
            <p className="font-FKregular text-2xl text-white">
              We believe that the interconnected crises of our time are symptoms
              of a deeper, structural miscoding of our economic systems. We
              understand these codes to be physical (e.g. biodiversity, energy,
              labour and materials), structural (e.g. money creation, embedded
              inequality and private property rights) and psychological (e.g.
              failure of the imagination).
            </p>

            <p className="pt-10 font-FKregular text-2xl text-white">
              Recognising the complex, entangled reality of living systems, we
              are exploring alternative pathways for organising society and
              stewarding the shared planetary commons. Our working hypothesis is
              that these pathways must be rooted in a radical reframing of our
              relationship to everything; from technology and money to land and
              the other-than-human world. We are framing this transformation as
              a shift towards what we call:{' '}
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
              What would it mean to align societal ambition to the magnitude of
              the transformation that is required? We cannot possibly know how
              the future will play out or the specific infrastructures that we
              will need, but we can build towards a range of options. We are
              imaging new investment opportunities for{' '}
              <span className="text-[#A28CC6]">city-scale tree canopies</span>,
              community endowments and{' '}
              <span className="text-[#A28CC6]">
                resilient bioregional food systems
              </span>
              . Perhaps the city-wide electrification of transport networks, the
              mental health of a community or the{' '}
              <span className="text-[#A28CC6]">
                collective intelligence of a city
              </span>{' '}
              will become recognisable assets, understood as commitments to a
              regenerative future. What would be unleashed if houses were
              self-owning and affordable in perpetuity and rivers could express
              their need for care? At Dark Matter Labs, we believe all these
              things are both possible and necessary. These are bold aspirations
              and will only be achieved by a collective movement of diverse
              communities and unusual allies. This is a story of practical
              empowerment that we are proud to put our energy behind.
            </p>
          </div>
        </div>
        <div className="py-20 text-center">
          <p className="font-FKRegular text-xl text-white">
            How do we structure our response? ↓
          </p>
        </div>

        <ScrollParallax strength={0.9} lerpEase={0.06}>
          <div className="h-screen w-full snap-mandatory overflow-auto scroll-smooth">
            <div className="relative h-screen w-full snap-start">
              <div className="-ml-20">
                <div className="test  absolute top-0 z-40 w-full opacity-100">
                  <div className=" grid max-w-4xl grid-cols-8 gap-2">
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>

                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="test  absolute top-20 z-40 w-full opacity-40">
                  <div className=" grid max-w-4xl grid-cols-8 gap-0">
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 bg-[#2C2B2B] py-12 pt-2 "> </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>

                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="test  absolute top-40 z-20 w-full opacity-20">
                  <div className=" grid max-w-4xl grid-cols-8 gap-0">
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 bg-[#2C2B2B] py-12 pt-2 "> </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>

                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-3/4 mt-20">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {activity.map((activityItem, activityItemIdx) => (
                      <li key={activityItem.id}>
                        <div className="relative pb-8">
                          {activityItemIdx !== activity.length - 1 ? (
                            <span
                              className="absolute left-2 top-2 -ml-px h-full w-0.5 bg-[#9F9F9F]"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex items-start space-x-3">
                            <>
                              <div>
                                <div className="relative px-1">
                                  <div className="mt-3 flex h-2 w-2 items-center justify-center rounded-full bg-[#D9D9D9] ring-8 ring-[#D9D9D9]"></div>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1 ">
                                {activityItem.active ? (
                                  <div className="">
                                    <h4 className="font-FKmedium text-2xl text-white">
                                      {activityItem.title}
                                    </h4>
                                    <p className="font-FKregular text-sm text-[#C1C1C1]">
                                      {activityItem.description}
                                    </p>
                                  </div>
                                ) : (
                                  <div className="">
                                    <h4 className="font-FKmedium text-xl text-[#6A6A6A]">
                                      {activityItem.title}
                                    </h4>
                                    <p className="font-FKregular text-sm text-[#6A6A6A]">
                                      {activityItem.description}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative h-screen w-full snap-start">
              <div className="-ml-20">
                <div className="test  absolute top-0 z-40 w-full opacity-100">
                  <div className=" grid max-w-4xl grid-cols-8 gap-2">
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-l-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>

                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-[#666666] bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className="max-w-28 border-2 border-[#151414] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 border-y-2 border-r-2 border-[#666666] bg-[#232222] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="test  absolute top-20 z-40 w-full opacity-40">
                  <div className=" grid max-w-4xl grid-cols-8 gap-0">
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 bg-[#2C2B2B] py-12 pt-2 "> </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>

                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="test  absolute top-40 z-20 w-full opacity-20">
                  <div className=" grid max-w-4xl grid-cols-8 gap-0">
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className="max-w-28 bg-[#2C2B2B] py-12 pt-2 "> </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>

                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                    <div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                      <div className=" max-w-28 bg-[#2C2B2B] py-12 pt-2 ">
                        {' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-3/4 mt-20">
                <div className="flow-root">
                  <ul role="list" className="-mb-8">
                    {activity2.map((activityItem, activityItemIdx) => (
                      <li key={activityItem.id}>
                        <div className="relative pb-8">
                          {activityItemIdx !== activity2.length - 1 ? (
                            <span
                              className="absolute left-2 top-2 -ml-px h-full w-0.5 bg-[#9F9F9F]"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex items-start space-x-3">
                            <>
                              <div>
                                <div className="relative px-1">
                                  <div className="mt-3 flex h-2 w-2 items-center justify-center rounded-full bg-[#D9D9D9] ring-8 ring-[#D9D9D9]"></div>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1 ">
                                {activityItem.active ? (
                                  <div className="">
                                    <h4 className="font-FKmedium text-2xl text-white">
                                      {activityItem.title}
                                    </h4>
                                    <p className="font-FKregular text-sm text-[#C1C1C1]">
                                      {activityItem.description}
                                    </p>
                                  </div>
                                ) : (
                                  <div className="">
                                    <h4 className="font-FKmedium text-xl text-[#6A6A6A]">
                                      {activityItem.title}
                                    </h4>
                                    <p className="font-FKregular text-sm text-[#6A6A6A]">
                                      {activityItem.description}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollParallax>

        <div className="mx-10 my-10 font-FKmedium ">
          <div className="grid grid-cols-12">
            <div className="col-span-11">
              <div className="grid max-w-6xl grid-cols-9 gap-0 ">
                <div className="col-span-8"></div>
                <h2 className="pb-4 text-4xl font-medium text-[#9F9F9F]">
                  Labs
                </h2>
              </div>

              <div className=" test2 grid max-w-6xl grid-cols-9 gap-0">
                <div className="">
                  <div className="bg-[#151414]">
                    <h2 className="pb-4 pt-14 text-4xl font-medium text-[#9F9F9F]">
                      Arcs
                    </h2>
                  </div>
                  {RCactive || openRC ? (
                    <div
                      className="max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setOpenRC(true)}
                      onMouseLeave={() => setRCActive(false)}
                    >
                      <p className="text-base font-medium ">Radicle Civics</p>
                    </div>
                  ) : (
                    <div
                      className="max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setRCActive(true)}
                      onClick={() => setOpenRC(true)}
                      onMouseLeave={() => setRCActive(false)}
                    >
                      <p className="text-base font-medium ">Radicle Civics</p>
                    </div>
                  )}
                  {NZactive || openNZ ? (
                    <div
                      className="my-2 max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setOpenNZ(true)}
                      onMouseLeave={() => setNZActive(false)}
                    >
                      <p className="text-base font-medium ">Net Zero Cities</p>
                    </div>
                  ) : (
                    <div
                      className="my-2 max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setNZActive(true)}
                      onClick={() => setOpenNZ(true)}
                      onMouseLeave={() => setNZActive(false)}
                    >
                      <p className="text-base font-medium ">Net Zero Cities</p>
                    </div>
                  )}

                  {SGactive || openSG ? (
                    <div
                      className="my-2 max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setOpenSG(true)}
                      onMouseLeave={() => setSGActive(false)}
                    >
                      <p className="text-base font-medium ">7Gen Cities</p>
                    </div>
                  ) : (
                    <div
                      className="my-2 max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setSGActive(true)}
                      onClick={() => setOpenSG(true)}
                      onMouseLeave={() => setSGActive(false)}
                    >
                      <p className="text-base font-medium ">7Gen Cities</p>
                    </div>
                  )}

                  {M0active ? (
                    <div
                      className="my-2 max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setM0Active(false)}
                      onMouseLeave={() => setM0Active(false)}
                    >
                      <p className="text-base font-medium ">
                        M0
                        <br /> Cities
                      </p>
                    </div>
                  ) : (
                    <div
                      className="my-2 max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setM0Active(true)}
                      onClick={() => setM0Active(true)}
                      onMouseLeave={() => setM0Active(false)}
                    >
                      <p className="text-base font-medium ">
                        M0
                        <br /> Cities
                      </p>
                    </div>
                  )}

                  {REactive ? (
                    <div
                      className="my-2 max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setREActive(false)}
                      onMouseLeave={() => setREActive(false)}
                    >
                      <p className="text-base font-medium ">Regen Nutrition</p>
                    </div>
                  ) : (
                    <div
                      className="my-2 max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setREActive(true)}
                      onClick={() => setREActive(true)}
                      onMouseLeave={() => setREActive(false)}
                    >
                      <p className="text-base font-medium ">Regen Nutrition</p>
                    </div>
                  )}

                  {BEactive ? (
                    <div
                      className="my-2 max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setBEActive(false)}
                      onMouseLeave={() => setBEActive(false)}
                    >
                      <p className="text-base font-medium ">
                        Bioregional Economics
                      </p>
                    </div>
                  ) : (
                    <div
                      className="my-2 max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setBEActive(true)}
                      onClick={() => setBEActive(true)}
                      onMouseLeave={() => setBEActive(false)}
                    >
                      <p className="text-base font-medium ">
                        Bioregional Economics
                      </p>
                    </div>
                  )}

                  {PCactive ? (
                    <div
                      className="my-2 max-w-32 bg-[#EBEBEB] pb-8 pl-4 pr-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setPCActive(false)}
                      onMouseLeave={() => setPCActive(false)}
                    >
                      <p className="text-base font-medium ">Planetary Civics</p>
                    </div>
                  ) : (
                    <div
                      className="my-2 max-w-32 bg-[#2C2B2B] pb-8 pl-4 pr-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setPCActive(true)}
                      onClick={() => setPCActive(true)}
                      onMouseLeave={() => setPCActive(false)}
                    >
                      <p className="text-base font-medium ">Planetary Civics</p>
                    </div>
                  )}
                </div>
                <div>
                  {NEactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setNEActive(false)}
                      onMouseLeave={() => setNEActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
                        Next Economics Lab
                      </p>
                    </div>
                  ) : (
                    <div
                      className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setNEActive(true)}
                      onClick={() => setNEActive(true)}
                      onMouseLeave={() => setNEActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        Next Economics Lab
                      </p>
                    </div>
                  )}
                  {(RCactive || NEactive || openRC) && !openMC ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2"> </div>
                  ) : openMC ? (
                    <div className=" max-w-28 bg-[#EBEBEB] py-8 pl-2 pt-2 text-[#5965A3] hover:cursor-pointer">
                      <p className=" text-base font-medium">
                        Multivalent currencies
                      </p>
                    </div>
                  ) : (
                    <div
                      className="group max-w-28 bg-[#414040] py-20 pl-2 pt-2 hover:cursor-pointer hover:bg-[#EBEBEB] hover:py-5 hover:text-[#5965A3]"
                      onClick={() => {
                        setRCActive(true);
                        setNEActive(true);
                        setOpenMC(true);
                      }}
                    >
                      <p className="hidden text-base font-medium group-hover:inline">
                        Multivalent currencies
                      </p>
                    </div>
                  )}
                  {NZactive || NEactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}

                  {SGactive || NEactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || NEactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}

                  {REactive || NEactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}

                  {BEactive || NEactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || NEactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>

                <div>
                  {BLactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setBLActive(false)}
                      onMouseLeave={() => setBLActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
                        Beyond Labour
                        <br />
                        <br />
                      </p>
                    </div>
                  ) : (
                    <div
                      className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setBLActive(true)}
                      onClick={() => setBLActive(true)}
                      onMouseLeave={() => setBLActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        Beyond Labour
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || BLactive ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || BLactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || BLactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || BLactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || BLactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || BLactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || BLactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
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
                      <p className="mb-2 min-h-16 text-base font-medium">
                        Capital Systems
                        <span className="inline">↗</span>
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
                      <p className="mb-2 min-h-16 text-base font-medium">
                        Capital Systems
                        <span className="hidden group-hover:inline">↗</span>
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || CSactive || openCS ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || CSactive || openCS ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || CSactive || openCS ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || CSactive || openCS ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || CSactive || openCS ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || CSactive || openCS ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || CSactive || openCS ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>

                <div>
                  {PFactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setPFActive(false)}
                      onMouseLeave={() => setPFActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
                        Philanthrop. Futures
                        <br />
                        <br />
                      </p>
                    </div>
                  ) : (
                    <div
                      className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setPFActive(true)}
                      onClick={() => setPFActive(true)}
                      onMouseLeave={() => setPFActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        Philanthrop. Futures
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || PFactive ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || PFactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || PFactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || PFactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || PFactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || PFactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || PFactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>

                <div>
                  {PBactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setPBActive(false)}
                      onMouseLeave={() => setPBActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
                        Property & Beyond
                        <br />
                        <br />
                      </p>
                    </div>
                  ) : (
                    <div
                      className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setPBActive(true)}
                      onClick={() => setPBActive(true)}
                      onMouseLeave={() => setPBActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        Property & Beyond
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || PBactive ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || PBactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || PBactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || PBactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || PBactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || PBactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || PBactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>

                <div>
                  {QDactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setQDActive(false)}
                      onMouseLeave={() => setQDActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
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
                      onClick={() => setQDActive(true)}
                      onMouseLeave={() => setQDActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        {' '}
                        Quantum Decisions
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || QDactive ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || QDactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || QDactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || QDactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || QDactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || QDactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || QDactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>

                <div>
                  {BRactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setBRActive(false)}
                      onMouseLeave={() => setBRActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
                        Beyond the Rules
                        <br />
                        <br />
                      </p>
                    </div>
                  ) : (
                    <div
                      className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setBRActive(true)}
                      onClick={() => setBRActive(true)}
                      onMouseLeave={() => setBRActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        Beyond the Rules
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || BRactive ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || BRactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || BRactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || BRactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || BRactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || BRactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || BRactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>

                <div>
                  {SMactive ? (
                    <div
                      className="max-w-28 bg-[#EBEBEB] px-2 pb-8 pt-2 text-[#5965A3] hover:cursor-pointer"
                      onClick={() => setSMActive(false)}
                      onMouseLeave={() => setSMActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium ">
                        Sensing, Modeling, Mapping
                      </p>
                    </div>
                  ) : (
                    <div
                      className="max-w-28 bg-[#2C2B2B] px-2 pb-8 pt-2 text-[#FFF] hover:cursor-pointer hover:bg-[#EBEBEB] hover:text-[#5965A3]"
                      onMouseOver={() => setSMActive(true)}
                      onClick={() => setSMActive(true)}
                      onMouseLeave={() => setSMActive(false)}
                    >
                      <p className="min-h-16 text-base font-medium">
                        Sensing, Modeling, Mapping
                      </p>
                    </div>
                  )}
                  {RCactive || openRC || SMactive ? (
                    <div className="max-w-28 bg-[#575657] py-20 pt-2 "> </div>
                  ) : (
                    <div className="max-w-28 bg-[#414040] py-20 pt-2 "> </div>
                  )}
                  {NZactive || SMactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {SGactive || SMactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {M0active || SMactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {REactive || SMactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {BEactive || SMactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                  {PCactive || SMactive ? (
                    <div className="mt-2 max-w-28 bg-[#575657] py-20 pt-2 ">
                      {' '}
                    </div>
                  ) : (
                    <div className="mt-2 max-w-28 bg-[#414040] py-20 pt-2 ">
                      {' '}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-40">
              <div className="mt-2 max-w-6 bg-[#252424] py-14 "> </div>
              <div className=" max-w-6 bg-[#252424] py-20 "> </div>
              <div className=" max-w-6 bg-[#252424] ">
                <h2 className="pl-10 pt-4 text-4xl font-medium text-[#9F9F9F]">
                  Studios
                </h2>
              </div>
              <div className="max-w-28 bg-[#252424] px-2 pb-8 pt-2 ">
                <p className="min-h-16 pt-2 text-base font-medium text-[#fff]">
                  Civic Tech
                </p>
              </div>
              <div className="max-w-6 bg-[#252424] py-2 "> </div>
              <div className=" max-w-28 bg-[#252424] px-2 pb-8 ">
                <p className="min-h-16 pt-2 text-base font-medium text-[#fff]">
                  Conversat-
                  <br /> ional Design
                </p>
              </div>
              <div className="max-w-6 bg-[#252424] py-2 "> </div>
              <div className=" max-w-28 bg-[#252424] px-2 pb-8 ">
                <p className="min-h-16 pt-2 text-base font-medium text-[#fff]">
                  Org Dev
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
