import { graphql } from 'gatsby'
import React from 'react'
import TopSlider from 'src/components/home-top/top-slider'
// import Insta from 'src/components/instagram/instagram-in-home'
//@ts-ignore
import { IndexQueryQuery } from '../../types/graphql-types'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import Saiyo from '../components/saiyo/saiyo'
import ServiceList from '../components/service-list/service-list'
import Service from '../components/service/service-inpage'

// import Insta from 'src/components/instagram/instagram-row'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  // const posts = data.remark.posts
  const meta = data.site?.meta

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <TopSlider />
      {/* <Insta /> */}
      <Service />
      <ServiceList />
      <Saiyo />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
  }
`
