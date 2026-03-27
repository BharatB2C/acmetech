"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6 pt-16"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob-1 absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #0071e3 0%, #5ac8fa 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob-2 absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #5e5ce6 0%, #bf5af2 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="blob-3 absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #30d158 0%, #0071e3 60%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0071e3] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
            Canadian Software Company
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-[#1d1d1f] leading-[1.05] tracking-[-0.03em] mb-6"
        >
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-[#5ac8fa]">
            Scalable
          </span>
          <br />
          Digital Products
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl md:text-2xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Custom Software, Shopify Apps, and Enterprise Solutions built for startups and growing businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-200 text-base shadow-lg shadow-blue-200"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-[#1d1d1f] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white active:scale-[0.98] transition-all duration-200 text-base"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6e6e73]"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#0071e3", "#5e5ce6", "#bf5af2", "#30d158"].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ background: color }}
                />
              ))}
            </div>
            <span>50+ happy clients</span>
          </div>
          <span className="hidden sm:block text-[#d2d2d7]">|</span>
          <span>100+ projects delivered</span>
          <span className="hidden sm:block text-[#d2d2d7]">|</span>
          <span>5+ years experience</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6e6e73]"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
