import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function PublicationEntry({ publication }) {
  return (
    <article className="surface-card flex flex-col gap-6 lg:flex-row">
      {publication.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 lg:h-auto lg:w-56 lg:flex-none">
          <Image
            src={publication.imageUrl}
            alt={publication.title}
            fill
            className="object-cover transition duration-300 hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            {publication.conference} | {publication.year}
          </p>
          {publication.award && (
            <p className="rounded-full border border-amber-300/40 bg-amber-100/10 px-3 py-1 text-xs text-amber-200">
              {publication.award}
            </p>
          )}
        </div>
        <h3 className="font-serif text-xl leading-snug text-slate-100">
          {publication.title}
        </h3>
        <p className="mb-5 mt-2 text-sm text-slate-300">{publication.authors}</p>
        <div className="flex flex-wrap gap-5">
          {publication.paperUrl && (
            <a
              href={publication.paperUrl}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-cyan-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span>Paper</span>
            </a>
          )}
          {publication.codeUrl && (
            <a
              href={publication.codeUrl}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-cyan-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span>Code</span>
            </a>
          )}
          {publication.bibtex && (
            <a
              href={publication.bibtex}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-cyan-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span>BibTeX</span>
            </a>
          )}
        </div>
        {publication.tldr && (
          <p className="mt-4 border-l-2 border-cyan-300/40 pl-4 text-sm italic leading-relaxed text-slate-300">
            {publication.tldr}
          </p>
        )}
      </div>
    </article>
  );
}
