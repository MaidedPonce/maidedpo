'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'
import { Path } from '../components/Path'
import { useGetWidth } from 'app/hooks'

const Education = () => {
  const ref = useRef(null)
  const { elementWidth } = useGetWidth({})
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const viewport = elementWidth <= 768 ? -300 : 0
  const y = useTransform(scrollYProgress, [0, 1], [-500, (viewport)])
  const y2 = useTransform(scrollYProgress, [0, 1], [900, 300])

  return (
    <div ref={ref} className='h-screen bg-white flex-col md:flex-row flex overflow-hidden'>
      <LazyAnimations>
        <m.div style={{ y: y2 }} className='w-full pt-8 md:w-1/2 h-full md:h-fit px-8'>
          <ol className='flex flex-col gap-6 p-4 list-disc'>
            <li className='marker:text-brand-uni'>
              <Path
                text={
                  <div className='flex gap-4 flex-col'>
                    <a className='font-bold' href='https://rcastellanos.cdmx.gob.mx/'>Universidad Rosario Castellanos</a>
                    <span>Tecnolgías de la información y la Comunicación</span>
                  </div>
                }
                stroke='var(--uni)'
              />
            </li>
            <li className='marker:text-brand-plat'>
              <Path text={
                <a href='https://platzi.com/p/maidedhp/'>Platzi</a>
              } stroke='var(--plat)' />
            </li>
          </ol>
        </m.div>
      </LazyAnimations>
      <LazyAnimations>
        <m.div
          style={{ y }}
          className=' bg-purple-800 w-full h-full md:w-1/2 flex justify-center items-center'
        >
          <p className='text-white font-bold text-5xl'>Educación</p>
        </m.div>
      </LazyAnimations>
    </div>
  )
}

export { Education }
