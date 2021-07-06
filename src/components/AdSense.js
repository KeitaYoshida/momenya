// AdSense.Responsive = ({ format = 'auto' }) => {
//   const [state, setState] = useState({ showAds: false })

//   useEffect(() => {
//     if (state.showAds) {
//       window.adsbygoogle = window.adsbygoogle || []
//       window.adsbygoogle.push({})
//     }
//     if (window) {
//       const minWidth = responsive.tablet.minWidth // 769
//       const shouldShowAds = window.innerWidth >= minWidth
//       if (shouldShowAds) {
//         setState({ showAds: true })
//       }
//     }
//   }, [state.showAds])

//   if (!state.showAds) return null

//   return (
//     <div>
//       <Ins
//         className="adsbygoogle"
//         data-ad-client="ca-pub-4144447566694088"
//         data-ad-format={format}
//       />
//     </div>
//   )
// }

// const Ins = styled.ins({
//   display: 'block',
// })
