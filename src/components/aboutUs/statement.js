import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';

const Statement = () => {

  const data = useStaticQuery(graphql`
    query {
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*wheat-2.*/"
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
    <SectionBanner
      imageData = { data.banner }
      title = "我們的信仰"
    /> 
  );
};

export default Statement;