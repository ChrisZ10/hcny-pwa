import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';
import Box from '../box';
import { storylines } from '../../hooks/useSiteMetadata';

const History = () => {

  const data = useStaticQuery(graphql`
    query {
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*first-service.*/"
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
      images: allImageSharp (
        filter: {
          original: {
            src: {
              regex: "/.*story.*/"
            }
          }
        }  
      ) {
        edges {
          node {
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
      }
    }
  `);

  return (
    <>
      <SectionBanner
        imageData = { data.banner }
        title = "我們的故事"
      />
      <div style = {{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <Box imageData = { data.images.edges[0].node } isImageLeft = {true}>
          <p>{ storylines[0] }</p>
        </Box>
        <Box imageData = { data.images.edges[1].node } isImageLeft = {false}>
          <p>{ storylines[1] }</p>
        </Box>
        <Box imageData = { data.images.edges[2].node } isImageLeft = {true}>
          <p>{ storylines[2] }</p>
        </Box>
      </div>
    </>
  );
}

export default History;