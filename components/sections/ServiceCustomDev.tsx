import { Code2, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const features = [
  {
    title: "SaaS Applications",
    description: "Multi-tenant SaaS platforms built with scalable architecture and modern tech stacks.",
  },
  {
    title: "CRM & ERP Systems",
    description: "Custom business software that fits your processes — not the other way around.",
  },
  {
    title: "API Integrations",
    description: "Connect disparate systems, automate workflows, and build data pipelines that scale.",
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end development from database design to polished frontend interfaces.",
  },
];

export default function ServiceCustomDev() {
  return (
    <section id="custom-dev" className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-violet-700 aspect-[4/3] flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <Code2 size={64} className="mx-auto mb-4 opacity-80" />
                  <p className="text-2xl font-bold opacity-90">Custom Dev</p>
                  <p className="text-purple-200 text-sm mt-1">SaaS &amp; Enterprise</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                <Code2 size={18} className="text-purple-500" />
                <span className="text-sm font-semibold text-[#1d1d1f]">Full-Stack</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">
                Custom Development
              </span>
              <h2 className="text-4xl md:text-[44px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                Software Engineered for Your Vision
              </h2>
              <p className="text-[#6e6e73] text-lg leading-relaxed mb-8">
                When off-the-shelf software isn't enough, we build yours. From SaaS platforms to enterprise systems, we architect solutions designed to grow with you.
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1d1d1f]">{feature.title}</p>
                      <p className="text-sm text-[#6e6e73] mt-0.5">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
              >
                Start a Custom Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
