import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Jumbotron from '../components/home/jumbotron';
import Sermon from '../components/home/sermon';
import Vision from '../components/home/vision';
import Location from '../components/home/location';

import '../styles/index.scss';

const Home = () => {
  return (
    <Layout>
      <Head subtitle = "首頁"/>
      <Jumbotron />
      <Sermon />
      <Vision />
      <Location />
    </Layout>
  );
};

export default Home;
