import Image from 'next/image';
import Link from 'next/link';
import SocialPills from './SocialPills';
import dmLogo from '@/images/DmLogoFull.png';

const navigation = {
  solutions: [
    { name: 'Projects', href: '/feed', internal: true },
    { name: 'Initiatives', href: '/initiatives', internal: true },
    { name: 'Team', href: '/team', internal: true },
    { name: 'Jobs', href: '/jobs', internal: true },
    { name: 'Contact', href: '/contact', internal: true },
    // { name: 'Contribute', href: '#', internal: true },
    {
      name: 'Provocations↗',
      href: 'https://provocations.darkmatterlabs.org/',
      internal: false,
    },
  ],
  company: [
    { country: 'Netherlands', fullName: 'Dark Matter Laboratories B.V.' },
    { country: 'United Kingdom', fullName: 'Dark Matter Laboratories Limited' },
    {
      country: 'Canada',
      fullName: 'Laboratoires de Matière sombre / Dark Matter Labs',
    },
    {
      country: 'South Korea',
      fullName: '주식회사 다크매터랩스코리아 / Dark Matter Labs Korea Co., Ltd',
    },
    {
      country: 'Sweden',
      fullName: 'Mörk Materia Laboratoriet AB / Dark Matter Labs Sweden',
    },
  ],
};

export default function Footer() {
  return (
    <div className="">
      <div className="h-14 w-full bg-gradient-to-t from-[#E3E3E3]/5"></div>
      <footer
        aria-labelledby="footer-heading"
        className="global-margin bg-[#111112]"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="nav-w mx-auto pb-20 pt-12  sm:pt-[80px]">
          <div className="footer-grid flex flex-col gap-[40px]">
            <div className="col-span-5 flex flex-row justify-between sm:flex-col">
              <Link href="/">
                <Image src={dmLogo} alt="Dark Matter Labs logo" height={40} />
              </Link>
              <div className="side-display">
                <SocialPills />
              </div>
            </div>
            <div className="col-span-7 flex items-start justify-between ">
              <div className="">
                <div>
                  <ul
                    role="list"
                    className="flex flex-col items-start justify-between space-y-2"
                  >
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        {item.internal ? (
                          <Link
                            href={item.href}
                            className="p-lg-regular text-grey-1 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="p-xl-regular text-grey-1 hover:text-white"
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <Link
                    href="/privacy-policy"
                    className="p-lg-regular text-[#A8A8A8] hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start sm:flex">
                <div>
                  <ul role="list" className=" space-y-5">
                    {navigation.company.map((item) => (
                      <li key={item.country}>
                        {item.country === 'South Korea' ? (
                          <a
                            href="https://kr.darkmatterlabs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white "
                          >
                            <p className="font-SaansRegular text-[15px] leading-[18px] text-grey-1">
                              {item.country}
                            </p>
                            <p className="font-SaansRegular text-[13px] leading-[18px] text-[#A8A8A8]">
                              {item.fullName}
                            </p>
                          </a>
                        ) : (
                          <div className=" ">
                            <p className="font-SaansRegular text-[15px] leading-[18px] text-grey-1">
                              {item.country}
                            </p>
                            <p className="font-SaansRegular text-[13px] leading-[18px] text-[#A8A8A8]">
                              {item.fullName}
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="meta-mobile">
              <SocialPills />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
