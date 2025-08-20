'use client'
import React from 'react'

interface NavigationItem {
  id: string
  label: string
  ariaLabel: string
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'projects',
    label: 'Proyectos',
    ariaLabel: 'Ir a la sección de proyectos',
  },
  {
    id: 'stack',
    label: 'Stack',
    ariaLabel: 'Ir a la sección de tecnologías',
  },
  {
    id: 'education',
    label: 'Educación',
    ariaLabel: 'Ir a la sección de educación',
  },
]

const Header = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToElement(id)
    }
  }

  return (
    <header>
      <nav 
        className='p-8 bg-brand-purple w-full text-white'
        role='navigation'
        aria-label='Navegación principal'
      >
        <ul className='flex justify-between gap-4 lg:justify-end items-center lg:gap-16'>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToElement(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className='hover:cursor-pointer hover:text-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-purple'
                aria-label={item.ariaLabel}
                type='button'
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
