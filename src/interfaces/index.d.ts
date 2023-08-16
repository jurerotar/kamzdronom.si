import React, { FCWithChildren } from 'react';
import { NextPageWithLayout, NextPage } from 'next';

declare module '*.scss';

declare module 'react' {
  export type FCWithChildren<T = {}> = React.FC<T & {
    children: React.ReactNode;
  }>
}

declare module 'next' {
  export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    Layout: FCWithChildren[];
  };
}

declare module 'next/app' {
  export type AppProps = AppProps & NextPageWithLayout;
  export type AppContext = AppContext & {
    req?: Request;
  };
}
