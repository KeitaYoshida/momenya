import React from 'react'
import './service-list-style.scss'
import { motion } from 'framer-motion'

import { Link } from 'gatsby'

import HrDiv from 'src/components/tools/hr-div'
import OpacityBox from 'src/components/motion-box/opacity-box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Service from 'src/models/service/service'

const Cnt: React.FC = () => {
  const values = Service
  const topClassFirst = 'row no-gutters pos-relative mt-6'
  const topClass = 'row no-gutters pos-relative mt-4 mt-lg-0'
  // const order2 = 'order-lg-2'
  return (
    <>
      {values.map((row, index) => {
        return (
          <OpacityBox
            time={1.5}
            key={index}
            className={index === 0 ? topClassFirst : topClass}
          >
            <div className="elixir-caret d-none d-lg-block"></div>
            <div
              className={
                index % 2 === 0
                  ? 'col-lg-6 py-3 py-lg-0 mb-0 image-box '
                  : 'col-lg-6 py-3 py-lg-0 mb-0 image-box order-lg-2'
              }
            >
              <div className="background-holder " id={row.image}></div>
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-white">
              <div className="d-flex align-items-center h-100">
                <div>
                  <div className="overflow-hidden">
                    <h5>
                      <motion.a
                        // className="text-center fs--1 fs-md--1 d-inline-block mx-1 mx-md-2 px-3 py-1 my-1 title-list"
                        href={row.link}
                        whileHover={{ scale: 1.2 }}
                        key={index}
                      >
                        {row.title}
                      </motion.a>
                    </h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim='{"delay":0.1}'>
                      {row.value}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div className="overflow-hidden ml-2">
                      <a href={row.link}>
                        詳しく見る
                        <FontAwesomeIcon
                          icon={faAngleDoubleRight}
                          className="fs-0 color-blueish mx-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OpacityBox>
        )
      })}
    </>
  )
}

const ServiceList: React.FC = () => {
  const service = Service
  return (
    <section className="background-11">
      <div className="container py-8 ">
        <h3 className="text-center fs-2 fs-md-3">サービス</h3>
        <HrDiv />
        <div className="mt-3 mx-md-5 text-center">
          {service.map((row, index) => (
            <motion.a
              className="text-center fs--1 fs-md--1 d-inline-block mx-1 mx-md-2 px-3 py-1 my-1 title-list"
              href={row.link}
              whileHover={{ scale: 1.2 }}
              key={index}
            >
              {row.title}
            </motion.a>
          ))}
        </div>
        <Cnt />
      </div>
    </section>
  )
}

export default ServiceList
