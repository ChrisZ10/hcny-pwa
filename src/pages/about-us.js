import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/banner';
import Welcome from '../components/aboutUs/welcome';
import Statement from '../components/aboutUs/statement';

const AboutUs = () => {

  const data = useStaticQuery(graphql`
    query {      
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*church.*/"
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

  const { title, slogan } = useSiteMetadata();

  return (
    <Layout>
      <Head subtitle = "關於我們"/>
      <Banner 
        imageData = { data.banner } 
        title = { title }
        subtitle = { slogan } 
      />
      <Welcome />
      <Statement />
    </Layout>
  );
};

export default AboutUs;