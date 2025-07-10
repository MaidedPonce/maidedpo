import Image from 'next/image'
import { Project } from 'constants/index'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li className="h-56 rounded-lg overflow-hidden w-56">
      <a
        href={project.href}
        className="relative h-full flex items-center justify-center bg-black overflow-hidden"
      >
        <h2 className="absolute text-white z-10 font-bold text-xs">
          {project.title}
        </h2>
        <Image
          fill
          className="transition-transform object-cover opacity-80 duration-300 ease-in-out hover:cursor-pointer hover:scale-125"
          alt={project.image.alt}
          src={project.image.src}
        />
      </a>
    </li>
  )
}
