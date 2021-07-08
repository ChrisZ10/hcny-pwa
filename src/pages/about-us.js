import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/aboutUs/banner';
import Welcome from '../components/aboutUs/welcome';

const AboutUs = () => {
  return (
    <Layout>
      <Head subtitle = "關於我們"/>
      <Banner />
      <Welcome />
    </Layout>
  );
};

export default AboutUs;