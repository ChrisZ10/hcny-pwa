module.exports = {
  siteMetadata: {
    title: "紐約豐收靈糧堂",
    slogan: "建造榮耀的教會",
    author: "Chris Zhao",
    address: "54-47 Little Neck Pkwy, Little Neck, NY 11362",
    email: "info@hcny.org",
    phone: "+1 (718) 715 - 1730"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: "src",
          path: `${__dirname}/src`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
          typeName: "WPGraphQL",
          fieldName: "wpContent",
          url: "https://hcny.org/graphql"
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`
  ]
}
