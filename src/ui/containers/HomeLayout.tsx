import React from 'react'
import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { ContactMe } from './ContactMe'
import { Projects } from './Projects'
import { Stack } from './Stack'

const HomeLayout = () => {
  return (
    <>
      <AboutMe />
      <Stack />
      <Projects />
      <Education />
      <ContactMe />
    </>
  )
}

export { HomeLayout }
