"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "InnProfessionals",
    description:
      "A full-featured SaaS platform for hospitality professionals — booking management, staff scheduling, and revenue tracking in one unified dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    category: "SaaS",
    icon: "💼",
  },
  {
    title: "Shopify Inventory App",
    description:
      "Custom Shopify Plus app enabling merchants to sync inventory across multiple warehouses with real-time analytics and automated reorder triggers.",
    tags: ["Shopify API", "React", "Node.js", "Redis"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    category: "Shopify",
    icon: "🛍️",
  },
  {
    title: "Enterprise CRM",
    description:
      "A multi-tenant CRM system with custom workflow automation, role-based access, pipeline tracking, and email integration for a mid-size enterprise.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    gradient: "from-purple-500 via-violet-500 to-purple-700",
    category: "SaaS",
    icon: "📊",
  },
  {
    title: "Artisan E-Commerce",
    description:
      "High-volume WooCommerce store with custom product configurator, tiered pricing, B2B portal, and advanced filtering for 10,000+ SKUs.",
    tags: ["WordPress", "WooCommerce", "PHP", "Stripe"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    category: "WordPress",
    icon: "🛒",
  },
  {
    title: "TeamConnect App",
    description:
      "Shift management and team communication app for retail and hospitality — scheduling, attendance tracking, and payroll integration built mobile-first.",
    tags: ["React Native", "Firebase", "Node.js", "AWS"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    category: "Mobile",
    icon: "👥",
  },
  {
    title: "Datum51 Dashboard",
    description:
      "Real-time data integration dashboard with webhook orchestration, 500+ connectors, pipeline monitoring, and developer API for enterprise data teams.",
    tags: ["React", "Go", "Kafka", "Kubernetes"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    category: "SaaS",
    icon: "🔗",
  },
];

const categories = ["All", "SaaS", "Shopify", "WordPress", "Mobile"];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative bg-white rounded-3xl overflow-hidden border border-[#d2d2d7] shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full"
      >
        {/* Gradient header */}
        <div
          className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-end p-6 overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-p-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-p-${index})`} />
            </svg>
          </div>
          <div className="absolute top-5 left-6 text-4xl">{project.icon}</div>
          <div className="absolute top-5 right-5">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
              {project.category}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
              <ArrowUpRight size={20} className="text-[#1d1d1f]" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                active === cat
                  ? "bg-[#0071e3] text-white shadow-md"
                  : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] cursor-pointer"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#6e6e73] py-16">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
