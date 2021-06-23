import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BsChevronDown } from 'react-icons/bs';

import * as jumbotronStyles from '../styles/modules/jumbotron.module.scss';

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

  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    const onScroll = ( event ) => {
      setScrollTop(event.target.documentElement.scrollTop);
      setScrolling(event.target.documentElement.scrollTop < scrollTop);
    };
    window.addEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className = { jumbotronStyles.container }>
      <div className = { jumbotronStyles.main }>
        <h1 className = { jumbotronStyles.subtitle }>歡迎來到</h1>
        <h1 className = { jumbotronStyles.title }>{ data.site.siteMetadata.title }</h1>
        <div className = { jumbotronStyles.buttonContainer }>
          <a href = "#sunday-stream" className = { jumbotronStyles.button }>觀看主日直播</a>
        </div>
      </div>
      <BsChevronDown 
        className = { scrolling? jumbotronStyles.chevronActive : jumbotronStyles.chevron }
      />
    </div>
  );
}

export default Jumbotron;