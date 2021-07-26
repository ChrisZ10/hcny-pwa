import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import ContactForm from '../components/contactForm';

const ContactUs = () => {
  return (
    <Layout>
      <Head subtitle = "联系我們"/>
      <ContactForm />
    </Layout>
  );
};

export default ContactUs;