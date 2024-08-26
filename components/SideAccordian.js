import React from 'react';
import Accordion from './Accordian';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SideNav({ activeState, scrollY }) {
  return (
    <div className="col-span-5 hidden w-[400px] max-w-xs matrix:block">
      <div
        className={classNames(
          activeState === 2 ||
            activeState === 3 ||
            activeState === 4 ||
            activeState === 5 ||
            activeState === 6 ||
            activeState === 7 ||
            activeState === 8
            ? 'top-28'
            : 'top-28',
          'sticky left-0 flow-root',
        )}
      >
        <div className="relative">
          <Accordion
            activeState={activeState == 1}
            title="Intro"
            description=""
            link="#real"
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 2}
            title="Matrix"
            description="We are not a think tank or consultancy with a single, neat theory of change. Instead, our collaborative approach is firmly grounded in the complex, messy reality of our existing socio-economic systems. Step-by-step, with the support of a growing ecosystem, we aim to build tangible pathways towards the options that we would like to manifest in the world. We have visualised our organisation’s response strategy across a three-dimensional matrix. The Matrix represents the dynamic interplay of our systemic goals, collaborations and context specific initiatives."
            link=""
            scrollPos={1500}
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 3}
            title="Labs"
            description="Each of our Labs is focused on a specific area of the socio-economic system and the everyday codes (e.g. norms, behaviours and institutional logic) that form its structural backbone. The Labs are exploring what might be possible, both within and beyond the current structures, and working to develop technical expertise in those areas. For example, the Beyond The Rules Lab focuses on aspects such as demonstrating multi-actor governance structures whereas the Capital Systems Lab is working to enable strategic ecosystem investments."
            link=""
            scrollPos={1900}
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 4}
            title="Arcs"
            description="Our Arc workflows are designed with clear, directional goals that guide our efforts toward impactful outcomes. For instance, Net Zero Cities aims to enable smart, carbon-neutral cities by 2030, while Radicle Civics seeks to foster specific shifts in civic worldviews. These Arcs often involve collaboration with multiple Labs, integrating their technical expertise with tangible, real-world contexts."
            link=""
            scrollPos={2300}
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 5 || activeState == 6}
            title="Studios"
            description="Studios are the connective tissue that support both the Labs and Missions. The studios explore themes that help our work to be implemented and more widely understood. For instance, the Civ Tech Studio develops the technological tools and knowledge for prototypes tested across the Dm ecosystem. Meanwhile, the Org DevStudio, positioned at the base of the Matrix, provides critical infrastructure support for the entire Dm Ecosystem."
            link=""
            scrollPos={2700}
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 7}
            title="Intersections"
            description="Each project in our portfolio contributes to a number of systemic capabilities. In doing so they intersect with the Labs, Arcs and Studios in various configurations. This allows us to prioritise flexible, compound learning across our internal and external ecosystems. Some projects are not part of an Arc, but each is attached to a Lab (or multiple Labs) where they contribute to building systemic capabilities."
            link=""
            scrollPos={4200}
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 8}
            title="Capabilities"
            description="The capabilities form the core of Dm’s Mission and sit at the centre of the Matrix. These are the systemic goals that we have set for ourselves as we strive to build pathways towards Life-Ennobling Economies. Some examples include decolonising currency stewardship, embedding data-augmented decision making and building the foundations for planetary stewardship institutions."
            link=""
            scrollPos={4720}
            scrollY={scrollY}
          />
          <Accordion
            activeState={activeState == 9}
            title="Contexts"
            description=""
            link="#context"
            scrollY={scrollY}
            scrollPos={4720}
          />
          <Accordion
            activeState={activeState == 10}
            title="Paradigms"
            description=""
            link="#why"
            scrollY={scrollY}
            scrollPos={5120}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
