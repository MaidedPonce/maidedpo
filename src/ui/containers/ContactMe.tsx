import React from 'react'
import Image from 'next/image'

const ContactMe = () => {
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
