import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { type Testimonial } from "@/lib/data/products";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Social Proof"
          title="What Our Users Say"
          subtitle="Real feedback from businesses using this product every day."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl border border-[#d2d2d7] bg-white h-full flex flex-col">
                {/* Quote marks */}
                <div className="text-4xl text-[#d2d2d7] font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-[#1d1d1f] leading-relaxed flex-1 italic mb-6">{t.quote}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1d1d1f] text-sm">{t.author}</p>
                    <p className="text-xs text-[#6e6e73]">
                      {t.role}
                      {t.company !== "Independent" ? ` · ${t.company}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
