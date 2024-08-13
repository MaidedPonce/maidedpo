'use client'
import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
/* import { NamesDesktop } from '../components/NamesDesktop'
import { NamesMobile } from '../components/NamesMobile' */
import Image from 'next/image'
import { LazyAnimations } from 'components/LazyAnimations'

export function ContactMe() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-200, 600])
  // const nameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <section
      ref={ref}
      className='bg-email flex justify-center h-[170vh] bg-cover bg-center'
    ></section>
  )
}
