import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import * as React from 'react'
import HrDiv from 'src/components/tools/hr-div'
import Service from 'src/models/service/service'
import './detail.scss'
import { MenuItem } from './MenuItem'
//@ts-ignore
import Logo from 'src/assets/images/momenya-logo.png'

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
      <Link to="/">
        <img src={Logo} alt="momenya" className="momenya-logo" />
      </Link>
    </p>
    <p className="py-0 my-1">
      <Link to="/store-gasolin">ガソリンスタンド</Link>
    </p>
    <p className="py-0 my-1">
      <Link to="/store-moter-service">整備・点検・車検・修理</Link>
    </p>
    <HrDiv />
    <motion.ul variants={variants} className="mt-3 px-0">
      {Service.map((service, i) => (
        <MenuItem title={service.title} link={service.link} index={i} key={i} />
      ))}
    </motion.ul>
    <HrDiv />
    <p className="mt-3">
      <Link to="/saiyo">採用情報</Link>
    </p>
    <p className="mt-3">
      <Link to="/otoiawase">お問い合わせ</Link>
    </p>
  </>
)
