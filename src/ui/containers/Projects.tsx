import Image from 'next/image'
import { Animation } from '../components/Animation'

const Projects = () => {
  return (
    <Animation
      attributes={{
        id: 'projects',
        className:
          'bg-brand-purple gap-4 flex-col lg:flex-row lg:justify-start lg:min-h-[70vh] flex justify-between items-center text-white px-8 lg:px-24 space-y-12',
      }}
    >
      <div>
        <h1 className='text-5xl lg:text-7xl font-medium'>
          Some
          <br /> Projects
        </h1>
      </div>
      <ul className='flex flex-col lg:flex-row gap-16'>
        <li className='h-56 rounded-lg overflow-hidden w-56'>
          {/* <div className='absolute w-full h-full bg-black/20 z-10' /> */}
          <a
            href='https://maidedponce.github.io/todoMachine/'
            className='relative h-full flex items-center justify-center bg-black overflow-hidden '
          >
            <h2 className='absolute text-white z-10 font-bold text-xs'>
              TODOMACHINE
            </h2>
            <Image
              fill
              className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
              alt='Screenshot de TODOMACHINE'
              src='/images/todoMachine.png'
            />
          </a>
        </li>
        <li className='h-56 rounded-lg overflow-hidden w-56'>
          <a
            href='https://yeahofcourse.com/'
            className='h-full flex justify-center items-center relative  bg-black overflow-hidden'
          >
            <h2 className='absolute text-white z-10 font-bold text-xs'>
              Yes Of Course
            </h2>
            <Image
              fill
              className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
              alt='Screenshot de Yes Of Course'
              src='/images/yoc.png'
            />
          </a>
        </li>
        <li className='h-56 rounded-lg overflow-hidden w-56'>
          <a
            href='https://maidedponce.github.io/rick-and-morty/'
            className='flex h-full justify-center items-center relative bg-black overflow-hidden'
          >
            <h2 className='absolute text-white z-10 font-bold text-xs'>
              Rick and Morty
            </h2>
            <Image
              fill
              className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
              alt='Screenshot de Yes Of Course'
              src='/images/rick.png'
            />
          </a>
        </li>
      </ul>
    </Animation>
  )
}

export { Projects }
