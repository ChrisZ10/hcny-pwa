import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ subtitle }) => {
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
    <Helmet>
      <title>{ `${subtitle} | ${data.site.siteMetadata.title}` }</title>
      <meta name = "viewport" content = "width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default Head;