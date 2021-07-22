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

export const pastors = [
  { name: "蕭慕道", title: "主任牧師", gender: "m" },
  { name: "曾斌武", title: "英文堂牧師", gender: "m" },
  { name: "曾二郎", title: "牧師", gender: "m" },
  { name: "潘道純", title: "牧師", gender: "m" },
  { name: "楊重芬", title: "傳道", gender: "f" },
  { name: "葉昆建", title: "傳道", gender: "m" },
  { name: "林台英", title: "傳道", gender: "f" },
  { name: "謝貴伯", title: "弟兄", gender: "m" }
];

export const directors = [
  { name: "李學振", title: "理事會主席", gender: "m" },
  { name: "王勤", title: "理事", gender: "f" },
  { name: "孫楊", title: "理事", gender: "f" },
  { name: "Jack Liu", title: "理事", gender: "m" },
  { name: "陳明利", title: "理事", gender: "m" }
];

export const coworkers = [
  { name: "劉怡萱", title: "辦公室主任", gender: "f" },
  { name: "林進", title: "教會管理員", gender: "m" },
  { name: "趙琳", title: "媒體同工", gender: "m" },
  { name: "孫有煒", title: "財務同工", gender: "m" },
  { name: "李海明", title: "安保同工", gender: "m" },
  { name: "覃強", title: "設備同工", gender: "m" },
  { name: "尹娟", title: "餐飲同工", gender: "f" },
  { name: "謝勝賢", title: "宣道同工", gender: "m" }
];