import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Acme Technologies Inc.",
  description:
    "Get in touch with the Acme Technologies team. Tell us about your project and we'll get back to you within 24 hours.",
  alternates: { canonical: "https://acmetechnologies.ca/contact" },
  openGraph: {
    title: "Contact Us | Acme Technologies Inc.",
    description: "Tell us about your project and we'll get back to you within 24 hours.",
    url: "https://acmetechnologies.ca/contact",
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@acmetechnologies.ca",
    href: "mailto:hello@acmetechnologies.ca",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) ACME-TECH",
    href: "tel:+18002263832",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Canada (Remote-first)",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri, 9am – 6pm ET",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#f5f5f7] py-20 px-6 border-b border-[#d2d2d7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#0071e3] text-sm font-semibold uppercase tracking-widest mb-5">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] leading-tight mb-5">
            Let&apos;s Talk
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed">
            Tell us about your project. We respond to every inquiry within 24 hours,
            and there&apos;s never any pressure or obligation.
          </p>
        </div>
      </section>

      {/* Two-column content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2">Contact Info</h2>
              <p className="text-[#6e6e73] text-sm leading-relaxed">
                We&apos;re a remote-first team based in Canada. Reach out any way that
                works for you.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-[#0071e3]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#1d1d1f]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Promise card */}
            <div className="rounded-2xl bg-[#f5f5f7] p-5 border border-[#d2d2d7]">
              <p className="text-sm font-bold text-[#1d1d1f] mb-2">Our promise to you</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Response within 24 hours",
                  "Free initial consultation",
                  "No lock-in contracts",
                  "Honest, transparent pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#6e6e73]">
                    <span className="w-4 h-4 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-[#f5f5f7] rounded-3xl p-8 border border-[#d2d2d7]">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-1">Send us a message</h2>
            <p className="text-sm text-[#6e6e73] mb-7">
              Fill out the form and we&apos;ll be in touch shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
