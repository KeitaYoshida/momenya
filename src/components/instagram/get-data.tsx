import { graphql, useStaticQuery } from 'gatsby'

const useInstagram = () => {
  return {}
  // const data = useStaticQuery(graphql`
  //   query {
  //     allInstagramContent {
  //       edges {
  //         node {
  //           id
  //           caption
  //           media_url
  //           permalink
  //           localImage {
  //             childImageSharp {
  //               gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
  //             }
  //           }
  //           album {
  //             localImage {
  //               childImageSharp {
  //                 gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // return (
  //   data.allInstagramContent.edges
  //     //@ts-ignore
  //     .filter(function (edge) {
  //       if (edge.node.localImage === null) {
  //         return false
  //       }
  //       return true
  //     })
  //     //@ts-ignore
  //     .map((edge) => ({
  //       ...edge.node.localImage.childImageSharp,
  //       id: edge.node.id,
  //       caption: edge.node.caption,
  //       username: edge.node.username,
  //       permalink: edge.node.permalink,
  //     }))
  // )
}
export default useInstagram
