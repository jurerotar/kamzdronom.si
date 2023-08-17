import { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import '@styles/app.scss';
import { PublicLayout } from '@layouts/public-layout';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
});

const Application = (props: AppProps): JSX.Element => {
  const {
    Component,
    pageProps,
  } = props;

  return (
    <>
      <Head>
        <title>KAMzDRONOM.si - Ko želiš leteti, pa ne veš kam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --font-montserrat: ${montserrat.className};
            }`
          }}
        />
      </Head>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </>
  );
};

export default Application;
