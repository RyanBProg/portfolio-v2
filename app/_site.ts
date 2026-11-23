import type { Metadata } from "next";

export const siteName = "Ryan Bowler";
export const siteRole = "Software Engineer";
export const siteUrl = new URL("https://ryanbprog.com");
export const linkedinUrl = "https://www.linkedin.com/in/ryan-bowler-601919170/";
export const sitePages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

type PagePath = (typeof sitePages)[number]["href"];

export function pageMetadata(
  title: string,
  description: string,
  path: PagePath,
): Metadata {
  const fullTitle = path === "/" ? `${siteName} | ${title}` : `${title} | ${siteName}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
