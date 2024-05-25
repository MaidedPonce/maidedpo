'use client'
import { useRef } from 'react'
import { m, useTransform } from 'framer-motion'
import { useGetWidth } from 'app/hooks'
import { LazyAnimations } from './LazyAnimations'

export function NamesDesktop({ elementWidth: mainElement, scroll }: any) {
  const nameRef = useRef<HTMLDivElement>(null)
  const { elementWidth } = useGetWidth({ ref: nameRef })
  const x = useTransform(scroll, [0, 1], [0, mainElement - elementWidth * 1.15])
  const name = useTransform(scroll, [0, 1], [900, 0])
  const nameOpacity = useTransform(scroll, [0, 1], [0, 1])

  return (
    <LazyAnimations>
      <m.div
        ref={nameRef}
        className='text-9xl sticky top-[20vh] text-white w-fit'
        style={{
          x,
          transform: 'translateX(0px) translateZ(0px)',
        }}
      >
        <p>
          Maided
          <br /> Hernandez
        </p>
      </m.div>
      <m.div
        style={{
          opacity: nameOpacity,
          y: name,
        }}
        className='text-5xl sticky top-48 text-white w-fit mb-28'
      >
        <p>Frontend Developer</p>
      </m.div>
    </LazyAnimations>
  )
}
