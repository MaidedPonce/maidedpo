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
  const y = useTransform(scrollYProgress, [0, 1], [-200, 600])
  // const nameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div
      ref={ref}
      className='bg-fairy-img flex justify-center h-[170vh] bg-cover bg-center'
    >
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
            />
          </figure>
        </m.div>
      </LazyAnimations>
    </div>
  )
}
