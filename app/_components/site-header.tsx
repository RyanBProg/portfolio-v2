import Link from "next/link";
import { siteName } from "../_site";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader() {
  return (
    <header className="frame-bar sticky top-0 z-20">
      <a
        href="#main-content"
        className="site-link site-link--light sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:bg-canvas focus:px-3"
      >
        Skip to content
      </a>
      <div className="site-container flex h-(--header-height) items-stretch justify-between gap-4 border-b border-line-dark">
        <Link
          href="/"
          className="site-link -ml-3 text-canvas hover:text-on-ink-muted active:text-accent"
        >
          {siteName}
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
