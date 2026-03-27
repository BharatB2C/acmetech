import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <AnimatedSection delay={0}>
          <span
            className={cn(
              "inline-block text-xs font-semibold uppercase tracking-widest mb-3",
              dark ? "text-blue-400" : "text-[#0071e3]"
            )}
          >
            {label}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.05}>
        <h2
          className={cn(
            "font-bold tracking-tight leading-tight",
            "text-4xl md:text-5xl lg:text-[52px]",
            dark ? "text-white" : "text-[#1d1d1f]"
          )}
        >
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.1}>
          <p
            className={cn(
              "mt-4 text-lg md:text-xl leading-relaxed",
              dark ? "text-gray-400" : "text-[#6e6e73]"
            )}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
