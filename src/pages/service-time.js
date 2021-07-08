import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Location from '../components/home/location';

const ServiceTime = () => {
    return (
        <Layout>
          <Head subtitle = "聚會時間"/>
          <div style = {{ height: "10vh" }}></div>
          <Location />
        </Layout>
      );
};

export default ServiceTime;