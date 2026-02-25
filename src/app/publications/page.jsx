import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { publicationData } from "@/data/publication";

export default function PublicationsPage() {
  return (
    <div className="page-stack">
      <p className="section-kicker">Publications</p>
      <h1 className="page-title">Peer-reviewed Publications. 📚</h1>
      <p className="lead">
        From Simulation to Real-world Applications in the field of Robotics and AI, in reverse chronological order. 
      </p>

      <div className="pub-grid">
        {publicationData.map((publication, index) => (
          <article key={`${publication.title}-${index}`} className="surface-card page-stack">
            <p className="meta">
              {publication.conference} {publication.year}
            </p>

            <div className="pub-layout">
              {publication.imageUrl && (
                <div className="pub-image-box">
                  <Image src={publication.imageUrl} alt={publication.title} fill className="object-fill" />
                </div>
              )}

              <div className="page-stack">
                <h2 className="section-title">{publication.title}</h2>
                <p className="body-text">{publication.authors}</p>
                <p className="publication-abstract">
                  <strong>Abstract:</strong> {publication.tldr || "Abstract not provided yet."}
                </p>
                <div className="button-row">
                  {publication.paperUrl && (
                    <a href={publication.paperUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      Paper <ArrowUpRight size={14} />
                    </a>
                  )}
                  {publication.codeUrl && (
                    <a href={publication.codeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      Code <ArrowUpRight size={14} />
                    </a>
                  )}
                  {publication.bibtex && (
                    <a href={publication.bibtex} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      BibTeX <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
