import { graphql, useStaticQuery } from 'gatsby'

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    data.allInstaNode.nodes
      //@ts-ignore
      .filter(function (node) {
        if (node.localFile === null) {
          return false
        }
        return true
      })
      //@ts-ignore
      .map((node) => ({
        ...node.localFile.childImageSharp,
        id: node.id,
        caption: node.caption,
        username: node.username,
      }))
  )
}
export default useInstagram
