"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "InnProfessionals",
    description:
      "A full-featured SaaS platform for hospitality professionals — booking management, staff scheduling, and revenue tracking in one unified dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 via-blue-600 to-indigo-700",
    category: "SaaS Platform",
    icon: "💼",
    featured: true,
  },
  {
    title: "Shopify Custom App",
    description:
      "A custom Shopify app enabling merchants to sync inventory across multiple warehouses with real-time analytics and automated reorder triggers.",
    tags: ["Shopify API", "React", "Node.js"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    category: "Shopify App",
    icon: "🛍️",
    featured: false,
  },
  {
    title: "Enterprise CRM",
    description:
      "A custom CRM system built for a mid-size enterprise — contact management, pipeline tracking, email integration, and team collaboration tools.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    gradient: "from-purple-500 via-violet-500 to-purple-700",
    category: "Custom CRM",
    icon: "📊",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A high-volume e-commerce platform with custom product configurator, tiered pricing, B2B portal, and advanced filtering for 10,000+ SKUs.",
    tags: ["WooCommerce", "PHP", "React", "MySQL"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    category: "E-Commerce",
    icon: "🛒",
    featured: true,
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative bg-white rounded-3xl overflow-hidden border border-[#d2d2d7] shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      >
        {/* Project image / gradient */}
        <div
          className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-end p-6 overflow-hidden`}
        >
          {/* Abstract grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
            </svg>
          </div>

          {/* Icon */}
          <div className="absolute top-5 left-6 text-4xl">{project.icon}</div>

          {/* Category badge */}
          <div className="absolute top-5 right-5">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
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

          {/* Tech tags */}
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
    </AnimatedSection>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Work"
          title="Portfolio"
          subtitle="Real projects, real impact. A selection of digital products we've designed, built, and launched."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <p className="text-[#6e6e73] text-sm mb-4">
            Want to see more of our work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1d1d1f] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all duration-200"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
