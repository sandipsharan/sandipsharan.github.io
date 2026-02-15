export function ExperienceEntry({ experience }) {
  return (
    <article className="surface-card">
      <div className="grid gap-4 md:grid-cols-[170px_1fr]">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          {experience.date}
        </p>
        <div className="space-y-3">
          <h3 className="font-serif text-xl leading-tight text-slate-100">
            {experience.title} - {" "}
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                className="text-cyan-200 transition-colors hover:text-cyan-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>
          {experience.advisor && (
            <p className="text-sm italic text-slate-300">
              Advisor: {experience.advisor}
            </p>
          )}
          {experience.manager && (
            <p className="text-sm italic text-slate-300">
              Manager: {experience.manager}
            </p>
          )}
          {experience.description && (
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-300">
              {experience.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}


