import { sanityFetch } from '@/sanity/lib/client';

const jobsQuery = `
*[_type == 'jobObject'] | order(close_date asc)
`;

export default async function Jobs() {
  const jobs = await sanityFetch({
    query: jobsQuery,
  });
  return (
    <div
      className={`relative mt-28 flex flex-col items-center justify-center pb-[60px] md:grid md:grid-cols-12`}
    >
      <div className="col-span-5 hidden w-[400px] md:block"></div>
      <div className={'col-span-7 w-full justify-self-end sm:w-[690px]'}>
        <div className="flex flex-col items-start justify-center gap-[30px] border-b border-b-[#353535] pb-[100px]">
          <h1 className="heading-7xl pb-[18px] text-grey-1">Work with us</h1>
          <p className="p-body2 text-[#EBEBEB]">
            Want to make an impact? <br /> Join our team.
          </p>
        </div>
      </div>

      <div className="col-span-5 mt-16 w-full sm:w-[690px] md:w-[400px] md:self-start">
        <h2 className="heading-5xl-Reg pb-2 text-grey-3 md:max-w-xs">
          We’re looking to fill these roles
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.positionName} className="">
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                <h3 className="heading-4xl  text-white">
                  {job.positionName} ↗
                </h3>
              </a>
              {/* TODO: add job meta data */}
            </div>
          ))
        ) : (
          <p className="p-xl-regular text-[#EBEBEB]">
            At this time, we do not have any open positions available.
          </p>
        )}
        <div>
          <a
            href="https://app.beapplied.com/apply/z6mfyppjuz?utm_source=DMWeb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="heading-4xl  text-white">Open Application ↗</h3>
          </a>
          <p className="p-xl-regular text-[#EBEBEB] opacity-50">
            Due to capacity constraints, we might take up to a couple of months
            to give you feedback about your open application, though it is our
            intention to review and reply to each application received. We will
            reach out to you directly in case we open a role that may fit your
            interests and skills. Thanks for your patience, and we hope to meet
            you soon.
          </p>
        </div>
        <p className="p-xl-regular text-[#EBEBEB]">
          If you have any questions, contact us <br />
          <a href="mailto: join@darkmatterlabs.org">join@darkmatterlabs.org</a>
        </p>
      </div>

      <div className="col-span-5 mt-16 w-full sm:w-[690px] md:w-[400px] md:self-start">
        <h2 className="heading-5xl-Reg pb-2 text-grey-3 md:max-w-xs">
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
          globe. What’s important to us is using the context and local
          conditions of projects to grow our knowledge and use it to iterate our
          knowledge and practice across all of our work. We pride ourselves on
          learning, experimentation and intuition, and look to provide members
          of the team ways in which they can grow their own knowledge and
          practice. We view projects, processes and how we work as an evolving
          design that you would be part of shaping.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Here’s a little on how we currently organise:
        </p>
        <ul className="p-xl-regular list-disc pl-3 text-[#EBEBEB]">
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
            learn and govern together (Slack, Notion, Google Worklace, Miro
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
            and align advance our core values and mission.
          </li>
          <li>
            In time and experience, we invite everyone to grow our portfolio of
            work as a way to grow our collective skills, knowledge, and ideas –
            this is an invitation, not an obligation.
          </li>
        </ul>
      </div>

      <div className="col-span-5 mt-16 w-full sm:w-[690px] md:w-[400px] md:self-start">
        <h2 className="heading-5xl-Reg pb-2 text-grey-3 md:max-w-xs">
          Your background
        </h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          We highly value lived experience as a form of expertise and we
          consider having a broad and diverse range of lived experience within
          the team, as being critical for us to be able to do our best possible
          work together and to create a range of spaces and accommodate a broad
          spectrum of life experience into our planetary team.
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

      <div className="col-span-5 mt-16 w-full sm:w-[690px] md:w-[400px] md:self-start">
        <h2 className="heading-5xl-Reg max-w-xs pb-2 text-grey-3">Pay</h2>
      </div>
      <div
        className={
          'flex w-full col-span-7 mt-[30px] flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          Our approach to pay is not based on favoring one skill over another or
          rewarding hierarchical power dynamics. Instead, we recognize that
          everyone possesses unique and exceptional skills, and we remove the
          process of valuing and comparing them. This allows us to focus on
          unleashing those skills in diverse ways based on the specific context.
          It gives us the freedom to determine, assign, and assess roles based
          on what is most suitable for each situation, rather than being
          constrained by predefined roles tied to compensation.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          As a result, our pay is designed not to reward people for tasks done,
          but to cover living costs so that we are freed to create what we
          believe is needed in the world.Our current base pay for everyone on
          the team is:
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Formula = (Years experience + 23 (+ 8.82 for freelancers)) *1000 =
          gross pro rata pay in GBP.
        </p>
        <p className="p-xl-regular text-[#EBEBEB] opacity-50">
          *Years experience includes all experience after school completion age
          (18) - inc work, education, unpaid work (care, volunteering, etc).
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          We recognise that no formula that tries to do this can fully account
          for the unique contexts of every person. Therefore we also have a
          rebalancing process in place to accommodate individual circumstances.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          We have recently put in place a range of benefits support across the
          team, including coaching, learning funds, sabbatical and secondment
          support, learning funds, workspace funds and more. These were set
          collectively by the team and vary according to statutory provisions in
          different geographies - we’ll be happy to confirm the relevant
          approach for your geography and contract type.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Our holiday policy is a minimum of 28 days/year pro-rata, but we
          encourage you to take all of the time that you need to properly rest.
        </p>
      </div>

      <div className="col-span-5 mt-16 w-full sm:w-[690px] md:w-[400px] md:self-start">
        <h2 className="heading-5xl-Reg max-w-xs pb-2 text-grey-3">
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
          to educate ourselves on how we can improve. Humans from all
          nationality, race, sex, religion, disability, sexual orientation and
          identity are welcome. We recognise and celebrate the true value of a
          safe and accepting working environment that only a diverse team can
          unlock, and work to address our underlying biases that can prevent
          that from materialising. Our projects and partners are spread across
          the globe and we aim to reflect the same diversity on multiple levels
          in our team and with the partners we work with.
        </p>
      </div>
    </div>
  );
}
