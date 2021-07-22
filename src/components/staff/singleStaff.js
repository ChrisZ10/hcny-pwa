import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as singleStaffStyles from '../../styles/modules/staff/singleStaff.module.scss';

const SingleStaff = ({ name, title, gender }) => {
  return (
    <div className = { singleStaffStyles.container }>
      {gender === "m"? 
      <StaticImage
        src = "../../assets/male.png"
        alt = "male avatar"
        placeholder = "blurred"
        layout = "constrained"
      /> :
      <StaticImage
        src = "../../assets/female.png"
        alt = "female avatar"
        placeholder = "blurred"
        layout = "constrained"
      />
      }
      <h1 className = { singleStaffStyles.title }>{ name }</h1>
      <h1 className = { singleStaffStyles.subtitle }>{ title }</h1>
    </div>
  );
};

export default SingleStaff;