import React from 'react'
import { AboutMe } from './AboutMe'
import Header from '../components/Header'
import { Projects, Stack } from '..'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <section className='space-y-12'>
        <AboutMe />
        <Projects />
        <Stack />
      </section>
    </>
  )
}

export { HomeLayout }
