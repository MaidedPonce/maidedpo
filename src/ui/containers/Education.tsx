'use client'
import React from 'react'

const Education = () => {
  return (
    <section
      id='education'
      className='bg-brand-purple flex-col h-[50vh] flex justify-start items-start text-white px-8 space-y-12'
    >
      <h1 className='text-7xl font-medium'>Education</h1>
      <div className='flex items-start'>
        <div className='rounded-full mr-4 mt-2 h-3 w-3 outline-white outline outline-4 bg-brand-violet' />
        <div className='flex items-start flex-col'>
          <h1 className='font-semibold'>Rosario Castellanos</h1>
          <h2>
            Bachelor&apos;s degree in information and communication technologies
          </h2>
        </div>
      </div>
    </section>
  )
}

export { Education }
