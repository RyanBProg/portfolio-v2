import Image from "next/image";
import portrait from "./_assets/ryan-bowler.png";
import { linkedinUrl, pageMetadata, siteName, siteRole } from "./_site";
import styles from "./home.module.css";

export const metadata = pageMetadata(
  siteRole,
  "Ryan Bowler works across the engineering lifecycle, from real-world requirements to production software.",
  "/",
);

const disciplines = [
  {
    title: "Software engineering",
    description:
      "I build backend services, web applications and mobile experiences around real user needs.",
  },
  {
    title: "System design",
    description:
      "I weigh architectural choices against dependencies, data flow and the needs of the wider system.",
  },
  {
    title: "Integrations & data",
    description:
      "I connect applications and external platforms through reliable APIs and clear data flows.",
  },
  {
    title: "Infrastructure & operations",
    description:
      "I work across deployment, environments and infrastructure to keep software reliable in production.",
  },
];

export default function Home() {
  return (
    <div className="portfolio-page">
      <section aria-labelledby="intro" className={styles.hero}>
        <div className={styles.heroHeading}>
          <p className={`portfolio-eyebrow ${styles.role}`}>{siteRole}</p>
          <h1 id="intro" className="portfolio-title">
            <span>Think clearly.</span>{" "}
            <span>Design deliberately.</span>{" "}
            <span>Build well.</span>
          </h1>
        </div>
        <div className={styles.heroDetails}>
          <p>
            I work across the engineering lifecycle, translating real-world
            requirements into well-designed software systems. Focused on
            practical solutions, sound technical decisions and delivering
            software that works in production.
          </p>
          <a href="#current-focus" className={styles.heroLink}>
            Explore my work <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className={styles.portrait}>
          <Image
            src={portrait}
            alt={siteName}
            sizes="(min-width: 90rem) 37.8rem, (min-width: 48rem) 42vw, clamp(5.04rem, 27.72vw, 10.08rem)"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      <section aria-labelledby="engineering-title" className={styles.engineering}>
        <p className={styles.engineeringLabel}>How I approach engineering</p>
        <div className={styles.engineeringIntro}>
          <h2 id="engineering-title">Engineering the bigger picture.</h2>
          <p>
            I start with the requirements, make trade-offs in the context of
            the wider system, and take the work through to production.
          </p>
        </div>
        <ol className={styles.disciplines} role="list">
          {disciplines.map(({ title, description }, index) => (
            <li key={title}>
              <span className={styles.disciplineNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="current-focus"
        aria-labelledby="focus-title"
        tabIndex={-1}
        className={`anchor-target ${styles.focus}`}
      >
        <div className={styles.focusContent}>
          <p className={styles.focusLabel}>Current focus</p>
          <h2 id="focus-title">Healthcare technology</h2>
          <p>
            I build and improve production software at an early-stage
            healthcare technology company, working across applications,
            integrations and infrastructure. I weigh technical trade-offs
            against business priorities and consider how each decision affects
            the wider system.
          </p>
        </div>
        <div className={styles.workImage} aria-hidden="true" />
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        tabIndex={-1}
        className={`anchor-target ${styles.contact}`}
      >
        <h2 id="contact-title">Have a problem worth solving?</h2>
        <div className={styles.contactDetails}>
          <p>
            I&apos;m always interested in connecting with people working on
            interesting technical problems and building useful things.
          </p>
          <p>
            Whether it&apos;s an engineering opportunity, a technical
            discussion or simply an introduction, feel free to get in touch.
          </p>
          <div className={styles.contactLinks}>
            <a href={linkedinUrl}>
              LinkedIn <span aria-hidden="true">→</span>
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://github.com/RyanBProg">
              GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
