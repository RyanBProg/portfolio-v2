import type { Metadata } from "next";
import { Footer } from "./_components/footer";
import { SiteHeader } from "./_components/site-header";
import { siteName, siteUrl } from "./_site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  authors: [{ name: siteName }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex min-h-svh flex-col">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="anchor-target grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
