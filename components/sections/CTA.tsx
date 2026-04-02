import { ArrowRight, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 px-6 bg-[#1d1d1f]">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Ready to build?
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-[#5ac8fa]">
              Great Together
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you have a clear vision or just a rough idea — we&apos;re ready to help you turn it into a world-class digital product.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 text-base inline-flex items-center gap-2 shadow-lg shadow-blue-900/30"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 active:scale-[0.98] transition-all duration-200 text-base inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Get Free Consultation
            </a>
          </div>
        </AnimatedSection>

        {/* Trust signals */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span>✓ Free initial consultation</span>
            <span>✓ No long-term lock-in</span>
            <span>✓ Response within 24 hours</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
