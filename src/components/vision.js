import React from 'react';

import * as visionStyles from '../styles/modules/vision.module.scss';

const Vision = () => {
  return (
    <div className = { visionStyles.container }>
      <p>豐收靈糧堂異象</p>
      <p>建造榮耀的教會</p>
      <p>We shall follow the vision as revealed in Revelation Chapter 22 to build the glorious church of Jesus Christ</p>
      <div>
        <a>了解教會異象</a>
      </div>
    </div>
  );
}

export default Vision;