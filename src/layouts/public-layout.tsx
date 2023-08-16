import React, { FCWithChildren, useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Logo: React.FC<Omit<LinkProps, 'href'>> = (props) => {
  return (
    <Link
      className="flex items-center justify-start flex-1 gap-3"
      {...props}
      href="/"
    >
      <div className="flex gap-2 items-center">
        <div className="w-[60px] h-[40px] md:w-[90px] md:h-[60px]">
          <NextImage
            src="/svg/KamZdronom_bela.svg"
            width={90}
            height={60}
            alt="Logo"
          />
        </div>
        <NextImage
          src="/svg/KamZdronom_bela_text.svg"
          width={100}
          height={10}
          alt="KamZDronom"
        />
      </div>
    </Link>
  );
};

const CustomLink: FCWithChildren<LinkProps> = (props) => {
  const { href } = props;

  const { asPath } = useRouter();

  const isActive = asPath === href;

  return (
    <Link
      className={clsx(isActive && 'underline decoration-blue-500', 'text-gray-400 hover:text-white transition-colors duration-300')}
      {...props}
    />
  );
};

export const PublicLayout: FCWithChildren = (props) => {
  const { children } = props;

  const [isMobileNavigationOpened, setIsMobileNavigationOpened] = useState<boolean>(false);

  return (
    <>
      <nav className="w-full">
        <div className="flex container mx-auto px-4 py-2 justify-between">
          <Logo />
          <div className="hidden md:flex items-center justify-end flex-1 gap-4">
            <CustomLink href="/o-projektu">
              O projektu
            </CustomLink>
            <CustomLink href="/pomembne-povezave">
              Pomembne povezave
            </CustomLink>
          </div>
          <div className="flex h-10 w-10 md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileNavigationOpened(true)}
              className="flex items-center justify-center bg-white bg-opacity-10 p-3 rounded-full"
            >
              <NextImage
                src="/svg/menu.svg"
                alt="Hamburger menu"
                width={16}
                height={10}
              />
            </button>

            {isMobileNavigationOpened && (
              <div className="flex flex-col absolute top-4 left-4 right-4 w-[calc(100vw-2rem)] p-4 bg-[#1A1A1A] rounded-md">
                <div className="flex justify-between pb-2 border-b border-dashed border-gray-800 mb-2">
                  <Logo onClick={() => setIsMobileNavigationOpened(false)} />
                  <button
                    type="button"
                    onClick={() => setIsMobileNavigationOpened(false)}
                  >
                    <NextImage
                      src="/svg/close.svg"
                      alt="Close menu button"
                      width={40}
                      height={40}
                    />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <CustomLink
                    href="/o-projektu"
                    onClick={() => setIsMobileNavigationOpened(false)}
                  >
                    O projektu
                  </CustomLink>
                  <CustomLink
                    href="/pomembne-povezave"
                    onClick={() => setIsMobileNavigationOpened(false)}
                  >
                    Pomembne povezave
                  </CustomLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="flex flex-col">
        {children}
      </main>
    </>
  );
};
