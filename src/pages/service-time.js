import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Location from '../components/location';

const ServiceTime = () => {
    return (
      <Layout>
        <Head subtitle="聚會時間"/>
        <Location />
      </Layout>
    );
  };
  
  export default ServiceTime;