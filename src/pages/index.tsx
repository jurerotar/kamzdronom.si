import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Drone } from '@interfaces/models/drone';
import { Category } from '@interfaces/models/category';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@material-tailwind/react/components/Button';
import { Typography } from '@material-tailwind/react/components/Typography';
import drones from '@public/data/drones.json';
import categories from '@public/data/categories.json';
import zoneLinks from '@public/data/zone-links.json';
import NextImage from 'next/image';
import { StyledLink } from '@components/styled-link';
import clsx from 'clsx';

type ZoneLink = Record<Category, string>;

type ZoneLinks = {
  restrictionMapLinks: ZoneLink;
  suitabilityMapLinks: ZoneLink;
}

type HomePageProps = {
  drones: Drone[];
  categories: Category[];
  zoneLinks: ZoneLinks;
};

const TRANSITIONAL_PERIOD_END_DATE = new Date('1.1.2024');
const shouldConsiderTransitionalPeriod = Date.now() - TRANSITIONAL_PERIOD_END_DATE.getMilliseconds() >= 0;

const HomePage: NextPage<HomePageProps> = (props) => {
  const {
    drones,
    categories,
    zoneLinks
  } = props;

  const [selectedDroneModel, setSelectedDroneModel] = useState<Drone | null>(null);
  const [selectedDroneCategory, setSelectedDroneCategory] = useState<Category | null>(null);

  const selectedCategory = (() => {
    if(selectedDroneCategory !== null) {
      return selectedDroneCategory;
    }
    if(shouldConsiderTransitionalPeriod && !!selectedDroneModel?.categoryBeforeEndOfTransitionalPeriod) {
      return selectedDroneModel?.categoryBeforeEndOfTransitionalPeriod;
    }
    return selectedDroneModel?.category;
  })();

  const restrictionMapLink = zoneLinks.restrictionMapLinks[selectedCategory ?? 'A1'];
  const suitabilityMapLink = zoneLinks.suitabilityMapLinks[selectedCategory ?? 'A1'];

  return (
    <>
      {/* Landing */}
      <section className="container mx-auto flex flex-col justify-center gap-4 min-h-[250px] md:min-h-[300px] items-center p-4">
        <NextImage
          src="/svg/KamZdronom_bela_text.svg"
          width={400}
          height={40}
          alt="KamZDronom logo"
          className="w-[200px] h-[20px] md:w-[400px] md:h-[40px]"
        />
        <Typography
          variant="h2"
          className="dark:text-white text-xl md:text-2xl text-center"
        >
          Ko želiš leteti, pa ne veš kam.
        </Typography>
        <div className="flex gap-4 justify-center">
          <StyledLink href="/o-projektu">
            Spoznaj projekt
          </StyledLink>
          <StyledLink href="/pomembne-povezave">
            Reference
          </StyledLink>
        </div>
      </section>
      <section className="bg-[#1A1A1A]">
        <div className="container mx-auto flex flex-col gap-4 p-4">
          <Typography
            variant="h2"
            className="text-white text-center text-xl md:text-3xl"
          >
            Izbira podkategorije
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography className="dark:text-white">
              Izberite model drona
            </Typography>
            <Autocomplete
              disabled={selectedDroneCategory !== null}
              groupBy={(drone: Drone) => drone.manufacturer}
              onChange={(_, inputValue: Drone | null) => setSelectedDroneModel(inputValue)}
              getOptionLabel={(drone: Drone) => `${drone.manufacturer} - ${drone.model}`}
              renderInput={(params) => (
                <TextField
                  label={'S katerim modelom drona nameravate leteti?'}
                  className="bg-gray-200 placeholder:text-white text-white rounded-md"
                  {...params}
                />
              )}
              options={drones}
            />
            <Typography className="text-white">
              ali podkategorijo
            </Typography>
            <Autocomplete
              disabled={selectedDroneModel !== null}
              onChange={(_, inputValue: Category | null) => setSelectedDroneCategory(inputValue)}
              getOptionLabel={(category: Category) => category}
              renderInput={(params) => (
                <TextField
                  label={'V kateri podkategoriji odprte kategorije nameravate leteti?'}
                  className="bg-gray-200 placeholder:text-white text-white rounded-md"
                  {...params}
                />
              )}
              options={categories}
            />
          </div>
          <div className="flex flex-col gap-4">
            {/* Karta omejitev */}
            <div className="flex flex-col gap-2">
              <Typography
                variant="h3"
                className="text-white text-xl font-medium"
              >
                Karta omejitev
              </Typography>
              <Typography className="text-white font-light mb-2">
                Karta omejitev je rezultat večkriterijskega odločanja, ki upošteva zgolj omejitve (npr. za letenje). Karta upošteva podatkovne
                sloje omejitev (neprimerna območja oz. območja prepovedi), preostali del proučevanega območja pa predstavljajo za letenje
                dovoljena območja, ki se med seboj praviloma ne razlikujejo po primernosti.
              </Typography>
              {!!selectedCategory && (
                <StyledLink href={restrictionMapLink}>
                  Karta omejitev {clsx(!!selectedCategory && `za podkategorijo "${selectedCategory}"`)}
                </StyledLink>
              )}
              {!selectedCategory && (
                <Button
                  className="flex justify-center items-center bg-blue-600 colors-transition hover:bg-blue-700 rounded-md text-white font-medium px-4 py-2 w-fit"
                  disabled
                >
                  Izberi podkategorijo
                </Button>
              )}
            </div>

            {/* Karta primernosti */}
            <div className="flex flex-col gap-2">
              <Typography
                variant="h3"
                className="text-white text-xl font-medium"
              >
                Karta primernosti
              </Typography>
              <Typography className="text-white font-light mb-2">
                Karta primernosti je rezultat večkriterijskega odločanja, ki upošteva omejitve in dejavnike. Karta upošteva sloje omejitev
                (neprimerna območja oz. območja prepovedi), preostali del proučevanega območja pa predstavljajo za letenje primerna območja,
                ki se med seboj, na podlagi vpliva obteženih dejavnikov (npr. oddaljenost od stanovanjskih, poslovnih, rekreacijskih območij),
                razlikujejo po stopnji primernosti (od najmanjše do največje primernosti).
              </Typography>
              {!!selectedCategory && (
                <StyledLink href={suitabilityMapLink}>
                  Karta primernosti {clsx(!!selectedCategory && `za podkategorijo "${selectedCategory}"`)}
                </StyledLink>
              )}
              {!selectedCategory && (
                <Button
                  className="flex justify-center items-center bg-blue-600 colors-transition hover:bg-blue-700 rounded-md text-white font-medium px-4 py-2 w-fit"
                  disabled
                >
                  Izberi podkategorijo
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      drones: drones as Drone[],
      categories: categories as Category[],
      zoneLinks: zoneLinks as ZoneLinks
    }
  }
}

export default HomePage;
