'use client'
import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
/* import { NamesDesktop } from '../components/NamesDesktop'
import { NamesMobile } from '../components/NamesMobile' */
import Image from 'next/image'
import { LazyAnimations } from 'components/LazyAnimations'

export function Main() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-200, 400])
  // const nameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div
      ref={ref}
      className='bg-fairy-img flex flex-col items-center justify-center h-[170vh] bg-cover bg-center'
    >
      <LazyAnimations>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 2 }}
          className='font-bold text-brand-purple mt-20 flex flex-col items-center gap-2'
        >
          <h1 className='text-5xl mx-8'>Maided Hernandez</h1>
          <div className='h-[2px] w-full bg-brand-purple' />
          <h1 className='text-2xl'>Frontend Developer</h1>
        </m.div>
      </LazyAnimations>

      <LazyAnimations>
        <m.div
          style={{ y }}
          className='h-full'
        >
          <figure className='h-[25vw] w-[25vw] relative'>
            <Image
              fill
              alt='fairy'
              src='/images/fairy.PNG'
              loading='lazy'
            />
          </figure>
        </m.div>
      </LazyAnimations>
    </div>
  )
}
