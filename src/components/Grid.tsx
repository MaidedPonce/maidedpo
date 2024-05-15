'use client'
import React, { useState } from 'react'
import { easeIn, motion } from 'framer-motion'
import { Animation } from './Animation'

interface colorProps {
  [key: string]: {
    bg: string
    color: string
    stroke: string
    rotate: string
    className: string
    text: string
    textStyle?: string
  }
}

const GRIDS: colorProps = {
  blue: {
    bg: '#1E40AF',
    color: 'white',
    stroke: '#0c2473',
    rotate: '',
    className: 'row-span-1 col-start-1 row-start-1 h-28 w-28',
    text: 'Educación',
    textStyle: 'flex h-full w-full items-start justify-center mt-4',
  },
  red: {
    bg: '#991b1b',
    color: 'white',
    stroke: '#690707',
    rotate: '',
    className: 'row-span-2 row-start-1 col-start-2 h-full w-28',
    text: 'Sobre mí',
    textStyle: 'flex pb-4 h-full w-full justify-center items-end',
  },
  gray: {
    bg: '#374151',
    color: 'white',
    stroke: '#16263f',
    rotate: '',
    className: 'row-span-1 col-start-2 h-28 w-28',
    text: 'Contáctame',
    textStyle: 'flex w-full h-full justify-end items-end pb-4 pr-3',
  },
  green: {
    bg: '#16A34A',
    color: 'white',
    stroke: '#0e5428',
    rotate: '',
    className: 'row-span-1 col-start-3 row-start-1 h-28 w-28',
    text: 'Descargar CV',
    textStyle: 'flex items-center h-full justify-center w-full',
  },
  purple: {
    bg: '#6B21A8',
    color: 'white',
    stroke: '#360d57',
    rotate: 'rotate(90deg)',
    className:
      'flex items-end justify-end row-span-2 col-start-3 row-start-2 h-full w-28',
    text: 'Experiencia y proyectos',
    textStyle: 'top-2/4 bottom-0 pt-4 pr-4',
  },
  yellow: {
    bg: '#EAB308',
    color: 'white',
    stroke: '#6e5507',
    rotate: 'rotate(-90deg)',
    className:
      'flex items-center row-span-2 row-start-2 col-start-1 h-full w-28',
    text: 'Stack',
    textStyle: 'top-2/4 ml-1',
  },
}

const Grid = () => {
  const [showCard, showInfo] = useState(false)
  const grids = Object.values({ ...GRIDS })
  const keys = Object.keys({ ...GRIDS })
  const draw = {
    show: (i: any) => {
      return {
        transform: 'translateY(0)',
        transition: {
          duration: 0.5,
          delay: 0.5,
          ease: 'easeInOut',
        },
      }
    },
    move: (i: any) => {
      const down = ['green', 'blue', 'yellow', 'purple']
      // const up = ['aboutme', 'contactme']
      const props = {
        transition: {
          duration: 0.75,
          delay: 0.2,
          ease: 'easeInOut',
        },
        opacity: 0.5,
      }
      if (down.includes(i)) {
        return {
          ...props,
          transform: 'translateY(20rem)',
        }
      } else {
        return {
          ...props,
          transform: 'translateY(-20rem)',
        }
      }
    },
  }
  console.log(showCard)
  return (
    <>
      <div className='h-full'>info</div>
      <div className='grid grid-cols-3 gap-2 grid-rows-3 h-auto w-auto'>
        {grids.map((grid, index) => {
          return (
            <motion.div
            variants={draw}
            animate={showCard ? 'move' : 'show'}
              onClick={() => {
                showInfo(!showCard)
              }}
              className={grid.className}
              style={
                showCard
                  ? { background: 'transparent' }
                  : { background: grid.bg }
              }
              custom={keys[index]}
              key={index}
            >
              <Animation gridProps={{ ...grid }} showStroke={showCard} />
            </motion.div>
          )
        })}
      </div>
      <div className='h-full'>info 2</div>
    </>
  )
}

export { Grid }
