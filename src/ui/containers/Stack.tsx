'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [900, 0])
  return (
    <div
      ref={ref}
      className='h-screen bg-white flex flex-col md:flex-row overflow-hidden'
    >
      <LazyAnimations>
        <m.div
          style={{ y: y2 }}
          className='w-full flex justify-center items-center md:w-1/2 md:order-1 h-full px-8 order-2'
        >
          <ul className='m-auto md:m-0 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 w-fit'>
            <li className='w-20 h-20 m-auto md:m-0'>
              <Image
                alt='JavaScript'
                height={70}
                width={70}
                src='/icons/javascript-svgrepo-com.svg'
              />
            </li>
            <li className='w-20 h-20 m-auto md:m-0'>
              <Image
                alt='React'
                height={70}
                width={70}
                src='/icons/react-svgrepo-com.svg'
              />
            </li>
            <li className='w-20 h-20 m-auto md:m-0'>
              <Image
                alt='Nextjs'
                height={70}
                width={70}
                src='/icons/nextjs-svgrepo-com.svg'
              />
            </li>
            <li className='w-20 h-20 m-auto md:m-0'>
              <Image
                alt='Tailwind'
                height={70}
                width={70}
                src='/icons/tailwind-svgrepo-com.svg'
              />
            </li>
            <li className='w-20 h-20 m-auto md:m-0'>
              <Image
                alt='Redux'
                height={70}
                width={70}
                src='/icons/redux-svgrepo-com.svg'
              />
            </li>
            <li className='m-auto font-bold md:text-4xl text-3xl text-blue-500'>
              Zustand
            </li>
          </ul>
        </m.div>
      </LazyAnimations>
      <LazyAnimations>
        <m.div
          style={{ y }}
          className='w-full md:w-1/2 h-full order-1 md:order-2 px-8 flex justify-center items-center bg-blue-800'
        >
          <p className='text-white text-5xl font-bold'>Stack</p>
        </m.div>
      </LazyAnimations>
    </div>
  )
}

export { Stack }
