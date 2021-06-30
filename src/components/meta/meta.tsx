import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

//@ts-ignore
import { SiteSiteMetadata } from '../../../types/graphql-types'

interface Props {
  site:
    | Pick<
        SiteSiteMetadata,
        'title' | 'description' | 'author' | 'twitter' | 'adsense' | 'siteUrl'
      >
    | null
    | undefined
  title?: string
}

const Meta: React.FC<Props> = ({ site, title }: Props) => {
  const siteTitle = site?.title || ''
  const siteUrl = site?.siteUrl || ''
  const siteDescription = site?.description || ''
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={pageTitle}
      meta={[
        { property: 'og:title', content: pageTitle },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: siteDescription,
        },
        {
          name: 'google-site-verification',
          content:
            'google-site-verification=4SvqeHp4IP9XYTYPfUCb4RxN9APyx3UwmghLgbw-w-k',
        },
        // {
        //   property: 'og:image',
        //   content: `${siteUrl}/img/profile.jpg`,
        // },
      ]}
    ></Helmet>
  )
}
export default Meta
