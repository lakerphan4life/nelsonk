module.exports = {
  siteMetadata: {
    title: "Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest",
    author: "Iman Hamidi",
    description: "Nelson K Enterprise is the premier MSP and IT Management company in the Pacific Northwest",
    siteUrl: "https://www.nelsonkenterprise.com",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.nelsonkenterprise.com',
        sitemap: 'https://www.nelsonkenterprise.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.example.com`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: 'pixel id here',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato', 'Raleway']
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`
          },
          {
            family: `Raleway`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131332502-3",
        head: true,
      }
    }
  ]
}
