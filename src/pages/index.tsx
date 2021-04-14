import { graphql } from 'gatsby'
import React from 'react'

//@ts-ignore
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Service from '../components/service/service-inpage'
import ServiceList from '../components/service-list/service-list'
import TopSlider from 'src/components/home-top/top-slider'
import Insta from 'src/components/instagram/instagram-new'

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
      <Insta />
      <Service />
      {/* <Insta /> */}
      <ServiceList />
      {
        //@ts-ignore
        // posts.map((post, i) => {
        //   return (
        //     <Post
        //       data={post as PostByPathQuery}
        //       options={{
        //         isIndex: true,
        //       }}
        //       key={i}
        //     />
        //   )
        // })
      }
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
