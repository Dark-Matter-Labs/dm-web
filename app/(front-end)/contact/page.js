import SocialPills from '../../../components/SocialPills';

export default function Contact() {
  return (
    <div className={`relative mt-28 sm:grid sm:grid-cols-12`}>
      <div className="col-span-5 w-[400px]"></div>
      <div className={'col-span-7 w-[690px] justify-self-end'}>
        <div className="flex flex-col items-start justify-center gap-[55px] pb-[60px]">
          <h1 className="heading-5xl-Reg text-grey-1">
            <a href="mailto:info@darkmatterlabs.org">info@darkmatterlabs.org</a>
          </h1>
          <p className="p-body2 text-grey-3">
            For more information on the work we are developing…
          </p>
          <SocialPills />
        </div>
      </div>
    </div>
  );
}
