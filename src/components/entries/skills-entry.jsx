import { ArrowUpRight } from "lucide-react";

export function SkillEntry({ skill }) {
  return (
    <article className="surface-card">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
        {skill.date}
      </p>
      <h3 className="font-serif text-xl text-slate-100">
        {skill.link ? (
          <a
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-cyan-200"
          >
            {skill.title}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ) : (
          skill.title
        )}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{skill.description}</p>
    </article>
  );
}
