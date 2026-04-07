import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { type ProcessStep } from "@/lib/data/services";
import { type HowItWorksStep } from "@/lib/data/products";

interface ProcessStepsProps {
  steps: (ProcessStep | HowItWorksStep)[];
  label?: string;
  title?: string;
  subtitle?: string;
}

export default function ProcessSteps({
  steps,
  label = "How We Work",
  title = "Our Process",
  subtitle = "A clear, collaborative process from first conversation to live product.",
}: ProcessStepsProps) {
  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        {/* Desktop: card grid */}
        <div className="mt-14 hidden md:flex items-stretch gap-3">
          {steps.map((step, i) => {
            const num = "number" in step ? step.number : step.step;
            const padded = String(num).padStart(2, "0");
            const isLast = i === steps.length - 1;
            return (
              <AnimatedSection
                key={step.title}
                delay={i * 0.1}
                className="flex items-stretch gap-3 flex-1"
              >
                {/* Card */}
                <div className="relative flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#e8e8ed] overflow-hidden flex flex-col">
                  {/* Decorative number */}
                  <span className="absolute top-3 right-4 text-6xl font-black text-[#0071e3]/8 leading-none select-none pointer-events-none">
                    {padded}
                  </span>

                  {/* Step badge */}
                  <div className="w-9 h-9 rounded-full bg-[#0071e3] text-white font-bold text-sm flex items-center justify-center mb-4 shrink-0 shadow-sm">
                    {num}
                  </div>

                  <h3 className="text-sm font-bold text-[#1d1d1f] mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector */}
                {!isLast && (
                  <div className="flex items-center self-center shrink-0 text-[#d2d2d7]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="mt-10 md:hidden flex flex-col gap-4">
          {steps.map((step, i) => {
            const num = "number" in step ? step.number : step.step;
            const padded = String(num).padStart(2, "0");
            return (
              <AnimatedSection key={step.title} delay={i * 0.08}>
                <div className="relative bg-white rounded-2xl p-5 shadow-sm border border-[#e8e8ed] overflow-hidden flex gap-4">
                  {/* Decorative number */}
                  <span className="absolute bottom-2 right-4 text-5xl font-black text-[#0071e3]/8 leading-none select-none pointer-events-none">
                    {padded}
                  </span>

                  {/* Step badge */}
                  <div className="w-9 h-9 rounded-full bg-[#0071e3] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {num}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-[#1d1d1f] mb-1 leading-snug">{step.title}</h3>
                    <p className="text-sm text-[#6e6e73] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
