import React from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

interface LazyAnimationsProps {
  children: React.ReactNode
}

const LazyAnimations = ({ children }: LazyAnimationsProps) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

export { LazyAnimations }
