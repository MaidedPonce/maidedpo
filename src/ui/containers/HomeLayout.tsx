import React from 'react'
import { AboutMe } from './AboutMe'
import Header from '../components/Header'
import { Projects } from '..'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <section className='space-y-12'>
        <AboutMe />
        <Projects />
      </section>
    </>
  )
}

export { HomeLayout }
