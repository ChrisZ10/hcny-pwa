import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';
import Story from '../aboutUs/story';

const History = () => {
  
  const description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor";

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
          }
        )
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
          imageData = { data.banner }
          description = { description }
          imageLeft = {true}
        />
        <Story
          imageData = { data.banner }
          description = { description }
          imageLeft = {false}
        />
      </div>
    </>
  );
}

export default History;