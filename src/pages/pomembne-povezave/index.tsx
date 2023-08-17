import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Typography } from '@material-tailwind/react/components/Typography';
import references from '@public/data/references.json';
import { StyledLink } from '@components/styled-link';

const breadcrumbs = [
  {
    label: 'Pomembne povezave',
    href: '/pomembne-povezave'
  }
];

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
              href={reference.href}
              rel="noopener"
              className="font-semibold underline decoration-blue-600 flex colors-transition hover:text-gray-400"
            >
              {reference.label}
            </a>
          ))}
        </Typography>
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
      references: references as Reference[]
    }
  }
}

export default ReferencesPage;
