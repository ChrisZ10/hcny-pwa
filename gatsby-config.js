module.exports = {
  siteMetadata: {
    title: "紐約豐收靈糧堂",
    slogan: "建造榮耀的教會",
    author: "Chris Zhao"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: "src",
          path: `${__dirname}/src`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`
  ]
}
