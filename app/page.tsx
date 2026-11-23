import { lightLinkColors, linkClasses } from "./_components/link-classes";
import { linkedinUrl, pageMetadata, siteRole } from "./_site";

export const metadata = pageMetadata(
  siteRole,
  "Ryan Bowler works across the engineering lifecycle, from real-world requirements to production software.",
  "/",
);

const disciplines = [
  {
    icon: (
      <>
        <span className="absolute top-2 left-0.75 size-2 rotate-45 border-b-[1.5px] border-l-[1.5px]" />
        <span className="absolute top-2 right-0.75 size-2 rotate-225 border-b-[1.5px] border-l-[1.5px]" />
        <span className="absolute top-1.25 left-2.75 h-3.5 rotate-22 border-l-[1.5px]" />
      </>
    ),
    title: "Software engineering",
    description:
      "I build backend services, web applications and mobile experiences around real user needs.",
  },
  {
    icon: (
      <>
        <span className="absolute top-1.75 left-[11.25px] h-1.25 border-l-[1.5px]" />
        <span className="absolute inset-x-1 top-2.75 bottom-1.75 border-[1.5px] border-b-0" />
        <span className="absolute top-0.5 left-2.25 size-1.5 border-[1.5px] bg-canvas" />
        <span className="absolute bottom-0.5 left-0.5 size-1.5 border-[1.5px] bg-canvas" />
        <span className="absolute right-0.5 bottom-0.5 size-1.5 border-[1.5px] bg-canvas" />
      </>
    ),
    title: "System design",
    description:
      "I weigh architectural choices against dependencies, data flow and the needs of the wider system.",
  },
  {
    icon: (
      <>
        <span className="absolute top-0.5 left-0.5 size-2.25 border-[1.5px]" />
        <span className="absolute right-0.5 bottom-0.5 size-2.25 border-[1.5px]" />
        <span className="absolute top-2.5 right-2.5 bottom-1.25 left-1.25 border-b-[1.5px] border-l-[1.5px]" />
      </>
    ),
    title: "Integrations & data",
    description:
      "I connect applications and external platforms through reliable APIs and clear data flows.",
  },
  {
    icon: (
      <>
        <span className="absolute inset-x-0.5 top-0.75 h-2 border-[1.5px]" />
        <span className="absolute inset-x-0.5 bottom-0.75 h-2 border-[1.5px]" />
        <span className="absolute top-1.5 left-1.5 size-0.5 bg-current shadow-[0_10px_currentColor]" />
      </>
    ),
    title: "Infrastructure & operations",
    description:
      "I work across deployment, environments and infrastructure to keep software reliable in production.",
  },
];

export default function Home() {
  return (
    <>
      <section aria-labelledby="intro" className="bg-ink text-canvas">
        <div className="site-container window-row window-row--hero">
          <p className="window-rail section-label text-on-ink-muted">
            {siteRole}
          </p>
          <div className="window-pane">
            <h1
              id="intro"
              className="text-[clamp(1.875rem,6.1vw,5rem)] leading-[1.06] font-normal tracking-tighter">
              <span className="block">Think clearly.</span>{" "}
              <span className="block">Design deliberately.</span>{" "}
              <span className="block">Build well.</span>
            </h1>
            <p className="copy-block mt-5 text-on-ink-muted sm:mt-7 sm:text-lg">
              I work across the engineering lifecycle, translating real-world
              requirements into well-designed software systems. Focused on
              practical solutions, sound technical decisions and delivering
              software that works in production.
            </p>
            <a
              href="#current-focus"
              className={`${linkClasses} text-xl -ml-3 mt-7 text-accent hover:text-canvas active:text-on-ink-muted sm:mt-9`}>
              Explore my work
            </a>
          </div>
        </div>
      </section>

      <section
        id="current-focus"
        aria-labelledby="focus-title"
        tabIndex={-1}
        className="anchor-target border-b border-line bg-inset target:shadow-[inset_3px_0_var(--color-link)]">
        <div className="site-container window-row">
          <p className="window-rail section-label text-muted">Current focus</p>
          <div className="window-pane">
            <h2
              id="focus-title"
              className="text-[clamp(1.75rem,3.25vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.035em]">
              Healthcare technology
            </h2>
            <p className="copy-block mt-2 text-muted">
              I build and improve production software at an early-stage
              healthcare technology company, working across applications,
              integrations and infrastructure. I weigh technical trade-offs
              against business priorities and consider how each decision affects
              the wider system.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="engineering-title">
        <div className="site-container window-row">
          <p className="window-rail section-label text-muted">
            How I approach engineering
          </p>
          <div className="window-pane">
            <h2
              id="engineering-title"
              className="text-[clamp(1.75rem,3.25vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.035em]">
              Engineering the bigger picture.
            </h2>
            <p className="copy-block mt-3 text-muted">
              I start with the requirements, make trade-offs in the context of
              the wider system, and take the work through to production.
            </p>

            <ul className="mt-7 grid min-[56rem]:grid-cols-2">
              {disciplines.map(({ icon, title, description }) => (
                <li
                  key={title}
                  className="grid grid-cols-[24px_minmax(0,1fr)] items-start gap-3.5 border-line py-4.5 min-[56rem]:px-5">
                  <span
                    className="relative block size-6 text-link"
                    aria-hidden="true">
                    {icon}
                  </span>
                  <div>
                    <h3 className="text-lg leading-snug font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="copy-block mt-1 text-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        tabIndex={-1}
        className="anchor-target border-t border-line bg-inset target:shadow-[inset_3px_0_var(--color-link)]">
        <div className="site-container window-row [--row-space:clamp(1.25rem,3vw,2rem)]">
          <div className="window-pane md:col-start-2">
            <h2
              id="contact-title"
              className="text-xl leading-snug font-semibold tracking-tight">
              Have a problem worth solving?
            </h2>
            <div className="copy-block mt-3 space-y-4 text-muted">
              <p>
                I&apos;m always interested in connecting with people working on
                interesting technical problems and building useful things.
              </p>
              <p>
                Whether it&apos;s an engineering opportunity, a technical
                discussion or simply an introduction, feel free to get in touch.
              </p>
            </div>
            <div className="-ml-3 mt-3 flex flex-wrap items-center">
              <a
                href={linkedinUrl}
                className={`${linkClasses} ${lightLinkColors}`}>
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-muted">
                ·
              </span>
              <a
                href="https://github.com/RyanBProg"
                className={`${linkClasses} ${lightLinkColors}`}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
