import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ProjectsEntry({ projects }) {
  return (
    <article className="surface-card flex h-full flex-col gap-4">
      {projects.imageUrl && (
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={projects.imageUrl}
            alt={projects.title}
            fill
            className="object-cover transition duration-300 hover:scale-[1.03]"
          />
        </div>
      )}
      <h3 className="font-serif text-xl text-slate-100">{projects.title}</h3>

      {projects.technologies && (
        <div className="flex flex-wrap gap-2">
          {projects.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-white/15 bg-slate-800/70 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className="text-sm leading-relaxed text-slate-300">
        {projects.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-5 pt-2">
        {projects.projectUrl && (
          <a
            href={projects.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-cyan-200"
          >
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span>Project</span>
          </a>
        )}
        {projects.codeUrl && (
          <a
            href={projects.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-cyan-200"
          >
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span>Code</span>
          </a>
        )}
      </div>
    </article>
  );
}
