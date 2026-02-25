import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Github, GraduationCap, Linkedin } from "lucide-react";
import { aboutMe } from "@/data/aboutme";
import { publicationData } from "@/data/publication";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { Photos } from "@/components/media/Photos";

export default function HomePage() {
  const featuredPublications = publicationData.filter((publication) => publication.featuredOnHome).slice(0, 4);

  return (
    <div className="page-stack">
      <section className="page-stack">
        <div className="avatar-dot" style={{ width: 56, height: 56 }}>
          {aboutMe.imageUrl ? (
            <Image src={aboutMe.imageUrl} alt={aboutMe.nameText} fill className="object-cover" />
          ) : null}
        </div>

        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: aboutMe.nameHtml }} />

        <p className="lead">
          {aboutMe.title} @ {aboutMe.institution}
          <br />
          I focusing on enhancing the classical GNC stack with modern machine learning and robust sensing to build reliable autonomy for the real world.
        </p>

        <div className="button-row">
          {aboutMe.cvUrl && (
            <a href={aboutMe.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FileText size={14} />
              Resume
            </a>
          )}
          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          )}
          {aboutMe.googleScholarUrl && (
            <a href={aboutMe.googleScholarUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GraduationCap size={14} />
              Scholar
            </a>
          )}
          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </section>

      <Photos />
      
      <section className="home-split">
        <article className="surface-card page-stack">
          <h2 className="section-title">Publications</h2>
          <div className="simple-list">
            {featuredPublications.map((publication, index) => (
              <div key={`${publication.title}-${index}`} className="list-item">
                <p className="meta">{publication.year}</p>
                <p className="work-role">{publication.title}</p>
                {publication.paperUrl && (
                  <a
                    href={publication.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-fit"
                  >
                    Read paper <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
          <Link href="/publications" className="btn-ghost w-fit">
            See more <ArrowUpRight size={14} />
          </Link>
        </article>

        <aside className="surface-card work-card">
          <h3 className="work-role">School</h3>
          {educationData.map((item, index) => (
            <div key={`${item.institution}-${index}`} className="work-row">
              <div className="work-main">
                <div className="work-logo">
                  {item.logoUrl ? (
                    <Image src={item.logoUrl} alt={item.institution} fill className="object-cover logo-image-fit" />
                  ) : null}
                </div>
                <div>
                  <p className="work-role">{item.institution}</p>
                  <p className="body-text">{item.degree}</p>
                </div>
              </div>
              <p className="work-time">{item.year}</p>
            </div>
          ))}

          <h3 className="work-role">Work</h3>
          {experienceData.map((item, index) => (
            <div key={`${item.company}-${index}`} className="work-row">
              <div className="work-main">
                <div className="work-logo">
                  {item.logoUrl ? (
                    <Image src={item.logoUrl} alt={item.company} fill className="object-cover logo-image-fit" />
                  ) : null}
                </div>
                <div>
                  <p className="work-role">{item.title}</p>
                  <p className="body-text">{item.company}</p>
                </div>
              </div>
              <p className="work-time">{item.date}</p>
            </div>
          ))}
        </aside>
      </section>
    </div>
  );
}
