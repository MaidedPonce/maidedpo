import { Animation } from "components/Animation";
import { ProjectCard } from "components/ProjectCard";
import { PROJECTS } from "constants/index";

const Projects = () => {
  return (
    <Animation
      attributes={{
        id: "projects",
        className:
          "bg-brand-purple gap-4 flex-col lg:flex-row lg:justify-start lg:min-h-[70vh] flex justify-between items-center text-white px-8 lg:px-24 space-y-12",
      }}
    >
      <div>
        <h1 className="text-5xl lg:text-7xl font-medium">
          Some
          <br /> Projects
        </h1>
      </div>
      <ul className="flex flex-col lg:flex-row gap-16">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ul>
    </Animation>
  );
};

export { Projects };
