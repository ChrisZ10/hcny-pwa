import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as bannerStyles from '../styles/modules/banner.module.scss';
import * as textStyles from '../styles/modules/text.module.scss';

const SectionBanner = ({ imageData, title }) => {
  return (
    <div className = { bannerStyles.gridMd }>
      <GatsbyImage
        className = { bannerStyles.background }
        image = { getImage( imageData ) }
        alt = "Banner Background"
      />
      
      <div className = { bannerStyles.container }>
        <div className = {bannerStyles.main}>
          <h1 className = { textStyles.bannerTitle }>{ title }</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;