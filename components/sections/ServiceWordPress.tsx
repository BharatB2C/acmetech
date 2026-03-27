import { Globe, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const features = [
  {
    title: "Business Websites",
    description: "Professional, conversion-focused websites that represent your brand with authority.",
  },
  {
    title: "E-Commerce Websites",
    description: "WooCommerce-powered stores with custom checkout flows and payment integrations.",
  },
  {
    title: "Custom Themes & Plugins",
    description: "Purpose-built themes and plugins tailored exactly to your requirements.",
  },
  {
    title: "SEO Optimized",
    description: "Technical SEO built-in: fast load times, structured data, and search-ready architecture.",
  },
];

export default function ServiceWordPress() {
  return (
    <section id="wordpress" className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 aspect-[4/3] flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <Globe size={64} className="mx-auto mb-4 opacity-80" />
                  <p className="text-2xl font-bold opacity-90">WordPress</p>
                  <p className="text-blue-200 text-sm mt-1">Development</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-sm font-semibold text-[#1d1d1f]">SEO Ready</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">
                WordPress Development
              </span>
              <h2 className="text-4xl md:text-[44px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                Websites That Work As Hard As You Do
              </h2>
              <p className="text-[#6e6e73] text-lg leading-relaxed mb-8">
                We craft WordPress websites that are fast, secure, and built to rank. From landing pages to full e-commerce platforms, every project is built with purpose.
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-[#0071e3] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1d1d1f]">{feature.title}</p>
                      <p className="text-sm text-[#6e6e73] mt-0.5">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] transition-colors"
              >
                Start a WordPress Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
