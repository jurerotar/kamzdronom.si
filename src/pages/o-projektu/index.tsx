import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Typography } from '@material-tailwind/react';
import dataLayerData from '@public/data/data-layers.json';
import { DataLayer } from '@interfaces/models/data-layer';
import { StyledLink } from '@components/styled-link';

const breadcrumbs = [
  {
    label: 'O projektu',
    href: '/o-projektu'
  }
];

type AboutPageProps = {
  dataLayers: DataLayer[];
}

const AboutPage: NextPage<AboutPageProps> = (props) => {
  const { dataLayers } = props;

  return (
    <>
      <section className="container mx-auto p-4 flex flex-col gap-6 md:gap-8 justify-center items-center mb-4 lg:mb-8">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Typography
          variant="h1"
          className="text-4xl md:text-6xl font-medium text-white text-center underline decoration-blue-600"
        >
          O projektu
        </Typography>
        <Typography className="text-xl text-white text-center">
          Projekt KAMzDRONOM je nastal v sklopu izdelave magistrskega dela Luke Zaletelja na Oddelku za geografijo Filozofske fakultete Univerze v
          Ljubljani z naslovom Geoinformacijska podpora odločanju pri opredelitvi omejitev in primernosti za letenje brezpilotnih
          zrakoplovov.
        </Typography>
        <Typography className="dark:text-white text-left">
          Dobrodošli na spletni strani KAMzDRONOM. Slednja je nastala v sklopu izdelave magistrskega dela Luke Zaletelja na Oddelku za
          geografijo Filozofske fakultete Univerze v Ljubljani z naslovom Geoinformacijska podpora odločanju pri opredelitvi omejitev in
          primernosti za letenje brezpilotnih zrakoplovov. <br /><br />
          Namen magistrskega dela je bil s pomočjo geografskih informacijskih sistemov in metode večkriterijskega odločanja izdelati karto
          omejitev za letenje brezpilotnih zrakoplovov oz. dronov v t. i. odprti kategoriji na območju celotne Republike Slovenije, karto
          primernosti na območju Mestne občine Ljubljana ter vzpostaviti interaktivno spletno aplikacijo s prikazanimi rezultati raziskave
          na karti. S tem smo želeli odpraviti prepoznane vrzeli na področju brezpilotnih zrakoplovov, ponuditi alternativo uradni karti ter
          sočasno oblikovati metodološki pristop za nadaljnje raziskave.<br /><br />
          Spletna stran KAMzDRONOM služi kot vstopno mesto, preko katerega dostopamo do rezultatov magistrskega dela – spletnega prikaza
          karte omejitev in karte primernosti. Sočasno je potrebno izpostaviti, da izdelana karta ni uradna ter ne odraža stališč pristojne
          Agencije za civilno letalstvo (CAA). Pomemben vidik predstavlja tudi njena časovna veljavnost. V raziskavi smo uporabili večje
          število podatkovnih slojev, ki se razlikujejo po datumu časovne ažuriranosti. Podatki geografskih območij letenja brezpilotnih
          zrakoplovov (CAA) ustrezajo v času pisanja dela veljavni uredbi s področja brezpilotnih zrakoplovov in zadnji različici uradne
          spletne karte (februar 2023). V primeru spremembe vsebine uredbe in/ali geografskih območij letenja je potrebno za ažurne
          informacije upoštevati podatke CAA. Seznam vseh uporabljenih podatkovnih slojev, vključno z virom in letom njihove veljavnosti je
          priložen v obliki preglednice. <br /> <br />
          <StyledLink href="/">
            Preveri omejitve
          </StyledLink>
        </Typography>
        <div className="flex w-full overflow-x-scroll md:overflow-x-auto">
          <table className="text-white block border-2 border-white whitespace-nowrap">
            <thead className="font-semibold">
            <tr>
              <td className="border-2 border-white p-1">Naziv podatkovnega sloja</td>
              <td className="border-2 border-white p-1">Vir</td>
              <td className="border-2 border-white p-1">Leto veljavnosti</td>
              <td className="border-2 border-white p-1">Vrsta</td>
            </tr>
            </thead>
            <tbody>
            {dataLayers.map((layer: DataLayer, index: number) => (
              <tr
                key={index}
                className="border-2 border-white"
              >
                {Object.values(layer).map((property: string, index: number) => (
                  <td
                    key={index}
                    className="border-2 border-white p-1"
                  >
                    {property}
                  </td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <Typography className="dark:text-white text-left">
          Naposled je potrebno opozoriti na pogoje uporabe rezultatov. Uporaba spletne strani in povezanih spletnih kart je na lastno
          odgovornost (informativna narava), pri čemer avtor magistrskega dela ne prevzema odgovornosti in posledic za morebitno kršenje
          pravil letenja brezpilotnih zrakoplovov. <br /><br />
          Prijetno in preudarno letenje! <br /> <br />
          <StyledLink href="/pomembne-povezave">
            Pomembne povezave
          </StyledLink>
        </Typography>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      dataLayers: dataLayerData as DataLayer[],
    }
  }
}

export default AboutPage;
