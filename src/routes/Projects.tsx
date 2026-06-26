import { ProjectCard } from "@/components/ProjectCard";
// Import your fresh native TS data array
import { MY_PROJECTS } from "@/data/projects";

export const Projects = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex justify-center">
      <section className="flex flex-col gap-5 w-full">
        {/* Header Card */}
        <div className="flex flex-col gap-2 bg-(--surface)/40 rounded-xl p-6 shadow-(--card-shadow)">
          <h1 className="flex w-fit text-5xl md:text-6xl font-bold bg-linear-to-tr from-yellow-500 to-orange-500 text-transparent bg-clip-text">
            My Projects
          </h1>
          <p className="text-xl max-w-xl text-balance opacity-90">
            Here's a summary of my recent projects.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full">
          {MY_PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              previewText={project.previewText}
              previewBgClass={project.previewBgClass}
              gitHubLink={project.gitHubLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
