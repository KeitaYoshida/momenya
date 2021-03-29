import React from 'react'

import './home-top-style.scss'

const TopSlider: React.FC = () => {
  return (
    <div className="flexslider flexslider-simple h-full loading">
      <ul className="slides">
        <li data-zanim-timeline="{}">
          <section className="py-0" id="cnt-1">
            <div>
              <div
                className="background-holder elixir-zanimm-scale back-image opacity-2"
                // style="backgroundImage:url(assets/images/header-6.jpg);" data-zanimm='{"from":{"opacity":0.1,"filter":"blur(10px)","scale":1.05},"to":{"opacity":1,"filter":"blur(0px)","scale":1}}">
              ></div>
              <div className="container">
                <div
                  className="row h-full py-8 align-items-center"
                  data-inertia='{"weight":1.5}'
                >
                  <div className="col-sm-8 col-lg-7 px-5 px-sm-3">
                    <div className="overflow-hidden">
                      <h1
                        className="fs-4 fs-md-5 zopacity"
                        data-zanim='{"delay":0}'
                      >
                        Helping Leaders
                      </h1>
                    </div>
                    <div className="overflow-hidden">
                      <p
                        className="color-primary mt-4 mb-5 lh-2 fs-1 fs-md-2 zopacity"
                        data-zanim='{"delay":0.1}'
                      >
                        We look forward to help you in taking your company to
                        new height.
                      </p>
                    </div>
                    <div className="overflow-hidden">
                      <div className="zopacity" data-zanim='{"delay":0.2}'>
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
