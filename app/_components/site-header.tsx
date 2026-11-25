import Link from "next/link";
import { siteName } from "../_site";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a
        href="#main-content"
        className="site-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-10 focus:bg-canvas focus:px-3"
      >
        Skip to content
      </a>
      <div className="site-header-content flex items-center justify-between gap-4">
        <Link href="/" className="site-brand site-link">
          {siteName}
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
