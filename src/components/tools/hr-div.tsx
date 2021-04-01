import React from 'react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './tools.scss'

const HrDiv: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  return (
    <motion.div
      ref={ref}
      className="hr-div"
      initial={{ width: '2rem' }}
      animate={inView ? { width: '8rem' } : { width: '2rem' }}
      transition={{ duration: 0.5 }}
    />
  )
}

export default HrDiv
