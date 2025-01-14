'use client'
import { LazyAnimations } from '../components/LazyAnimations'
import { HTMLMotionProps, m, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type AnimationProps = {
  children: ReactNode
  attributes?: HTMLMotionProps<'section'>
}

const Animation: React.FC<AnimationProps> = ({ children, attributes }) => {
  const ref = useRef<HTMLDivElement>(null)

  // Configuración de scroll y transformación
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'], // Ajuste del rango del scroll
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <LazyAnimations>
      <m.section
        ref={ref} // Agregar la referencia para que useScroll funcione
        initial={{ opacity: 0, translateY: 100 }} // Inicia con opacidad 0 y desplazamiento hacia abajo
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        style={{ scale }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        {...attributes}
      >
        {children}
      </m.section>
    </LazyAnimations>
  )
}

export { Animation }
