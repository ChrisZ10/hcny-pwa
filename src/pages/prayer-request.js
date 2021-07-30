import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/banner';
import PrayerRequestForm from '../components/prayerRequestForm';
import * as layoutStyles from '../styles/modules/layout.module.scss';

const PrayerRequest = () => {

  const data = useStaticQuery(graphql`
    query {      
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*pray.*/"
          }
        }
      ) {
        gatsbyImageData (
          placeholder: BLURRED,
          aspectRatio: 2.5,
          layout: FULL_WIDTH,
          transformOptions: {
            fit: OUTSIDE
          },
          quality: 90
        )
      }
    }
  `);

  return (
    <Layout>
      <Head subtitle = "尋求代禱" />
      <Banner 
        imageData = { data.banner } 
        title = "尋求代禱"
      />
      <div className = { layoutStyles.formContainer }>
        <PrayerRequestForm />
      </div>
    </Layout>
  );
};

export default PrayerRequest;