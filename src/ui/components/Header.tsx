'use client'
import React from 'react'

const Header = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <header>
      <nav className='p-8 bg-brand-purple w-full text-white'>
        <ul className='flex justify-between gap-4 lg:justify-end items-center lg:gap-16'>
          <li
            onClick={() => scrollToElement('projects')}
            className='hover:cursor-pointer'
          >
            Projects
          </li>
          <li
            onClick={() => scrollToElement('stack')}
            className='hover:cursor-pointer'
          >
            Stack
          </li>
          <li
            onClick={() => scrollToElement('education')}
            className='hover:cursor-pointer'
          >
            Education
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
