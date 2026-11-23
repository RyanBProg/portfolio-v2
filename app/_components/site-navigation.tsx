"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sitePages } from "../_site";
import { darkLinkColors, linkClasses } from "./link-classes";

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
              className={`${linkClasses} ${
                pathname === href
                  ? "font-semibold text-canvas active:text-accent"
                  : darkLinkColors
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
