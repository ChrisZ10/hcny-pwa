import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as sermonStyles from '../../styles/modules/home/sermon.module.scss';

const Sermon = () => {

  const data = {
    date: "7月4日",
    title: "异象帶來突破",
    speaker: "蕭慕道 牧師"
  }

  return (
    /******* 2-column grid (7:5) *******/
    <div className = { sermonStyles.container }>
      
      {/******* left column *******/}
      <div className = { sermonStyles.leftColumn }>
        <StaticImage
          src = "../../assets/sermon_cover.jpg"
          alt = "sermon cover"
          placeholder = "blurred"
          layout = "constrained"
          className = { sermonStyles.cover }
        />
      </div>
      
      {/******* right column *******/}
      <div className = { sermonStyles.rightColumn }>       
        <p className = { sermonStyles.subtitle }>主日信息 | { data.date }</p>
        <p className = { sermonStyles.title }>{ data.title }</p>
        <p className = { sermonStyles.speaker }>{ data.speaker }</p>

        <div className = { sermonStyles.buttonContainer }>
          <a href = "#watch" className = { sermonStyles.button }>觀看</a>
          <a href = "#more" className = { sermonStyles.buttonHollow }>更多</a>
        </div>
      </div>
    
    </div>
  );
}

export default Sermon;