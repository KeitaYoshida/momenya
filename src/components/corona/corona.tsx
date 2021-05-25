import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'gatsby'

import './service.scss'

import HrDiv from 'src/components/tools/hr-div'

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

const Corona: React.FC = () => {
  return (
    <section className="background-white  text-center py-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6">
            <h3 className="color-primary fs-2 fs-lg-3">感染症対策</h3>
            {/* <p className="px-lg-4 mt-3">感染症対策</p> */}
            <HrDiv />
          </div>
        </div>
        <div className="row mt-4 mt-md-5">
          <MotionBox>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              <Link to="store-gasolin">個人情報取り扱い</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              個人情報
            </p>
          </MotionBox>
          <MotionBox>
            <h5 className="mt-4" data-zanim='{"delay":0.1}'>
              <Link to="store-moter-service">感染症対策</Link>
            </h5>
            <p className="mb-0 mt-3 px-3" data-zanim='{"delay":0.2}'>
              対策内容
            </p>
          </MotionBox>
        </div>
      </div>
    </section>
  )
}

export default Corona
