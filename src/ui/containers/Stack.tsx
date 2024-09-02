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
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })

  // Invirtiendo el rango para que el elemento suba al hacer scroll hacia abajo
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <>
      <section
        ref={ref}
        className='flex flex-col justify-around min-h-screen items-center'
      >
        <LazyAnimations>
          <m.div
            className='h-48 gap-2 flex flex-col items-center justify-center'
            style={{
              y,
            }}
          >
            <h1 className='text-5xl mx-8 font-bold text-white'>Stack</h1>
            <Divider />
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
          </m.div>
        </LazyAnimations>
        <LazyAnimations>
          <m.div
            className='h-48 gap-2 w-full flex flex-col items-center justify-center'
            style={{
              y: y2,
            }}
          >
            <h1 className='text-5xl mx-8 font-bold text-white'>Proyectos</h1>
            <Divider />
            <ul className='flex gap-6 w-fit'>
              {PROJECTS.map((item) => (
                <li
                  key={item.name}
                  className='w-20 h-20 content-box'
                >
                  <a
                    href={item.href}
                    className='relative rounded-2xl h-full flex items-center justify-center bg-black overflow-hidden '
                  >
                    <h2 className='absolute text-white z-10 font-bold text-xs p-2'>
                      {item.name}
                    </h2>
                    <Image
                      fill
                      className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
                      alt='Screenshot de TODOMACHINE'
                      src={item.src}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        </LazyAnimations>
      </section>
      <LazyAnimations>
        <m.div
          style={{ y }}
          className='h-full'
        >
          <figure className='h-[40vw] w-[25vw] relative'>
            <Image
              fill
              alt='fairy'
              src='/images/sorceress.PNG'
              loading='lazy'
            />
          </figure>
        </m.div>
      </LazyAnimations>
    </>
  )
}
