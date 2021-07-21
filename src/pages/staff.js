import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/banner';

const Staff = () => {
  
  const data = useStaticQuery(graphql`
    query {      
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*staff.*/"
          }
        }
      ) {
        gatsbyImageData (
          placeholder: BLURRED,
          aspectRatio: 2.5,
          layout: FULL_WIDTH,
          transformOptions: {
            fit: OUTSIDE
          }
        )
      }
    }
  `);

  return (
    <Layout>
      <Head subtitle = "牧者同工團隊"/>
      <Banner 
        imageData = { data.banner } 
        title = "教會牧者和同工團隊"
      />
    </Layout>
  );
};

export default Staff;