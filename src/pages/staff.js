import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/banner';
import StaffSection from '../components/staff/staffSection';

const Staff = () => {
  
  const data = useStaticQuery(graphql`
    query {      
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*staff-banner.*/"
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
        )
      }
    }
  `);

  return (
    <Layout>
      <Head subtitle = "牧者同工團隊"/>
      <Banner 
        imageData = { data.banner } 
        title = "教會牧者和同工團隊"
      />
      <StaffSection title = "教牧團">
        <div><h3>Pastor-1</h3></div>
        <div><h3>Pastor-2</h3></div>
        <div><h3>Pastor-3</h3></div>
      </StaffSection>
      <StaffSection title = "理事會">
        <div><h3>Board-1</h3></div>
        <div><h3>Board-2</h3></div>
        <div><h3>Board-3</h3></div>
        <div><h3>Board-4</h3></div>
      </StaffSection>
      <StaffSection title = "其它主要同工">
        <div><h3>Staff-1</h3></div>
        <div><h3>Staff-2</h3></div>
        <div><h3>Staff-3</h3></div>
        <div><h3>Staff-4</h3></div>
      </StaffSection>
    </Layout>
  );
};

export default Staff;