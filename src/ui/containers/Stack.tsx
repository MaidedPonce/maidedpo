import Image from 'next/image'
import { Animation } from '../components/Animation'

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
    <Animation
      attributes={{
        id: 'stack',
        className:
          'flex lg:px-24 px-8 space-y-12 items-center flex-col justify-around lg:justify-center lg:min-h-[70vh] lg:items-end gap-6',
      }}
    >
      <h1 className='text-5xl lg:text-7xl font-bold text-white'>My stack</h1>
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
                  alt={item.name}
                  src={item.src}
                  loading='lazy'
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
