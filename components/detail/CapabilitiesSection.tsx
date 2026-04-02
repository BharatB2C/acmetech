import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { type CapabilityGroup } from "@/lib/data/services";
import Link from "next/link";

interface CapabilitiesSectionProps {
  groups: CapabilityGroup[];
  accentBg: string;
  accentColor: string;
}

export default function CapabilitiesSection({
  groups,
  accentBg,
  accentColor,
}: CapabilitiesSectionProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Also Available"
          title="Need a Bigger Project?"
          subtitle="All of the below is available on a custom quote — tell us what you need and we'll scope it together."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <AnimatedSection key={group.tier} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-[#d2d2d7] bg-white p-8 flex flex-col">
                <div className={`inline-block self-start px-3 py-1 rounded-full ${accentBg} ${accentColor} text-xs font-semibold mb-4`}>
                  {group.tier}
                </div>
                <p className="text-sm text-[#6e6e73] mb-6 leading-relaxed">
                  {group.description}
                </p>
                <ul className="flex-1 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={`shrink-0 mt-0.5 ${accentColor}`}
                      />
                      <span className="text-sm text-[#1d1d1f]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25} className="mt-10">
          <div className="rounded-3xl bg-[#f5f5f7] p-8 text-center">
            <p className="text-base font-semibold text-[#1d1d1f] mb-2">
              Ready to scope your project?
            </p>
            <p className="text-sm text-[#6e6e73] mb-6">
              No obligation. We'll review your requirements and send a detailed quote within 24 hours.
            </p>
            <Link
              href="/get-started"
              className="inline-block px-8 py-3 bg-[#0071e3] text-white text-sm font-semibold rounded-full hover:bg-[#0077ed] transition-all duration-200 active:scale-[0.97]"
            >
              Get a Custom Quote
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
