"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const technologies = [
  { name: "React", emoji: "⚛️", color: "bg-blue-50 border-blue-200" },
  { name: "Next.js", emoji: "▲", color: "bg-gray-50 border-gray-200" },
  { name: "Node.js", emoji: "🟢", color: "bg-green-50 border-green-200" },
  { name: "TypeScript", emoji: "🔷", color: "bg-blue-50 border-blue-200" },
  { name: "PHP", emoji: "🐘", color: "bg-purple-50 border-purple-200" },
  { name: "Laravel", emoji: "🔴", color: "bg-red-50 border-red-200" },
  { name: "MySQL", emoji: "🗄️", color: "bg-orange-50 border-orange-200" },
  { name: "PostgreSQL", emoji: "🐘", color: "bg-blue-50 border-blue-200" },
  { name: "Shopify API", emoji: "🛍️", color: "bg-green-50 border-green-200" },
  { name: "REST APIs", emoji: "🔌", color: "bg-gray-50 border-gray-200" },
  { name: "AWS", emoji: "☁️", color: "bg-yellow-50 border-yellow-200" },
  { name: "WordPress", emoji: "📝", color: "bg-blue-50 border-blue-200" },
  { name: "Docker", emoji: "🐳", color: "bg-cyan-50 border-cyan-200" },
  { name: "Git", emoji: "🔀", color: "bg-orange-50 border-orange-200" },
  { name: "GraphQL", emoji: "◈", color: "bg-pink-50 border-pink-200" },
  { name: "Redis", emoji: "🔴", color: "bg-red-50 border-red-200" },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Technology"
          title="Our Tech Stack"
          subtitle="We work with modern, battle-tested technologies to build fast, reliable, and scalable products."
        />

        <div ref={ref} className="mt-14 flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border ${tech.color} bg-white cursor-default`}
              >
                <span className="text-lg leading-none">{tech.emoji}</span>
                <span className="text-sm font-semibold text-[#1d1d1f]">{tech.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
