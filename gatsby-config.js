require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

//console.log(`**************Using environment config****************: ${process.env.NODE_ENV}`)
//console.log(`**************Using environment config****************: ${process.env.GATSBY_GH_TOKEN}`)


module.exports = {
  siteMetadata: {
    title: `Ratnakar Rao Mallayagari`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@ratnakar-m`,
    portfolio_name:`Ratnakar Rao Mallayagari`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["GH_TOKEN", "GATSBY_GH_TOKEN"]
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization : `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`
        }
      },
    }
  ],
}
