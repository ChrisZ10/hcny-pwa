module.exports = {
  siteMetadata: {
    title: `紐約豐收靈糧堂`,
    slogan: `建造榮耀的教會`,
    description: `We shall follow the vision as revealed in Revelation Chapter 22 to build the glorious church of Jesus Christ`,
    author: `Chris Zhao`,
    address: `54-47 Little Neck Pkwy, Little Neck, NY 11362`,
    email: `info@hcny.org`,
    phone: `+1 (718) 715 - 1730`,
    mainServiceTime: `週日10:30AM`,
    sundaySchoolZoom: `564 403 7557`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://hcny.org/graphql`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`
  ]
}
