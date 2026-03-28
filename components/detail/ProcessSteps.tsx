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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        {/* Desktop: horizontal timeline */}
        <div className="mt-14 hidden md:grid md:grid-cols-5 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-px bg-[#d2d2d7]" />

          {steps.map((step, i) => {
            const num = "number" in step ? step.number : step.step;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1} className="relative flex flex-col items-center text-center px-3">
                {/* Number circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#0071e3] text-white font-bold text-sm flex items-center justify-center mb-5 shadow-md">
                  {num}
                </div>
                <h3 className="text-sm font-bold text-[#1d1d1f] mb-2">{step.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed">{step.description}</p>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Mobile: vertical stacked */}
        <div className="mt-10 md:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const num = "number" in step ? step.number : step.step;
            const isLast = i === steps.length - 1;
            return (
              <AnimatedSection key={step.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  {/* Left: number + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#0071e3] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                      {num}
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-[#d2d2d7] my-2" />}
                  </div>
                  {/* Right: content */}
                  <div className={`pb-8 ${isLast ? "" : ""}`}>
                    <h3 className="font-bold text-[#1d1d1f] mb-1">{step.title}</h3>
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
