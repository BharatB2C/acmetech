import AnimatedSection from "@/components/ui/AnimatedSection";
import { type ServiceStat } from "@/lib/data/services";

interface StatsBannerProps {
  stats: ServiceStat[];
}

export default function StatsBanner({ stats }: StatsBannerProps) {
  return (
    <section className="bg-[#f5f5f7] py-12 px-6 border-b border-[#d2d2d7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#d2d2d7]">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08} className="flex flex-col items-center text-center md:px-6">
              <span className="text-3xl lg:text-4xl font-bold text-[#0071e3] tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm text-[#6e6e73] font-medium mt-1">{stat.label}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
