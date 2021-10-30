module.exports = {
  siteMetadata: {
    title: "Jaymie Rosen",
    titleTemplate: "Jaymie Rosen",
    description:
      "Jaymie Rosen's personal website",
    url: "https://jaymierosen.gatsbyjs.io", // No trailing slash allowed!
    image: "", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jaymierosen",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starterw`,
        start_url: `/`,
        icon: `src/images/smiley.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
