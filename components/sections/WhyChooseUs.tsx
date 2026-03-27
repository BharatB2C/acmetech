import { Code2, Layers, Zap, HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pillars = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Every line of code we write is readable, maintainable, and follows industry best practices. No shortcuts, no technical debt.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "We design systems that grow with your business — from 100 users to 100,000 users, without rewrites.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile workflows and clear communication mean you get to market faster without sacrificing quality.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. We're your long-term technology partner — available when you need us.",
    color: "bg-green-50 text-green-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Why Acme"
          title="Why Choose Us"
          subtitle="We're not just developers — we're your technology partners committed to building things that last."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="p-7 rounded-3xl border border-[#d2d2d7] bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center mb-5`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
