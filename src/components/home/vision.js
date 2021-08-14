import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import * as visionStyles from '../../styles/modules/home/vision.module.scss';
import * as buttonStyles from '../../styles/modules/button.module.scss';

const Vision = () => {

  const { slogan, title, description } = useSiteMetadata();

  return (
    <div className = { visionStyles.grid }>
      <StaticImage 
        className = { visionStyles.background }
        src = "../../assets/glorious.jpg"
        alt = "glorious"
        layout = "fullWidth"
        placeholder = "blurred"
        quality = {90}
      />

      <div className = { visionStyles.container }>
        <p className = { visionStyles.subtitle }>{ slogan }</p>
        <p className = { visionStyles.title }>{ title }</p>
        <p className = { visionStyles.description }>{ description }</p>

        <div className = { buttonStyles.lightButtonContainer }>
          <a href = "#vision" className = { buttonStyles.lightButton } >了解教會異象</a>
        </div>
      </div>
    </div>
  );
}

export default Vision;