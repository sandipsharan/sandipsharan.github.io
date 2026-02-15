import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="page-stack">
      <p className="section-kicker">Projects</p>
      <h1 className="page-title">Stuff, I&apos;ve worked on over my career. 🛠️</h1>
      <p className="lead">
        From path planning to computer vision, these projects showcase my journey in robotics and AI. 
      </p>

      <div className="project-grid project-grid-2col">
        {projectsData.map((project, index) => (
          <article key={`${project.title}-${index}`} className="surface-card page-stack">
            {project.imageUrl && (
              <div className="project-image-box">
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
              </div>
            )}
            <h2 className="section-title">{project.title}</h2>
            <p className="body-text">{project.description}</p>

            {project.technologies && (
              <div className="button-row">
                {project.technologies.map((tech, techIndex) => (
                  <span key={`${tech}-${techIndex}`} className="btn-ghost">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="button-row">
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Project <ArrowUpRight size={14} />
                </a>
              )}
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Code <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
