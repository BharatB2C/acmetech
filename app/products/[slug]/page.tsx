import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts, getProductBySlug } from "@/lib/data/products";
import Breadcrumb from "@/components/detail/Breadcrumb";
import DetailHero from "@/components/detail/DetailHero";
import FeatureGrid from "@/components/detail/FeatureGrid";
import ProcessSteps from "@/components/detail/ProcessSteps";
import PricingSection from "@/components/detail/PricingSection";
import TestimonialSection from "@/components/detail/TestimonialCard";
import FaqAccordion from "@/components/detail/FaqAccordion";
import JsonLd from "@/components/detail/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTA from "@/components/sections/CTA";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    alternates: { canonical: `https://acmetechnologies.ca/products/${slug}` },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `https://acmetechnologies.ca/products/${slug}`,
      siteName: "Acme Technologies Inc.",
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
    },
    author: {
      "@type": "Organization",
      name: "Acme Technologies Inc.",
      url: "https://acmetechnologies.ca",
    },
    url: `https://acmetechnologies.ca/products/${slug}`,
  };

  return (
    <div className="pt-16">
      <JsonLd data={jsonLdData} />

      <Breadcrumb
        items={[
          { label: "Products", href: "/#products" },
          { label: product.name, href: `/products/${slug}` },
        ]}
      />

      <DetailHero
        name={product.name}
        tagline={product.tagline}
        description={product.description}
        gradient={product.gradient}
        emoji={product.emoji}
        variant="product"
        cta1={{ label: "Try Free", href: "/#contact" }}
        cta2={{ label: "Book a Demo", href: "/#contact" }}
      />

      {/* Problem / Solution */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                {product.problem.heading}
              </h2>
              <p className="text-lg text-[#6e6e73] leading-relaxed">
                {product.problem.problemStatement}
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="p-8 rounded-3xl bg-[#f5f5f7] border border-[#d2d2d7]">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">
                  Our Solution
                </span>
                <p className="text-lg text-[#1d1d1f] leading-relaxed font-medium">
                  {product.problem.solutionStatement}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="text-3xl">{product.emoji}</div>
                  <div>
                    <p className="font-bold text-[#1d1d1f]">{product.name}</p>
                    <p className="text-sm text-[#6e6e73]">{product.tagline}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FeatureGrid
        features={product.features}
        label="Features"
        title="Everything You Need"
        subtitle="Built to handle the complexity of real business operations."
        accentBg="bg-blue-50"
        accentIcon="text-blue-600"
      />

      <ProcessSteps
        steps={product.howItWorks}
        label="Getting Started"
        title="How It Works"
        subtitle="Up and running in minutes — not weeks."
      />

      {/* Who It's For — Personas */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Who It's For"
            title="Built for Teams Like Yours"
            subtitle="Whether you're a freelancer or a growing business, there's a plan that fits."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.personas.map((persona, i) => (
              <AnimatedSection key={persona.role} delay={i * 0.1}>
                <div className="p-7 rounded-3xl border border-[#d2d2d7] bg-white h-full">
                  <div className="text-3xl mb-4">{persona.icon}</div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{persona.role}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{persona.useCase}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Technology"
            title="Built With"
            subtitle="Reliable, scalable technology chosen for performance and longevity."
          />
          <AnimatedSection delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
            {product.techStack.map((tech, i) => (
              <AnimatedSection key={tech.name} delay={i * 0.04}>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] text-sm font-semibold text-[#1d1d1f]">
                  <span>{tech.name}</span>
                  <span className="text-xs text-[#6e6e73] font-normal">{tech.category}</span>
                </div>
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <TestimonialSection testimonials={product.testimonials} />

      <PricingSection
        tiers={product.pricing}
        label="Pricing"
        title="Start Free, Scale as You Grow"
        subtitle="No credit card required for free tier. Upgrade when you're ready."
      />

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know about the product."
          />
          <div className="mt-12">
            <FaqAccordion faqs={product.faqs} />
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
