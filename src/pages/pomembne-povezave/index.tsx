import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Typography } from '@material-tailwind/react/components/Typography';
import references from '@public/data/references.json';
import airportSchedule from '@public/data/airport-schedules.json';
import { StyledLink } from '@components/styled-link';
import {AirportSchedule} from "@interfaces/models/airport-schedule";

const breadcrumbs = [
  {
    label: 'Pomembne povezave',
    href: '/pomembne-povezave'
  }
];

const weekdays = ["Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota", "Nedelja"];

type Reference = {
  href: string;
  label: string;
}

type ReferencesPageProps = {
  references: Reference[];
}

const ReferencesPage: NextPage<ReferencesPageProps> = (props) => {
  const { references } = props;

  return (
    <>
      <section className="container mx-auto p-4 flex flex-col gap-6 md:gap-8 justify-center items-center mb-4 lg:mb-8">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Typography
          variant="h1"
          className="text-4xl md:text-6xl font-medium text-white text-center underline decoration-blue-600"
        >
          Pomembne povezave
        </Typography>
        <Typography className="text-xl text-white text-center">
          Poleg povezav do besedila magistrskega dela ter spletnih kart s prikazanimi rezultati smo na tem mestu izpostavili še druge pomembne povezave s področja zakonodaje, ki služijo v pomoč operatorjem in pilotom na daljavo brezpilotnih zrakoplovov.
        </Typography>
        <Typography className="flex flex-col gap-2 text-left text-white w-full">
          {references.map((reference: Reference) => (
            <a
              key={reference.href}
              href={reference.href}
              rel="noopener"
              className="font-semibold underline decoration-blue-600 flex colors-transition hover:text-gray-400"
            >
              {reference.label}
            </a>
          ))}
        </Typography>
        <div className="flex flex-col gap-2 w-full">
          <Typography
            variant="h3"
            className="text-white text-xl font-medium text-left"
          >
            Obratovalni čas letališč
          </Typography>
          <div className="flex w-full overflow-x-scroll md:overflow-x-auto">
            <table className="text-white block border-2 border-white whitespace-nowrap">
              <thead className="font-semibold">
              <tr>
                <td
                  className="border-2 border-white p-1"
                  rowSpan={2}
                >
                  Letališče
                </td>
                <td
                  className="border-2 border-white p-1"
                  colSpan={7}
                >
                  Lokalni zimski čas (UTC + 1)
                </td>
                <td
                  className="border-2 border-white p-1"
                  colSpan={7}
                >
                  Lokalni poletni čas (UTC + 2)
                </td>
              </tr>
              <tr>
                {[...weekdays, ...weekdays].map((day: string, index) => (
                  <td
                    className="border-2 border-white p-1"
                    key={index}
                  >
                    {day}
                  </td>
                ))}
              </tr>
              </thead>
              <tbody>
              {airportSchedule.map((airport: AirportSchedule) => (
                <tr
                  key={airport.name}
                  className="border-2 border-white"
                >
                  <td className="border-2 border-white p-1">
                    {airport.name}
                  </td>
                  {[...airport.schedule.winter, ...airport.schedule.summer].map((day: string, index: number) => (
                    <td
                      key={index}
                      className="border-2 border-white p-1"
                    >
                      {day}
                    </td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <StyledLink href="/o-projektu">
            Več o projektu
          </StyledLink>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      references: references as Reference[],
      airportSchedule: airportSchedule as AirportSchedule[]
    }
  }
}

export default ReferencesPage;
