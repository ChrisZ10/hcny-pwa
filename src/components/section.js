import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as sectionStyles from '../styles/modules/section.module.scss';
import * as textStyles from '../styles/modules/text.module.scss';
import * as buttonStyles from '../styles/modules/button.module.scss';

const Section = ({ imageData, title, subtitle, description, buttonText }) => {
  return (
    <div className = { sectionStyles.grid }>
      <GatsbyImage
        className = { sectionStyles.background }
        image = { getImage(imageData) }
        alt = "Section Background"
      />

      <div className = { sectionStyles.container }>
        <div className = {sectionStyles.main}>
          { subtitle !== null && <h1 className = { textStyles.sectionSubtitle }>{ subtitle }</h1> }
          { title !== null && <h1 className = { textStyles.sectionTitle }>{ title }</h1> }
          { description !== null && <h1 className = { textStyles.sectionDescription }>{ title }</h1> }

          { buttonText !== null && 
            <div className = { buttonStyles.lightButtonContainer }>
              <a href = "#vision" className = { buttonStyles.lightButton } >{ buttonText }</a>
            </div> 
          }
        </div>
      </div>
    </div>
  );
}

export default Section;