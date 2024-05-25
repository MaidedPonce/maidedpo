'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'
import { Path } from '../components/Path'
import Image from 'next/image'

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
      <LazyAnimations>
        <m.div
          style={{ y: y2 }}
          className='w-full bg-yellow-600 flex justify-center items-center'
        >
          <p className='text-white font-bold text-5xl'>Experiencia</p>
        </m.div>
      </LazyAnimations>

      <LazyAnimations>
        <m.div
          style={{ y: y }}
          className='w-full h-full flex justify-around items-center flex-col'
        >
          <div>
            <h1 className='text-2xl font-semibold pb-4'>He colaborado en...</h1>
            <ol className='flex flex-col gap-4 list-disc pl-4'>
              <li className='marker:text-brand-cd'>
                <Path text='CuraDeuda' stroke='var(--cd)' />
              </li>
              <li className='marker:text-brand-int'>
                <Path text='INTRARE' stroke='var(--int)' />
              </li>
              <li className='marker:text-brand-wby'>
                <Path text='WeBookYou' stroke='var(--wby)' />
              </li>
            </ol>
            {/* <ul className='grid grid-cols-2 grid-rows-2 gap-3 w-fit'>
              <li className='bg-teal-400 w-36 row-span-2 col-start-1'>
                Cura Deuda
              </li>
              <li className='bg-purple-800 w-36 h-36 col-start-2 row-span-1'>
                INTRARE
              </li>
              <li className='bg-pink-600 w-36 h-36 col-start-2'>WeBookYou</li>
            </ul> */}
          </div>
          <div>
            <h1 className='text-2xl font-semibold pb-4'>
              Mis proyectos personales...
            </h1>
            <ul className='grid grid-cols-2 grid-rows-2 gap-3 w-fit m-auto'>
              <li className='row-start-1 col-star-1 row-span-1 h-36 w-36'>
                {/* <div className='absolute w-full h-full bg-black/20 z-10' /> */}
                <a
                  href='https://maidedponce.github.io/todoMachine/'
                  className='relative h-full flex items-center justify-center bg-black overflow-hidden '
                >
                  <h2 className='absolute text-white z-10 font-bold'>
                    TODOMACHINE
                  </h2>
                  <Image
                    fill
                    className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
                    alt='Screenshot de TODOMACHINE'
                    src='/images/todoMachine.png'
                  />
                </a>
              </li>
              <li className='row-start-2 col-start-1 w-36 h-36'>
                <a
                  href='https://yeahofcourse.com/'
                  className='h-full flex justify-center items-center relative  bg-black overflow-hidden'
                >
                  <h2 className='absolute text-white z-10 font-bold'>
                    Yes Of Course
                  </h2>
                  <Image
                    fill
                    className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
                    alt='Screenshot de Yes Of Course'
                    src='/images/yoc.png'
                  />
                </a>
              </li>
              <li className='h-full row-start-1 row-span-2 col-start-2'>
                <a
                  href='https://maidedponce.github.io/rick-and-morty/'
                  className='flex h-full justify-center items-center relative bg-black overflow-hidden'
                >
                  <h2 className='absolute text-white z-10 font-bold'>
                    Rick and Morty
                  </h2>
                  <Image
                    fill
                    className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
                    alt='Screenshot de Yes Of Course'
                    src='/images/rick.png'
                  />
                </a>
              </li>
            </ul>
          </div>
        </m.div>
      </LazyAnimations>
    </div>
  )
}

export { Projects }
