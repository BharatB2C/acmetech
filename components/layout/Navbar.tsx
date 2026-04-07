"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Static Website Creation", href: "/services/static-website" },
  { label: "WordPress Development", href: "/services/wordpress" },
  { label: "Shopify Development", href: "/services/shopify" },
  { label: "Custom Development", href: "/services/custom-development" },
];

const products = [
  { label: "Inn Professionals", href: "/products/inn-professionals", desc: "Invoicing SaaS" },
  { label: "TeamConnect", href: "/products/teamconnect", desc: "Shift Management" },
  { label: "Datum51", href: "/products/datum51", desc: "Data System" },
];

interface DropdownProps {
  items: { label: string; href: string; desc?: string }[];
  isOpen: boolean;
  currentPath: string;
}

function Dropdown({ items, isOpen, currentPath }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl bg-white border border-[#d2d2d7] shadow-2xl overflow-hidden z-50"
        >
          {items.map((item) => {
            const active = currentPath === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col px-4 py-3 transition-colors group",
                  active ? "bg-[#eff6ff]" : "hover:bg-[#f5f5f7]"
                )}
              >
                <span
                  className={cn(
                    "text-sm font-semibold transition-colors",
                    active ? "text-[#0071e3]" : "text-[#1d1d1f] group-hover:text-[#0071e3]"
                  )}
                >
                  {item.label}
                </span>
                {item.desc && (
                  <span className="text-xs text-[#6e6e73] mt-0.5">{item.desc}</span>
                )}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const isServicesActive = pathname.startsWith("/services");
  const isProductsActive = pathname.startsWith("/products");

  const navLinkClass = (href: string) =>
    cn(
      "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150",
      pathname === href
        ? "text-[#0071e3] bg-[#eff6ff]"
        : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
    );

  return (
    <>
      {/* Backdrop for dropdowns */}
      {openDropdown && (
        <div className="fixed inset-0 z-30" onClick={closeAll} />
      )}

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#d2d2d7]/60 shadow-sm"
            : "bg-white/70 backdrop-blur-md"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 cursor-pointer" onClick={closeAll}>
            <img src="/logo.svg" alt="Acme Technologies" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer",
                  isServicesActive || openDropdown === "services"
                    ? "text-[#0071e3] bg-[#eff6ff]"
                    : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                )}
              >
                Services
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    openDropdown === "services" && "rotate-180"
                  )}
                />
              </button>
              <Dropdown items={services} isOpen={openDropdown === "services"} currentPath={pathname} />
            </div>

            {/* Products dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer",
                  isProductsActive || openDropdown === "products"
                    ? "text-[#0071e3] bg-[#eff6ff]"
                    : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                )}
              >
                Products
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    openDropdown === "products" && "rotate-180"
                  )}
                />
              </button>
              <Dropdown items={products} isOpen={openDropdown === "products"} currentPath={pathname} />
            </div>

            <Link href="/portfolio" className={navLinkClass("/portfolio")} onClick={closeAll}>
              Portfolio
            </Link>

            <Link href="/contact" className={navLinkClass("/contact")} onClick={closeAll}>
              Contact
            </Link>

            <Link
              href="/get-started"
              className="ml-3 px-5 py-2 bg-[#0071e3] text-white text-sm font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.97] transition-all duration-150 cursor-pointer"
              onClick={closeAll}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#1d1d1f] hover:bg-[#eff6ff] hover:text-[#0071e3] transition-colors cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-[#d2d2d7]/60"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                <Link
                  href="/"
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    pathname === "/" ? "text-[#0071e3] bg-[#eff6ff]" : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                  )}
                  onClick={closeAll}
                >
                  Home
                </Link>
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mt-2">
                  Services
                </p>
                {services.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={cn(
                      "px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                      pathname === s.href ? "text-[#0071e3] bg-[#eff6ff]" : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                    )}
                    onClick={closeAll}
                  >
                    {s.label}
                  </Link>
                ))}
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#6e6e73] mt-2">
                  Products
                </p>
                {products.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    className={cn(
                      "px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                      pathname === p.href ? "text-[#0071e3] bg-[#eff6ff]" : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                    )}
                    onClick={closeAll}
                  >
                    {p.label}
                    <span className="ml-2 text-xs text-[#6e6e73]">{p.desc}</span>
                  </Link>
                ))}
                <Link
                  href="/portfolio"
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    pathname === "/portfolio" ? "text-[#0071e3] bg-[#eff6ff]" : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                  )}
                  onClick={closeAll}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    pathname === "/contact" ? "text-[#0071e3] bg-[#eff6ff]" : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#eff6ff]"
                  )}
                  onClick={closeAll}
                >
                  Contact
                </Link>
                <Link
                  href="/get-started"
                  className="mt-2 px-5 py-3 bg-[#0071e3] text-white text-sm font-semibold rounded-full hover:bg-[#0077ed] transition-colors text-center cursor-pointer"
                  onClick={closeAll}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
