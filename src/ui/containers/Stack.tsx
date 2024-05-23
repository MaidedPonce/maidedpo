import { useTransform, motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const Stack = () => {
  const ref = useRef<HTMLInputElement>(null)
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [900, 300])

  return (
    <div ref={ref} className='h-screen bg-white flex overflow-hidden'>
      <motion.div style={{ y: y2 }} className='w-full h-fit'>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Nextjs</li>
          <li>Tailwind</li>
          <li>Zustand</li>
        </ul>
      </motion.div>
      <motion.div style={{ y }} className='w-full bg-blue-800' />
    </div>
  )
}

export default Stack
