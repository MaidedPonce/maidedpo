import React from 'react'
import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { ContactMe } from './ContactMe'
import { Projects } from './Projects'
import { Stack } from './Stack'
import { Main } from './Main'

const HomeLayout = () => {
  return (
    <>
      <Main />
      <AboutMe />
      <Stack />
    </>
  )
}

export { HomeLayout }
