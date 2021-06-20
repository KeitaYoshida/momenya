// @ts-nocheck
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import Img2 from 'src/assets/images/momenya_03-980.jpg'
import Img1 from 'src/assets/images/momenya_05-980.jpg'
import HrDiv from 'src/components/tools/hr-div'
import './service.scss'

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
              className="background-11 mx-auto d-flex align-items-center"
              style={{ height: '100%', width: '100%' }}
            >
              <img src={Img1} />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              <Link to="store-gasolin">ガソリンスタンド</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              給油やコーティング・洗車、オイル交換、タイヤ販売・交換、灯油配送、プロパンガス販売、、、
              <br />
              様々なサービスを提供しています
            </p>
            <div className="d-inline-block info-box">
              <p className="my-0 pb-1 mt-2 fs--1 address-color">
                営業時間：月-土, 7:00-20:00
              </p>
              <p className="my-0 pb-1 fs--1 address-color">（祝日は休業日）</p>
              <p className="my-0 pb-1 fs--1 address-color">
                <a href="tel:0260272232">電話番号：0260-27-2232</a>
              </p>
              <p className="my-0 mb-2 fs--1 address-color">
                長野県下伊那郡下條村睦沢９２９７−４
              </p>
            </div>
          </MotionBox>
          <MotionBox>
            <div
              className="background-11 mx-auto d-flex align-items-center"
              style={{ height: '100%', width: '100%' }}
            >
              <img src={Img2} />
            </div>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              <Link to="store-moter-service">モーターサービス</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              全メーカー全車種対応可
              <br />
              車検・点検はもちろん、もしもの時はレッカーサービス（板金・修理）、レンタカー・保険も扱っています
            </p>
            <div className="d-inline-block info-box">
              <p className="my-0 pb-1 mt-2 fs--1 address-color">
                営業時間：月-土, 8:30-17:30
              </p>
              <p className="my-0 pb-1 fs--1 address-color">
                （第２・第４土・祝日は休業日）
              </p>
              <p className="my-0 pb-1 fs--1 address-color">
                <a href="tel:0260272235">電話番号：0260-27-2235</a>
              </p>
              <p className="my-0 mb-2 fs--1 address-color">
                長野県下伊那郡下條村睦沢９３０４−１
              </p>
            </div>
          </MotionBox>
        </div>
      </div>
    </section>
  )
}

export default ServiceInPage
