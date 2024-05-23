'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import Stack from 'app/ui/containers/Stack'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], ['100%', '0%'])
}

/* function Comp() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 100)
  return (
    <div ref={ref} className='flex gap-5 h-screen flex-col'>
      <motion.div style={{ y }} className='w-full h-screen bg-black text-white'>
        <p className='text-8xl	'>Holi!</p>
      </motion.div>
    </div>
  )
}
 */
export function Scroll() {
  //   const { scrollYProgress } = useScroll()
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])
  const ref = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const [parentWidth, setParentWidth] = useState(0)

  const updateParentWidth = () => {
    if (ref.current) {
      setParentWidth(ref.current?.offsetWidth)
    }
  }

  // Ejecuta updateParentWidth cuando el componente se monta y cuando ref cambia
  useLayoutEffect(() => {
    updateParentWidth()
  }, [ref.current])

  // Añade un listener para el evento resize del navegador
  useEffect(() => {
    window.addEventListener('resize', updateParentWidth)
    return () => {
      window.removeEventListener('resize', updateParentWidth)
    }
  }, [])

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [-500, parentWidth - (nameRef?.current?.offsetWidth || 200)],
  )

  const name = useTransform(scrollYProgress, [0, 1], [900, 0])

  const nameOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <>
      {' '}
      <div ref={ref} className='min-h-[200vh] relative bg-slate-800 z-10'>
        <div className='min-h-screen h-[200vh]'>
          <motion.div
            ref={nameRef}
            className='text-8xl sticky top-[20vh] text-white w-fit'
            style={{
              x,
            }}
          >
            <p>
              Maided
              <br /> Hernandez
            </p>
          </motion.div>
          <motion.div
            style={{
              opacity: nameOpacity,
              y: name,
            }}
            className='text-4xl sticky top-40 text-white w-fit mb-28'
          >
            <p>Frontend Developer</p>
          </motion.div>
        </div>
        <motion.p
          className='text-xl bg-white sticky top-40 w-96 items-center h-[30vh]'
          style={{
            opacity: nameOpacity,
          }}
        >
          Soy de la CDMX y llevo desde junio de 2020 practicando y estudiando
          desarrollo web con <span className='font-bold'>JavaScript</span> de
          forma autodidacta.
          <br /> He colaborado profesionalmente con el entorno{' '}
          <span className='font-bold'>Next js</span> desde 2021.
        </motion.p>
        {/* <motion.div
        ref={nameRef}
        className='text-8xl top-40 fixed flex items-center text-black'
        style={{
          y,
          x,
        }}
      >
        <p>Maided Hernandez</p>
      </motion.div>
      <motion.div
        className='text-4xl fixed top-0 h-screen flex items-center '
        style={{
          y: name,
          opacity: nameOpacity,
        }}
      >
        <p>Frontend Developer</p>
      </motion.div>
      <motion.p
        className='text-xl absolute top-[80rem] items-center h-fit'
        style={{
          y: description,
          opacity: nameOpacity,
        }}
      >
        Soy de la CDMX y llevo desde junio de 2020 practicando y estudiando
        desarrollo web con <span className='font-bold'>JavaScript</span> de
        forma autodidacta.
        <br /> He colaborado profesionalmente con el entorno{' '}
        <span className='font-bold'>Next js</span> desde 2021.
      </motion.p> */}

        {/* <motion.div
        className='text-8xl relative top-[50vh] h-[100vh] flex items-center text-black'
        style={{ y }}
      >
        <p>Holi</p>
      </motion.div> */}
        {/* <motion.div className='text-4xl absolute top-0 h-screen flex items-center '>
        <p>Frontend Developer</p>
      </motion.div> */}
      </div>
      <Stack />
    </>
  )
}
