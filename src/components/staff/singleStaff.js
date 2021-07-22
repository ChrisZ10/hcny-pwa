import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as singleStaffStyles from '../../styles/modules/staff/singleStaff.module.scss';

const SingleStaff = ({ name, title, gender }) => {
  return (
    <div className = { singleStaffStyles.container }>
      
      {/******* display default avatar according to gender, later should be replaced by real photos *******/}
      {gender === "m"? 
      <StaticImage
        src = "../../assets/male.jpg"
        alt = "male avatar"
        placeholder = "blurred"
        layout = "constrained"
        className = { singleStaffStyles.image}
      /> :
      <StaticImage
        src = "../../assets/female.jpg"
        alt = "female avatar"
        placeholder = "blurred"
        layout = "constrained"
        className = { singleStaffStyles.image}
      />
      }
      
      <h1 className = { singleStaffStyles.title }>{ name }</h1>
      <h1 className = { singleStaffStyles.subtitle }>{ title }</h1>
    </div>
  );
};

export default SingleStaff;