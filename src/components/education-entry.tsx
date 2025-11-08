import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2 items-start">
        <div className="flex flex-col items-center">
          <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
          {education.logoUrl && (
            <img
              src={education.logoUrl}
              alt={`${education.institution} logo`}
              className="w-10 h-auto mt-2 opacity-80"
            />
          )}
        </div>

        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
          <p className="text-sm text-zinc-600">{education.degree}</p>

          {education.advisor && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Advisor: {education.advisor}
            </p>
          )}

          {education.thesis && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline"
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
    </div>
  );
}
