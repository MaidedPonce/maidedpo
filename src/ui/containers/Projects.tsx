import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section
      id='projects'
      className='bg-brand-purple flex-col lg:flex-row flex justify-between items-center text-white px-8 space-y-12'
    >
      <div>
        <h1 className='text-7xl font-medium'>
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
    </section>
  )
}

export { Projects }
