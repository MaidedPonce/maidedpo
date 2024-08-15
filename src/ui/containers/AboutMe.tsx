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
  const y = useTransform(scrollYProgress, [0, 1], [-100, 40])

  const scrollTitle = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const title = useTransform(scrollTitle.scrollYProgress, [0, 1], [-200, 0])
  return (
    <section
      ref={ref}
      className='h-screen bg-brand-purple flex flex-col items-center overflow-hidden'
    >
      <section className='w-1/2 flex items-center justify-center p-4 flex-1'>
        <LazyAnimations>
          <m.div
            style={{ y: title }}
            className=' text-white mt-20 flex flex-col items-center gap-2'
          >
            <h1 className='text-5xl mx-8 font-bold'>Sobre mí</h1>
            <div className='h-[2px] w-full bg-brand-violet' />
            <p className='text-normal text-center'>
              Llevo desde junio de 2020 practicando y estudiando desarrollo web
              con JavaScript de forma autodidacta.
            </p>
          </m.div>
        </LazyAnimations>
      </section>
      <section className='w-80 h-96 items-center flex justify-center'>
        <figure className='relative h-full w-full'>
          <Image
            fill
            alt='fairy'
            src='/images/bg_programming.JPEG'
            className='bg-cover bg-center'
          />
        </figure>
        <LazyAnimations>
          <m.div
            style={{ y }}
            className='h-fit absolute w-fit'
          >
            <figure className='h-40 w-40 relative'>
              <Image
                fill
                alt='fairy'
                src='/images/dev.PNG'
              />
            </figure>
          </m.div>
        </LazyAnimations>
      </section>
    </section>
  )
}

export { AboutMe }
