import { pageMetadata } from "../_site";
import styles from "./about.module.css";

export const metadata = pageMetadata(
  "About",
  "Ryan Bowler’s path from mechanical design engineering to software, how he works and what he enjoys beyond engineering.",
  "/about",
);

const sections = [
  {
    id: "mechanical-engineering",
    title: "From mechanical engineering to software",
    paragraphs: [
      "I spent over a decade working in mechanical engineering, primarily in mechanical design. My work involved designing precision mechanical systems, developing technical solutions and producing the documentation needed to take designs through to production.",
      "During that time, I started developing internal software tools to automate repetitive design tasks and improve existing workflows. I enjoyed finding opportunities to simplify complex processes, then building something practical to make it happen.",
      "That experience changed how I looked at software. I became increasingly interested in its potential to solve problems beyond the immediate engineering task, and found myself drawn towards the design and development of software systems themselves.",
      "Eventually, I made the move into software engineering, bringing with me an established engineering mindset and a practical approach to problem-solving.",
    ],
  },
  {
    id: "how-i-work",
    title: "How I work",
    tone: "dark",
    paragraphs: [
      "I value clear thinking, practical solutions and sound engineering decisions.",
      "I enjoy working through complex problems, understanding the constraints and finding an approach that makes sense beyond the immediate implementation. I'm equally interested in the details of how something works and how the individual pieces fit into a larger system.",
      "I prefer taking ownership of problems from initial requirements through to implementation and production. I believe good engineering is as much about making the right decisions as it is about executing them well.",
      "I'm particularly interested in system design, infrastructure and the engineering challenges that come with building and operating reliable software.",
    ],
  },
  {
    id: "beyond-engineering",
    title: "Beyond engineering",
    paragraphs: [
      "Outside of work, I enjoy exploring new places and experiencing different cultures. I've travelled to more than 40 countries across six continents, and travelling remains one of the things I value most.",
      "Closer to home, you'll usually find me skateboarding, at the gym or experimenting with growing chillies and other vegetables. I also enjoy cooking, particularly trying out new dishes and cuisines.",
      "I'm always interested in learning something new, whether that's a different way of approaching a problem, exploring somewhere unfamiliar or figuring out how something works.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="portfolio-page">
      <section aria-labelledby="about-title" className={styles.hero}>
        <div className={styles.heroHeading}>
          <p className="portfolio-eyebrow">About</p>
          <h1 id="about-title" className="portfolio-title">
            An engineering mindset, applied to software.
          </h1>
        </div>
        <div className={styles.introCopy}>
          <p>
            I&apos;m a software engineer with a background in mechanical design
            engineering and a long-standing interest in understanding how
            things work, solving problems and finding better ways to do things.
          </p>
          <p>
            My path into software developed through practical problem-solving.
            While working in mechanical engineering, I began using programming
            to automate repetitive processes and build tools that made
            engineering work more efficient. What started as a way to solve
            problems in my day-to-day work gradually became a much bigger
            interest.
          </p>
        </div>
      </section>

      {sections.map(({ id, title, paragraphs, tone }) => (
        <section key={id} aria-labelledby={id} className={styles.section} data-tone={tone}>
          <h2 id={id}>{title}</h2>
          <div className={styles.sectionCopy}>
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
      ))}
    </div>
  );
}
