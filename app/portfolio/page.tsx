import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Acme Technologies Inc.",
  description:
    "Explore our portfolio of WordPress, Shopify, SaaS, and mobile projects. 100+ digital products built for startups and growing businesses across Canada.",
  alternates: { canonical: "https://acmetechnologies.ca/portfolio" },
  openGraph: {
    title: "Portfolio | Acme Technologies Inc.",
    description: "Real projects, real impact — digital products we've designed, built, and shipped.",
    url: "https://acmetechnologies.ca/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#1d1d1f] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#0071e3] text-sm font-semibold uppercase tracking-widest mb-5">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Built with care,
            <br />
            shipped with pride.
          </h1>
          <p className="text-[#a1a1a6] text-xl leading-relaxed max-w-2xl mx-auto">
            From SaaS platforms to custom Shopify stores — here&apos;s a selection of the
            projects we&apos;ve delivered for clients across Canada and beyond.
          </p>
        </div>
      </section>

      {/* Filter + grid (client component) */}
      <PortfolioGrid />

      <CTA />
    </main>
  );
}
