import Link from 'next/link';
import { type ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

interface NavigationBarListProps extends LinkProps {
  subLink?: LinkProps[];
}
interface LinkProps {
  label: string;
  link: string;
}

const NavigationBarList: NavigationBarListProps[] = [
  {
    label: 'VISION',
    link: '/company',
  },
  {
    label: 'WORKS',
    link: '/company',
  },
  {
    label: 'SHOOTING',
    link: '/company',
    subLink: [
      {
        label: 'HATONOMORI\nSTUDIO',
        link: '/',
      },
      {
        label: 'Virtual\nSTUDIO',
        link: '/',
      },
      {
        label: 'HATO\nLocation',
        link: '/',
      },
    ],
  },
  {
    label: 'CREATIVE',
    link: '/company',
    subLink: [
      {
        label: 'CG',
        link: '/',
      },
      {
        label: 'WEB',
        link: '/',
      },
      {
        label: 'SHOOTING',
        link: '/',
      },
      {
        label: 'GRAPHIC',
        link: '/',
      },
      {
        label: 'MOVIE',
        link: '/',
      },
    ],
  },
  {
    label: 'COMPANY',
    link: '/company',
  },
  {
    label: 'Every Day Life',
    link: '/company',
  },
  {
    label: 'CONTACT',
    link: '/company',
  },
];

const Main = (props: IMainProps) => {
  return (
    <div className="w-full antialiased ">
      <div
        className="pageTransition absolute top-0 z-50 ml-[300%] h-full w-full bg-black"
        style={{ pointerEvents: 'none' }}
      />
      {props.meta}

      <div className=" mx-auto my-8 bg-white">
        <header className="flex w-full items-center justify-between px-10">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img
              data-cursor-bg
              src="/assets/images/header_logo.png"
              className="mr-5 aspect-[423/148] max-h-[50px] lg:max-h-[75px]"
              alt="header-logo"
            />
          </Link>
          <nav className="hidden pt-3 sm:block" id="navBar">
            <ul className="flex flex-wrap text-xl">
              {NavigationBarList.map((d) => {
                return (
                  <li className="group mr-6 flex flex-col" key={d.label}>
                    <div className="absolute -ml-3 h-[8px] w-[8px] rounded bg-red-500 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100" />
                    <Link
                      href={d.link}
                      className="border-none font-helvetica  text-gray-100 hover:text-gray-900"
                    >
                      {d.label}
                    </Link>
                    {d.subLink && (
                      <ul className="absolute mt-8 hidden bg-white pl-6 opacity-0 transition duration-500 ease-in group-focus-within:block group-focus-within:opacity-100 group-hover:block group-hover:opacity-100">
                        {d.subLink.map((sub) => {
                          return (
                            <li key={sub.label}>
                              <Link
                                href={sub.link}
                                className="border-none font-helvetica text-gray-100 hover:text-gray-900"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        <main className="block py-5">{props.children}</main>

        {/* <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.{}
      </footer> */}
      </div>
    </div>
  );
};

export { Main };
