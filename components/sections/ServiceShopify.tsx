import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const features = [
  {
    title: "Shopify Store Setup",
    description: "Complete store setup, theme customization, and product catalogue configuration.",
  },
  {
    title: "Shopify App Development",
    description: "Custom Shopify apps to extend your store's capabilities beyond the standard platform.",
  },
  {
    title: "Custom Shopify Integrations",
    description: "Connect your store with ERPs, CRMs, payment gateways, and third-party services.",
  },
  {
    title: "UI/UX Optimization",
    description: "Conversion-focused design improvements to maximize your store's sales performance.",
  },
];

export default function ServiceShopify() {
  return (
    <section id="shopify" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
                Shopify Development
              </span>
              <h2 className="text-4xl md:text-[44px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                E-Commerce That Converts and Scales
              </h2>
              <p className="text-[#6e6e73] text-lg leading-relaxed mb-8">
                We build Shopify experiences that turn visitors into customers. Custom apps, seamless integrations, and performance-tuned storefronts that grow with your business.
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1d1d1f]">{feature.title}</p>
                      <p className="text-sm text-[#6e6e73] mt-0.5">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
              >
                Start a Shopify Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Visual */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-500 to-emerald-700 aspect-[4/3] flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <ShoppingBag size={64} className="mx-auto mb-4 opacity-80" />
                  <p className="text-2xl font-bold opacity-90">Shopify</p>
                  <p className="text-green-200 text-sm mt-1">Development</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                <ShoppingBag size={18} className="text-green-500" />
                <span className="text-sm font-semibold text-[#1d1d1f]">App Partner</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
