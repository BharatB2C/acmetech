import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { type PricingTier } from "@/lib/data/services";
import { type ProductPricingTier } from "@/lib/data/products";
import Link from "next/link";

type AnyTier = PricingTier | ProductPricingTier;

interface PricingSectionProps {
  tiers: AnyTier[];
  label?: string;
  title?: string;
  subtitle?: string;
}

function PricingCard({ tier, index }: { tier: AnyTier; index: number }) {
  const period = "period" in tier ? tier.period : undefined;

  return (
    <AnimatedSection delay={index * 0.1}>
      <div
        className={`relative h-full flex flex-col rounded-3xl p-8 ${
          tier.highlighted
            ? "bg-[#0071e3] text-white shadow-2xl scale-[1.02]"
            : "bg-white border border-[#d2d2d7]"
        }`}
      >
        {tier.highlighted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-3 py-1 bg-white text-[#0071e3] text-xs font-bold rounded-full shadow">
              Most Popular
            </span>
          </div>
        )}

        <div className="mb-6">
          <h3
            className={`text-lg font-bold mb-1 ${
              tier.highlighted ? "text-white" : "text-[#1d1d1f]"
            }`}
          >
            {tier.name}
          </h3>
          <div className="flex items-baseline gap-1">
            <span
              className={`text-3xl font-bold ${
                tier.highlighted ? "text-white" : "text-[#1d1d1f]"
              }`}
            >
              {tier.price}
            </span>
            {period && (
              <span
                className={`text-sm ${tier.highlighted ? "text-blue-100" : "text-[#6e6e73]"}`}
              >
                {period}
              </span>
            )}
          </div>
          <p
            className={`text-sm mt-2 leading-relaxed ${
              tier.highlighted ? "text-blue-100" : "text-[#6e6e73]"
            }`}
          >
            {tier.description}
          </p>
        </div>

        <ul className="flex-1 space-y-3 mb-8">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <CheckCircle2
                size={16}
                className={`shrink-0 mt-0.5 ${
                  tier.highlighted ? "text-blue-200" : "text-[#0071e3]"
                }`}
              />
              <span
                className={`text-sm ${
                  tier.highlighted ? "text-blue-50" : "text-[#1d1d1f]"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className={`w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
            tier.highlighted
              ? "bg-white text-[#0071e3] hover:bg-blue-50"
              : "border-2 border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white"
          }`}
        >
          {tier.cta}
        </Link>
      </div>
    </AnimatedSection>
  );
}

export default function PricingSection({
  tiers,
  label = "Pricing",
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the plan that fits your needs. All plans include our core quality standards.",
}: PricingSectionProps) {
  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-8 text-center text-sm text-[#6e6e73]">
          All prices in CAD. Custom quotes available for projects outside standard tiers.
          <Link href="/#contact" className="text-[#0071e3] hover:underline ml-1">
            Contact us
          </Link>
          .
        </AnimatedSection>
      </div>
    </section>
  );
}
