import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className="footer">
    <section style={{ backgroundColor: '#3D4C6F' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="color-white p-5 p-lg-6 radius-secondary"
              style={{ backgroundColor: '#2a3855' }}
            >
              <h4 className="color-white fs-1 fs-lg-2 mb-1">
                Sign up for email alerts
              </h4>
              <p className="color-white">
                Stay current with our latest insights
              </p>
              <form className="mt-4">
                <div className="row align-items-center">
                  <div className="col-md-7 pr-md-0">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 mt-3 mt-md-0">
                    <button className="btn btn-warning btn-block" type="submit">
                      <span className="color-primary fw-600">Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="row">
              <div className="col-6 col-lg-4 color-white ml-lg-auto">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="color-white" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="color-white" href="#">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="color-white" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="color-white" href="#">
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="color-white" href="#">
                      Global Office
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="color-white" href="#">
                      Local Office
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-5 ml-sm-auto">
                <a href="#">
                  <div className="row mb-3 align-items-center no-gutters">
                    <div className="col-auto">
                      <div
                        className="text-center d-flex align-items-center radius-primary"
                        style={{
                          height: '40px',
                          width: '40px',
                          backgroundColor: '#2a3855',
                        }}
                      >
                        <span className="w-100 fa fa-linkedin color-white"></span>
                      </div>
                    </div>
                    <div className="col-6 pl-3">
                      <h5 className="fs-0 color-white mb-0 d-inline-block">
                        Linkedin
                      </h5>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="row mb-3 align-items-center no-gutters">
                    <div className="col-auto">
                      <div
                        className="text-center d-flex align-items-center radius-primary"
                        style={{
                          height: '40px',
                          width: '40px',
                          backgroundColor: '#2a3855',
                        }}
                      >
                        <span className="w-100 fa fa-twitter color-white"></span>
                      </div>
                    </div>
                    <div className="col-6 pl-3">
                      <h5 className="fs-0 color-white mb-0 d-inline-block">
                        Twitter
                      </h5>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="row mb-3 align-items-center no-gutters">
                    <div className="col-auto">
                      <div
                        className="text-center d-flex align-items-center radius-primary"
                        style={{
                          height: '40px',
                          width: '40px',
                          backgroundColor: '#2a3855',
                        }}
                      >
                        <span className="w-100 fa fa-facebook color-white"></span>
                      </div>
                    </div>
                    <div className="col-6 pl-3">
                      <h5 className="fs-0 color-white mb-0 d-inline-block">
                        Facebook
                      </h5>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="row mb-3 align-items-center no-gutters">
                    <div className="col-auto">
                      <div
                        className="text-center d-flex align-items-center radius-primary"
                        style={{
                          height: '40px',
                          width: '40px',
                          backgroundColor: '#2a3855',
                        }}
                      >
                        <span className="w-100 fa fa-google-plus color-white"></span>
                      </div>
                    </div>
                    <div className="col-6 pl-3">
                      <h5 className="fs-0 color-white mb-0 d-inline-block">
                        Google+
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="text-center py-4"
      style={{ backgroundColor: '#2a3855', minHeight: '0' }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ opacity: 0.85 }}>
          <div className="col-sm-3 text-sm-left">
            <a href="index.html">
              <img src="assets/images/logo-light.png" alt="" />
            </a>
          </div>
          <div className="col-sm-6 mt-3 mt-sm-0">
            <p className="color-white lh-6 mb-0 fw-600">
              © Copyright 2021 木綿屋モーターサービス.
            </p>
          </div>
          <div className="col text-sm-right mt-3 mt-sm-0">
            <span className="color-white">Designed by 道の駅企画</span>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Footer
