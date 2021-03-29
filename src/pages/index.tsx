import { graphql } from 'gatsby'
import React from 'react'

//@ts-ignore
import { IndexQueryQuery, PostByPathQuery } from '../../types/graphql-types'
import Post from '../templates/post/post'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Service from '../components/service/service-inpage'
import TopSlider from 'src/components/home-top/top-slider'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  const meta = data.site?.meta

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <TopSlider />
      <Service />
      {posts.map((post, i) => (
        <Post
          data={post as PostByPathQuery}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))}
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
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
