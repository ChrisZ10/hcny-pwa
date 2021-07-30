import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';
import Story from '../aboutUs/story';
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
        <Story
          imageData = { data.images.edges[0].node }
          description = { storylines[0] }
          imageLeft = {true}
        />
        <Story
          imageData = { data.images.edges[1].node }
          description = { storylines[1] }
          imageLeft = {false}
        />
        <Story
          imageData = { data.images.edges[2].node }
          description = { storylines[2] }
          imageLeft = {true}
        />
      </div>
    </>
  );
}

export default History;