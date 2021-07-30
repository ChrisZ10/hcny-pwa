import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Banner from '../components/banner';
import StaffSection from '../components/staff/staffSection';
import SingleStaff from '../components/staff/singleStaff';
import { pastors, directors, coworkers } from '../hooks/useSiteMetadata';

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
          quality: 90
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

      <div style = {{marginTop: "150px"}}>
        <StaffSection title = "教牧團">
          {pastors.map( pastor => {
            return <SingleStaff 
              name = { pastor.name } 
              title = { pastor.title }
              gender = { pastor.gender }
            />;
          })}
        </StaffSection>
        
        <StaffSection title = "理事會">
          {directors.map( director => {
            return <SingleStaff 
              name = { director.name } 
              title = { director.title }
              gender = { director.gender }
            />;
          })}
        </StaffSection>
        
        <StaffSection title = "其它主要同工">
          {coworkers.map( coworker => {
            return <SingleStaff 
              name = { coworker.name } 
              title = { coworker.title }
              gender = { coworker.gender }
            />;
          })}
        </StaffSection>
      </div>
    </Layout>
  );
};

export default Staff;