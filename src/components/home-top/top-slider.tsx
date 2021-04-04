import React from 'react'
import OpacityBox from 'src/components/motion-box/opacity-box'

import './home-top-style.scss'

const TopSlider: React.FC = () => {
  return (
    <section
      className="h-full align-items-center py-0  justify-content-center "
      id="home-top-cnt"
    >
      <OpacityBox time={1}>
        <div className="py-7 px-5 py-sm-5 px-sm-5 top-message">
          <div className="overflow-hidden">
            <h1 className="fs-2 fs-md-3 zopacity">トップメッセージ</h1>
          </div>
          <div className="overflow-hidden">
            <p className="color-primary mt-4 mb-5 lh-2 fs-1 fs-md-2 zopacity">
              紹介文言。前回お話したとおり、修理等のイメージを強めにデザインしてみました。
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
    </section>
  )
}

export default TopSlider
