import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import * as layoutStyles from '../styles/modules/layout.module.scss';

const Layout = ( props ) => {
  return (
    <div className = { layoutStyles.container }>
      <div className = { layoutStyles.main }>
        <Header />
        { props.children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;