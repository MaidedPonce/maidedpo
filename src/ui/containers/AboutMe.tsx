'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'

const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  /* const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [900, 0]) */
  return (
    <div
      ref={ref}
      className='h-screen bg-white flex flex-col md:flex-row overflow-hidden'
    >
      <section className='w-1/2 flex items-center justify-center p-4 flex-1'>
        <p className='text-2xl'>
          Llevo desde junio de 2020 practicando y estudiando desarrollo web con
          JavaScript de forma autodidacta.
        </p>
      </section>
      <section className='w-1/2 items-center bg-cover bg-center flex justify-center bg-programming h-full'>
        <LazyAnimations>
          <m.div className='h-fit w-full md:w-1/2'>
            <figure className='h-[25vw] w-[25vw] relative'>
              <Image
                fill
                alt='fairy'
                src='/images/dev.PNG'
              />
            </figure>
          </m.div>
        </LazyAnimations>
      </section>
    </div>
  )
}

export { AboutMe }
