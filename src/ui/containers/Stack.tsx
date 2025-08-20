import Image from 'next/image'
import { Animation } from '../components/Animation'

interface StackItem {
  name: string
  src: string
  alt: string
}

const STACK: StackItem[] = [
  {
    name: 'Redux',
    src: '/icons/redux.png',
    alt: 'Logo de Redux - Librería de gestión de estado',
  },
  {
    name: 'NextJS',
    src: '/icons/next.png',
    alt: 'Logo de Next.js - Framework de React',
  },
  {
    name: 'CSS',
    src: '/icons/css.png',
    alt: 'Logo de CSS - Hojas de estilo en cascada',
  },
  {
    name: 'JavaScript',
    src: '/icons/js.png',
    alt: 'Logo de JavaScript - Lenguaje de programación',
  },
  {
    name: 'Tailwind',
    src: '/icons/tailwind.png',
    alt: 'Logo de Tailwind CSS - Framework de utilidades CSS',
  },
  {
    name: 'React',
    src: '/icons/react.png',
    alt: 'Logo de React - Librería de JavaScript para interfaces de usuario',
  },
]

export function Stack() {
  return (
    <Animation
      attributes={{
        id: 'stack',
        className:
          'flex lg:px-24 px-8 space-y-12 items-center flex-col justify-around lg:justify-center lg:min-h-[70vh] lg:items-end gap-6',
      }}
    >
      <h1 className='text-5xl lg:text-7xl font-bold text-white'>Mi Stack</h1>
      <ul className='flex-wrap justify-center flex lg:justify-between gap-12'>
        {STACK.map((item, index) => {
          return (
            <li
              className='flex items-center flex-col'
              key={index}
            >
              <figure className='h-10 w-10 relative'>
                <Image
                  fill
                  alt={item.alt}
                  src={item.src}
                  loading='lazy'
                  sizes='40px'
                />
              </figure>
              <p className='text-white text-center'>{item.name}</p>
            </li>
          )
        })}
      </ul>
    </Animation>
  )
}
