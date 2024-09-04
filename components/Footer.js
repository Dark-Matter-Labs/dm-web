import Image from 'next/image';
import Link from 'next/link';
import SocialPills from './SocialPills';
import dmLogo from '@/images/DmLogoFull.png';

const navigation = {
  solutions: [
    { name: 'Feed', href: '#', internal: true },
    { name: 'Initiatives', href: '#', internal: true },
    { name: 'Team', href: '/team', internal: true },
    { name: 'Jobs', href: '#', internal: true },
    { name: 'Contact', href: '/contact', internal: true },
    // { name: 'Contribute', href: '#', internal: true },
    {
      name: 'Provocations',
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
        <div className="mx-auto max-w-[1200px] pb-20 pt-[100px]">
          <div className="xl:grid xl:grid-cols-12">
            <div className="col-span-5 space-y-60">
              <Link href="/">
                <Image src={dmLogo} alt="Dark Matter Labs logo" height={40} />
              </Link>
              <SocialPills />
            </div>
            <div className="col-span-7 flex items-start justify-between ">
              <div className="">
                <div>
                  <ul
                    role="list"
                    className="justify-betweenitems-start flex flex-col space-y-6"
                  >
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        {item.internal ? (
                          <Link
                            href={item.href}
                            className="p-xl-regular text-grey-1 hover:text-white"
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
                  <a
                    href="#"
                    className="p-xl-regular text-[#A8A8A8] hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className="flex- col flex items-start justify-start">
                <div>
                  <ul role="list" className=" space-y-8">
                    {navigation.company.map((item) => (
                      <li key={item.country}>
                        <div className="nav-xl ">
                          <p className="text-grey-1">{item.country}</p>
                          <p className="text-[#A8A8A8]">{item.fullName}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
