import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as sermonStyles from '../styles/modules/sermon.module.scss';

const Sermon = () => {

  return (
    <div className = { sermonStyles.container }>
      <div className = { sermonStyles.leftColumn }>
        <StaticImage
          src = "../assets/sermon_cover.jpg"
          alt = "sermon cover"
          placeholder = "blurred"
          layout = "constrained"
          className = { sermonStyles.cover }
        />
      </div>
      <div className = { sermonStyles.rightColumn }>Right Column</div>
    </div>
  );
}

export default Sermon;