import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as storyStyles from '../../../styles/modules/aboutUs/story.module.scss';

const StoryImageLeft = ({ imageData, description }) => {
  return (
    <div className = { storyStyles.containerImageLeft }>
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

export default StoryImageLeft;