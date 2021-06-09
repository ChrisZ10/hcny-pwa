import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaChevronDown } from 'react-icons/fa';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header = () => {
  const [ active, setActive ] = useState(false);
  const [ toggle, setToggle ] = useState(false);
  const [ drop, setDrop ] = useState(false);
  const [ index, setIndex ] = useState(-1);

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
              setIndex(0);
            }}
            onMouseLeave = {() => {
              setDrop(false);
              setIndex(-1);
            }}
          >
            <Link to = "#" className = { headerStyles.navbarItem }>
              新朋友？
              <FaChevronDown className = { headerStyles.chevron }/>
            </Link>
            <ul className = { drop && index === 0? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>關於我們</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>聚會時間</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>牧者和同工團隊</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>尋求代禱</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>與我們聯絡</Link>
              </li>
            </ul>
          </li>
          
          {/******* Get Involved *******/}
          <li
            onMouseEnter = {() => {
              setDrop(true);
              setIndex(1);
            }}
            onMouseLeave = {() => {
              setDrop(false);
              setIndex(-1);
            }}
          >
            <Link to = "#" className = { headerStyles.navbarItem }>豐收大家庭</Link>
            <ul className = { drop && index === 1? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
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
          
          {/******* Devotion&Courses *******/}
          <li
            onMouseEnter = {() => {
              setDrop(true);
              setIndex(2);
            }}
            onMouseLeave = {() => {
              setDrop(false);
              setIndex(-1);
            }}
          >
            <Link to = "#" className = { headerStyles.navbarItem }>靈修裝備</Link>
            <ul className = { drop && index === 2? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>每日靈修</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>裝備課程</Link>
              </li>
              <li>
                <Link to = "#" className = { headerStyles.navbarDropdownItem }>磐石有聲讀物</Link>
              </li>
            </ul>
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