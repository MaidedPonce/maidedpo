'use client'
import { useTransform, motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [-900, 0])

  return (
    <div ref={ref} className='h-screen bg-white flex overflow-hidden'>
      <motion.div style={{ y: y2 }} className='w-full bg-yellow-600' />
      <motion.div style={{ y: y }} className='w-full h-full'>
        <div>
          <h1>Experiencia laboral</h1>
          <ul className='grid grid-cols-2 grid-rows-2 gap-3 w-fit'>
            <li className='bg-teal-400 w-36 row-span-2 col-start-1'>
              Cura Deuda
            </li>
            <li className='bg-purple-800 w-36 h-36 col-start-2 row-span-1'>
              INTRARE
            </li>
            <li className='bg-pink-600 w-36 h-36 col-start-2'>WeBookYou</li>
          </ul>
        </div>
        <div>
          <h1>Proyectos personales</h1>
          <ul className='grid grid-cols-2 grid-rows-2 gap-3 w-fit'>
            <li className='w-36 h-36 bg-[#c5c770] row-start-1 col-star-1 row-span-1'>
              TodoMachine
            </li>
            <li className='w-36 h-36 row-start-2 col-start-1 bg-[#3b82f6]'>
              Rick and Morty
            </li>
            <li className='w-36 col-start-2 row-span-2 bg-[#00c7d1]'>
              Rick and Morty
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export { Projects }
