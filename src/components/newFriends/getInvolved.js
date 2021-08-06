import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';

const GetInvolved = () => {

  const data = useStaticQuery(graphql`
    query {
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*sanctuary-2.*/"
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

  const subtitle = "您可以通過以下幾種方式";
  const title = "參與到教會中來"

  return (
    <>
      <SectionBanner
        imageData = { data.banner }
        subtitle = { subtitle }
        title = { title }
      />
    </>
  );
};

export default GetInvolved;