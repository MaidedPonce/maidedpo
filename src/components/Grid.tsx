'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Animation } from './Animation'

const Grid = () => {
  const [showCard, showInfo] = useState(false)
  const draw = {
    show: (i) => {
      return {
        transform: 'translateY(0)',
      }
    },
    move: (i) => {
      return {
        transform: 'translateY(-20rem)',
      }
    },
  }
  console.log(showCard)
  return (
    <div className='grid grid-cols-3 gap-2 grid-rows-3 h-auto w-auto'>
      <div className='bg-blue-800 row-span-1 col-start-1 h-28 w-28'>
        <span>Educación</span>
      </div>
      <div className='bg-yellow-500 flex items-center row-span-2 col-start-1 h-full w-28'>
        <span className='block -rotate-90'>Stack</span>
      </div>
      <motion.div
        custom={1}
        variants={draw}
        animate={showCard ? 'move' : 'show'}
        id='sobre-mi'
        onClick={() => showInfo(!showCard)}
        className='bg-red-800 row-span-2 row-start-1 col-start-2 h-full w-28'
      >
        {/* <span className='text-white'>Sobre mí</span> */}
        <Animation color='red' text='Sobre mí' />
      </motion.div>
      <div className='bg-gray-700 row-span-1 col-start-2 h-28 w-28'>
        <span>Contáctame</span>
      </div>
      <div className='bg-green-600 row-span-1 col-start-3 row-start-1 h-28 w-28'>
        <span>Descargar</span>
      </div>
      <div className='bg-purple-800 flex items-end justify-end row-span-2 col-start-3 row-start-2 h-full w-28'>
        <span className='block relative left-5 -top-[3.5rem] rotate-90 text-end text-white'>
          Experiencia y proyectos
        </span>
      </div>
    </div>
  )
}

export { Grid }
