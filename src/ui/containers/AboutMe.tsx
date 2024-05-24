'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NamesDesktop } from '../components/NamesDesktop'
import { NamesMobile } from '../components/NamesMobile'

export function AboutMe() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const [parentWidth, setParentWidth] = useState(0)

  const updateParentWidth = () => {
    if (ref.current) {
      setParentWidth(ref.current?.offsetWidth)
    }
  }

  // Ejecuta updateParentWidth cuando el componente se monta y cuando ref cambia
  useLayoutEffect(() => {
    updateParentWidth()
  }, [ref.current])

  // Añade un listener para el evento resize del navegador
  useEffect(() => {
    window.addEventListener('resize', updateParentWidth)
    return () => {
      window.removeEventListener('resize', updateParentWidth)
    }
  }, [])

  const nameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div
      ref={ref}
      className='min-h-[200vh] relative bg-gradient-to-br from-brand-blue via-brand-purple to-brand-yellow z-10'
    >
      <div className='min-h-screen sticky top-4 items-center lg:mb-52 lg:items-baseline h-[180vh] lg:h-[200vh] flex flex-col justify-between lg:justify-around'>
        {parentWidth >= 1024 ? (
          <NamesDesktop scroll={scrollYProgress} parentWidth={parentWidth} />
        ) : (
          <NamesMobile
            scroll={scrollYProgress}
            containerHeight={ref?.current?.offsetHeight}
          />
        )}
      </div>
      <motion.p
        className='text-white px-8 w-full text-base lg:text-xl sticky top-40 lg:w-96 items-center h-[30vh] bg-transparent'
        style={{
          opacity: nameOpacity,
        }}
      >
        Soy de la CDMX y llevo desde junio de 2020 practicando y estudiando
        desarrollo web con <span className='font-bold'>JavaScript</span> de
        forma autodidacta.
        <br /> He colaborado profesionalmente con el entorno{' '}
        <span className='font-bold'>Next js</span> desde 2021.
      </motion.p>
    </div>
  )
}
