import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Layout from '../components/layout';
import Head from '../components/head';
import ContactForm from '../components/form/contactForm';
import * as contactUsStyles from '../styles/modules/contactUs.module.scss';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const apiKey = "AIzaSyCbRnhNO-Nh2aIWKg99DzdCc_e3L7M7rUs";

const ContactUs = ({ google }) => {

  const geo = {
    lat: 40.76662245529929,
    lng: -73.72475775191116
  };

  const { title, address, phone } = useSiteMetadata();

  return (
    <Layout>
      <Head subtitle = "联系我們" />
      <div className = { contactUsStyles.container }>
        <div className = { contactUsStyles.leftColumn }>
          <ContactForm />
        </div>
        <div className = { contactUsStyles.rightColumn }>
          <h1>{ title }</h1>
          <h3>{ address }</h3>
          <h3>{ phone }</h3>
          <div className = { contactUsStyles.map }>
            <Map
              google = { google }
              initialCenter = { geo }
              zoom = {18}
              draggable = {true}
              scrollwheel = {true}
              zoomControl = {false}
              mapTypeControl = {false}
              streetViewControl = {false}
              fullscreenControl = {false}
              containerStyle = {{ position: 'static' }}
              style = {{ width: '100%', height: '100%', borderRadius: '3rem' }}
            >
              <Marker
                title = { address }
                name = { title } 
                position = { geo }
                onClick = {() => { window.open("https://goo.gl/maps/zWJEsDiaPZDmrwNY6"); }}
              />
            </Map>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default GoogleApiWrapper({ apiKey })( ContactUs );