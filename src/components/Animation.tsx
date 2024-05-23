'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  gridProps: {
    color: string
    className?: string
    stroke: string
    text: string
    rotate: string
    bg: string
    textStyle?: string
  }
  showStroke: boolean
}

const Animation = ({ gridProps, showStroke }: Props) => {
  const { color, rotate, stroke, bg, text, textStyle } = gridProps
  const draw = {
    default: {
      pathLength: 0,
      opacity: 0,
      stroke: 'white',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
      stroke: stroke,
    },
  }
  const textVariants = {
    default: {
      color: color,
      fontSize: '1rem',
      transform: `scale(1) ${rotate}`,
    },
    animate: {
      transition: {
        duration: 0.3,
      },
      color: 'black',
    },
  }

  return (
    <motion.div
      initial='default'
      animate={showStroke ? 'animate' : 'default'}
      className='relative h-full cursor-pointer'
    >
      <motion.p
        variants={textVariants}
        className={`absolute select-none ${textStyle}`}
      >
        {text}
      </motion.p>
      <motion.svg className='h-full w-full' xmlns='http://www.w3.org/2000/svg'>
        <motion.rect
          width='100%'
          height='100%'
          strokeWidth={10}
          stroke={bg}
          fill='none'
          variants={draw}
        />
      </motion.svg>
    </motion.div>
  )
}

export { Animation }
