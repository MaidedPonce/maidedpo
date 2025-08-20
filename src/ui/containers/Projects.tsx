import Image from 'next/image'
import { Animation } from '../components/Animation'

interface Project {
  title: string
  url: string
  imageSrc: string
  imageAlt: string
}

const PROJECTS: Project[] = [
  {
    title: 'TODOMACHINE',
    url: 'https://maidedponce.github.io/todoMachine/',
    imageSrc: '/images/todoMachine.png',
    imageAlt: 'Captura de pantalla de la aplicación TODOMACHINE - Una aplicación de gestión de tareas',
  },
  {
    title: 'Yes Of Course',
    url: 'https://yeahofcourse.com/',
    imageSrc: '/images/yoc.png',
    imageAlt: 'Captura de pantalla del sitio web Yes Of Course',
  },
  {
    title: 'Rick and Morty',
    url: 'https://maidedponce.github.io/rick-and-morty/',
    imageSrc: '/images/rick.png',
    imageAlt: 'Captura de pantalla de la aplicación Rick and Morty - Explorador de personajes',
  },
]

const Projects = () => {
  return (
    <Animation
      attributes={{
        id: 'projects',
        className:
          'bg-brand-purple gap-4 flex-col lg:flex-row lg:justify-start lg:min-h-[70vh] flex justify-between items-center text-white px-8 lg:px-24 space-y-12',
      }}
    >
      <div>
        <h1 className='text-5xl lg:text-7xl font-medium'>
          Algunos
          <br /> Proyectos
        </h1>
      </div>
      <ul className='flex flex-col lg:flex-row gap-16'>
        {PROJECTS.map((project, index) => (
          <li key={index} className='h-56 rounded-lg overflow-hidden w-56'>
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className='relative h-full flex items-center justify-center bg-black overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-yellow'
              aria-label={`Ver proyecto ${project.title}`}
            >
              <h2 className='absolute text-white z-10 font-bold text-xs text-center'>
                {project.title}
              </h2>
              <Image
                fill
                className='transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125'
                alt={project.imageAlt}
                src={project.imageSrc}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </a>
          </li>
        ))}
      </ul>
    </Animation>
  )
}

export { Projects }
