'use client'
import { useTransform, motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null)
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
            <Image
              alt='JavaScript'
              height={70}
              width={70}
              src='/icons/javascript-svgrepo-com.svg'
            />
          </li>
          <li className='m-auto'>
            <Image
              alt='JavaScript'
              height={70}
              width={70}
              src='/icons/react-svgrepo-com.svg'
            />
          </li>
          <li className='m-auto'>
            <Image
              alt='JavaScript'
              height={70}
              width={70}
              src='/icons/nextjs-svgrepo-com.svg'
            />
          </li>
          <li className='m-auto'>
            <Image
              alt='JavaScript'
              height={70}
              width={70}
              src='/icons/tailwind-svgrepo-com.svg'
            />
          </li>
          <li className='m-auto'>
            <Image
              alt='JavaScript'
              height={70}
              width={70}
              src='/icons/redux-svgrepo-com.svg'
            />
          </li>
          <li className='m-auto font-bold text-4xl text-blue-500'>Zustand</li>
        </ul>
      </motion.div>
      <motion.div style={{ y }} className='w-full bg-blue-800' />
    </div>
  )
}

export { Stack }
