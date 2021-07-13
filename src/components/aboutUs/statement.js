import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import SectionBanner from '../sectionBanner';
import * as statementStyles from '../../styles/modules/aboutUs/statement.module.scss';

const Statement = () => {

  const data = useStaticQuery(graphql`
    query {
      banner: imageSharp (
        original: {
          src: {
            regex: "/.*wheat-2.*/"
          }
        }
      ) {
        gatsbyImageData (
          placeholder: BLURRED,
          aspectRatio: 2.5,
          layout: FULL_WIDTH,
          transformOptions: {
            fit: OUTSIDE
          }
        )
      }
    }
  `);

  const { title } = useSiteMetadata();

  return (
    <>
      <SectionBanner
        imageData = { data.banner }
        title = "我們的信仰"
      />
    
      <div className = { statementStyles.container }>
        <div className = { statementStyles.leftColumn }>
          <h1>在{ title }</h1>
          <h1>我們相信</h1>
        </div>
        <div className = { statementStyles.rightColumn }>
          <p>三位一體的真神</p>
          <p>聖父是創造宇宙萬有的真神</p>
          <p>聖子耶穌本是與神同等，降世為人。因聖靈感孕，由童貞女馬利亞所生，在十字架上捨命救贖世人的罪。因祂的刑罰使人得平安，因祂的鞭傷使人得醫治。耶穌第三天從死裡復活、升天，如今坐在全能父神右邊，將來必再來審判世界</p>
          <p>聖靈是一位內住於信徒的神，聖靈充滿能帶給信徒過聖潔生活及事奉神的能力</p>
          <p>聖經是神所默示的，是一切信仰與生活的根基</p>
          <p>人的得救是因信稱義。在末日的審判時，信與不信的都要復活，信者得永生，不信者永遠滅亡</p>
          <p>教會是基督的身體。從使徒時代直到如今，我們同屬一個身體，見證神的榮耀</p>
        </div>
      </div>
    </>
  );
};

export default Statement;