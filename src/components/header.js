import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          slogan
        }
      }
    }    
  `);

  return (
    <header>
      <h1>{data.site.siteMetadata.slogan}</h1>
    </header>
  );
};

export default Header;