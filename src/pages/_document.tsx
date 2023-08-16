import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';


const Document = () => {
  return (
    <Html
      lang="sl_SL"
      className="dark"
    >
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/fav/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/fav/favicon-16x16.png" />
        <link rel="manifest" href="/images/fav/site.webmanifest" />
        <link rel="mask-icon" href="/images/fav/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/images/fav/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="monetization" content="$ilp.uphold.com/44LefdKYfgnr" />
        <meta name="description" content="Projekt KAMzDRONOM je nastal v sklopu izdelave magistrskega dela Luke Zaletelja na Oddelku za geografijo Filozofske fakultete Univerze v
          Ljubljani z naslovom Geoinformacijska podpora odločanju pri opredelitvi omejitev in primernosti za letenje brezpilotnih
          zrakoplovov." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="KAMzDRONOM - Ko želiš leteti, pa ne veš kam" />
        <meta name="twitter:description" content="Projekt KAMzDRONOM je nastal v sklopu izdelave magistrskega dela Luke Zaletelja na Oddelku za geografijo Filozofske fakultete Univerze v
          Ljubljani z naslovom Geoinformacijska podpora odločanju pri opredelitvi omejitev in primernosti za letenje brezpilotnih
          zrakoplovov." />
        {/*<meta name="twitter:image" content="/images/logoTwitter1200x600.jpg" />*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="KAMzDRONOM - Ko želiš leteti, pa ne veš kam" />
        <meta property="og:url" content="https://kamzdronom.si" />
        <meta property="og:description" content="Projekt KAMzDRONOM je nastal v sklopu izdelave magistrskega dela Luke Zaletelja na Oddelku za geografijo Filozofske fakultete Univerze v
          Ljubljani z naslovom Geoinformacijska podpora odločanju pri opredelitvi omejitev in primernosti za letenje brezpilotnih
          zrakoplovov." />
        {/*<meta property="og:image" content="/images/logoOpenGraph1200x630.jpg" />*/}
        {/*<meta property="og:image:secure_url" content="/images/logoOpenGraph1200x630.jpg" />*/}
        {/*<meta property="og:image:type" content="image/png" />*/}
        {/*<meta property="og:image:width" content="1200" />*/}
        {/*<meta property="og:image:height" content="630" />*/}
        {/*<meta property="og:image:alt" content="" />*/}
      </Head>
      <body className="dark:bg-[#0F0E0F]">
      <Main />
      <NextScript />
      </body>
    </Html>
  );
};

export default Document;
