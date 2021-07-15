import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StoryImageLeft = ({ imageData, description }) => {
  return (
    <div>
      <div>
        <GatsbyImage
          image = { getImage( imageData ) }
          alt = "Story Image"
        />
      </div>

      <div>
        <p>{ description }</p>
      </div>
    </div>
  );
};

export default StoryImageLeft;