import '@fontsource/noto-sans-jp'
import '@fontsource/noto-serif-jp'
import '@fontsource/open-sans'
import '@fontsource/shippori-mincho-b1'
import 'animate.css/animate.css'
//@ts-ignore
import emergence from 'emergence.js'
import 'font-awesome/css/font-awesome.css'
import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import React, { useEffect } from 'react'
import 'scss/gatstrap.scss'
import { siteMetadata } from '../../../gatsby-config'
import Footer from '../footer/footer'
import Navibar from '../navibar/navibar'

interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  useEffect(() => {
    emergence.init()
  })

  return (
    <div className="main-contents-box">
      <Navibar title={siteMetadata.title} location={location} />
      {children}
      <Footer title={siteMetadata.title} author={siteMetadata.author} />
    </div>
  )
}

export default Layout
