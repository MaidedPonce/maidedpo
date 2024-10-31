'use client'
import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
/* import { NamesDesktop } from '../components/NamesDesktop'
import { NamesMobile } from '../components/NamesMobile' */
import Image from 'next/image'
import { LazyAnimations } from 'components/LazyAnimations'
import Divider from '../components/Divider'

const STACK = [
  {
    name: 'React',
    src: '/icons/react-svgrepo-com.svg',
  },
  {
    name: 'NextJS',
    src: '/icons/nextjs-svgrepo-com.svg',
  },
  {
    name: 'Redux',
    src: '/icons/redux-svgrepo-com.svg',
  },
  {
    name: 'Tailwind',
    src: '/icons/tailwind-svgrepo-com.svg',
  },
  {
    name: 'JavaScript',
    src: '/icons/javascript-svgrepo-com.svg',
  },
]

const PROJECTS = [
  {
    name: 'TODOMACHINE',
    href: 'https://maidedponce.github.io/todoMachine/',
    src: '/images/todoMachine.png',
  },
  {
    name: 'Yes Of Course',
    href: 'https://yeahofcourse.com/',
    src: '/images/yoc.png',
  },
  {
    name: 'Rick and Morty',
    href: 'https://maidedponce.github.io/rick-and-morty/',
    src: '/images/rick.png',
  },
]

export function Stack() {
  return (
    <>
      <section className='flex flex-col justify-around min-h-screen items-center'>
        <h1 className='text-5xl mx-8 font-bold text-white'>My stack</h1>
        <ul className='grid grid-cols-3 grid-rows-2 gap-6'>
          {STACK.map((item, index) => {
            return (
              <li
                key={index}
                className={`${STACK[index]?.name === 'JavaScript' && 'row-span-2 justify-center col-start-3 row-start-1 row-end-3 h-auto'} flex items-center rounded-2xl text-white bg-[#ffffff4d] box-content p-2 h-16 w-16 flex-col gap-2`}
              >
                <figure className='h-10 w-10 relative'>
                  <Image
                    fill
                    alt={item.name}
                    src={item.src}
                    loading='lazy'
                  />
                </figure>
                <p>{item.name}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
