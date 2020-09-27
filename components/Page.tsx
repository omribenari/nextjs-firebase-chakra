import React from 'react';
import { NextSeo } from 'next-seo';

interface Props {
  name: string;
  path: string;
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({ name, path, children }) => {
  const title = `Com-Vote – ${name}`;
  const url = `https://com-vote.com/${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
};

export default Page;
