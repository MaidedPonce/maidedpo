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
    name: 'Redux',
    src: '/icons/redux.png',
  },
  {
    name: 'NextJS',
    src: '/icons/next.png',
  },
  {
    name: 'CSS',
    src: '/icons/css.png',
  },
  {
    name: 'JavaScript',
    src: '/icons/js.png',
  },
  {
    name: 'Tailwind',
    src: '/icons/tailwind.png',
  },
  {
    name: 'React',
    src: '/icons/react.png',
  },
]

export function Stack() {
  return (
    <section className='flex items-center px-8 space-y-12 flex-col justify-around items-start gap-6'>
      <h1 className='text-7xl font-bold text-white'>My stack</h1>
      <ul className='flex justify-between gap-12'>
        {STACK.map((item, index) => {
          return (
            <li key={index}>
              <figure className='h-10 w-10 relative'>
                <Image
                  fill
                  alt={item.name}
                  src={item.src}
                  loading='lazy'
                />
              </figure>
              <p className='text-white'>{item.name}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
