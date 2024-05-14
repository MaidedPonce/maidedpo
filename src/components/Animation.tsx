'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  color: string
  text: string
}

interface elementProps {
  [key: string]: {
    bg: string
    color: string
    stroke: string
  }
}

const elementValues: elementProps = {
  red: {
    bg: '#991b1b',
    color: 'white',
    stroke: '#690707',
  },
}

const Animation = ({ color, text }: Props) => {
  const palette = elementValues[color]
  const draw = {
    default: {
      pathLength: 0,
      opacity: 0,
      stroke: 'white',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
      stroke: palette?.stroke,
    },
  }
  const textVariants = {
    default: {
      color: palette?.color,
      fontSize: '1rem',
      transform: 'scale(1)',
    },
    hover: {
      transition: {
        duration: 0.3,
      },
      transform: 'scale(1.09)',
    },
  }
  return (
    <motion.div
      whileHover='hover'
      initial='default'
      animate='default'
      className='relative h-full cursor-pointer'
    >
      <motion.p variants={textVariants} className='absolute m-4 select-none'>
        {text}
      </motion.p>
      <motion.svg className='h-full w-full' xmlns='http://www.w3.org/2000/svg'>
        <motion.rect
          width='100%'
          height='100%'
          strokeWidth={10}
          stroke={palette?.bg}
          fill='none'
          variants={draw}
        />
      </motion.svg>
    </motion.div>
  )
}

export { Animation }
