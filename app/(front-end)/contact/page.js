import Image from 'next/image';

import SocialPills from '@/components/SocialPills';
import vinnovaLogo from '@/images/partners/Vinnova.png';
import VClogo from '@/images/partners/VC.png';
import CKICLogo from '@/images/partners/C-KIC.png';
import ArupLogo from '@/images/partners/Arup.png';
import BHLogo from '@/images/partners/Bloxhub.png';

export default function Contact() {
  return (
    <div className={`page-grid relative mt-[40px] pb-[60px] sm:mt-28`}>
      <div className="side-display col-span-5 w-[400px]"></div>
      <div className={'col-span-7  w-full justify-self-end sm:w-[690px]'}>
        <div className="flex flex-col items-start justify-center gap-[55px] border-b border-b-[#353535] pb-[60px]">
          <div>
            <h1 className="heading-5xl-Reg pb-[18px] text-grey-1">
              <a href="mailto:info@darkmatterlabs.org">
                info@darkmatterlabs.org
              </a>
            </h1>
            <p className="p-body2 text-[#EBEBEB]">
              For more information on the work we are developing…
            </p>
          </div>
          <SocialPills />
        </div>
      </div>

      <div className="col-span-5  mt-[30px] w-full sm:w-[690px] md:mt-28 md:w-[400px] md:self-start">
        <h2 className="heading-5xl-Reg  pb-2 text-grey-3">Geographies</h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] justify-self-end sm:w-[690px] md:mt-28'
        }
      >
        <div className="grid grid-cols-1 gap-[24px] border-b border-b-[#353535] pb-[60px] pt-[6px]">
          <div>
            <h2 className="heading-4xl text-white">Netherlands</h2>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3]">
              Dark Matter Laboratories B.V.
            </p>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3] opacity-60">
              Daalwijkdreef 47 <br /> 1103 AD Amsterdam <br />
              KvK number: 75174405
            </p>
          </div>
          <div>
            <h2 className="heading-4xl text-white">United Kingdom</h2>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3]">
              Dark Matter Laboratories Limited
            </p>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3] opacity-60">
              217 Mare Street <br /> London, E8 3QE <br />
              Company number: 13294211
            </p>
          </div>

          <div>
            <h2 className="heading-4xl text-white">Canada</h2>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3]">
              Laboratoires de Matière sombre / Dark Matter Labs
            </p>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3] opacity-60">
              Organisation à but non-lucratif canadien / Canadian not-for-profit{' '}
              <br /> 6107 Av. de Monkland <br /> Montréal, Québec H4A 1H5 <br />
              Numéro de l&apos;organisation / Corporation number: 1196376-7
            </p>
          </div>

          <div>
            <h2 className="heading-4xl text-white">South Korea</h2>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3]">
              주식회사 다크매터랩스코리아 / Dark Matter Labs Korea Co., Ltd
            </p>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3] opacity-60">
              #301, Pyeongtaek 5-ro 20beon-gil 8, <br /> Pyeongtaek-si,
              Gyeonggi-do, 17902 <br />
              경기도 평택시 평택5로 20번길 8, 301호, 우편번호 17902
              <br />
              사업자등록증: 808-88-01717
            </p>
          </div>

          <div>
            <h2 className="heading-4xl text-white">Sweden</h2>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3]">
              Mörk Materia Laboratoriet AB / Dark Matter Labs Sweden
            </p>
            <p className="font-SaansRegular text-lg leading-11 text-[#E3E3E3] opacity-60">
              Amiralsgatan 76 <br /> 21437, Malmö <br />
              Registration number: 559305-1047
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-5  mt-[30px] w-full sm:w-[690px] md:mt-28 md:w-[400px]">
        <h2 className="heading-5xl-Reg  pb-2 text-grey-3">Our partners</h2>
      </div>
      <div
        className={
          'col-span-7 mt-[30px] justify-self-end border-b border-b-[#353535] pb-[60px] sm:w-[690px] md:mt-28'
        }
      >
        <div className="pb-[60px]">
          <div className="imagecarousel flex h-[113px] w-full items-center gap-[27px] overflow-hidden pb-10 sm:w-[720px]">
            <div>
              <Image
                src={vinnovaLogo}
                alt="Vinnova logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={VClogo}
                alt="Viable Cities logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={CKICLogo}
                alt="EIT CliamateKIC logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={ArupLogo}
                alt="Arup logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={BHLogo}
                alt="Bloxhub logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={vinnovaLogo}
                alt="Vinnova logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
          </div>
          <div className="imagecarousel flex h-[113px] w-full items-center gap-[27px] overflow-hidden pb-10 sm:w-[720px]">
            <div>
              <Image
                src={vinnovaLogo}
                alt="Vinnova logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={VClogo}
                alt="Viable Cities logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={CKICLogo}
                alt="EIT CliamateKIC logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={ArupLogo}
                alt="Arup logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={BHLogo}
                alt="Bloxhub logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={vinnovaLogo}
                alt="Vinnova logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
          </div>
          <div className="imagecarousel flex h-[113px] w-full items-center gap-[27px] overflow-hidden pb-10 sm:w-[720px]">
            <div>
              <Image
                src={vinnovaLogo}
                alt="Vinnova logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={VClogo}
                alt="Viable Cities logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={CKICLogo}
                alt="EIT CliamateKIC logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={ArupLogo}
                alt="Arup logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={BHLogo}
                alt="Bloxhub logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src={vinnovaLogo}
                alt="Vinnova logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
          </div>
        </div>
        <p className="p-xl-regular text-[#EBEBEB]">
          We work with partners, clients, and collaborators across the world.
        </p>
      </div>
    </div>
  );
}
