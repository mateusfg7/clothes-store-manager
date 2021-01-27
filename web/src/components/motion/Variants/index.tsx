import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
}

const item = {
  y: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  },
  x: {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }
}

interface VariantsItemProps {
  children: React.ReactNode
  direction: string
}

export const VariantsContainer: React.FC = ({ children }) => (
  <motion.div variants={container} initial="hidden" animate="visible">
    {children}
  </motion.div>
)

export const VariantsItem: React.FC<VariantsItemProps> = ({
  children,
  direction
}) => <motion.div variants={item[direction]}>{children}</motion.div>
