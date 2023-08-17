import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs } from '@material-tailwind/react/components/Breadcrumbs';
import Link from 'next/link';

export type Breadcrumb = {
  label: string;
  href: string;
}

type BackdropLightProps = {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs: React.FC<BackdropLightProps> = (props) => {
  const { breadcrumbs: breadcrumbsProp, } = props;

  const breadcrumbs: Breadcrumb[] = [
    {
      href: '/',
      label: 'Domov'
    },
    ...breadcrumbsProp
  ]

  const length = breadcrumbs.length;

  return (
    <MUIBreadcrumbs>
      {breadcrumbs.map((breadcrumb: Breadcrumb, index) => (
        <span
          key={breadcrumb.href}
        >
          {index + 1 !== length && (
            <Link
              href={breadcrumb.href}
            >
              {breadcrumb.label}
            </Link>
          )}
          {index + 1 === length && (
            <span>
              {breadcrumb.label}
            </span>
          )}
        </span>
      ))}
    </MUIBreadcrumbs>
  );
};
