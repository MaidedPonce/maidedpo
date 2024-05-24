import { LazyMotion, domAnimation } from 'framer-motion'

const LazyAnimations = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

export { LazyAnimations }
