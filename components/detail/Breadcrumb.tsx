import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-6 pt-8 pb-0"
    >
      <div className="flex items-center gap-1.5 text-sm">
        {/* Back link — first item */}
        <Link
          href={items[0]?.href ?? "/"}
          className="inline-flex items-center gap-1 text-[#6e6e73] hover:text-[#0071e3] transition-colors font-medium"
        >
          <ChevronLeft size={14} />
          {items[0]?.label}
        </Link>

        {items.slice(1).map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight size={14} className="text-[#d2d2d7]" />
            {i === items.length - 2 ? (
              <span className="text-[#1d1d1f] font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-[#6e6e73] hover:text-[#0071e3] transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
