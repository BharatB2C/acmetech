"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface DetailHeroProps {
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  emoji?: string;
  accentColor?: string;
  cta1?: { label: string; href: string };
  cta2?: { label: string; href: string };
  variant?: "service" | "product";
}

export default function DetailHero({
  name,
  tagline,
  description,
  gradient,
  emoji,
  cta1 = { label: "Get a Quote", href: "/#contact" },
  cta2 = { label: "View Portfolio", href: "/#portfolio" },
  variant = "service",
}: DetailHeroProps) {
  return (
    <section className="bg-[#1d1d1f] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {variant === "service" ? "Our Services" : "Our Products"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight mb-4"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 font-medium mb-4"
            >
              {tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href={cta1.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 text-base"
              >
                {cta1.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={cta2.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 active:scale-[0.98] transition-all duration-200 text-base"
              >
                {variant === "product" ? <Play size={16} /> : null}
                {cta2.label}
              </Link>
            </motion.div>
          </div>

          {/* Decorative visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div
              className={`relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl overflow-hidden`}
            >
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hero-grid)" />
                </svg>
              </div>

              {/* Central icon/emoji */}
              <div className="text-center text-white relative z-10">
                {emoji ? (
                  <div className="text-8xl mb-4">{emoji}</div>
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-white/20 mx-auto mb-4" />
                )}
                <p className="text-xl font-bold opacity-90">{name}</p>
              </div>

              {/* Floating decorative cards */}
              <div className="absolute -bottom-2 -left-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
                <p className="text-white text-xs font-semibold">Acme Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
