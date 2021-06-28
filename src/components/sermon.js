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
      <div className = { sermonStyles.rightColumn }>
        <p className = { sermonStyles.subtitle }>主日信息 | 6月27日</p>
        <p className = { sermonStyles.title }>呼召吹號者</p>
        <p className = { sermonStyles.speaker }>鄭立新 牧師</p>
        <div className = { sermonStyles.buttonContainer }>
          <a href = "#watch" className = { sermonStyles.button }>觀看</a>
          <a href = "#more" className = { sermonStyles.buttonHollow }>更多</a>
        </div>
      </div>
    </div>
  );
}

export default Sermon;