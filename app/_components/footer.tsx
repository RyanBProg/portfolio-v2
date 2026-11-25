import { linkedinUrl, siteName } from "../_site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{siteName}</p>
      <div className="flex flex-wrap items-center">
        <a href={linkedinUrl} className="site-link">
          LinkedIn
        </a>
        <span aria-hidden="true">·</span>
        <a href="https://github.com/RyanBProg" className="site-link">
          GitHub
        </a>
      </div>
    </footer>
  );
}
