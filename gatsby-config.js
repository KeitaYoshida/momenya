/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'Gatstrap',
    // title: '木綿屋モーターサービス',
    description: 'Gatsby starter for bootstrap a blog',
    siteUrl: 'https://gatstrap.netlify.com',
    author: 'jaxx2104',
    twitter: 'jaxx2104',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Gatstrap',
    //     short_name: 'Gatstrap',
    //     description: 'Gatsby starter for bootstrap a blog',
    //     homepage_url: 'https://gatstrap.netlify.com',
    //     start_url: '/',
    //     background_color: '#fff',
    //     theme_color: '#673ab7',
    //     display: 'standalone',
    //     icons: [
    //       // {
    //       //   src: '/img/android-chrome-192x192.png',
    //       //   sizes: '192x192',
    //       //   type: 'image/png',
    //       // },
    //       // {
    //       //   src: '/img/android-chrome-512x512.png',
    //       //   sizes: '512x512',
    //       //   type: 'image/png',
    //       // },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-twitter',
    'gatsby-plugin-typegen',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `4827544420`,
        access_token:
          'EAAN01aeturMBANVTwuqHUNjPJZBZCLr3wSSUh1DvYgIjwMZBFHPaomZAUNRCAxiCppxJxhLNKbn2O8kfvopJBPruZA7RsVcZBCZCM8uOIUCv8pOOQ4FDQChy81RGBFtye6LCidxPq6IAfIJssjSXPKDkKzBqEOTmMP4eIUoGKdhXgZDZD',
        // access_token:
        //   'EAAN01aeturMBABqZBZBLVZCVoRvEIVHaAB9EkLq4z9czCZAYFKOXIC9A48yzcxxDPfQlyevZA5QSpspsnmVci8jMtFPC8NKc3B54rcVYudiO5ebioj1tNx8iV9MAIRxjiIdi1NUzntqU9H2yZAHwFlmoZAjcdt5gmZAYoepMwDMtsNjcyPTEIbZChyKdNJgqvzllkjur2BLk18AZDZD',
        instagram_id: '17841404812603443',
        paginate: 100,
        maxPosts: 1000,
        hashtags: true,
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `4827544420`,
    //   },
    // },
  ],
}
