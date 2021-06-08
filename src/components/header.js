import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }    
  `);

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
};

export default Header;