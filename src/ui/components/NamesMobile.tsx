'use client'
import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'

export function NamesMobile({ scroll, containerHeight }: any) {
  const nameRef = useRef<HTMLDivElement>(null)

  const y = useTransform(scroll, [0, 1], [0, containerHeight / 2])
  return (
    <>
      <motion.div
        ref={nameRef}
        className='text-4xl lg:text-8xl h-full flex items-center flex-col gap-8 text-center sticky top-[20vh] text-white w-full lg:w-fit'
        style={{
          y,
        }}
      >
        <p>
          Maided
          <br />
          Hernandez
        </p>
        <p className='text-2xl lg:text-4xl text-white w-fit mb-28'>
          Frontend Developer
        </p>
      </motion.div>
    </>
  )
}
