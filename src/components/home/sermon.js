import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as buttonStyles from '../../styles/modules/button.module.scss';
import * as layoutStyles from '../../styles/modules/layout.module.scss';
import * as textStyles from '../../styles/modules/text.module.scss';

const Sermon = () => {

  const data = {
    date: "7月4日",
    title: "异象帶來突破",
    speaker: "蕭慕道 牧師"
  }

  return (
    /******* 2-column grid (7:5) *******/
    <div className = { layoutStyles.gridSevenFiveContainer }>
      
      {/******* left column *******/}
      <div className = { layoutStyles.leftColumn }>
        <StaticImage
          src = "../../assets/sermon.jpg"
          alt = "sermon cover"
          placeholder = "blurred"
          layout = "constrained"
          quality = {90}
        />
      </div>
      
      {/******* right column *******/}
      <div className = { layoutStyles.rightColumnText }>       
        <p className = { textStyles.textSubtitle }>主日信息 | { data.date }</p>
        <p className = { textStyles.textTitle }>{ data.title }</p>
        <p className = { textStyles.textDescription }>{ data.speaker }</p>

        <div className = { buttonStyles.regButtonContainer }>
          <a href = "#watch" className = { buttonStyles.regButton }>觀看</a>
          <a href = "#more" className = { buttonStyles.regButtonHollow }>更多</a>
        </div>
      </div>
    
    </div>
  );
}

export default Sermon;