'use client'
import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'

export function NamesDesktop({ parentWidth, scroll }: any) {
  const nameRef = useRef<HTMLDivElement>(null)

  const x = useTransform(
    scroll,
    [0, 1],
    [0, parentWidth - (nameRef?.current?.offsetWidth || 200)],
  )
  console.log(parentWidth - (nameRef?.current?.offsetWidth || 200), parentWidth)
  const name = useTransform(scroll, [0, 1], [900, 0])

  const nameOpacity = useTransform(scroll, [0, 1], [0, 1])
  return (
    <>
      <motion.div
        ref={nameRef}
        className='text-8xl sticky top-[20vh] text-white w-fit'
        style={{
          x,
          transform: 'translateX(0px) translateZ(0px)',
        }}
      >
        <p>
          Maided
          <br /> Hernandez
        </p>
      </motion.div>
      <motion.div
        style={{
          opacity: nameOpacity,
          y: name,
        }}
        className='text-4xl sticky top-40 text-white w-fit mb-28'
      >
        <p>Frontend Developer</p>
      </motion.div>
    </>
  )
}
