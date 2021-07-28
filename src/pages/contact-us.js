import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import ContactForm from '../components/contactForm';
import * as contactUsStyles from '../styles/modules/contactUs.module.scss';

const ContactUs = () => {
  return (
    <Layout>
      <Head subtitle = "联系我們"/>
      <div className = { contactUsStyles.container }>
        <div className = { contactUsStyles.leftColumn }>
          <ContactForm />
        </div>
        <div className = { contactUsStyles.rightColumn }></div>
      </div>
      
    </Layout>
  );
};

export default ContactUs;