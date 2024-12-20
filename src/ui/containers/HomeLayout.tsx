import React from 'react'
import { AboutMe } from './AboutMe'
import Header from '../components/Header'
import { Projects, Stack } from '..'
import { Education } from './Education'
import ComponentParticles from './Particles'

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
      <ComponentParticles />
    </>
  )
}

export { HomeLayout }
