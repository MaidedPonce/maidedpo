import Image from 'next/image'

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
    <section
      id='stack'
      className='flex px-8 space-y-12 items-center flex-col justify-around lg:items-start gap-6'
    >
      <h1 className='text-7xl font-bold text-white'>My stack</h1>
      <ul className='flex justify-between gap-12'>
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
    </section>
  )
}
