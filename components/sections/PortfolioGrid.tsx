"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Spark Taxation",
    location: "Australia",
    description:
      "Professional taxation and business advisory firm helping individuals and SMBs navigate the Australian tax system — strategic tax planning, annual returns, and financial growth consulting.",
    tags: ["WordPress", "Tax Advisory", "Finance"],
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    category: "Professional",
    icon: "💰",
    url: "https://sparktaxation.com.au/",
  },
  {
    title: "City South Brantford",
    location: "Brantford, ON, Canada",
    description:
      "Local Italian-style eatery in Brantford known for fresh-made daily dough, signature and build-your-own pizzas, gluten-free options, and a full online ordering system for delivery and pickup.",
    tags: ["WordPress", "Online Ordering", "Local Business"],
    gradient: "from-red-500 via-orange-500 to-red-600",
    category: "Lifestyle",
    icon: "🍕",
    url: "https://citysouthbrantford.ca/",
  },
  {
    title: "A1 Cabinets Design",
    location: "Australia",
    description:
      "20+ year Australian custom joinery company offering full-service kitchen renovations, custom wardrobes, TV units, and decorative wall panels — from design consultation to professional installation.",
    tags: ["WordPress", "Portfolio", "Home Improvement"],
    gradient: "from-amber-600 via-yellow-600 to-amber-700",
    category: "Lifestyle",
    icon: "🪵",
    url: "https://a1cabinetsdesign.com.au/",
  },
  {
    title: "Benton Dental Clinic",
    location: "Kitchener, ON, Canada",
    description:
      "Full-service dental clinic offering preventative, restorative, and emergency dental care for all ages using modern technology, with online booking and personalized treatment plans.",
    tags: ["WordPress", "Booking System", "Healthcare"],
    gradient: "from-sky-400 via-cyan-500 to-blue-600",
    category: "Healthcare",
    icon: "🦷",
    url: "https://bentondentalclinic.ca/",
  },
  {
    title: "Mr & Mrs Salon",
    location: "Papakura, Auckland, NZ",
    description:
      "Premium unisex salon in Auckland offering professional hair styling, colouring, threading, facials, and nail care in a luxurious atmosphere using salon-grade products.",
    tags: ["WordPress", "Beauty", "Appointments"],
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    category: "Lifestyle",
    icon: "✂️",
    url: "https://mmsalon.co.nz/",
  },
  {
    title: "Kidventure",
    location: "Hamilton, New Zealand",
    description:
      "OSCAR-approved out-of-school care provider in Hamilton delivering structured before/after school and holiday programs — arts, sports, and educational activities for children of working parents.",
    tags: ["WordPress", "Childcare", "OSCAR Program"],
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    category: "Lifestyle",
    icon: "🧒",
    url: "https://www.kidventure.co.nz/",
  },
  {
    title: "Randhawa Trucking Inc.",
    location: "Cambridge, ON, Canada",
    description:
      "Cambridge-based freight transport company offering FTL/LTL shipments, temperature-controlled transport for perishables, and specialized window & door hauling across Canada with real-time tracking.",
    tags: ["WordPress", "Fleet Management", "Freight"],
    gradient: "from-slate-600 via-gray-600 to-slate-800",
    category: "Logistics & Trade",
    icon: "🚛",
    url: "https://randhawatruckinginc.ca/",
  },
  {
    title: "Brits Protection Security",
    location: "London, UK",
    description:
      "Elite London security firm staffed by former military and special forces personnel, providing global close protection, residential security, secure transportation, and defensive driving training.",
    tags: ["WordPress", "Security Services", "Corporate"],
    gradient: "from-gray-700 via-slate-700 to-gray-900",
    category: "Professional",
    icon: "🛡️",
    url: "https://britsprotectionsecurity.com/",
  },
  {
    title: "Baz Logistics",
    location: "United Kingdom",
    description:
      "UK-based logistics company offering flexible freight coordination, warehousing support, and supply chain management solutions to help commercial clients navigate modern distribution challenges.",
    tags: ["WordPress", "Supply Chain", "Freight"],
    gradient: "from-blue-700 via-indigo-700 to-violet-700",
    category: "Logistics & Trade",
    icon: "📦",
    url: "https://bazlogistics.co.uk/",
  },
  {
    title: "Dentistry at Queenston",
    location: "Stoney Creek, ON, Canada",
    description:
      "Family dental practice led by Dr. Karamjot Kaur offering pediatric dentistry, cosmetic treatments, direct insurance billing, and evening/weekend appointments for the Stoney Creek community.",
    tags: ["WordPress", "Booking", "Family Dentistry"],
    gradient: "from-teal-400 via-cyan-500 to-sky-500",
    category: "Healthcare",
    icon: "🦷",
    url: "https://dentistryatqueenston.ca/",
  },
  {
    title: "Felicitous Nutrition",
    location: "Noida, India",
    description:
      "Health and fitness e-commerce store selling authentic protein powders, mass gainers, creatine, and amino acids from Indian and international brands — a trusted hub for 360-degree fitness nutrition.",
    tags: ["Shopify", "E-Commerce", "Health & Fitness"],
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    category: "Lifestyle",
    icon: "💪",
    url: "https://felicitousnutrition.com/",
  },
  {
    title: "Prime Plus Hardware",
    location: "Kamloops, BC, Canada",
    description:
      "Independent hardware and safety supply store in Kamloops serving DIY homeowners and contractors with hand tools, air tools, fasteners, hard-to-find items, and industrial safety gear.",
    tags: ["WordPress", "Local Business", "Tools & Safety"],
    gradient: "from-red-600 via-orange-600 to-amber-600",
    category: "Logistics & Trade",
    icon: "🔧",
    url: "https://primeplushardware.com/",
  },
  {
    title: "Deep Brar — Real Estate",
    location: "Kamloops, BC, Canada",
    description:
      "Century 21 Realtor portal for Kamloops and the Thompson-Okanagan region — property listings, mortgage calculators, home evaluation forms, and first-time buyer guides all in one place.",
    tags: ["WordPress", "Real Estate", "MLS"],
    gradient: "from-emerald-500 via-green-600 to-emerald-700",
    category: "Professional",
    icon: "🏠",
    url: "https://deepbrar.ca/",
  },
];

const categories = ["All", "Professional", "Healthcare", "Lifestyle", "Logistics & Trade"];

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
      transition={{ duration: 0.25, delay: index * 0.04, ease: "easeOut" }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group relative bg-white rounded-3xl overflow-hidden border border-[#d2d2d7] shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full"
        >
          {/* Gradient placeholder header */}
          <div
            className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-end p-6 overflow-hidden`}
          >
            {/* Grid pattern */}
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

            {/* Location */}
            <span className="relative text-white/70 text-xs font-medium">
              {project.location}
            </span>
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
      </a>
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
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                active === cat
                  ? "bg-[#0071e3] text-white shadow-md"
                  : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]"
              )}
            >
              {cat}
              <span className={cn(
                "ml-2 text-xs rounded-full px-1.5 py-0.5",
                active === cat ? "bg-white/20 text-white" : "bg-[#d2d2d7] text-[#6e6e73]"
              )}>
                {cat === "All" ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
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
