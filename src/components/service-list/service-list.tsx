import React from 'react'
import './service-list-style.scss'

import HrDiv from 'src/components/tools/hr-div'
import OpacityBox from 'src/components/motion-box/opacity-box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

interface Contents {
  title: string
  value: string
  image: string
  link: string
}
;[]

const contents = [
  {
    title: '洗車',
    value: 'test',
    image: 'sensha',
    link: 'test',
  },
  {
    title: '車検',
    value: 'test',
    image: 'shaken',
    link: 'test',
  },
  {
    title: '給油',
    value: 'test',
    image: 'kyuyu',
    link: 'test',
  },
  {
    title: 'タイヤ交換',
    value: 'test',
    image: 'taiyakoukan',
    link: 'test',
  },
  {
    title: '修理・板金・塗装',
    value: 'test',
    image: 'bankin',
    link: 'test',
  },
  {
    title: '新車・中古車販売',
    value: 'test',
    image: 'hanbai',
    link: 'test',
  },
  {
    title: 'CAR保険',
    value: 'test',
    image: 'hoken',
    link: 'test',
  },
  {
    title: 'ロードサービス',
    value: 'test',
    image: 'road',
    link: 'test',
  },
]

const Cnt: React.FC = () => {
  const values = contents
  const topClassFirst = 'row no-gutters pos-relative mt-6'
  const topClass = 'row no-gutters pos-relative mt-4 mt-lg-0'
  const order2 = 'order-lg-2'
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
              <div
                className="background-holder radius-tl-secondary radius-tr-secondary radius-tr-lg-0"
                id={row.image}
              ></div>
            </div>
            <div className="col-lg-6 px-lg-5 py-lg-6 p-4 my-lg-0 background-11 radius-bl-secondary radius-bl-lg-0 radius-br-secondary radius-br-lg-0">
              <div className="d-flex align-items-center h-100">
                <div>
                  <div className="overflow-hidden">
                    <h5>{row.title}</h5>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim='{"delay":0.1}'>
                      {row.value}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div data-zanim='{"delay":0.2}'>
                      <a className="d-flex align-items-center" href="#">
                        Learn More{' '}
                        <div className="overflow-hidden ml-2">
                          <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            className="fs-0 color-blueish mx-auto"
                          />
                        </div>
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
  return (
    <section>
      <div className="container py-8">
        <h3 className="text-center fs-2 fs-md-3">サービス</h3>
        <HrDiv />
        <Cnt />
      </div>
    </section>
  )
}

export default ServiceList
