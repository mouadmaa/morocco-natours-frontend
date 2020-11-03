const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Morocco Natours`,
    description: `Morocco Natours`,
    author: `Mouad Maaroufi`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svgs`,
        path: path.join(__dirname, `static`, `svgs`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Morocco Natours`,
        short_name: `Morocco Natours`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        icons: [
          {
            src: `static/logo192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/logo512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
