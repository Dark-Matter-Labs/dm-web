export default function LineageAndIntellectualResponsibility() {
  return (
    <div className={`page-grid relative mt-[40px] pb-[60px] sm:mt-28`}>
      <div className="side-display col-span-5 w-[400px]"></div>
      <div className={'col-span-7 w-full justify-self-end sm:w-[690px]'}>
        <div className="flex flex-col items-start justify-center gap-[30px] border-b border-b-[#353535] pb-[100px]">
          <h1 className="pb-[18px] heading-5xl-Reg text-grey-1 sm:heading-7xl">
            On Lineage and Intellectual Responsibility
          </h1>
        </div>
      </div>

      <div className="col-span-5 mt-[30px] w-full sm:w-[690px] md:mt-16 md:w-[400px] md:self-start"></div>
      <div
        className={
          'col-span-7 mt-[30px] flex w-full flex-col gap-[28px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-16'
        }
      >
        <p className="p-xl-regular text-[#EBEBEB]">
          The analysis, concepts, strategies, ideas and innovations we develop
          emerge through years of collective inquiry, shaped by contributors
          spanning disciplines, geographies, and initiatives within and beyond
          Dark Matter Labs.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          Our work is typically licensed through{' '}
          <a
            className="text-[#737EA5]"
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
            target="_blank"
            rel="noopener"
          >
            Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
          </a>{' '}
          or{' '}
          <a
            className="text-[#737EA5]"
            href="https://www.gnu.org/licenses/gpl-3.0.en.html"
            target="_blank"
            rel="noopener"
          >
            GNU General Public License v3.0 (GPLv3)
          </a>
          , unless noted otherwise. We share this with the expectation that our
          partners will appreciate the significance of this groundwork and
          collaborate with us to not only refine these proposals but also
          explore their viability and practical implementation together in good
          faith. Furthermore, we are committed to fostering openness and wide
          accessibility by making these strategies, ideas and innovation for
          public benefit in due time. This approach seeks to ensure we can build
          partnerships necessary for innovation, respecting the work, labour and
          care invested and that our collective knowledge and experience can be
          shared widely, allowing others to adopt, adapt, and expand upon our
          work, thus contributing to broader, community-wide benefits.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          In the spirit of that transparency, we acknowledge that AI tools have
          assisted in the drafting of parts of our work, used primarily for
          articulation, synthesis, and iteration. The underlying research,
          values, and judgements remain those of the human contributors named in
          this lineage. We are committed to transparency about this use, and
          welcome conversation about what responsible AI-assisted knowledge
          production means in contexts of civic and public benefit.
        </p>
        <p className="p-xl-regular text-[#EBEBEB]">
          We trust that our partners will honour the spirit of respect,
          endeavour, transparency and cooperation that defines this work, as we
          all work to achieve viable and impactful outcomes.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'On Lineage and Intellectual Responsibility - Dark Matter Labs',
  description:
    'On lineage and intellectual responsibility at Dark Matter Labs.',
};
