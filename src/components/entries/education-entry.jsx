import Image from "next/image";

export function EducationEntry({ education }) {
  return (
    <article className="surface-card">
      <div className="flex items-start gap-4">
        {education.logoUrl && (
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/80">
            <Image
              src={education.logoUrl}
              alt={`${education.institution} logo`}
              fill
              className="object-cover logo-image-fit"
            />
          </div>
        )}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            {education.year}
          </p>
          <h3 className="font-serif text-xl text-slate-100">
            {education.institution}
          </h3>
          <p className="text-sm text-slate-300">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm italic text-slate-300">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm italic text-slate-300">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="text-cyan-200 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
