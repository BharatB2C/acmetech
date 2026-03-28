import {
  Globe,
  ShoppingBag,
  Search,
  Shield,
  Zap,
  Smartphone,
  HeartHandshake,
  Puzzle,
  RefreshCw,
  BarChart2,
  Package,
  ArrowUpDown,
  Layers,
  Database,
  Plug,
  TrendingUp,
  FileText,
  Users,
  Clock,
  Receipt,
  Calendar,
  MessageSquare,
  DollarSign,
  Bell,
  Activity,
  GitBranch,
  Code2,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { type ServiceFeature } from "@/lib/data/services";
import { type ProductFeature } from "@/lib/data/products";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingBag,
  Search,
  Shield,
  Zap,
  Smartphone,
  HeartHandshake,
  Puzzle,
  RefreshCw,
  BarChart2,
  Package,
  ArrowUpDown,
  Layers,
  Database,
  Plug,
  TrendingUp,
  FileText,
  Users,
  Clock,
  Receipt,
  Calendar,
  MessageSquare,
  DollarSign,
  Bell,
  Activity,
  GitBranch,
  Code2,
};

interface FeatureGridProps {
  features: (ServiceFeature | ProductFeature)[];
  columns?: 2 | 3;
  label?: string;
  title?: string;
  subtitle?: string;
  accentBg?: string;
  accentIcon?: string;
}

export default function FeatureGrid({
  features,
  columns = 3,
  label = "What's Included",
  title = "Everything You Need",
  subtitle,
  accentBg = "bg-blue-50",
  accentIcon = "text-blue-600",
}: FeatureGridProps) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        <div className={`mt-14 grid ${gridClass} gap-5`}>
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Globe;
            return (
              <AnimatedSection key={feature.title} delay={i * 0.07}>
                <div className="group p-7 rounded-3xl border border-[#d2d2d7] bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                  <div
                    className={`w-12 h-12 rounded-2xl ${accentBg} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} className={accentIcon} />
                  </div>
                  <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
