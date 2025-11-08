import { ArrowUpRight } from "lucide-react";
import { Skill } from "@/data/skills";

export function SkillEntry({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{skill.date}</p>
        <h3 className="font-serif text-md mb-3">
          {skill.link ? (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
            >
              {skill.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            skill.title
          )}
        </h3>
        <p className="text-sm text-zinc-600">{skill.description}</p>
      </div>
    </div>
  );
}
