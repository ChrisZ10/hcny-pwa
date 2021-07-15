import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StoryImageRight = ({ imageData, description }) => {
  return (
    <div>
      <div>
        <p>{ description }</p>
      </div>

      <div>
        <GatsbyImage
          image = { getImage( imageData ) }
          alt = "Story Image"
        />
      </div>
    </div>
  );
};

export default StoryImageRight;