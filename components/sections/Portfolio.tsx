"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "Spark Taxation",
    description:
      "Professional taxation and business advisory firm in Australia — tax planning, annual returns, and financial growth strategies for individuals and SMBs.",
    tags: ["WordPress", "Tax Advisory", "Finance"],
    category: "Professional Services",
    image: "/spark_taxation.png",
    featured: true,
    url: "https://sparktaxation.com.au/",
  },
  {
    title: "Randhawa Trucking Inc.",
    description:
      "Full-featured trucking website for a Cambridge, Ontario freight company — FTL/LTL shipping, temperature-controlled transport, and specialized hauling across Canada.",
    tags: ["WordPress", "Fleet Management", "Freight"],
    category: "Logistics",
    image: "/Randhawa_Trucking_inc.png",
    featured: false,
    url: "https://randhawatruckinginc.ca/",
  },
  {
    title: "Dentistry at Queenston",
    description:
      "Family dental practice in Stoney Creek, Ontario — online booking, direct insurance billing, evening and weekend appointments, and a full service menu for all ages.",
    tags: ["WordPress", "Booking", "Healthcare"],
    category: "Healthcare",
    image: "/Dentistry.png",
    featured: false,
    url: "https://dentistryatqueenston.ca/",
  },
  {
    title: "Felicitous Nutrition",
    description:
      "Health and fitness Shopify store in India selling authentic protein powders, mass gainers, and supplements from Indian and international brands.",
    tags: ["Shopify", "E-Commerce", "Health & Fitness"],
    category: "E-Commerce",
    image: "/feclitious_nutrition.png",
    featured: true,
    url: "https://felicitousnutrition.com/",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative bg-white rounded-3xl overflow-hidden border border-[#d2d2d7] shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      >
        {/* Project image */}
        <div className="relative h-52 overflow-hidden bg-[#f5f5f7]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Category badge */}
          <div className="absolute top-5 right-5 z-10">
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center z-10"
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
      </a>
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
            Want to see all 13 of our client projects?
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1d1d1f] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all duration-200 cursor-pointer"
          >
            View Full Portfolio
            <ArrowUpRight size={16} />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
