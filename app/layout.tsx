import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Acme Technologies Inc. — Scalable Digital Products",
  description:
    "Canadian software company specializing in custom software development, Shopify apps, WordPress development, and enterprise SaaS solutions. 100+ projects, 50+ clients.",
  keywords: [
    "software development",
    "Shopify development",
    "WordPress development",
    "SaaS development",
    "custom software",
    "Canada",
    "web development",
  ],
  authors: [{ name: "Acme Technologies Inc." }],
  creator: "Acme Technologies Inc.",
  metadataBase: new URL("https://acmetechnologies.ca"),
  openGraph: {
    title: "Acme Technologies Inc. — Scalable Digital Products",
    description:
      "We build custom software, Shopify apps, and enterprise solutions for startups and growing businesses.",
    url: "https://acmetechnologies.ca",
    siteName: "Acme Technologies Inc.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acme Technologies Inc.",
    description: "Building scalable digital products for startups and enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
