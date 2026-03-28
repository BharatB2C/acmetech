import type { Metadata } from "next";
import GetStartedForm from "@/components/sections/GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started | Acme Technologies Inc.",
  description:
    "Start your project with Acme Technologies. Tell us what you need and we'll prepare a free custom proposal within 24 hours.",
  alternates: { canonical: "https://acmetechnologies.ca/get-started" },
  openGraph: {
    title: "Get Started | Acme Technologies Inc.",
    description: "Tell us what you need and we'll prepare a free custom proposal within 24 hours.",
    url: "https://acmetechnologies.ca/get-started",
  },
};

const trust = [
  { emoji: "🎯", label: "Free Consultation", desc: "No cost, no obligation" },
  { emoji: "📋", label: "Custom Proposal", desc: "Tailored to your project" },
  { emoji: "⚡", label: "24hr Response", desc: "We move fast" },
];

export default function GetStartedPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#1d1d1f] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#0071e3] text-sm font-semibold uppercase tracking-widest mb-5">
            Start Your Project
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Let&apos;s build something
            <br />
            <span className="text-[#0071e3]">great together.</span>
          </h1>
          <p className="text-[#a1a1a6] text-xl leading-relaxed">
            Answer a few questions and we&apos;ll prepare a custom proposal — completely
            free, no strings attached.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#f5f5f7] border-b border-[#d2d2d7] py-6 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {trust.map(({ emoji, label, desc }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
              <span className="text-2xl">{emoji}</span>
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f]">{label}</p>
                <p className="text-xs text-[#6e6e73]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#f5f5f7] rounded-3xl p-8 md:p-10 border border-[#d2d2d7]">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-1">Project Details</h2>
            <p className="text-sm text-[#6e6e73] mb-8">
              The more detail you share, the better we can tailor our proposal.
            </p>
            <GetStartedForm />
          </div>
        </div>
      </section>
    </main>
  );
}
