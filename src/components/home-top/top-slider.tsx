// @ts-nocheck
import React from 'react'
import './home-top-style.scss'
import { StaticImage } from "gatsby-plugin-image"

const TopSlider: React.FC = () => {
  return (
    <section
      className="h-full py-0 h-sm-75"
    >
      <ul className="slider_fade">
        {/* <li><StaticImage src="../../assets/images/momenya_01.jpeg" alt="m1" /></li> */}
	<li></li>
	<li></li>
	<li></li>
	<li></li>
        {/* <li><StaticImage src="../../assets/images/momenya_02.jpeg" alt="m2" /></li>
        <li><StaticImage src="../../assets/images/momenya_03.jpeg" alt="m3" /></li>
        <li><StaticImage src="../../assets/images/momenya_04.jpeg" alt="m4" /></li> */}
      </ul>
      <div className="message-content h-full">
        <div className="py-5 px-3 py-sm-5 px-sm-5 top-message">
          <div className="overflow-hidden">
            <h1 className="fs-1 fs-md-2">
              <span className="d-inline-block">届けたい、確かな安全と</span>
              <span className="d-inline-block">真心あるサービス</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="color-primary mt-2 mb-2 lh-2 fs-2 fs-md-2 ">
              車のサポート&nbsp;&nbsp;お任せください
            </h2>
          </div>
          <div className="overflow-hidden">
            <div className="d-inline">
              <a className="btn btn-primary mr-3 mt-3" href="store-gasolin">ガソリンスタンド</a>
            </div>
            <div className="d-inline">
              <a className="btn btn-primary mr-3 mt-3" href="store-moter-service">
                車検・修理・車販
              </a>
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default TopSlider
