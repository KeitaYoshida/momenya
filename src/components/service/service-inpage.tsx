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
      className="col-12 col-sm-6 mt-6"
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
              トータルカーライフサポート
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
              <Link to="store-gasolin">サービスステーション</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              給油や洗車、オイル交換、タイヤ交換、灯油配送、プロパンガス販売、、、様々なサービスを提供しています
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
              <Link to="store-moter-service">モーターサービス</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              全メーカー全車種対応可。車検、点検はもちろんもしものときはロードサービス（板金・修理）レンタカー・保険も扱っています。
            </p>
            <p className="pt-3">
              <Link to="store-moter-service">詳細はこちら</Link>
            </p>
          </MotionBox>
        </div>
      </div>
    </section>
  )
}

export default ServiceInPage
