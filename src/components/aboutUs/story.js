import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as storyStyles from '../../styles/modules/aboutUs/story.module.scss';

const Story = ({ imageData, description, imageLeft }) => {
  return (
    <div 
      className = { 
        imageLeft? 
        storyStyles.containerImageLeft : 
        storyStyles.containerImageRight 
      }
    >
      <div className = { storyStyles.leftColumn }>
        <GatsbyImage
          className = { storyStyles.image }
          image = { getImage( imageData ) }
          alt = "Story Image"
        />
      </div>

      <div className = { storyStyles.rightColumn }>
        <p>{ description }</p>
      </div>
    </div>
  );
};

export default Story;