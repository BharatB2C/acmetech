"use client";

import { useState } from "react";
import Image from "next/image";
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
    category: "Professional",
    image: "/spark_taxation.png",
    url: "https://sparktaxation.com.au/",
  },
  {
    title: "City South Brantford",
    location: "Brantford, ON, Canada",
    description:
      "Local Italian-style eatery in Brantford known for fresh-made daily dough, signature and build-your-own pizzas, gluten-free options, and a full online ordering system for delivery and pickup.",
    tags: ["WordPress", "Online Ordering", "Local Business"],
    category: "Lifestyle",
    image: "/city_south.png",
    url: "https://citysouthbrantford.ca/",
  },
  {
    title: "A1 Cabinets Design",
    location: "Australia",
    description:
      "20+ year Australian custom joinery company offering full-service kitchen renovations, custom wardrobes, TV units, and decorative wall panels — from design consultation to professional installation.",
    tags: ["WordPress", "Portfolio", "Home Improvement"],
    category: "Lifestyle",
    image: "/cabinet.png",
    url: "https://a1cabinetsdesign.com.au/",
  },
  {
    title: "Benton Dental Clinic",
    location: "Kitchener, ON, Canada",
    description:
      "Full-service dental clinic offering preventative, restorative, and emergency dental care for all ages using modern technology, with online booking and personalized treatment plans.",
    tags: ["WordPress", "Booking System", "Healthcare"],
    category: "Healthcare",
    image: "/DEntal_clinic.png",
    url: "https://bentondentalclinic.ca/",
  },
  {
    title: "Mr & Mrs Salon",
    location: "Papakura, Auckland, NZ",
    description:
      "Premium unisex salon in Auckland offering professional hair styling, colouring, threading, facials, and nail care in a luxurious atmosphere using salon-grade products.",
    tags: ["WordPress", "Beauty", "Appointments"],
    category: "Lifestyle",
    image: "/mr_mrs_salon.png",
    url: "https://mmsalon.co.nz/",
  },
  {
    title: "Kidventure",
    location: "Hamilton, New Zealand",
    description:
      "OSCAR-approved out-of-school care provider in Hamilton delivering structured before/after school and holiday programs — arts, sports, and educational activities for children of working parents.",
    tags: ["WordPress", "Childcare", "OSCAR Program"],
    category: "Lifestyle",
    image: "/kidventure.png",
    url: "https://www.kidventure.co.nz/",
  },
  {
    title: "Randhawa Trucking Inc.",
    location: "Cambridge, ON, Canada",
    description:
      "Cambridge-based freight transport company offering FTL/LTL shipments, temperature-controlled transport for perishables, and specialized window & door hauling across Canada with real-time tracking.",
    tags: ["WordPress", "Fleet Management", "Freight"],
    category: "Logistics & Trade",
    image: "/Randhawa_Trucking_inc.png",
    url: "https://randhawatruckinginc.ca/",
  },
  {
    title: "Brits Protection Security",
    location: "London, UK",
    description:
      "Elite London security firm staffed by former military and special forces personnel, providing global close protection, residential security, secure transportation, and defensive driving training.",
    tags: ["WordPress", "Security Services", "Corporate"],
    category: "Professional",
    image: "/british_security.png",
    url: "https://britsprotectionsecurity.com/",
  },
  {
    title: "Baz Logistics",
    location: "United Kingdom",
    description:
      "UK-based logistics company offering flexible freight coordination, warehousing support, and supply chain management solutions to help commercial clients navigate modern distribution challenges.",
    tags: ["WordPress", "Supply Chain", "Freight"],
    category: "Logistics & Trade",
    image: "/Baz_logistic_(2).png",
    url: "https://bazlogistics.co.uk/",
  },
  {
    title: "Dentistry at Queenston",
    location: "Stoney Creek, ON, Canada",
    description:
      "Family dental practice led by Dr. Karamjot Kaur offering pediatric dentistry, cosmetic treatments, direct insurance billing, and evening/weekend appointments for the Stoney Creek community.",
    tags: ["WordPress", "Booking", "Family Dentistry"],
    category: "Healthcare",
    image: "/Dentistry.png",
    url: "https://dentistryatqueenston.ca/",
  },
  {
    title: "Felicitous Nutrition",
    location: "Noida, India",
    description:
      "Health and fitness e-commerce store selling authentic protein powders, mass gainers, creatine, and amino acids from Indian and international brands — a trusted hub for 360-degree fitness nutrition.",
    tags: ["Shopify", "E-Commerce", "Health & Fitness"],
    category: "Lifestyle",
    image: "/feclitious_nutrition.png",
    url: "https://felicitousnutrition.com/",
  },
  {
    title: "Prime Plus Hardware",
    location: "Kamloops, BC, Canada",
    description:
      "Independent hardware and safety supply store in Kamloops serving DIY homeowners and contractors with hand tools, air tools, fasteners, hard-to-find items, and industrial safety gear.",
    tags: ["WordPress", "Local Business", "Tools & Safety"],
    category: "Logistics & Trade",
    image: "/Prime_plus_hardware.png",
    url: "https://primeplushardware.com/",
  },
  {
    title: "Deep Brar — Real Estate",
    location: "Kamloops, BC, Canada",
    description:
      "Century 21 Realtor portal for Kamloops and the Thompson-Okanagan region — property listings, mortgage calculators, home evaluation forms, and first-time buyer guides all in one place.",
    tags: ["WordPress", "Real Estate", "MLS"],
    category: "Professional",
    image: "/deep_brar.png",
    url: "https://deepbrar.ca/",
  },
  {
    title: "InnProfessionals",
    location: "United States",
    description:
      "Hospitality management SaaS platform with booking, staff scheduling, and revenue tracking built on WordPress and a custom REST API — helping hotels and inns streamline operations.",
    tags: ["WordPress", "REST API", "React", "PostgreSQL"],
    category: "Professional",
    image: "/innprofessional.png",
    url: "#",
  },
  {
    title: "Headless Shopify Store",
    location: "United States",
    description:
      "Next.js + Shopify Storefront API headless build for a fashion brand delivering sub-1-second load times, a premium browsing experience, and full SEO control.",
    tags: ["Shopify", "Next.js", "TypeScript", "Tailwind"],
    category: "E-Commerce",
    image: "/headless-shopify-store.png",
    url: "#",
  },
  {
    title: "Shopify E-Commerce Store",
    location: "Canada",
    description:
      "Full-featured Shopify store with a custom Liquid theme, curated product catalogue, optimized checkout, and integrated payment gateways for a seamless customer journey.",
    tags: ["Shopify", "Liquid", "E-Commerce"],
    category: "E-Commerce",
    image: "/shopify-ecoomerce-store.png",
    url: "#",
  },
  {
    title: "Shopify Custom App",
    location: "Canada",
    description:
      "Custom Shopify app enabling merchants to sync inventory across multiple warehouses in real time, with analytics dashboards and automated low-stock alerts.",
    tags: ["Shopify API", "React", "Node.js"],
    category: "E-Commerce",
    image: "/shopify-custom -app.png",
    url: "#",
  },
  {
    title: "Enterprise CRM",
    location: "Canada",
    description:
      "Bespoke CRM system with pipeline tracking, two-way email integration, team collaboration tools, and advanced reporting dashboards built for a mid-market sales team.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    category: "Professional",
    image: "/enterprise-crm.png",
    url: "#",
  },
  {
    title: "Real Estate Portal",
    location: "Canada",
    description:
      "Custom property listing portal with advanced search filters, MLS integration, agent profiles, mortgage calculators, and a lead capture system built on WordPress.",
    tags: ["WordPress", "PHP", "ACF", "REST API"],
    category: "Professional",
    image: "/real-estate-portal.png",
    url: "#",
  },
  {
    title: "Professional Services Landing Page",
    location: "Canada",
    description:
      "Single-page static site for a consulting firm — hero section, service highlights, social proof, and a contact form — loading in under 0.6 seconds from a global CDN.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    category: "Professional",
    image: "/professional-services-landing-page.png",
    url: "#",
  },
  {
    title: "Restaurant & Café Website",
    location: "Canada",
    description:
      "Five-page static website for a local restaurant group featuring the full menu, photo gallery, online reservations link, Google Maps integration, and mobile-first design.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    category: "Lifestyle",
    image: "/restaurrent&cafe-website.png",
    url: "#",
  },
  {
    title: "Datum 51",
    location: "Canada",
    description:
      "Data analytics and business intelligence platform with custom reporting dashboards, interactive data visualizations, and automated insight delivery for enterprise clients.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Analytics"],
    category: "Professional",
    image: "/datum-51.png",
    url: "#",
  },
];

const categories = ["All", "Professional", "E-Commerce", "Healthcare", "Lifestyle", "Logistics & Trade"];

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
          {/* Project image */}
          <div className="relative h-48 overflow-hidden bg-[#f5f5f7]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

            {/* Location */}
            <span className="absolute bottom-4 left-5 z-10 text-white/80 text-xs font-medium drop-shadow">
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
