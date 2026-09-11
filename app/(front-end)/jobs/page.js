import { sanityFetch } from '@/sanity/lib/client';

const jobsQuery = `
*[_type == 'jobObject'] | order(close_date asc)
`;

export default async function Jobs() {
  const jobs = await sanityFetch({
    query: jobsQuery,
    tags: ['jobObject'],
  });
  const hasOpenRoles = jobs.length > 0;
  return (
    <div className={`page-grid relative mt-[40px] pb-[60px] sm:mt-28`}>
      <div className="side-display col-span-5 w-[400px]"></div>
      <div className={'col-span-7 w-full justify-self-end sm:w-[690px]'}>
        <div className="flex flex-col items-start justify-center gap-[30px] border-b border-b-[#353535] pb-[100px]">
          <h1 className="pb-[18px] heading-5xl-Reg text-grey-1 sm:heading-7xl">
            Work with us
          </h1>
          <p className="p-body2 text-[#EBEBEB]">
            Want to make an impact? <br /> Join our team.
          </p>
        </div>
      </div>

      <div className="col-span-5 mt-[30px] w-full sm:w-[690px] md:mt-16 md:w-[400px] md:self-start">
        {/* Conditional: with no jobs in Sanity this heading used to sit
            directly above "we do not have any open positions", telling the
            visitor two opposite things. */}
        <h2 className="pb-2 heading-4xl text-grey-3 sm:max-w-xs sm:heading-5xl-Reg">
          {hasOpenRoles ? 'We’re looking to fill these roles' : 'Open roles'}
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        {hasOpenRoles ? (
          jobs.map((job) => (
            <div key={job.positionName} className="">
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                <h3 className="heading-4xl text-white">{job.positionName} ↗</h3>
              </a>
              {/* TODO: add job meta data */}
            </div>
          ))
        ) : (
          <p className="p-xl-regular text-[#EBEBEB]">
            We don’t have any open roles at the moment.
          </p>
        )}
        {/* Not dimmed with opacity-50 any more. This is the answer to the
            question the page's 1.5k monthly visitors came to ask, so it was
            the last thing that should have been the faintest text here. */}
        <div>
          <h3 className="heading-4xl text-white">Open Application</h3>
          <p className="p-xl-regular text-[#EBEBEB]">
            Thank you for your interest in Dark Matter Labs. It means a great
            deal to us that you’re drawn to the work and considering how you
            might contribute. Given our current pathways pipeline and project
            line-up, we’re not taking on people through speculative applications
            at the moment.
          </p>
        </div>
        <p className="p-xl-regular text-[#EBEBEB]">
          We do still open specific roles, and you’re warmly welcome to apply to
          any that feel right for you. If you’d like to get in touch beyond
          that, you can reach us at{' '}
          <a className="text-[#737EA5]" href="mailto:join@darkmatterlabs.org">
            join@darkmatterlabs.org
          </a>
          .
        </p>
      </div>

      <div className="col-span-5 mt-[30px] w-full sm:w-[690px] md:mt-16 md:w-[400px] md:self-start">
        <h2 className="pb-2 heading-4xl text-grey-3 sm:heading-5xl-Reg md:max-w-xs">
          How we work
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          We’re a multi-disciplinary and distributed team based around the
          globe. What matters to us is learning from the context and local
          conditions of each project, and letting that reshape our practice
          across all of our work. We pride ourselves on learning,
          experimentation and intuition, and look to give everyone on the team
          ways to grow their own knowledge and practice. We view projects,
          processes and how we work as an evolving design that you would be part
          of shaping.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Here’s a little on how we currently organise:
        </p>
        <ul className="list-disc pl-3 p-xl-regular text-[#EBEBEB]">
          <li>
            We all work remotely, with flexible working hours around schedules
            (most people do main hours between 9-6).
          </li>
          <li>
            We work as dynamic hierarchies. We don’t organise through fixed line
            managers or fixed JDs but through teams and circles - we have
            different areas of expertise and focus and we pick up and shed roles
            as required. This requires good communication, high emotional
            intelligence and levels of trust.
          </li>
          <li>
            We run on a series of digital tools that we use daily to coordinate,
            learn and govern together (Slack, Notion, Google Workspace, Miro
            among them)
          </li>
          <li>
            We’re organised in multidisciplinary working groups that span
            mission, deep codes, projects, orgdev and operations. Each working
            group is flexible and spans a series of projects to form a portfolio
            work.
          </li>
          <li>
            This setup allows us to be a platform organisation and to nurture
            and grow ideas the team are passionate about and believe are needed,
            and align and advance our core values and mission.
          </li>
          <li>
            In time and experience, we invite everyone to grow our portfolio of
            work as a way to grow our collective skills, knowledge, and ideas –
            this is an invitation, not an obligation.
          </li>
        </ul>
      </div>

      <div className="col-span-5 mt-[30px] w-full sm:w-[690px] md:mt-16 md:w-[400px] md:self-start">
        <h2 className="pb-2 heading-4xl text-grey-3 sm:heading-5xl-Reg md:max-w-xs">
          Your background
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          We highly value lived experience as a form of expertise. A broad and
          diverse range of it within the team is critical to doing our best
          possible work together, and to making room for the full spectrum of
          life experience in a planetary team.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Dark Matter Labs continues to educate, question and critically review
          ourselves on how we can improve. We recognise and celebrate the true
          value of a safe and accepting working environment that - among other
          things - a diverse team with distributed power can unlock, and work to
          address our underlying biases and power structures that can prevent
          that from materialising.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          This type of work requires the willingness to work on yourself, your
          relationships with power, the assumptions and experiences that
          influence how you think, and more.*
        </p>
        <p className="p-xl-regular text-[#EBEBEB] opacity-50">
          *We recognise that our work deals with some existential questions and
          content that can be triggering. We have a team focused on the team’s
          mental health and personal development and we continue to
          incrementally build the necessary psychological infrastructures for
          this work.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          We know that there is more that we can do to make this recruitment
          more accessible, particularly if you have experienced exclusion,
          disadvantage or discrimination, or if you have particular
          accessibility needs. We would be happy to provide any further support
          that you may require - please get in touch so that we can work
          together to provide that.
        </p>
      </div>

      <div className="col-span-5 mt-[30px] w-full sm:w-[690px] md:mt-16 md:w-[400px] md:self-start">
        <h2 className="max-w-xs pb-2 heading-4xl text-grey-3 sm:heading-5xl-Reg">
          Pay
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          Our approach to pay has always been a participatory and collective
          process involving the entire team. Over time, we’ve experimented with
          different models, and we’ve recently launched our new Base Pay
          Formula, which is composed of the following elements:
        </p>
        <ul className="list-disc pl-3 p-xl-regular text-[#EBEBEB]">
          <li>Geographic living costs</li>
          <li>
            Starting assets each individual brings into their Dm role upon
            joining in the following categories:
          </li>
          <ul className="list-disc pl-6 p-xl-regular text-[#EBEBEB]">
            <li>Professional Standard Accreditation</li>
            <li>Relevant Relationship & Network</li>
            <li>Renowned and Trusted Reputation in the Field</li>
            <li>Applied Technical Skills</li>
            <li>Commitment to the Mission</li>
          </ul>
          <li>Tenure at Dm</li>
        </ul>
        <p className="p-xl-regular text-[#EBEBEB]">
          You can estimate your pay using{' '}
          <a href="https://dm-pay.vercel.app/" className="text-[#737EA5]">
            this calculator
          </a>
          . We recognise that no formula can fully reflect the unique context of
          every individual. That’s why we also have a Pay Rebalancing process in
          place, reviewed annually, to accommodate individual circumstances.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          In addition, we offer Shared Benefits and Leave Budgets, which are
          added to the gross salary. These were set collectively by the team and
          vary based on statutory provisions in different geographies. We’ll be
          happy to confirm the specific approach relevant to your location and
          contract type.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Our holiday policy includes a minimum of 28 days per year (pro-rata),
          but we encourage you to take as much time as you need to truly rest
          and recharge.
        </p>
      </div>

      <div className="col-span-5 mt-[30px] w-full sm:w-[690px] md:mt-16 md:w-[400px] md:self-start">
        <h2 className="max-w-xs pb-2 heading-4xl text-grey-3 sm:heading-5xl-Reg">
          We support equality
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          Dark Matter Labs is an equal opportunities employer, and we continue
          to educate ourselves on how we can improve. Humans of every
          nationality, race, sex, religion, disability, sexual orientation and
          identity are welcome. Our projects and partners are spread across the
          globe, and we aim to reflect that same diversity in our team and in
          who we choose to work with.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Jobs - Dark Matter Labs',
  description: 'Want to make an impact? Join our team.',
};
