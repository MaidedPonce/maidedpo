'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'
import Image from 'next/image'
import { Path } from '../components/Path'

const ContactMe = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [500, 0])
  const y2 = useTransform(scrollYProgress, [0, 1], [-900, 0])

  return (
    <div ref={ref} className='h-screen bg-white flex overflow-hidden'>
      <LazyAnimations>
        <m.div
          style={{ y: y2 }}
          className='flex justify-center w-1/2 items-center bg-gray-600'
        >
          <p className='text-white font-bold text-5xl'>Contáctame</p>
        </m.div>
      </LazyAnimations>
      <LazyAnimations>
        <m.div style={{ y: y }} className='w-1/2 h-full'>
          <ul className='flex h-full flex-col justify-center items-end px-8 gap-4'>
            <li>
              <Path
                side='right'
                text={
                  <a
                    className='flex gap-4 items-center justify-end'
                    href='mailto:maided.h.p90@gmail.com'
                  >
                    maided.h.p90@gmail.com
                    <Image
                      alt='Email'
                      height={35}
                      width={35}
                      src='/icons/email.svg'
                    />
                  </a>
                }
                stroke='black'
              />
            </li>
            <li>
              <Path
                side='right'
                text={
                  <a
                    className='flex gap-4 items-center justify-end pb-1'
                    href='https://www.linkedin.com/in/maided-guadalupe-hernandez-ponce-5b2a2a1a5/'
                  >
                    LinkedIn
                    <Image
                      alt='LinkedIn'
                      height={30}
                      width={30}
                      src='/icons/linkedin.svg'
                    />
                  </a>
                }
                stroke='var(--linkedin)'
              />
            </li>
          </ul>
        </m.div>
      </LazyAnimations>
    </div>
  )
}

export { ContactMe }
