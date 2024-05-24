'use client'
import { useTransform, motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const ContactMe = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [-900, 0])

  return (
    <div ref={ref} className='h-screen bg-white flex overflow-hidden'>
      <motion.div style={{ y: y2 }} className='w-full bg-gray-600' />
      <motion.div style={{ y: y }} className='w-full h-full'>
        <div>
          <ul className='grid grid-cols-2 grid-rows-2 gap-3 w-fit'>
            <li>
              <a href=''>maided.h.p90@gmail.com</a>
            </li>
            <li>
              <a href=''>LinkedIn</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export { ContactMe }
