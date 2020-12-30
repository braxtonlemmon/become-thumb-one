module.exports = {
  siteMetadata: {
    title: `Become Thumb One`,
    description: `The only site where anyone can become thumb one.`,
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
        background_color: `#faf6f1`,
        theme_color: `#faf6f1`,
        display: `minimal-ui`,
        icon: `src/images/thumb.png`, 
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
  ],
}
