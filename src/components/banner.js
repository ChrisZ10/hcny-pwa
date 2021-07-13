import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsChevronDown } from 'react-icons/bs';

import * as bannerStyles from '../styles/modules/banner.module.scss';
import * as textStyles from '../styles/modules/text.module.scss';
import * as chevronStyles from '../styles/modules/chevron.module.scss';

const Banner = ({ imageData, title, subtitle }) => {

  const [scrollTop, setScrollTop] = useState(0); // number of pixels the root element is scrolled
  const [scrolling, setScrolling] = useState(true); // set scrolling to be true when scrolling down

  // update states every time the root element is scrolled 
  useEffect(() => {
    const onScroll = ( event ) => {
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop < scrollTop);
    };
    window.addEventListener("scroll", onScroll);
  }, [scrollTop]);  

  return (
    <div className = { bannerStyles.grid }>
      <GatsbyImage
        className = { bannerStyles.background }
        image = { getImage( imageData ) }
        alt = "Banner Background"
      />

      <div className = { bannerStyles.container }>
        <div className = {bannerStyles.main}>
          { subtitle !== null && <h1 className = { textStyles.bannerSubtitle }>{ subtitle }</h1> }
          { title !== null && <h1 className = { textStyles.bannerTitle }>{ title }</h1> }
        </div>

        <BsChevronDown className = { scrolling? chevronStyles.chevronActive : chevronStyles.chevron }/>
      </div>
    </div>
  );
}

export default Banner;