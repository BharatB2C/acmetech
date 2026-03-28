import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="w-full bg-[#f5f5f7] border-b border-[#d2d2d7]">
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm"
      >
        <Link
          href={items[0]?.href ?? "/"}
          className="flex items-center gap-1.5 text-[#0071e3] font-medium hover:underline shrink-0"
        >
          <ArrowLeft size={14} strokeWidth={2.5} />
          {items[0]?.label}
        </Link>

        {items.slice(1).map((item, i) => (
          <span key={i} className="flex items-center gap-2 min-w-0">
            <span className="text-[#d2d2d7] select-none">/</span>
            {i === items.length - 2 ? (
              <span className="text-[#1d1d1f] font-semibold truncate">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-[#0071e3] hover:underline truncate"
              >
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
