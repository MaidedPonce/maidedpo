import Image from 'next/image'
import { Animation } from '../components/Animation'

const AboutMe = () => {
  return (
    <Animation
      attributes={{
        className:
          'min-h-[80vh] flex flex-col items-start justify-center text-white px-8 lg:px-24 space-y-12',
      }}
    >
      <div className='space-y-12 max-w-[60%]'>
        <h1 className='text-5xl lg:text-7xl font-medium'>
          Hi,
          <br /> I am Maided
          <br /> Frontend Developer
        </h1>
        <p>
          I specialize in creating modern, responsive, and user-friendly
          websites. With experience in JavaScript, React, and UI design, I help
          businesses bring their digital vision to life.
        </p>
      </div>
      <div className='space-y-4'>
        <h2 className='font-semibold'>Contact Me</h2>
        <ul className='flex max-w-96 justify-between gap-6 items-center'>
          <li>
            <a
              href='https://github.com/MaidedPonce'
              aria-label='GitHub Profile'
            >
              <Image
                width={40}
                height={40}
                src='/icons/github.svg'
                alt='Github'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/maided-guadalupe-hernandez-ponce-5b2a2a1a5/'
              aria-label='LinkedIn Profile'
            >
              <Image
                width={40}
                height={40}
                src='/icons/linkedin.png'
                alt='LinkedIn'
              />
            </a>
          </li>
          <li>
            <a
              href='mailto:maided.h.p90@gmail.com'
              aria-label='Email'
            >
              <Image
                width={40}
                height={40}
                src='/icons/emaill.png'
                alt='Email'
              />
            </a>
          </li>
          <li>
            <a
              href='https://wa.me/5536058161'
              aria-label='WhatsApp'
            >
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
    </Animation>
  )
}

export { AboutMe }
