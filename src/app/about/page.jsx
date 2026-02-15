import Image from "next/image";
import { aboutMe } from "@/data/aboutme";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";

function getBullets(description) {
  if (!description) return [];
  return description
    .split("\n")
    .map((line) => line.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);
}

function LinkedName({ name, href }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="work-role hover:text-[var(--teal)] transition-colors"
      >
        {name}
      </a>
    );
  }
  return <span className="work-role">{name}</span>;
}

export default function AboutPage() {
  return (
    <div className="page-stack">
      <p className="section-kicker">About</p>

      <h1 className="page-title">
        I&apos;m Sandip - crazy about building reliable AI for real-world autonomy.
      </h1>

      <div className="info-grid">
        <article className="page-stack">
          <p className="lead">
            My work focuses on delivering perception and navigation systems that remain
            dependable when sensing is sparse, noisy, or degraded, especially in
            GPS-denied environments. 🔬
          </p>

          <p className="body-text">
            My research spans machine learning-based sensor calibration,
            radar-centric perception, and uncertainty-aware multi-sensor fusion
            for GPS-denied navigation. I have experience developing
            simulation-heavy autonomy pipelines and scalable dataset workflows,
            and translating those efforts into deployment-ready modules and
            clean, maintainable codebases.
          </p>

          <p className="body-text">
            A central theme of my work is the integration of classical
            estimation and control with modern learning-based methods. By
            pairing structured GNC principles with neural models, I aim to
            improve robustness, interpretability, and real-world performance
            under challenging operational conditions.
          </p>

          <p className="body-text">
            I am currently a Research Engineer at the Autonomous Vehicle
            Laboratory (REEF) at the University of Florida, where I develop
            learning-based calibration and fusion systems to enhance navigation
            reliability in GPS-denied environments. My work bridges robotics,
            perception, and learning-based navigation, with a particular focus
            on radar-only localization, multi-sensor fusion, and resilient
            autonomy for both aerial and ground platforms.
          </p>

          <p className="body-text">
            Previously, I contributed to research at the GAMMA Lab and the
            Bio-Imaging &amp; Machine Vision Lab at the University of Maryland,
            working on VR-based driving simulation, trajectory prediction, and
            computer vision for underwater robotic systems. These experiences
            shaped my interest in autonomy that must operate beyond controlled
            settings.
          </p>

          <p className="body-text">
            Ultimately, I care about building autonomous systems that work
            outside ideal conditions low visibility, harsh environments, and
            tight computational budgets where reliability is not a feature, but
            the product itself.
          </p>
        </article>

        <aside className="page-stack">
          {aboutMe.imageUrl && (
            <div className="about-photo">
              <Image
                src={aboutMe.imageUrl}
                alt={aboutMe.nameText}
                fill
                className="object-contain about-photo-image"
              />
            </div>
          )}

          <section className="surface-card work-card">
            <h2 className="work-role">School</h2>
            {educationData.map((item, index) => (
              <div key={`${item.institution}-${index}`} className="work-row">
                <div className="work-main">
                  <div className="work-logo">
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt={item.institution}
                        fill
                        className="object-cover logo-image-fit"
                      />
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
          </section>
        </aside>
      </div>

      <section className="work-expanded">
        <div className="page-stack">
          <h2 className="section-title">Work Experience</h2>
          <p className="lead">
            Role impact, technical contributions, and collaboration context. 🤝
          </p>
        </div>

        <div className="work-expanded-list">
          {experienceData.map((item, index) => {
            const bullets = getBullets(item.description);
            return (
              <article
                key={`${item.title}-${index}`}
                className="work-expanded-item"
              >
                <div className="work-expanded-head">
                  <div className="work-head-main">
                    <div className="work-logo">
                      {item.logoUrl ? (
                        <Image
                          src={item.logoUrl}
                          alt={item.company}
                          fill
                          className="object-cover logo-image-fit"
                        />
                      ) : null}
                    </div>
                    <div>
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-role hover:text-[var(--teal)] transition-colors"
                        >
                          {item.company}
                        </a>
                      ) : (
                        <p className="work-role">{item.company}</p>
                      )}
                      <p className="body-text">{item.title}</p>
                    </div>
                  </div>
                  <p className="work-time">{item.date}</p>
                </div>

                {(item.manager || item.advisor) && (
                  <p className="body-text">
                    {item.manager && (
                      <>
                        Manager:{" "}
                        <LinkedName
                          name={item.manager}
                          href={item.managerLinkedinUrl}
                        />
                      </>
                    )}
                    {item.manager && item.advisor ? " | " : ""}
                    {item.advisor && (
                      <>
                        Advisor:{" "}
                        <LinkedName
                          name={item.advisor}
                          href={item.advisorLinkedinUrl}
                        />
                      </>
                    )}
                  </p>
                )}

                {bullets.length > 0 && (
                  <ul className="work-bullets">
                    {bullets.map((bullet, bulletIndex) => (
                      <li key={`${item.title}-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
