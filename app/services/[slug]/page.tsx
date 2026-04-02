import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServices, getServiceBySlug } from "@/lib/data/services";
import Breadcrumb from "@/components/detail/Breadcrumb";
import DetailHero from "@/components/detail/DetailHero";
import StatsBanner from "@/components/detail/StatsBanner";
import FeatureGrid from "@/components/detail/FeatureGrid";
import ProcessSteps from "@/components/detail/ProcessSteps";
import PortfolioSlice from "@/components/detail/PortfolioSlice";
import PricingSection from "@/components/detail/PricingSection";
import CapabilitiesSection from "@/components/detail/CapabilitiesSection";
import FaqAccordion from "@/components/detail/FaqAccordion";
import JsonLd from "@/components/detail/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTA from "@/components/sections/CTA";

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `https://acmetechnologies.ca/services/${slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://acmetechnologies.ca/services/${slug}`,
      siteName: "Acme Technologies Inc.",
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Acme Technologies Inc.",
      url: "https://acmetechnologies.ca",
    },
    areaServed: "CA",
    url: `https://acmetechnologies.ca/services/${slug}`,
  };

  return (
    <div className="pt-16">
      <JsonLd data={jsonLdData} />

      <Breadcrumb
        items={[
          { label: "Services", href: "/#services" },
          { label: service.name, href: `/services/${slug}` },
        ]}
      />

      <DetailHero
        name={service.name}
        tagline={service.tagline}
        description={service.description}
        gradient={service.heroGradient}
        variant="service"
        cta1={{ label: "Get a Quote", href: "/#contact" }}
        cta2={{ label: "View Portfolio", href: "/#portfolio" }}
      />

      <StatsBanner stats={service.stats} />

      {/* Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Overview"
            title={service.overview.heading}
            align="left"
          />
          <AnimatedSection delay={0.1} className="mt-6">
            <p className="text-lg text-[#6e6e73] leading-relaxed">{service.overview.body}</p>
          </AnimatedSection>
        </div>
      </section>

      <FeatureGrid
        features={service.features}
        label="What's Included"
        title="Everything You Need"
        subtitle="A complete set of capabilities to deliver results from day one."
        accentBg={service.accentBg}
        accentIcon={service.accentColor.replace("text-", "text-")}
      />

      <ProcessSteps
        steps={service.process}
        label="How We Work"
        title="Our Process"
        subtitle="A clear, collaborative process from first conversation to live product."
      />

      {/* Why Choose Us for this service */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Why Acme"
            title={`Why Choose Us for ${service.name}`}
            subtitle="What sets our approach apart from the alternatives."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.08}>
                <div className="p-7 rounded-3xl border border-[#d2d2d7] bg-white h-full">
                  <div className={`inline-block px-3 py-1 rounded-full ${service.accentBg} ${service.accentColor.replace("text-", "text-")} text-xs font-semibold mb-4`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{d.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSlice items={service.portfolioItems} />

      <PricingSection
        tiers={service.pricing}
        label="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the engagement model that fits your project. All quotes are obligation-free."
      />

      {service.capabilities && (
        <CapabilitiesSection
          groups={service.capabilities}
          accentBg={service.accentBg}
          accentColor={service.accentColor}
        />
      )}

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="FAQ"
            title="Common Questions"
            subtitle="Everything you need to know before starting a project."
          />
          <div className="mt-12">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
