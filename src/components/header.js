import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header = () => {
  const [ active, setActive ] = useState(false);
  const [ toggle, setToggle ] = useState(false);
  const [ drop, setDrop ] = useState(false);

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
          
          {/******* New Friend *******/}
          <li 
            onMouseEnter = {() => {
              setDrop(true);
            }}
            onMouseLeave = {() => {
              setDrop(false);
            }}
          >
            <Link to = "#" className = { headerStyles.navbarItem }>新朋友？</Link>
            <ul className = { drop? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>關於我們</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>聚會時間</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>牧者團隊</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>尋求代禱</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>聯繫我們</Link>
              </li>
            </ul>
          </li>
          
          {/******* Get Involved *******/}
          <li
            onMouseEnter = {() => {
              setDrop(true);
            }}
            onMouseLeave = {() => {
              setDrop(false);
            }}
          >
            <Link to = "#" className = { headerStyles.navbarItem }>豐收大家庭</Link>
            <ul className = { drop? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>細胞小組</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>豐收義工團隊</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>通知看板</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>近期活動</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>代禱事項</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to = "#" className = { headerStyles.navbarItem }>靈修裝備</Link>
          </li>
          <li>
            <Link to = "#" className = { headerStyles.navbarItem }>奉獻</Link>
          </li>
        </ul>
        
        <div 
          role = "button"
          tabIndex = {0}
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