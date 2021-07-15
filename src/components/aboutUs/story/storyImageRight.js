import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as storyStyles from '../../../styles/modules/aboutUs/story.module.scss';

const StoryImageRight = ({ imageData, description }) => {
  return (
    <div className = { storyStyles.container }>
      <div className = { storyStyles.leftColumn }>
        <p>{ description }</p>
      </div>

      <div className = { storyStyles.rightColumn }>
        <GatsbyImage
          className = { storyStyles.image }
          image = { getImage( imageData ) }
          alt = "Story Image"
        />
      </div>
    </div>
  );
};

export default StoryImageRight;