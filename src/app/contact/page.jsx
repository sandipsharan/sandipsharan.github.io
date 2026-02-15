import { aboutMe } from "@/data/aboutme";

export default function ContactPage() {
  return (
    <div className="page-stack">
      <p className="section-kicker">Contact</p>
      <h1 className="page-title">Get In Touch</h1>
      <article className="surface-card page-stack">
        <p className="lead">
          Feel free to reach out, connect with me on LinkedIn or GitHub. I&apos;m always open to discussing new opportunities, collaborations, or just saying hi! ✉️
        </p>
        <a href={`mailto:${aboutMe.email}`} className="btn-main w-fit">
          {aboutMe.email}
        </a>
        <div className="button-row">
          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
          )}
          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          )}
          {aboutMe.googleScholarUrl && (
            <a
              href={aboutMe.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Google Scholar
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

