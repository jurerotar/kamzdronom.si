import React from 'react';
import Link from 'next/link';

type CheckedItemProps = {
  children: React.ReactNode;
  href: string;
}

export const StyledLink: React.FC<CheckedItemProps> = (props) => {
  const { children, href } = props;

  return (
    <Link
      href={href}
      className="flex justify-center items-center bg-blue-600 colors-transition hover:bg-blue-700 rounded-md text-white font-medium px-4 py-2 w-fit"
    >
      {children}
    </Link>
  );
}
