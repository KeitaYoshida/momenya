/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    // title: 'Gatstrap',
    title: '木綿屋モーターサービス',
    description:
      'ガソリンスタンドと修理工場を併設し給油から洗車、修理、車検、レンタカー、販売まで、車のことなら木綿屋モーターサービスにお任せください。万が一のトラブルの際のレッカーサービスも行っております。|長野県下伊那郡|下條村|飯田市|長野県下伊那郡泰阜村|阿智村|阿南町',
    siteUrl: 'https://momenya-motor-service.com',
    author: '',
    twitter: '',
    adsense: '',
    icon: 'src/assets/images/momenya-logo.png',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/`,
        name: 'img',
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
    //     name: '木綿屋モーターサービス',
    //     short_name: '木綿屋',
    //     description: '',
    //     homepage_url: '',
    //     start_url: 'https://momenyamoter.gatsbyjs.io/',
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
        // mergeSecurityHeaders: true,
        // mergeLinkHeaders: true,
        // mergeCachingHeaders: true,
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true,
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
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-4144447566694088`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://momenya-motor-service.com',
        sitemap: 'https://momenya-motor-service.com/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`, // 追加
      options: {
        siteUrl: `https://momenya-motor-service.com`,
        stripQueryString: true,
      },
    },
  ],
}
