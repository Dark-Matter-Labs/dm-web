import Image from 'next/image';

import SocialPills from '@/components/SocialPills';

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
              We are endlessly curious to hear thoughts, ideas and feedback from
              our ecosystem. Please do get in touch if you have something to
              share.
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
              Organisation à but non-lucratif /  Not-for-profit Corporation{' '}
              <br /> 413 Ch. Lavallée <br /> Hemmingford, Québec J0L 1H0 <br />
              Numéro d&apos;entreprise / Corporation number: 1196376-7
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
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-[27px] overflow-hidden pb-10 sm:w-[720px] sm:grid-cols-7">
            <div>
              <Image
                src="/partners/Partner_AA.svg"
                alt="AA logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Arantzazulab.png"
                alt="Arantzazulab logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_ARUP.svg"
                alt="Viable Cities logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/BBN.png"
                alt="Built by Nature logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Bloomberg_Philanthropies.svg"
                alt="EIT CliamateKIC logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Blox Hub.png"
                alt="Bloxhub logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/CPC.png"
                alt="Catapault logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_CivicSquare.png"
                alt="Civic Square logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/CKIC.png"
                alt="Climate KIC logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Community Fund.svg"
                alt="Community Fund logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/David_Suzuki_Foundation.png"
                alt="DSF logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/DemocraticSociety.png"
                alt="DemSoc logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/eea.png"
                alt="EEA logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/EuropeanCommission.png"
                alt="EU logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Google.svg"
                alt="Google logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/IncheonCity.png"
                alt="IncheonCity logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/JRF.png"
                alt="JRF logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/LankellyChase.png"
                alt="LankellyChase logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Laudes Foundation.png"
                alt="Laudes logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Nesta.svg"
                alt="Nesta logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/OmidyarGroup.png"
                alt="OmidyarGroup logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/OpenSystemsLab.png"
                alt="OpenSystemsLab logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/RMIT.png"
                alt="RMIT logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Royal Academy of Arts.svg"
                alt="RAA logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/ThirtyPercy.png"
                alt="ThirtyPercy logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_UNDP.svg"
                alt="UNDP logo"
                width={100}
                height={100}
                className="img"
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Viable Cities.png"
                alt="Viable Cities logo"
                width={0}
                height={0}
                sizes="100vw"
                className="img"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <Image
                src="/partners/Partner_Vinnova.png"
                alt="Vinnova logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="img"
              />
            </div>
          </div>
        </div>
        <p className="p-xl-regular text-[#EBEBEB]">
          It is impossible to overstate the importance of the people and
          organisations who we are grateful to be in partnership with. Liminal
          leadership can only exist as a function of dynamic, reciprocal
          relationships as we build together towards our collective futures.
        </p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Contact - Dark Matter Labs',
  description:
    'We are endlessly curious to hear thoughts, ideas and feedback from our ecosystem. Please do get in touch if you have something to share.',
};
