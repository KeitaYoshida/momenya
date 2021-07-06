import { motion, useCycle } from 'framer-motion'
import React, { useRef } from 'react'
import './detail.scss'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { useDimensions } from './use-dimensions'

const sidebar = {
  open: (custom = { height: 1000, width: 200 }) => ({
    clipPath: `circle(${custom.height * 2 + 200}px at calc(100% - 28px) 28px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      // zIndex: 1,
      display: 'block',
    },
  }),
  closed: (custom = { height: 1000, width: 200 }) => ({
    // clipPath: `circle(30px at 40px ${custom.width})`,
    // clipPath: `circle(25px at calc(100% - 28px) 28px`,
    // zIndex: -1,
    clipPath: `circle(20px at calc(100% - 28px) 28px`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      display: 'none',
    },
  }),
}

const Detail: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height, width } = useDimensions(containerRef)

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={{ height: height, width: width }}
      ref={containerRef}
    >
      <motion.div className="detail-box fixed-box" variants={sidebar}>
        <Navigation />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  )
}

export default Detail
