module.exports = {
  siteMetadata: {
    title: `Become Thumb One`,
    description: `Become Thumb One`,
    author: `@braxtonlemmon`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Become Thumb One`,
        short_name: `Become Thumb One`,
        start_url: `/`,
        background_color: `#272425`,
        theme_color: `#272425`,
        display: `minimal-ui`,
        icon: `src/images/thumb.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Galindo'
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
