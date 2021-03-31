import React from 'react'
import OpacityBox from 'src/components/motion-box/opacity-box'

import './home-top-style.scss'

const TopSlider: React.FC = () => {
  return (
    <div className="flexslider flexslider-simple h-full loading">
      <ul>
        <li>
          <section className="py-0" id="cnt-1">
            <div>
              <div className="background-holder back-image"></div>
              <div className="container">
                <div className="row h-full py-8 align-items-center">
                  <OpacityBox>
                    <div className="p-4 py-3 px-sm-5 py-sm-3 top-message">
                      <div className="overflow-hidden">
                        <h1 className="fs-4 fs-md-5 zopacity">
                          Helping Leaders
                        </h1>
                      </div>
                      <div className="overflow-hidden">
                        <p className="color-primary mt-4 mb-5 lh-2 fs-1 fs-md-2 zopacity">
                          We look forward to help you in taking your company to
                          new height.
                        </p>
                      </div>
                      <div className="overflow-hidden">
                        <div>
                          <a className="btn btn-primary mr-3 mt-3" href="#">
                            Read more
                            <span className="fa fa-chevron-right ml-2"></span>
                          </a>
                          <a
                            className="btn btn-warning mt-3"
                            href="contact.html"
                          >
                            Contact us
                            <span className="fa fa-chevron-right ml-2"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </OpacityBox>
                </div>
              </div>
            </div>
          </section>
        </li>
      </ul>
    </div>
  )
}

export default TopSlider
