import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionBanner from '../sectionBanner';
import Box from '../box';
import * as boxStyles from '../../styles/modules/box.module.scss';

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
      images: allImageSharp (
        filter: {
          original: {
            src: {
              regex: "/.*way.*/"
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

  const subtitle = "您可以通過以下幾種方式";
  const title = "參與到教會中來"

  return (
    <>
      <SectionBanner
        imageData = { data.banner }
        subtitle = { subtitle }
        title = { title }
      />
      <div style = {{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        
        <Box imageData = { data.images.edges[0].node } isImageLeft = {true}>
          <h1>1. 主日直播</h1>
          <p>我們的線上主日直播時間是每週日10:30AM到11:45AM</p>
          
          <div className = { boxStyles.buttonContainer }>
            <a href = "#live" className = { boxStyles.button } >主日直播鏈接</a>
          </div>
        </Box>

        <Box imageData = { data.images.edges[1].node } isImageLeft = {false}>
          <h1>2. 細胞小組</h1>
          <p>如果你想進一步融入教會，尋找屬靈的同伴，細胞小組將是最好的選擇！</p>

          <div className = { boxStyles.buttonContainer }>
            <a href = "#cell-group" className = { boxStyles.button } >尋找細胞小組</a>
          </div>
        </Box>

        <Box imageData = { data.images.edges[2].node } isImageLeft = {true}>
          <h1>3. 義工服事</h1>
          <p>紐約豐收靈糧堂崇尚義工文化。通過在教會的服事，你將更多地參與到教會的建設中，和教會共同成長！</p>

          <div className = { boxStyles.buttonContainer }>
            <a href = "#volunteer" className = { boxStyles.button } >查看服事崗位</a>
          </div>
        </Box>
      </div>
    </>
  );
};

export default GetInvolved;