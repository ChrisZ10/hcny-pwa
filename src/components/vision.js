import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as visionStyles from '../styles/modules/vision.module.scss';

const Vision = () => {
  
  /******* Fetch slogan from site metadata *******/
  const res = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          slogan
        }
      }
    }    
  `);

  const data = {
    subtitle: "豐收靈糧堂異象",
    title: res.site.siteMetadata.slogan,
    description: "We shall follow the vision as revealed in Revelation Chapter 22 to build the glorious church of Jesus Christ"
  }

  return (
    <div className = { visionStyles.container }>
      <p className = { visionStyles.subtitle }>{ data.subtitle }</p>
      <p className = { visionStyles.title }>{ data.title }</p>
      <p className = { visionStyles.description }>{ data.description }</p>

      <div className = { visionStyles.buttonContainer }>
        <a href = "#vision" className = { visionStyles.button } >了解教會異象</a>
      </div>
    </div>
  );
}

export default Vision;