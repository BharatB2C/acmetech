import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { type PortfolioItem } from "@/lib/data/services";
import Link from "next/link";

interface PortfolioSliceProps {
  items: PortfolioItem[];
}

export default function PortfolioSlice({ items }: PortfolioSliceProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Work"
          title="Related Projects"
          subtitle="Real projects in this category we've designed, built, and launched."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-[#d2d2d7] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                {/* Gradient image area */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${item.gradient} flex items-end p-5 overflow-hidden`}
                >
                  {/* SVG grid */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern
                          id={`pg-${i}`}
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pg-${i})`} />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-5 text-3xl">{item.icon}</div>
                  <span className="relative z-10 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] mb-1.5 group-hover:text-[#0071e3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25} className="mt-10 text-center">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0071e3] hover:underline"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
