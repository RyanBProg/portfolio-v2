import { linkedinUrl, siteName } from "../_site";

export function Footer() {
  return (
    <footer className="frame-bar">
      <div className="site-container flex min-h-12 items-center justify-between gap-x-8">
        <p className="text-sm text-on-ink-muted">{siteName}</p>
        <div className="-ml-3 mt-3 flex flex-wrap items-center">
          <a href={linkedinUrl} className="site-link site-link--dark">
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-muted">
            ·
          </span>
          <a
            href="https://github.com/RyanBProg"
            className="site-link site-link--dark">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
