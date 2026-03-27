"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface StatProps {
  end: number;
  suffix: string;
  label: string;
}

function AnimatedStat({ end, suffix, label }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className="text-4xl md:text-5xl font-bold text-white tabular-nums">
        {count}{suffix}
      </span>
    </div>
  );
}

const stats = [
  { end: 100, suffix: "+", label: "Projects Delivered" },
  { end: 50, suffix: "+", label: "Happy Clients" },
  { end: 5, suffix: "+", label: "Years Experience" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#1d1d1f] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
            Trusted by startups &amp; growing businesses across Canada
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="flex flex-col items-center gap-2 sm:px-8">
              <AnimatedStat end={stat.end} suffix={stat.suffix} label={stat.label} />
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Logo / client trust text */}
        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Startup Co.", "GrowthLab", "TechVentures", "RetailPro", "DigitalFirst"].map((name) => (
              <span key={name} className="text-gray-300 font-semibold text-sm tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
