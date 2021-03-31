import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  children?: React.ReactNode
  time: Number
}

const OpacityBox: React.FC<Props> = ({ children, time }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: time }}
    >
      {children}
    </motion.div>
  )
}

export default OpacityBox
