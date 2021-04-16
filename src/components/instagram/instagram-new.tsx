// import React from 'react'
// import './row.scss'

// export default class Instagram extends React.Component {
//   state = { photos: [], loading: true }

//   // Your Instragam ID can be retrieved here. Just make sure to replace your instagram name at the end
//   // https://www.instagram.com/web/search/topsearch/?context=blended&query=INSTAGRAM_USERNAME

//   // Your specifications needed for the fetch call later
//   INSTAGRAM_ID = '4827544420'
//   THUMBNAIL_WIDTH = 640
//   PHOTO_COUNT = 30

//   f =
//     'EAAN01aeturMBAAOzZAjSAgJHYZB1wsKWkfAY9ZAkmfACoDtkRl3y5rUru0vxDDcbGp2h9aTyEK0ExoU3n4Vqg8gJf2ZAZCo7vwKPFZCfI7JLpR4w2t07PTqyaZBg8FvcgLIT7IULp1aIdZCGLbBFm1eiq8j5QcCPJNUdKAymrR7yuicRwDbINcS3Hnlcq4zJQNz8yzXqxrXOlu0s4Ore1W7vKTZBJ5nDWzlYvjqktz46TeQZDZD'
//   fn =
//     'EAAN01aeturMBADZBZC2pb2vGxTVSOHF3ZBtaDvYvVV4DKnkLG3vcpZCmJqR1ZAMw6owvep5tZBMTLsb9ZCwn2kmQReZC4WxU5nx1i8KF9kEmzAoVfXtIIWXUZAhjQV1DX4MxniYzZBD20P8ZAiAXmqzxZBX1sxXqmGCJ2tHLEAmBJDqPYG3oHwZBb6oapmaRsCVGkGKcnajhZCoZAxUbSjZCawEsPjO5c60ldGnnvXAKT1rtB1fD2AZDZD'
//   id = '972885920168627'
//   app = 'd0dd6f7d92cd6292c87b084518526239'
//   url =
//     'https://graph.facebook.com/v10.0/oauth/access_token?grant_type=fb_exchange_token&client_id=972885920168627&client_secret=d0dd6f7d92cd6292c87b084518526239&fb_exchange_token=EAAN01aeturMBADZBZC2pb2vGxTVSOHF3ZBtaDvYvVV4DKnkLG3vcpZCmJqR1ZAMw6owvep5tZBMTLsb9ZCwn2kmQReZC4WxU5nx1i8KF9kEmzAoVfXtIIWXUZAhjQV1DX4MxniYzZBD20P8ZAiAXmqzxZBX1sxXqmGCJ2tHLEAmBJDqPYG3oHwZBb6oapmaRsCVGkGKcnajhZCoZAxUbSjZCawEsPjO5c60ldGnnvXAKT1rtB1fD2AZDZD'
//   to2 = {
//     access_token:
//       'EAAN01aeturMBADwcZAOxxL4FFWHdKXwAyTi74pP8QkVHyBlPzamow6Wo3XPFOZC55ttPnoPsjPuCVZAn2jPUs2ZA1qf9xrf0bck2W1ZCFbfkvqZBRIrjkzPoeJCcstkIY0t5VUetYhGqMrCH61fwVLwZCjwUPYl28ekUHG6mSDrjAZDZD',
//     token_type: 'bearer',
//     expires_in: 5105578,
//   }
//   urlTo3 =
//     'https://graph.facebook.com/v10.0/me?access_token=EAAN01aeturMBADwcZAOxxL4FFWHdKXwAyTi74pP8QkVHyBlPzamow6Wo3XPFOZC55ttPnoPsjPuCVZAn2jPUs2ZA1qf9xrf0bck2W1ZCFbfkvqZBRIrjkzPoeJCcstkIY0t5VUetYhGqMrCH61fwVLwZCjwUPYl28ekUHG6mSDrjAZDZD'
//   to3Id = '1269671453434174'
//   url4 = `https://graph.facebook.com/v10.0/1269671453434174/accounts?access_token=EAAN01aeturMBADwcZAOxxL4FFWHdKXwAyTi74pP8QkVHyBlPzamow6Wo3XPFOZC55ttPnoPsjPuCVZAn2jPUs2ZA1qf9xrf0bck2W1ZCFbfkvqZBRIrjkzPoeJCcstkIY0t5VUetYhGqMrCH61fwVLwZCjwUPYl28ekUHG6mSDrjAZDZD`
//   url4Test = `https://graph.facebook.com/v7.0/972885920168627/accounts?access_token=EAAN01aeturMBADYGGXuxyZBdKlxFQOgZBXwQZAQRots6HZBdFfHX435lD5ByPOcvy4Wd7IZCNWjPqWurZCsxMNkwZCQvWTttAkhy909TGWAsG9cHzZBo0etkMH75nZB2sRpYIRGg7FdZASeBfHZBVruSoEAFD0qgRfFocBEgbX3TxuZCRAZDZD`

//   museigen =
//     'EAAN01aeturMBAEfnZBWqS2OASB0G7BYkooemlKrC72dSZCl4y68ZCDiU696NslIb38myfF8aZAbUmYNrnBxsgWx7RDUDMrp4sgINqkjJIbhJhCzVYZAuE7aIZB07bnxmUxrAS2Y7Hjf8JAyoZB1IrSxMBgiU7ZBMRCY1XLLipXnhpwZDZD'

//   async componentDidMount() {
//     try {
//       // Hack from https://stackoverflow.com/a/47243409/2217533
//       const response = await fetch(
//         `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${this.INSTAGRAM_ID}","first":${this.PHOTO_COUNT},"after":null}`,
//         { mode: 'cors' }
//       )
//       const { data } = await response.json()
//       const photos = data.user.edge_owner_to_timeline_media.edges.map(
//         ({ node }) => {
//           const { id } = node
//           const comments = node.edge_media_to_comment.count
//           const likes = node.edge_media_preview_like.count
//           const caption = node.edge_media_to_caption.edges[0].node.text
//           const thumbnail = node.thumbnail_resources.find(
//             (thumbnail) => thumbnail.config_width === this.THUMBNAIL_WIDTH
//           )
//           const { src, config_width: width, config_height: height } = thumbnail
//           const url = `https://www.instagram.com/p/${node.shortcode}`
//           return {
//             id,
//             caption,
//             src,
//             width,
//             height,
//             url,
//             comments,
//             likes,
//           }
//         }
//       )
//       this.setState({ photos, loading: false })
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   render() {
//     return (
//       <div className="post-wrapper">
//         {/* map through our posts here */}
//         {this.state.photos &&
//           this.state.photos.map(
//             ({ src, url, id, likes, comments, caption }) => (
//               <a
//                 href={url}
//                 target="_blank"
//                 className="post-item"
//                 rel="noopener noreferrer"
//                 key={id}
//               >
//                 <img
//                   src={src}
//                   className="post-image"
//                   alt={caption.substring(0, 40)}
//                 />
//                 {/*  */}
//                 <div className="post-item-info">
//                   <ul>
//                     <li className="post-item-likes">
//                       <span role="img" aria-label="heart">
//                         <svg
//                           width="1em"
//                           height="1em"
//                           viewBox="0 0 24 24"
//                           fill="white"
//                           style={{
//                             fontSize: '14px',
//                             lineHeight: '1.45',
//                           }}
//                         >
//                           <path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z"></path>
//                         </svg>
//                       </span>{' '}
//                       {likes !== null ? likes.toLocaleString() : 0}
//                     </li>
//                     <li className="post-item-comments">
//                       <span role="img" aria-label="speech-balloon">
//                         <svg
//                           width="1em"
//                           height="1em"
//                           viewBox="0 0 24 24"
//                           fill="white"
//                           style={{
//                             fontSize: '14px',
//                             lineHeight: '1.45',
//                           }}
//                         >
//                           <path d="M24 9.874C24 4.42 18.627 0 12 0S0 4.42 0 9.874c0 4.512 3.678 8.317 8.701 9.496L12 24l3.299-4.63C20.322 18.19 24 14.385 24 9.874z"></path>
//                         </svg>
//                       </span>{' '}
//                       {comments !== null ? comments.toLocaleString() : 0}
//                     </li>
//                   </ul>
//                 </div>
//               </a>
//             )
//           )}
//       </div>
//     )
//   }
// }
