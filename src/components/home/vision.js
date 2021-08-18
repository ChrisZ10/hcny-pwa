import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import Section from '../section';

const Vision = () => {

  const { slogan, title, description } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {      
      bg: imageSharp (
        original: {
          src: {
            regex: "/.*glorious.*/"
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
    <Section
      imageData = { data.bg } 
      title = { title }
      subtitle = { slogan }  
      description = { description }
    />
  );
}

export default Vision;