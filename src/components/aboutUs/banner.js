import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { BsChevronDown } from 'react-icons/bs';

import * as bannerStyles from '../../styles/modules/banner.module.scss';

const Banner = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          slogan
        }
      }
    }    
  `);

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
      <StaticImage
        className = { bannerStyles.background }
        src = "../../assets/church.jpg"
        alt = "church"
        aspectRatio = {10/4}
        layout = "fullWidth"
        placeholder = "blurred"
        transformOptions = {{
          fit: "outside"
        }}
      />

      <div className = { bannerStyles.container }>
        <div className = {bannerStyles.main}>
          <h1 className = { bannerStyles.subtitle }>歡迎來到{ data.site.siteMetadata.title }</h1>
          <h1 className = { bannerStyles.title }>{ data.site.siteMetadata.slogan }</h1>
        </div>

        <BsChevronDown className = { scrolling? bannerStyles.chevronActive : bannerStyles.chevron }/>
      </div>
    </div>
  );
}

export default Banner;