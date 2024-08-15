'use client'
import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
/* import { NamesDesktop } from '../components/NamesDesktop'
import { NamesMobile } from '../components/NamesMobile' */
import Image from 'next/image'
import { LazyAnimations } from 'components/LazyAnimations'

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

export function Stack() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })

  // Invirtiendo el rango para que el elemento suba al hacer scroll hacia abajo
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <>
      <section
        ref={ref}
        className='bg-sorceress min-h-screen bg-center bg-cover'
      >
        <LazyAnimations>
          <m.div
            className='h-48 flex flex-col items-center justify-center'
            style={{
              background:
                'linear-gradient(to bottom, rgb(17 11 47), rgba(255, 255, 255, 0))',
              y,
            }}
          >
            <h1 className='text-5xl mx-8 font-bold text-white'>Stack</h1>
            <ul className='flex gap-20'>
              {STACK.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center flex-col gap-2'
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
              ))}
            </ul>
          </m.div>
        </LazyAnimations>
      </section>
    </>
  )
}
