import React from 'react'
import OpacityBox from 'src/components/motion-box/opacity-box'

import './home-top-style.scss'

const TopSlider: React.FC = () => {
  return (
    <section
      // className="h-full align-items-center py-0  justify-content-center "
      className="h-full h-md-75 py-0 justify-content-center align-items-center"
      id="home-top-cnt"
    >
      <OpacityBox time={1}>
        <div className="py-5 px-3 py-sm-5 px-sm-5 my-8 top-message">
          <div className="overflow-hidden">
            <h1 className="fs-1 fs-md-2">
              <span className="d-inline-block">届けたい、確かな安全と</span>
              <span className="d-inline-block">真心あるサービス</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="color-primary mt-2 mb-2 lh-2 fs-0 fs-md-1 ">
              車のサポートお任せください
            </p>
          </div>
          <div className="overflow-hidden">
            <div>
              <a className="btn btn-primary mr-3 mt-3" href="#">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </OpacityBox>
    </section>
  )
}

export default TopSlider
