'use client'
import React, { useRef } from 'react'
import Image from 'next/image'

const Education = () => {
  const ref = useRef(null)
  return (
    <section
      id='education'
      className='bg-brand-purple flex justify-between items-center text-white px-8 space-y-12'
    >
      <h1 className='text-7xl font-medium'>Education</h1>
    </section>
  )
}

export { Education }
