import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'gatsby'

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
      className="col-12 col-sm-4 mt-4"
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
              フルマネージド カー サービス
            </h3>
            <p className="px-lg-4 mt-3">
              ガソリンスタンドと修理工場、両施設を併設する私達だからこそできることがあります
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
              <FontAwesomeIcon
                icon={faGasPump}
                className="fs-1 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              <Link to="store-gasolin">ガソリンスタンド 下條SS</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              ガソリンスタンド。給油（ガソリン・灯油）・洗車・タイヤ交換・オイル交換・カー保険様々なサービスを提供しております。
            </p>
            <p className="pt-3">
              <Link to="store-gasolin">詳細はこちら</Link>
            </p>
          </MotionBox>
          <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              <FontAwesomeIcon
                icon={faWrench}
                className="fs-1 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              <Link to="store-moter-service">修理工場 モーターサービス</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              車の修理工場。板金・塗装・換装・車検・ロードサービス、車のトラブル、お悩み、お気軽にお問い合わせください。
            </p>
            <p className="pt-3">
              <Link to="store-moter-service">詳細はこちら</Link>
            </p>
          </MotionBox>
          <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              <FontAwesomeIcon
                icon={faToolbox}
                className="fs-1 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              新車・中古車 販売
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              Know the market before taking any step, reduce <br />
              risks before you go.{' '}
            </p>
          </MotionBox>
          {/* <MotionBox>
            <div
              className="background-11 border border-color-9 radius-round mx-auto d-flex align-items-center"
              style={{ height: 100, width: 100 }}
            >
              <FontAwesomeIcon
                icon={faComments}
                className="fs-1 color-blueish mx-auto fw-600"
              />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              コンタクト
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              Experience unparalleled service, from beginning
              <br />
              to final construction.
            </p>
          </MotionBox> */}
        </div>
      </div>
    </section>
  )
}

export default ServiceInPage
