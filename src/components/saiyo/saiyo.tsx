import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'gatsby'
//@ts-ignore
import Image from 'src/assets/images/saiyo.jpg'

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
      className="col-12 col-sm-12 mt-6"
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
    <section className="background-11 text-center py-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6">
            <h3 className="color-primary fs-2 fs-lg-3">採用情報</h3>
            <HrDiv />
          </div>
        </div>
        <Link to="saiyo">
          <img src={Image} className="w-100 my-3" />
        </Link>
        <div className="row ">
          <MotionBox>
            <h5 className="fs-1" data-zanim='{"delay":0.1}'>
              <Link to="saiyo">
                私達の会社では一緒に働けるメンバーを募集中です
              </Link>
            </h5>
          </MotionBox>
        </div>
      </div>
    </section>
  )
}

export default Corona
