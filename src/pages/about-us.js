import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/aboutUs/banner';

const AboutUs = () => {
  return (
    <Layout>
      <Head subtitle = "關於我們"/>
      <Banner />
    </Layout>
  );
};

export default AboutUs;