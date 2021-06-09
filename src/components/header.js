import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header = () => {
  const [ active, setActive ] = useState(false);
  const [ toggle, setToggle ] = useState(false);

  return (
    <header className = { headerStyles.header }>
      <nav>
        
        <div>
          <StaticImage 
            src = "../assets/logo.png"
            alt = "logo"
            placeholder = "none"
            width = { 70 }
          />  
        </div>
        
        <ul className = { active? headerStyles.navbarActive : headerStyles.navbar }>
          <li>
            <Link to = "#" className = { headerStyles.navbarItem }>新朋友？</Link>
          </li>
          <li>
            <Link to = "#" className = { headerStyles.navbarItem }>豐收大家庭</Link>
          </li>
          <li>
            <Link to = "#" className = { headerStyles.navbarItem }>靈修裝備</Link>
          </li>
          <li>
            <Link to = "#" className = { headerStyles.navbarItem }>奉獻</Link>
          </li>
        </ul>
        
        <div 
          className = { toggle? headerStyles.burgerToggle : headerStyles.burger } 
          onClick = {() => {
            setActive( !active );
            setToggle( !toggle );
          }}
        >
          <div className = { headerStyles.line1 }></div>
          <div className = { headerStyles.line2 }></div>
          <div className = { headerStyles.line3 }></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;