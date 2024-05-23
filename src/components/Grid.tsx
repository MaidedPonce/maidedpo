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
  const [showCard, showInfo] = useState({
    key: '',
    isOpen: false,
  })
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
        opacity: 0,
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

  const showCardInfo = () => {
    switch (showCard.key) {
      case 'red':
        return (
          <>
            <motion.p
              className='leading-8'
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={
                showCard.isOpen
                  ? {
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: 'easeInOut',
                      },
                      opacity: 1,
                    }
                  : {
                      x: -200,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        ease: 'easeInOut',
                      },
                    }
              }
              exit={{
                x: -200,
              }}
            >
              Hey! Mi nombre es <span className='font-bold'>Maided Ponce</span>,
              soy de la CDMX y llevo desde junio de 2020 practicando y
              estudiando desarrollo web con{' '}
              <span className='font-bold'>JavaScript</span> de forma
              autodidacta.
              <br /> He colaborado profesionalmente con el entorno{' '}
              <span className='font-bold'>Next js</span> desde 2021.
            </motion.p>
            <motion.p
              className='text-2xl w-fit font-bold'
              initial={{
                x: 200,
                opacity: 0,
                y: 100,
              }}
              animate={
                showCard.isOpen
                  ? {
                      x: 'calc(100% - 45%)',
                      transition: {
                        duration: 0.5,
                        delay: 0.5,
                        ease: 'easeInOut',
                      },
                      opacity: 1,
                    }
                  : {
                      x: 200,
                      y: 100,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        ease: 'easeInOut',
                      },
                    }
              }
              exit={{
                x: -200,
              }}
            >
              Frontend Developer
            </motion.p>
          </>
        )
      default:
        return (
          <motion.p
            className='leading-8'
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={
              showCard.isOpen
                ? {
                    x: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.5,
                      ease: 'easeInOut',
                    },
                    opacity: 1,
                  }
                : {
                    x: -200,
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeInOut',
                    },
                  }
            }
            exit={{
              x: -200,
            }}
          >
            Hey! Mi nombre es <span className='font-bold'>Maided Ponce</span>,
            soy de la CDMX y llevo desde junio de 2020 practicando y estudiando
            desarrollo web con <span className='font-bold'>JavaScript</span> de
            forma autodidacta.
            <br /> He colaborado profesionalmente con el entorno{' '}
            <span className='font-bold'>Next js</span> desde 2021.
          </motion.p>
        )
    }
  }
  return (
    <div className='h-[352px] w-[352px] relative'>
      <div
        className={`absolute ${showCard.isOpen ? 'z-0' : 'z-10'} grid grid-cols-3 gap-2 grid-rows-3 h-auto w-auto`}
      >
        {grids.map((grid, index) => {
          return (
            <motion.div
              variants={draw}
              animate={showCard.isOpen ? 'move' : 'show'}
              onClick={() => {
                showInfo({ key: keys[index], isOpen: !showCard.isOpen })
              }}
              className={grid.className}
              style={
                showCard.isOpen
                  ? { background: 'transparent' }
                  : { background: grid.bg }
              }
              custom={keys[index]}
              key={index}
            >
              <Animation gridProps={{ ...grid }} showStroke={showCard.isOpen} />
            </motion.div>
          )
        })}
      </div>

      <div
        className={`${showCard.isOpen ? 'z-10' : 'z-0'} absolute h-full w-full`}
      >
        {showCardInfo()}
      </div>
    </div>
  )
}

export { Grid }
