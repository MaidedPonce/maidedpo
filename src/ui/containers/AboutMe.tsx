'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NamesDesktop } from '../components/NamesDesktop'
import { NamesMobile } from '../components/NamesMobile'
import { useGetWidth } from 'app/hooks'

export function AboutMe() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const { elementWidth } = useGetWidth({ ref })
  const nameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div
      ref={ref}
      className='min-h-[200vh] relative bg-gradient-to-br from-brand-blue via-brand-purple to-brand-yellow z-10'
    >
      <div className='min-h-screen sticky top-4 items-center lg:mb-72 px-8 lg:items-baseline h-[180vh] lg:h-[200vh] flex flex-col justify-between lg:justify-around'>
        {elementWidth >= 1024 ? (
          <NamesDesktop scroll={scrollYProgress} elementWidth={elementWidth} />
        ) : (
          <NamesMobile
            scroll={scrollYProgress}
            containerHeight={ref?.current?.offsetHeight}
          />
        )}
      </div>
      <motion.div
        className='text-white pb-8 px-8 w-full text-base flex items-center justify-center lg:text-xl sticky top-40 text-center h-[30vh] bg-transparent'
        style={{
          opacity: nameOpacity,
        }}
      >
        <p>
          Soy de la CDMX y llevo desde junio de 2020 practicando y estudiando
          desarrollo web con <span className='font-bold'>JavaScript</span> de
          forma autodidacta.
          <br /> He colaborado profesionalmente con el entorno{' '}
          <span className='font-bold'>Next js</span> desde 2021.
        </p>
      </motion.div>
    </div>
  )
}
