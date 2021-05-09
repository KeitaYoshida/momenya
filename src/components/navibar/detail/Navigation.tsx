import * as React from 'react'
import { Link } from 'gatsby'

import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

import Service from 'src/models/service/service'
import HrDiv from 'src/components/tools/hr-div'

import './detail.scss'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2, display: 'block' },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      display: 'none',
    },
  },
}

export const Navigation = () => (
  <>
    <p className="py-0 my-1">
      <Link to="/">木綿屋</Link>
    </p>
    <p className="py-0 my-1 fs--1">
      <Link to="/store-gasolin">ガソリンスタンド 下條ＳＳ</Link>
    </p>
    <p className="py-0 my-1 fs--1">
      <Link to="/store-moter-service">修理工場 モーターサービス</Link>
    </p>
    <HrDiv />
    <motion.ul variants={variants} className="mt-3 px-0">
      {Service.map((service, i) => (
        <MenuItem title={service.title} link={service.link} index={i} key={i} />
      ))}
    </motion.ul>
    <HrDiv />
    <p className="mt-3">
      <Link to="/">採用情報</Link>
    </p>
  </>
)
