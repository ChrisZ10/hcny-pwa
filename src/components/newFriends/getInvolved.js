import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';

const GetInvolved = () => {

  const data = useStaticQuery(graphql`
    query {
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*sanctuary.*/"
          }
        }
      ) {
        gatsbyImageData (
          placeholder: BLURRED,
          aspectRatio: 2.5,
          layout: FULL_WIDTH,
          transformOptions: {
            fit: OUTSIDE
          },
          quality: 90
        )
      }
    }
  `);

  return (
    <>
      <SectionBanner
        imageData = { data.banner }
      />
    </>
  );
};

export default GetInvolved;