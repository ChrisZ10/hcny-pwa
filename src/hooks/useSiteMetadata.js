import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          slogan
          description
          author
          address
          email
          phone
          mainServiceTime
          sundaySchoolZoom
        }
      }
    }
  `);

  return site.siteMetadata;
};

export const storylines = [
  "2001年10月，蕭慕道牧師與一些被聖靈觸摸並期待教會更新的弟兄姐妹，領受加州矽谷生命河靈糧堂劉彤牧師分享建造榮耀教會的異象，大家深深被劉牧師的分享所感動，被建造教會的異象所吸引。經過禱告和尋求，決定成立紐約豐收靈糧堂。", 
  
  "當時紐約正值“911”之後的艱難時刻，經濟凋敝，人心恐慌，但神的手仍在工作，人們比過去更需要主。“舉目向田觀看，莊稼已經熟了，可以收割了”。2001年10月28日紐約豐收靈糧堂成立，借用Bayside的Adria Hotel開始第一堂聚會，並於次年4月13日舉行開堂典禮。2007年10月拓植第一間分堂：新澤西豐收靈糧堂。", 
  
  "紐約豐收靈糧堂年成立以來一直在旅館聚會。因教會事工擴展，場地狹小面臨瓶頸。感謝主！神賜得地為業的恩膏，於2013年購得Little Neck一塊土地，橫跨長島和皇后區，近高速公路和商業中心，交通便捷，鄰近的華人社區，是極具潛力的福音禾場。2016年動工建造崇拜大堂，2018年聖誕節遷入新堂聚會。目前會友超過600人。"
];