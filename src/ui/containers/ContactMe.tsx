'use client'
import { useTransform, m, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { LazyAnimations } from 'components/LazyAnimations'
import Image from 'next/image'

const ContactMe = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-100, 40])

  return (
    <div className='space-y-4'>
      <h2>Contactme</h2>
      <ul className='flex max-w-96 justify-between gap-6 items-center'>
        <li>
          <a href='https://github.com/MaidedPonce'>
            <Image
              width={40}
              height={40}
              src='/icons/github.svg'
              alt='Github'
            />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/maided-guadalupe-hernandez-ponce-5b2a2a1a5/'>
            <Image
              width={40}
              height={40}
              src='/icons/linkedin.png'
              alt='LinkedIn'
            />
          </a>
        </li>
        <li>
          <a href='mailto:maided.h.p90@gmail.com'>
            <Image
              width={40}
              height={40}
              src='/icons/emaill.png'
              alt='Email'
            />
          </a>
        </li>
        <li>
          <a href='https://wa.me/5536058161'>
            <Image
              width={40}
              height={40}
              src='/icons/wp.png'
              alt='WhatsApp'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export { ContactMe }
