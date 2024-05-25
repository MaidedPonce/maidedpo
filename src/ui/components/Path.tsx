'use client'
import { LazyAnimations } from './LazyAnimations'
import { m } from 'framer-motion'

const Path = ({ stroke, bg, text, side = 'left' }: any) => {
  const draw = {
    default: {
      pathLength: 0,
      opacity: 0,
      stroke: stroke,
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
      fontSize: '1rem',
      transform: 'scale(1)',
    },
    animate: {
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <LazyAnimations>
      <m.div
        initial='default'
        whileHover='animate'
        className=' h-fit cursor-pointer'
      >
        <m.div variants={textVariants}>{text}</m.div>
        <m.svg className='w-full h-2' xmlns='http://www.w3.org/2000/svg'>
          <m.line
            x1={side === 'right' ? '100%' : '0'}
            y1='0'
            x2={side === 'left' ? '100%' : '0'}
            y2='0'
            strokeWidth={6}
            stroke={bg}
            fill='none'
            variants={draw}
          />
        </m.svg>
      </m.div>
    </LazyAnimations>
  )
}

export { Path }
