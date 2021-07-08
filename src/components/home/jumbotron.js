import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { BsChevronDown } from 'react-icons/bs';

import * as jumbotronStyles from '../../styles/modules/home/jumbotron.module.scss';

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
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
    <div className = { jumbotronStyles.grid }>      
      <StaticImage
        className = { jumbotronStyles.background }
        src = "../../assets/wheat.jpg"
        alt = "wheat"
        layout = "fullWidth"
        placeholder = "blurred"
      />

      <div className = { jumbotronStyles.container }>
        <div className = { jumbotronStyles.main }>
          <h1 className = { jumbotronStyles.subtitle }>歡迎來到</h1>
          <h1 className = { jumbotronStyles.title }>{ data.site.siteMetadata.title }</h1>
          
          <div className = { jumbotronStyles.buttonContainer }>
            <a href = "#sunday-stream" className = { jumbotronStyles.button }>觀看主日直播</a>
          </div>
        </div>
        <BsChevronDown className = { scrolling? jumbotronStyles.chevronActive : jumbotronStyles.chevron }/>
      </div>
    </div>
  );
}

export default Jumbotron;