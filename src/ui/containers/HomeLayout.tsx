import React from 'react'
import { AboutMe } from './AboutMe'
import Header from '../components/Header'
import { ContactMe, Projects, Stack } from '..'
import { Education } from './Education'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <section className='space-y-12'>
        <AboutMe />
        <Stack />
        <Projects />
        <Education />
      </section>
    </>
  )
}

export { HomeLayout }
