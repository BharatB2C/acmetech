import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Users, Globe, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Acme Technologies Inc.",
  description:
    "Learn about Acme Technologies Inc. — a Canadian software development company building custom software, Shopify apps, and enterprise solutions for startups and growing businesses.",
  alternates: { canonical: "https://acmetechnologies.ca/about" },
  openGraph: {
    title: "About Us | Acme Technologies Inc.",
    description: "A Canadian software team building products that last.",
    url: "https://acmetechnologies.ca/about",
    siteName: "Acme Technologies Inc.",
    locale: "en_CA",
    type: "website",
  },
};

const values = [
  {
    icon: Code2,
    title: "Craft Over Speed",
    description:
      "We take the time to build software correctly. Clean architecture, maintainable code, and thoughtful design decisions pay dividends for years.",
  },
  {
    icon: Rocket,
    title: "Ship and Iterate",
    description:
      "We move fast without breaking things. Working software in your hands beats a perfect spec on paper — we deploy early and improve continuously.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description:
      "We're not a one-and-done agency. Our best client relationships span years because we invest in understanding your business, not just your ticket.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Clear timelines, honest estimates, and proactive communication. No surprises, no hidden costs, no spin — just straightforward collaboration.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    description:
      "Our team works across Canada and beyond. Remote-first culture means we hire the best people regardless of geography — and it shows in our work.",
  },
  {
    icon: Zap,
    title: "Owners, Not Vendors",
    description:
      "We've built and launched our own SaaS products. We think like founders, not contractors — which means we care about outcomes, not just deliverables.",
  },
];

const products = [
  {
    name: "Inn Professionals",
    tagline: "Invoicing, HR & Project Management",
    description:
      "A complete back-office platform for freelancers and small businesses — invoicing, HR, project tracking, expense reports, and time management in one workspace.",
    href: "/products/inn-professionals",
    external: "https://innprof.com/",
    emoji: "📄",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "TeamConnect",
    tagline: "Shift Management & Team Communication",
    description:
      "Purpose-built for businesses with flexible workforces — drag-and-drop shift scheduling, GPS attendance, payroll export, and team chat.",
    href: "/products/teamconnect",
    emoji: "👥",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Datum51",
    tagline: "Data Integration & Webhook Automation",
    description:
      "A dedicated data integration platform for engineering teams — visual ETL pipelines, webhook orchestration, 500+ connectors, and real-time monitoring.",
    href: "/products/datum51",
    emoji: "🔗",
    gradient: "from-orange-500 to-amber-600",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3", label: "SaaS Products Shipped" },
  { value: "100%", label: "Remote Team" },
  { value: "Canada", label: "Headquartered In" },
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-[#f5f5f7] border-b border-[#d2d2d7] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-4">About Us</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight leading-tight mb-6">
            We build software<br className="hidden md:block" /> that grows with you.
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl mx-auto">
            Acme Technologies is a Canadian software development company helping startups and
            growing businesses build the tools they need to scale — from custom web apps and Shopify
            integrations to enterprise platforms and our own SaaS products.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/get-started"
              className="px-7 py-3 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="px-7 py-3 border border-[#d2d2d7] text-[#1d1d1f] font-semibold rounded-full hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-[#1d1d1f] tracking-tight">{stat.value}</p>
              <p className="text-sm text-[#6e6e73] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-4">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Built by builders, for builders.
          </h2>
          <div className="space-y-6 text-lg text-[#6e6e73] leading-relaxed">
            <p>
              Acme Technologies was founded with a straightforward belief: the best software is built by
              people who genuinely care about the problem being solved. We started as a small team of
              developers helping Canadian businesses modernize their digital infrastructure, and grew by
              doing good work and earning trust.
            </p>
            <p>
              Along the way, we didn't just build for clients — we built for ourselves. Our own products
              (Inn Professionals, TeamConnect, and Datum51) were born out of problems we saw repeatedly
              across our client base. Building and running SaaS products in production taught us things
              no client project ever could: real scalability challenges, real user feedback loops, real
              stakes.
            </p>
            <p>
              That experience shapes how we approach every engagement. We don't just write code — we
              think about infrastructure, operations, growth, and maintenance. We build software meant to
              last, not to be thrown away in 18 months.
            </p>
            <p>
              Today we work with startups validating their first product and enterprises modernizing
              legacy systems. The team is remote-first, distributed across Canada, and united by a
              shared standard: ship work you're proud of.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-7 rounded-3xl bg-white border border-[#d2d2d7]"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#eff6ff] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#0071e3]" />
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Software We've Shipped
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
              Beyond client work, we build and operate our own products — tools designed to solve
              real problems we've seen across hundreds of businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-3xl border border-[#d2d2d7] bg-white overflow-hidden flex flex-col"
              >
                <div className={`bg-gradient-to-br ${product.gradient} p-6 text-white`}>
                  <div className="text-3xl mb-3">{product.emoji}</div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm opacity-80 mt-0.5">{product.tagline}</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-[#6e6e73] leading-relaxed flex-1">{product.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0071e3] hover:underline"
                    >
                      Learn more <ArrowRight size={13} />
                    </Link>
                    {product.external && (
                      <a
                        href={product.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6e6e73] hover:text-[#0071e3] transition-colors"
                      >
                        Visit site <ArrowRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1d1d1f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to build something great?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Whether you have a detailed spec or just an idea, we'd love to hear about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-started"
              className="px-7 py-3 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 border border-white/20 text-white font-semibold rounded-full hover:border-white/40 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Legal footer nav */}
      <div className="bg-white border-t border-[#d2d2d7] px-6 py-8">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm text-[#6e6e73]">
          <Link href="/privacy-policy" className="hover:text-[#0071e3] transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-[#0071e3] transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-[#0071e3] transition-colors">Contact</Link>
          <Link href="/portfolio" className="hover:text-[#0071e3] transition-colors">Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
