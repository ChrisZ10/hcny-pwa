import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as welcomeStyles from '../../styles/modules/aboutUs/welcome.module.scss';

const Welcome = () => {
  return (
    /******* 2-column grid (5:7) *******/
    <div className = { welcomeStyles.container }>
      
      {/******* left column *******/}
      <div className = { welcomeStyles.leftColumn }>
        <StaticImage
          src = "../../assets/welcome.jpg"
          alt = "welcome"
          placeholder = "blurred"
          layout = "constrained"
          aspectRatio = {3/4}
          className = { welcomeStyles.cover }
          quality = {90}
        />
      </div>
      
      {/******* right column *******/}
      <div className = { welcomeStyles.rightColumn }>       
        <p>
          <strong>歡迎你來到紐約豐收靈糧堂！</strong>
          <br></br>
          <br></br>
          紐約豐收靈糧堂是一個有愛，有生命，有活力的教會，也是一個正在經歷豐收喜樂的教會。因為我們相信“舉目向田觀看，莊稼已經熟了，可以收割了”。
          <br></br>
          <br></br>
          我們盼望各位朋友們能和我們一起敬拜這位創造天地，賜人平安喜樂的主! 盼望你今天也能認識祂，相信祂！
          <br></br>
          <br></br>
          在美國政治經濟不振的今天，我們仍然相信“冬天即將過去，春天就要到來”！讓我們天天都住在基督裏，天天都能經歷聖靈更新的大能!
          <br></br>
          <br></br>
          紐約豐收靈糧堂主任牧師
          <br></br>
          蕭慕道牧師
        </p>
      </div>
    
    </div>
  );
}

export default Welcome;