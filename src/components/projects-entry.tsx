import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Projects } from "@/data/projects";

export function ProjectsEntry({ projects }: { projects: Projects }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {projects.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={projects.imageUrl}
            alt={projects.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {projects.projectUrl ? (
            <a
              href={projects.projectUrl}
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {projects.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            projects.title
          )}
        </h3>

        {projects.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {projects.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {projects.projectUrl && (
            <a
              href={projects.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
          {projects.codeUrl && (
            <a
              href={projects.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {projects.description}
        </p>
      </div>
    </div>
  );
}
