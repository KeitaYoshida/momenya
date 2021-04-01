import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './service.scss'

import HrDiv from 'src/components/tools/hr-div'

import {
  faGasPump,
  faWrench,
  faToolbox,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import './style.scss'

interface Props {
  children?: React.ReactNode
}

const MotionBox: React.FC<Props> = ({ children }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '20%' },
  }
  return (
    <motion.div
      ref={ref}
      className="col-sm-6 col-lg-3 mt-4"
      animate={inView ? 'opne' : 'closed'}
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <div>{children}</div>
    </motion.div>
  )
}

const ServiceInPage: React.FC = () => {
  return (
    <section className="background-white  text-center py-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6">
            <h3 className="color-primary fs-2 fs-lg-3">
              Welcome to the Elixir
            </h3>
            <p className="px-lg-4 mt-3">
              Get expert consultancy and support with Elixir, an advisory firm
              that stand by your side always.
            </p>
            <HrDiv />
          </div>
        </div>
        <div className="row mt-4 mt-md-5">
          <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              {/* <span className="icon-Bar-Chart5 fs-3 color-blueish mx-auto fw-600"></span> */}
              <FontAwesomeIcon
                icon={faGasPump}
                className="fs-3 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              Business Consulting
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              Solution for every business related problems, readily <br />
              and skillfully.
            </p>
          </MotionBox>
          <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              {/* <span className="icon-Bar-Chart5 fs-3 color-blueish mx-auto fw-600"></span> */}
              <FontAwesomeIcon
                icon={faWrench}
                className="fs-3 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              Risk Management
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              Calculate every possible risk in your business, take <br />
              control over them.
            </p>
          </MotionBox>
          <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              {/* <span className="icon-Bar-Chart5 fs-3 color-blueish mx-auto fw-600"></span> */}
              <FontAwesomeIcon
                icon={faToolbox}
                className="fs-3 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              Market Research
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              Know the market before taking any step, reduce <br />
              risks before you go.{' '}
            </p>
          </MotionBox>
          <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              {/* <span className="icon-Bar-Chart5 fs-3 color-blueish mx-auto fw-600"></span> */}
              <FontAwesomeIcon
                icon={faComments}
                className="fs-3 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              Quality Services
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              Experience unparalleled service, from beginning
              <br />
              to final construction.
            </p>
          </MotionBox>
        </div>
      </div>
    </section>
  )
}

export default ServiceInPage
