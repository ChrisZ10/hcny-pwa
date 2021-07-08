import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import * as notFoundStyles from '../styles/modules/notFound.module.scss';

const NotFound = () => {
  return (
    <Layout>
      <Head subtitle = "頁面不存在" />
      <div className = { notFoundStyles.container }>
        <div className = { notFoundStyles.main }>
          <h1 className = { notFoundStyles.title }>抱歉，此頁面不存在</h1>
          <div className = { notFoundStyles.buttonContainer }>
            <a href = "/" className = { notFoundStyles.button }>回到首頁</a>
          </div>         
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;