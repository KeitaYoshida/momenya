import React from 'react'
import './service-list-style.scss'

import HrDiv from 'src/components/tools/hr-div'
import OpacityBox from 'src/components/motion-box/opacity-box'

const ServiceList: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h3 className="text-center fs-2 fs-md-3">Our Services</h3>
        <HrDiv />
        <div className="row no-gutters pos-relative mt-6">
          <div className="elixir-caret d-none d-lg-block"></div>
          <div
            className="col-lg-6 py-3 py-lg-0 mb-0"
            // style="min-height:400px;"
          >
            <div
              className="background-holder radius-tl-secondary radius-tr-secondary radius-tr-lg-0"
              id="sensha"
            ></div>
          </div>
          <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-11 radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0 radius-tr-lg-secondary">
            <div className="d-flex align-items-center h-100">
              <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                <div className="overflow-hidden">
                  <h5 data-zanim='{"delay":0}'>Business Consulting</h5>
                </div>
                <div className="overflow-hidden">
                  <p className="mt-3" data-zanim='{"delay":0.1}'>
                    As one of the world’s largest accountancy networks, elixir
                    helps a diverse range of clients with a diverse range of
                    needs.This is especially true of our Advisory Practice,
                    which provides corporate finance and transaction services,
                    business restructuring.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <div data-zanim='{"delay":0.2}'>
                    <a className="d-flex align-items-center" href="#">
                      Learn More{' '}
                      <div className="overflow-hidden ml-2">
                        <span
                          className="d-inline-block"
                          data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                        >
                          &xrarr;
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters pos-relative mt-4 mt-lg-0">
          <div className="elixir-caret d-none d-lg-block"></div>
          <div
            className="col-lg-6 py-3 py-lg-0 mb-0 order-lg-2"
            // style="min-height:400px;"
          >
            <div
              className="background-holder radius-tl-secondary radius-tl-lg-0 radius-tr-secondary radius-tr-lg-0"
              // style="background-image:url(assets/images/7.jpg);"
            ></div>
          </div>
          <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-11 radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0">
            <div className="d-flex align-items-center h-100">
              <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                <div className="overflow-hidden">
                  <h5 data-zanim='{"delay":0}'>Tax consulting</h5>
                </div>
                <div className="overflow-hidden">
                  <p className="mt-3" data-zanim='{"delay":0.1}'>
                    Elixir serves clients across the country and around the
                    world as they navigate an increasingly complex tax
                    landscape. Our tax professionals draw on deep experience and
                    industry-specific knowledge to deliver clients the insights
                    and innovation they need.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <div data-zanim='{"delay":0.2}'>
                    <a className="d-flex align-items-center" href="#">
                      Learn More{' '}
                      <div className="overflow-hidden ml-2">
                        <span
                          className="d-inline-block"
                          data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                        >
                          &xrarr;
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters pos-relative mt-4 mt-lg-0">
          <div className="elixir-caret d-none d-lg-block"></div>
          <div
            className="col-lg-6 py-3 py-lg-0 mb-0"
            // style="min-height:400px;"
          >
            <div
              className="background-holder radius-tl-secondary radius-tr-secondary radius-tr-lg-0 radius-tl-lg-0 radius-bl-0 radius-bl-lg-secondary"
              // style="background-image:url(assets/images/8.jpg);"
            ></div>
          </div>
          <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-11 radius-bl-secondary radius-bl-lg-0 radius-br-secondary">
            <div className="d-flex align-items-center h-100">
              <div data-zanim-timeline="{}" data-zanim-trigger="scroll">
                <div className="overflow-hidden">
                  <h5 data-zanim='{"delay":0}'>Advisory</h5>
                </div>
                <div className="overflow-hidden">
                  <p className="mt-3" data-zanim='{"delay":0.1}'>
                    To help you understand what this road looks like, we
                    surveyed 1165 digital marketers across Europe and North
                    America to explore current trends and priorities in digital
                    marketing.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <div data-zanim='{"delay":0.2}'>
                    <a className="d-flex align-items-center" href="#">
                      Learn More{' '}
                      <div className="overflow-hidden ml-2">
                        <span
                          className="d-inline-block"
                          data-zanim='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                        >
                          &xrarr;
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-7">
          <div
            className="col-sm-6 col-lg-4 px-4 px-sm-3 text-lg-x"
            data-zanim-timeline="{}"
            data-zanim-trigger="scroll"
          >
            <h5 data-zanim='{"delay":0}'>
              <span className="ion-card color-primary fs-2 icon-position-fix mr-3"></span>
              Special financing
            </h5>
            <p className="mt-3 pr-3 pr-lg-5 mb-0" data-zanim='{"delay":0.1}'>
              Apply for special financial support and earn exclusive rewards.
            </p>
          </div>
          <div
            className="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-sm-0 text-lg-x"
            data-zanim-timeline="{}"
            data-zanim-trigger="scroll"
          >
            <h5 data-zanim='{"delay":0}'>
              <span className="ion-chatbox-working color-primary mr-3"></span>
              Chat with team
            </h5>
            <p className="mt-3 pr-3 pr-lg-5 mb-0" data-zanim='{"delay":0.1}'>
              Have a question? Chat online with an expert.{' '}
              <a href="#">
                Start chatting
                <span className="fa fa-external-link ml-1 icon-position-fix"></span>
              </a>
            </p>
          </div>
          <div
            className="col-sm-6 col-lg-4 px-4 px-sm-3 mt-4 mt-lg-0 text-lg-x"
            data-zanim-timeline="{}"
            data-zanim-trigger="scroll"
          >
            <h5 data-zanim='{"delay":0}'>
              <span className="ion-android-call color-primary mr-3"></span>Call
              a specialist
            </h5>
            <p className="mt-3 pr-3 pr-lg-5 mb-0" data-zanim='{"delay":0.1}'>
              Our 24/7 support team is ready for you at 1-800-MY-Elixir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceList
