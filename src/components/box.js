import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as boxStyles from '../styles/modules/box.module.scss';

const Box = ({ imageData, children, isImageLeft }) => {
  return (
    <div 
      className = { 
        isImageLeft? 
        boxStyles.containerWithImageLeft : 
        boxStyles.containerWithImageRight 
      }
    >
      <div className = { boxStyles.leftColumn }>
        <GatsbyImage
          className = { boxStyles.image }
          image = { getImage( imageData ) }
          alt = "Featured Image"
        />
      </div>

      <div className = { boxStyles.rightColumn }>
        { children }
      </div>
    </div>
  );
};

export default Box;