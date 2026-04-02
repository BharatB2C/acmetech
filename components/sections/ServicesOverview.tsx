"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingBag, Code2, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Professional WordPress websites built for performance, SEO, and conversions. From business sites to full e-commerce platforms.",
    href: "/services/wordpress",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify stores and apps that drive sales. We build tailored shopping experiences and powerful integrations.",
    href: "/services/shopify",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Full-stack SaaS platforms, CRM systems, API integrations, and enterprise software built to scale with your business.",
    href: "/services/custom-development",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="What We Do"
          title="Services Built for Growth"
          subtitle="From your first website to a complete digital ecosystem — we build technology that scales with your ambitions."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group h-full p-8 rounded-3xl border border-[#d2d2d7] bg-white cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}
                  >
                    <Icon size={26} className={service.iconColor} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6e6e73] leading-relaxed text-[15px] mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#d2d2d7] text-[#1d1d1f] text-sm font-semibold rounded-full hover:border-[#0071e3] hover:text-[#0071e3] transition-all duration-200 self-start"
                  >
                    View Service
                    <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
