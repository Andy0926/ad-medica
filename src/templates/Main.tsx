import dynamic from 'next/dynamic';
import Link from 'next/link';
import { type ReactNode } from 'react';

import { Cursor } from '@/components/cursor';
import { NavigationBarList } from '@/data/NavigationBarData';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const NoSSRScroll = dynamic(() => import('@/components/SmoothScroll'), {
  ssr: false,
});

const Main = (props: IMainProps) => {
  return (
    <div className="w-full antialiased ">
      <div
        className="pageTransition absolute top-0 z-50 ml-[300%] h-full w-full bg-black"
        style={{ pointerEvents: 'none' }}
      />
      {props.meta}
      <NoSSRScroll>
        <div className="mx-auto my-8 bg-white">
          <header className="flex w-full items-center justify-between px-10">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <img
                data-cursor-bg
                src="/assets/images/header_logo.png"
                className="mr-5 aspect-[423/148] max-h-[50px] lg:max-h-[75px]"
                alt="header-logo"
              />
            </Link>
            <nav className="hidden pt-3 md:block" id="navBar">
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
          <Cursor />
          <main className="relative block h-full py-5">{props.children}</main>

          {/* <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.{}
      </footer> */}
        </div>
      </NoSSRScroll>
    </div>
  );
};

export { Main };
