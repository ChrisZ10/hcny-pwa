import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/banner';
import Welcome from '../components/aboutUs/welcome';
import GetInvolved from '../components/newFriends/getInvolved';
import ConnectionForm from '../components/form/connectionForm';
import * as layoutStyles from '../styles/modules/layout.module.scss';

const NewFriends = () => {

  const data = useStaticQuery(graphql`
    query {      
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*church.*/"
          }
        }
      ) {
        gatsbyImageData (
          placeholder: BLURRED,
          aspectRatio: 2.5,
          layout: FULL_WIDTH,
          transformOptions: {
            fit: OUTSIDE
          }
          quality: 90
        )
      }
    }
  `);

  const { title, slogan } = useSiteMetadata();

  return (
    <Layout>
      <Head subtitle = "新朋友"/>
      <Banner 
        imageData = { data.banner } 
        title = { title }
        subtitle = { slogan } 
      />
      <Welcome />
      <GetInvolved />
      <div className = { layoutStyles.formContainer } style = {{ backgroundColor: "#e4e4e4" }}>
        <ConnectionForm />
      </div>
    </Layout>
  );
};

export default NewFriends;