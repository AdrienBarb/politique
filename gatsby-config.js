require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Élections départementales 2021`,
    description: `Présentation des candidats Frédéric Barbier et Martine Voidey pour les élections départementales du 20 et 27 Juin 2021.`,
    author: `Adrien Barbier`,
    keywords: `politique, élection, départementales, valentigney`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:100, 300,400,500,700, 800` 
        ],
        display: 'swap'
      }
    }
  ],
}


