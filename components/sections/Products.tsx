"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Users, Database } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const products = [
  {
    icon: FileText,
    emoji: "📄",
    name: "OnlineFreeInvoice",
    tagline: "Invoicing & Business Management SaaS",
    description:
      "A complete SaaS platform for freelancers and small businesses — invoicing, HR management, project tracking, expense reports, and team collaboration in one powerful app.",
    features: ["Invoice Generation", "HR Management", "Project Tracking", "Expense Reports"],
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/products/onlinefreeinvoice",
  },
  {
    icon: Users,
    emoji: "👥",
    name: "TeamConnect",
    tagline: "Shift Management & Team Communication",
    description:
      "A comprehensive team management platform for scheduling shifts, coordinating staff, tracking attendance, and keeping teams connected — built for businesses with flexible workforces.",
    features: ["Shift Scheduling", "Team Chat", "Attendance Tracking", "Payroll Integration"],
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/products/teamconnect",
  },
  {
    icon: Database,
    emoji: "🔗",
    name: "Datum51",
    tagline: "Data Integration & Hookpull System",
    description:
      "A powerful data integration platform that connects your disparate systems via webhooks and pull-based data pipelines — enabling real-time data flow across your entire tech stack.",
    features: ["Webhook Automation", "Data Pipelines", "API Connections", "Real-time Sync"],
    gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/products/datum51",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Products"
          title="Software We've Built"
          subtitle="Beyond client work — we build and ship our own products. Tools designed to solve real business problems."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <AnimatedSection key={product.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group h-full flex flex-col rounded-3xl border border-[#d2d2d7] bg-white overflow-hidden"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${product.gradient} p-6 text-white`}>
                    <div className="text-3xl mb-3">{product.emoji}</div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-sm opacity-80 mt-1">{product.tagline}</p>
                  </div>

                  {/* Body */}
                  <div className="flex-1 p-6 flex flex-col">
                    <p className="text-[#6e6e73] text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                          <span className="text-[#1d1d1f] font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={product.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#d2d2d7] text-[#1d1d1f] text-sm font-semibold rounded-full hover:border-[#0071e3] hover:text-[#0071e3] transition-all duration-200 self-start"
                    >
                      View Product
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
