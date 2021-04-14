import * as React from 'react'
import { motion } from 'framer-motion'

import { Link } from 'gatsby'

import './detail.scss'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

//@ts-ignore
export const MenuItem = ({ title, link, index }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      key={index}
    >
      <Link to={'/' + link}>{title}</Link>
    </motion.li>
  )
}
