import { linkedinUrl, siteName } from "../_site";
import { darkLinkColors, linkClasses } from "./link-classes";

export function Footer() {
  return (
    <footer className="frame-bar">
      <div className="site-container flex min-h-12 items-center justify-between gap-x-8">
        <p className="text-sm text-on-ink-muted">{siteName}</p>
        <a href={linkedinUrl} className={`${linkClasses} ${darkLinkColors} -mr-3`}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
