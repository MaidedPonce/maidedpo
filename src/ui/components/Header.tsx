import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='p-8 bg-brand-purple w-full text-white'>
        <ul className='flex justify-end items-center gap-16'>
          <li className='hover:cursor-pointer'>Projects</li>
          <li className='hover:cursor-pointer'>Stack</li>
          <li className='hover:cursor-pointer'>Experience</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
