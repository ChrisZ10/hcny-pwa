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
}