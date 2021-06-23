import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Jumbotron from '../components/jumbotron';

import '../styles/index.scss';

const Home = () => {
  return (
    <Layout>
      <Head subtitle="首頁"/>
      <Jumbotron />
    </Layout>
  );
};

export default Home;
