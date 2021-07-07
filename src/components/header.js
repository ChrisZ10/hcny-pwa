import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { BsChevronDown } from 'react-icons/bs';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header = () => {
  const [ active, setActive ] = useState(false); // if active, show navbar, vice versa
  const [ toggle, setToggle ] = useState(false); // if toggle, transform burger into cross
  const [ drop, setDrop ] = useState(false); // if drop, show dropdown menu. Work together with 'index'
  const [ index, setIndex ] = useState(-1); // show dropdown menu of element at index. Work together with 'drop'

  return (
    <header className = { headerStyles.header }>
      <nav>
        
        <div className = { headerStyles.navBrand }>
          <StaticImage 
            src = "../assets/logo.png"
            alt = "logo"
            placeholder = "none"
            layout = "constrained"
            width = { 70 }
          />  
        </div>
        
        <ul className = { active? headerStyles.navbarActive : headerStyles.navbar }>
          
          {/******* New Friend *******/}
          <li 
            onMouseEnter = {() => {
              if (window.innerWidth >= 768) {
                setDrop(true);
                setIndex(0);
              }
            }}
            onMouseLeave = {() => {
              if (window.innerWidth >= 768) {
                setDrop(false);
                setIndex(-1);
              }
            }}
          >
            <div className = { headerStyles.navbarItem }>
              <Link to = "#new-friends" >新朋友？</Link>
              <BsChevronDown 
                className = { headerStyles.chevron }
                onClick = {() => {
                  if (window.innerWidth < 768) {
                    if (index === -1) {
                      setDrop(true);
                      setIndex(0);
                    } else {
                      if (index !== 0) {
                        setDrop(true);
                        setIndex(0);
                      } else {
                        setDrop(false);
                        setIndex(-1);
                      }
                    }
                  }
                }}
              />
            </div>
            <ul className = { 
              drop && index === 0? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#about-us" className = { headerStyles.navbarDropdownItem }>關於我們</Link>
              </li>
              <li>
                <Link to = "/service-time" className = { headerStyles.navbarDropdownItem }>聚會時間</Link>
              </li>
              <li>
                <Link to = "#staff" className = { headerStyles.navbarDropdownItem }>牧者和同工團隊</Link>
              </li>
              <li>
                <Link to = "#prayer-request" className = { headerStyles.navbarDropdownItem }>尋求代禱</Link>
              </li>
              <li>
                <Link to = "#contact-us" className = { headerStyles.navbarDropdownItem }>與我們聯絡</Link>
              </li>
            </ul>
          </li>
          
          {/******* Get Involved *******/}
          <li
            onMouseEnter = {() => {
              if (window.innerWidth >= 768) {
                setDrop(true);
                setIndex(1);
              }
            }}
            onMouseLeave = {() => {
              if (window.innerWidth >= 768) {
                setDrop(false);
                setIndex(-1);
              }
            }}
          >
            <div className = { headerStyles.navbarItem }>
              <Link to = "#get-involved" >豐收大家庭</Link>
              <BsChevronDown 
                className = { headerStyles.chevron }
                onClick = {() => {
                  if (window.innerWidth < 768) {
                    if (index === -1) {
                      setDrop(true);
                      setIndex(1);
                    } else {
                      if (index !== 1) {
                        setDrop(true);
                        setIndex(1);
                      } else {
                        setDrop(false);
                        setIndex(-1);
                      }
                    }
                  }
                }}
              />
            </div>
            <ul className = { drop && index === 1? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#cell-group" className = { headerStyles.navbarDropdownItem }>細胞小組</Link>
              </li>
              <li>
                <Link to = "#volunteer" className = { headerStyles.navbarDropdownItem }>豐收義工團隊</Link>
              </li>
              <li>
                <Link to = "#news" className = { headerStyles.navbarDropdownItem }>通知看板</Link>
              </li>
              <li>
                <Link to = "#events" className = { headerStyles.navbarDropdownItem }>近期活動</Link>
              </li>
              <li>
                <Link to = "#prayers" className = { headerStyles.navbarDropdownItem }>代禱事項</Link>
              </li>
            </ul>
          </li>
          
          {/******* Devotion&Courses *******/}
          <li
            onMouseEnter = {() => {
              if (window.innerWidth >= 768) {
                setDrop(true);
                setIndex(2);
              }
            }}
            onMouseLeave = {() => {
              if (window.innerWidth >= 768) {
                setDrop(false);
                setIndex(-1);
              }
            }}
          >
            <div className = { headerStyles.navbarItem }>
              <Link to = "#devotion-courses" >靈修裝備</Link>
              <BsChevronDown 
                className = { headerStyles.chevron }
                onClick = {() => {
                  if (window.innerWidth < 768) {
                    if (index === -1) {
                      setDrop(true);
                      setIndex(2);
                    } else {
                      if (index !== 2) {
                        setDrop(true);
                        setIndex(2);
                      } else {
                        setDrop(false);
                        setIndex(-1);
                      }
                    }
                  }
                }}
              />
            </div>
            <ul className = { drop && index === 2? headerStyles.navbarDropdownActive : headerStyles.navbarDropdown }>
              <li>
                <Link to = "#daily-devotion" className = { headerStyles.navbarDropdownItem }>每日靈修</Link>
              </li>
              <li>
                <Link to = "#courses" className = { headerStyles.navbarDropdownItem }>裝備課程</Link>
              </li>
              <li>
                <Link to = "#audible" className = { headerStyles.navbarDropdownItem }>磐石有聲讀物</Link>
              </li>
            </ul>
          </li>

          <li>
            <div className = { headerStyles.navbarItem }>
              <Link to = "#offering" >奉獻</Link>
            </div>
          </li>
        </ul>
        
        <div 
          role = "button"
          tabIndex = {0}
          className = { toggle? headerStyles.burgerToggle : headerStyles.burger } 
          onClick = {() => {
            setActive( !active );
            setToggle( !toggle );
            setDrop(!drop);
            setIndex(-1);
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