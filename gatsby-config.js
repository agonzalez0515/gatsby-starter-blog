module.exports = {
  siteMetadata: {
    title: `👑 Her Majesty`,
    subtitle: `is a pretty nice girl`,
    author: `Angie Gonzalez`,
    description: `Learning Blog`,
    siteUrl: `https://angiegonzalez.dev`,
    icon: `content/assets/laptop.png`,
    social: {
      twitter: `angieg0nzalez`,
      github: `agonzalez0515`
    },
    menu: [
      {
        label: 'Blog',
        path: '/'
      },
      {
        label: 'About',
        path: '/about'
      },
      {
        label: 'Projects',
        path: '/projects'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/components/Layout/layout.js`)
      }
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve:`gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-sass`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angie Gonzalez`,
        short_name: `AngieDev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/laptop.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
