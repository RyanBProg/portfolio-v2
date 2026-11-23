"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sitePages } from "../_site";

export function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex self-stretch">
      <ul className="flex">
        {sitePages.map(({ href, label }) => (
          <li key={href} className="flex">
            <Link
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`site-link ${
                pathname === href
                  ? "font-semibold text-canvas active:text-accent"
                  : "site-link--dark"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
