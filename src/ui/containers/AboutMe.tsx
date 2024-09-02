'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'
import { Stack } from './Stack'
import { ContactMe } from './ContactMe'
import Divider from '../components/Divider'

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
  const yStack = useTransform(scrollYProgress, [0, 1], [800, 10])

  return (
    <>
      <section
        ref={ref}
        className='h-screen sticky top-0 bg-brand-purple flex flex-col items-center overflow-hidden'
      >
        <section className='flex flex-col items-center sticky top-20 mb-20'>
          <section className='w-1/2 flex items-center justify-center p-4 flex-1'>
            <LazyAnimations>
              <m.div
                style={{ y: title }}
                className=' text-white flex flex-col items-center gap-2'
              >
                <h1 className='text-5xl mx-8 font-bold'>Sobre mí</h1>
                <Divider />
                <p className='text-normal text-center'>
                  Llevo desde junio de 2020 practicando y estudiando desarrollo
                  web con JavaScript de forma autodidacta.
                </p>
              </m.div>
            </LazyAnimations>
          </section>
          <section className='w-80 h-96 items-center flex justify-center'>
            <figure className='relative overflow-hidden rounded-2xl h-full w-full'>
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
      </section>
      <LazyAnimations>
        <m.section
          className='mt-40 overflow-hidden flex justify-between items-end'
          style={{
            y: yStack,
            background:
              'linear-gradient(181deg, rgb(27, 12, 56) 0%, rgb(63, 20, 100) 50%, rgb(112, 74, 106) 100%)',
          }}
        >
          <Stack />
        </m.section>
        <ContactMe />
      </LazyAnimations>
    </>
  )
}

export { AboutMe }
