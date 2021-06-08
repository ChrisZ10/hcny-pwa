import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import * as headerStyles from '../styles/modules/header.module.scss';

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
    <header className = { headerStyles.header }>
      <div>{ data.site.siteMetadata.title }</div>
    </header>
  );
};

export default Header;