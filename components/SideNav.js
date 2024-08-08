import Link from 'next/link';
import { Fragment, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const mountedStyle = {
  animation: 'inAnimation 800ms ease-in',
};
const unmountedStyle = {
  animation: 'outAnimation 800ms ease-out',
  animationFillMode: 'forwards',
};

const pageNav = [
  {
    id: 1,
    title: 'Dark Matter Labs',
    description: '',
    link: '#real',
    sub: [],
  },
  {
    id: 2,
    title: 'Ecosystem Matrix',
    description:
      'We are not a think tank or consultancy with a single, neat theory of change. Instead, our collaborative approach is firmly grounded in the complex, messy reality of our existing socio-economic systems. Step-by-step, with the support of a growing ecosystem, we aim to build tangible pathways towards the options that we would like to manifest in the world. We have visualised our organisation’s response strategy across a three-dimensional matrix. The Matrix represents the dynamic interplay of our systemic goals, collaborations and context specific initiatives. ',
    link: '#eco',
    scrollPos: 900,
    sub: [
      {
        title: 'Labs',
        description:
          'Each of our Labs is focused on a specific area of the socio-economic system and the everyday codes (e.g. norms, behaviours and institutional logic) that form its structural backbone. The Labs are exploring what might be possible, both within and beyond the current structures, and working to develop technical expertise in those areas. For example, the Beyond The Rules Lab focuses on aspects such as demonstrating multi-actor governance structures whereas the Capital Systems Lab is working to enable strategic ecosystem investments.',
        link: '#',
        id: 3,
        scrollPos: 1100,
      },
      {
        title: 'Directional Arcs',
        description:
          'Our Arc workflows are designed with clear, directional goals that guide our efforts toward impactful outcomes. For instance, Net Zero Cities aims to enable smart, carbon-neutral cities by 2030, while Radicle Civics seeks to foster specific shifts in civic worldviews. These Arcs often involve collaboration with multiple Labs, integrating their technical expertise with tangible, real-world contexts.',
        link: '#',
        id: 4,
        scrollPos: 1200,
      },
      {
        title: 'Studios',
        description:
          'Studios are the connective tissue that support both the Labs and Missions. The studios explore themes that help our work to be implemented and more widely understood. For instance, the Civ Tech Studio develops the technological tools and knowledge for prototypes tested across the Dm ecosystem. Meanwhile, the Org DevStudio, positioned at the base of the Matrix, provides critical infrastructure support for the entire Dm Ecosystem.',
        link: '#',
        id: 5,
        scrollPos: 1300,
      },
      {
        title: 'Projects',
        description:
          'Each project in our portfolio contributes to a number of systemic capabilities. In doing so they intersect with the Labs, Arcs and Studios in various configurations. This allows us to prioritise flexible, compound learning across our internal and external ecosystems. Some projects are not part of an Arc, but each is attached to a Lab (or multiple Labs) where they contribute to building systemic capabilities.',
        link: '#',
        id: 6,
        scrollPos: 1400,
      },
      {
        id: 7,
        title: 'Systemic Capabilities',
        description:
          'The capabilities form the core of Dm’s Mission and sit at the centre of the Matrix. These are the systemic goals that we have set for ourselves as we strive to build pathways towards Life-Ennobling Economies. Some examples include decolonising currency stewardship, embedding data-augmented decision making and building the foundations for planetary stewardship institutions.',
        link: '#',
        sub: [],
        scrollPos: 1500,
      },
    ],
  },
  {
    id: 8,
    title: 'Context Weaving',
    description: '',
    link: '#context',
    sub: [],
  },
  {
    id: 9,
    title: 'Deep Paradigm',
    description: '',
    link: '#why',
    sub: [],
  },
];

export default function SideNav({ activeState }) {
  const [isMounted, setIsMounted] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div className="right-3/4 col-span-4 hidden max-w-xs lg:block">
      <div
        className={classNames(
          activeState === 2 ||
            activeState === 3 ||
            activeState === 4 ||
            activeState === 5 ||
            activeState === 6
            ? 'top-[20vh]'
            : 'top-1/3',
          'sticky left-0 flow-root',
        )}
      >
        <ul role="list" className="">
          {pageNav.map((activityItem) => (
            <li key={activityItem.id}>
              <div className="relative pb-4">
                <div className="relative flex items-start space-x-3">
                  <>
                    <div className="min-w-0 flex-1  ">
                      {activityItem.id === activeState ? (
                        <div
                          style={
                            activityItem.id === activeState
                              ? mountedStyle
                              : unmountedStyle
                          }
                          className="border-l border-l-grey-3 pl-2"
                        >
                          <h4
                            className="font-FKregular text-[17px] leading-[24.4px] text-grey-3 "
                            onClick={() =>
                              window.scrollTo({
                                top: activityItem.scrollPos,
                                behavior: 'smooth',
                              })
                            }
                          >
                            <Link href={activityItem.link}>
                              {activityItem.title}
                            </Link>
                          </h4>
                          <p className="font-PPbook text-[15.8px] leading-[23.1px] text-grey-3">
                            {activityItem.description}
                          </p>
                        </div>
                      ) : (
                        <div
                          style={
                            activityItem.id === activeState
                              ? mountedStyle
                              : unmountedStyle
                          }
                          className=""
                        >
                          <h4
                            className="font-FKregular text-[17px] leading-[24.4px] text-grey-2"
                            onClick={() =>
                              window.scrollTo({
                                top: activityItem.scrollPos,
                                behavior: 'smooth',
                              })
                            }
                          >
                            <Link href={activityItem.link}>
                              {activityItem.title}
                            </Link>
                          </h4>
                        </div>
                      )}
                    </div>
                  </>
                </div>
                {activityItem.sub.length > 0 &&
                  activityItem.sub.map((sub, subIndex) => (
                    <Fragment key={subIndex}>
                      {subIndex === 0 && <div className="py-2"></div>}
                      <span key={subIndex}>
                        <div className="relative">
                          <div className="relative flex items-start space-x-3">
                            <>
                              <div className="min-w-0 flex-1 ">
                                {sub.id === activeState ? (
                                  <div
                                    style={
                                      sub.id === activeState
                                        ? mountedStyle
                                        : unmountedStyle
                                    }
                                    className="border-l border-l-white pl-2"
                                  >
                                    <h5
                                      className="cursor-pointer font-FKregular text-[17px] leading-[24.4px] text-grey-3"
                                      onClick={() =>
                                        window.scrollTo({
                                          top: sub.scrollPos,
                                          behavior: 'smooth',
                                        })
                                      }
                                    >
                                      {sub.title}
                                    </h5>
                                    <p className="font-PPbook text-[15.8px] leading-[23.1px] text-grey-3">
                                      {sub.description}
                                    </p>
                                  </div>
                                ) : (
                                  <div
                                    style={
                                      sub.id === activeState
                                        ? mountedStyle
                                        : unmountedStyle
                                    }
                                    className=""
                                  >
                                    <h5
                                      className="cursor-pointer font-FKregular text-[17px] leading-[24.4px] text-grey-2"
                                      onClick={() =>
                                        window.scrollTo({
                                          top: sub.scrollPos,
                                          behavior: 'smooth',
                                        })
                                      }
                                    >
                                      {sub.title}
                                    </h5>
                                  </div>
                                )}
                              </div>
                            </>
                          </div>
                          {subIndex !== activityItem.sub.length - 1 && (
                            <div className="pb-4"></div>
                          )}
                        </div>
                      </span>
                    </Fragment>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
