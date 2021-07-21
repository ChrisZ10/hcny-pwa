import React from 'react';

import * as staffSectionStyles from '../../styles/modules/staff/staffSection.module.scss';

const StaffSection = ({ title, children }) => {
  return (
    <div className = { staffSectionStyles.container }>
      <h1>{ title }</h1>
      <div className = { staffSectionStyles.grid }>
        { children }
      </div>
    </div>
  );
};

export default StaffSection;