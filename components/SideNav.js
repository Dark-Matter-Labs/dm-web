import Link from 'next/link';

const pageNav = [
  {
    id: 1,
    title: 'Real world options',
    description: '',
    link: '#real',
    sub: [],
  },
  {
    id: 2,
    title: 'Ecosystem Matrix',
    description:
      'We are not a think tank, consultancy, or design studio. We and we do not have a single, neat theory of change. Instead, we arrange our efforts across an ecosystem of collaborations, and ground our approach is firmly grounded in the complex, messy reality of our existing socio-economic systems. Step-by-step, through multi-scalar global collaborationwith the support of a growing ecosystem, we aim to build tangible pathways towards the options that we would like to manifest in the world.',
    link: '#eco',
    sub: [
      {
        title: 'Labs',
        description:
          'Each of our Labs is focused on a specific area of the socio-economic system and the everyday codes (e.g. norms, behaviours and institutional logic) that form its structural backbone. The Labs are exploring what might be possible, both within and beyond the current structures, and working to develop technical expertise in those areas. For example, the Beyond The RulesLab focuses on aspects such as demonstrating multi-actor governance structures whereas the Capital SystemsLab is working to enable strategic ecosystem investments.',
        link: '#',
        id: 3,
      },
      {
        title: 'Arcs',
        description:
          'Our Directional Arc workflows are designed with clear, directional goals that guide our efforts toward impactful outcomes. For instance, Net Zero CitiesArc aims to enable smart, carbon-neutral cities by 2030, while Radicle CivicsArc seeks to foster specific shifts in civic worldviews. These Arcs often involve collaboration with multiple Labs, integrating their technical expertise with tangible, real-world contexts.',
        link: '#',
        id: 4,
      },
      {
        title: 'Studios',
        description:
          'Studios are the connective tissue that support both the Labs and Arcs. The studios explore themes that help our work to be implemented and more widely understood. For instance, the Civ TechStudio develops the technological tools and knowledge for prototypes tested across the Dm ecosystem. Meanwhile, the Org DevStudio, positioned at the base of the Matrix, provides critical infrastructure support for the entire Dm Ecosystem.',
        link: '#',
        id: 5,
      },
      {
        title: 'How it works',
        link: '#',
        id: 6,
      },
    ],
  },
  {
    id: 8,
    title: 'Contexts weaving',
    description: '',
    link: '#',
    sub: [],
  },
  {
    id: 9,
    title: 'Deep Paradigm',
    description: '',
    link: '#',
    sub: [],
  },
];

export default function SideNav({ activeState }) {
  return (
    <div className="right-3/4 col-span-5 mt-20 max-w-xs">
      <div className="sticky left-0 top-[20%] flow-root ">
        <ul role="list" className="">
          {pageNav.map((activityItem) => (
            <li key={activityItem.id}>
              <div className="relative pb-4">
                <div className="relative flex items-start space-x-3">
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="mt-3 flex h-1 w-1 items-center justify-center bg-[#D9D9D9] ring-8 ring-[#D9D9D9]"></div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 ">
                      {activityItem.id === activeState ? (
                        <div className="">
                          <h4 className="font-FKmedium text-2xl text-white">
                            <Link href={activityItem.link}>
                              {activityItem.title}
                            </Link>
                          </h4>
                          <p className="font-FKregular text-sm text-[#C1C1C1]">
                            {activityItem.description}
                          </p>
                        </div>
                      ) : (
                        <div className="">
                          <h4 className="font-FKmedium text-2xl text-[#6A6A6A]">
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
                    <span key={sub.title}>
                      <div className="relative pb-4">
                        {subIndex !== activityItem.sub.length - 1 ? (
                          <span
                            className="absolute left-1 top-2 h-full w-0.5 bg-[#9F9F9F] "
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex items-start space-x-3">
                          <>
                            <div>
                              <div className="relative px-1">
                                <div className="mt-3 flex h-0.5 w-0.5 items-center justify-center rounded-full bg-[#D9D9D9] ring-8 ring-[#D9D9D9]"></div>
                              </div>
                            </div>
                            <div className="min-w-0 flex-1 ">
                              {sub.id === activeState ? (
                                <div className="">
                                  <h5 className="font-FKmedium text-xl text-white">
                                    <Link href={sub.link}>{sub.title}</Link>
                                  </h5>
                                  <p className="font-FKregular text-sm text-[#C1C1C1]">
                                    {sub.description}
                                  </p>
                                </div>
                              ) : (
                                <div className="">
                                  <h5 className="font-FKmedium text-xl text-[#6A6A6A]">
                                    <Link href={sub.link}>{sub.title}</Link>
                                  </h5>
                                </div>
                              )}
                            </div>
                          </>
                        </div>
                      </div>
                    </span>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
