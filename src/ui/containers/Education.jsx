'use client'
import { useTransform, motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [900, 300])

  return (
    <div ref={ref} className='h-screen bg-white flex overflow-hidden'>
      <motion.div style={{ y: y2 }} className='w-full h-fit'>
        <ul className='grid grid-cols-3 grid-rows-2'>
          <li className='m-auto'>
                Holi
          </li>
        </ul>
      </motion.div>
      <motion.div style={{ y }} className='w-full bg-purple-800' />
    </div>
  )
}

export { Education }
