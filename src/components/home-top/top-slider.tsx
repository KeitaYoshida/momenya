import React from 'react'
import OpacityBox from 'src/components/motion-box/opacity-box'

import './home-top-style.scss'
import Insta from 'src/components/instagram/instagram-in-home'

const TopSlider: React.FC = () => {
  return (
    <section
      // className="h-full align-items-center py-0  justify-content-center "
      className="h-full h-md-75 py-0 justify-content-center "
      id="home-top-cnt"
    >
      <OpacityBox time={1}>
        <div className="py-5 px-3 py-sm-5 px-sm-5 my-9 top-message">
          <div className="overflow-hidden">
            <h1 className="fs-1 fs-md-2">Top Message</h1>
          </div>
          <div className="overflow-hidden">
            <p className="color-primary mt-2 mb-2 lh-2 fs-0 fs-md-1 ">
              紹介文言。text text text text text text text text
            </p>
          </div>
          <div className="overflow-hidden">
            <div>
              <a className="btn btn-primary mr-3 mt-3" href="#">
                Read more
                <span className="fa fa-chevron-right ml-2"></span>
              </a>
              <a className="btn btn-warning mt-3" href="contact.html">
                Contact us
                <span className="fa fa-chevron-right ml-2"></span>
              </a>
            </div>
          </div>
        </div>
      </OpacityBox>
      <Insta />
    </section>
  )
}

export default TopSlider
