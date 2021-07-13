import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Head = ({ subtitle }) => {
  const { title } = useSiteMetadata();

  return (
    <Helmet>
      <title>{ `${subtitle} | ${title}` }</title>
      <meta name = "viewport" content = "width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default Head;