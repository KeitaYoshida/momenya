import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  children?: React.ReactNode
  time: Number
  className?: string
}

const OpacityBox: React.FC<Props> = ({
  children,
  time,
  className = '',
}: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 0 },
  }
  return (
    <motion.div
      ref={ref}
      // initial={{ opacity: 0 }}
      className={className}
      animate={inView ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: time }}
    >
      {children}
    </motion.div>
  )
}

export default OpacityBox
