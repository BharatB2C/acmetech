"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "WordPress Development", href: "#wordpress" },
  { label: "Shopify Development", href: "#shopify" },
  { label: "Custom Development", href: "#custom-dev" },
];

const products = [
  { label: "OnlineFreeInvoice", href: "#products", desc: "Invoicing SaaS" },
  { label: "TeamConnect", href: "#products", desc: "Shift Management" },
  { label: "Datum51", href: "#products", desc: "Data System" },
];

interface DropdownProps {
  items: { label: string; href: string; desc?: string }[];
  isOpen: boolean;
}

function Dropdown({ items, isOpen }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#d2d2d7] shadow-xl overflow-hidden z-50"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col px-4 py-3 hover:bg-[#f5f5f7] transition-colors group"
            >
              <span className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                {item.label}
              </span>
              {item.desc && (
                <span className="text-xs text-[#6e6e73] mt-0.5">{item.desc}</span>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            ? "bg-white/85 backdrop-blur-xl border-b border-[#d2d2d7]/60 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={closeAll}>
            <div className="w-8 h-8 rounded-lg bg-[#0071e3] flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <span className="text-[#1d1d1f] font-semibold text-[15px] hidden sm:block">
              Acme Technologies
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="#hero"
              className="px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors rounded-lg hover:bg-[#f5f5f7]"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  openDropdown === "services"
                    ? "text-[#0071e3] bg-[#f5f5f7]"
                    : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7]"
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
              <Dropdown items={services} isOpen={openDropdown === "services"} />
            </div>

            {/* Products dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("products")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  openDropdown === "products"
                    ? "text-[#0071e3] bg-[#f5f5f7]"
                    : "text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7]"
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
              <Dropdown items={products} isOpen={openDropdown === "products"} />
            </div>

            <Link
              href="#portfolio"
              className="px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors rounded-lg hover:bg-[#f5f5f7]"
              onClick={closeAll}
            >
              Portfolio
            </Link>

            <Link
              href="#contact"
              className="px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors rounded-lg hover:bg-[#f5f5f7]"
              onClick={closeAll}
            >
              Contact
            </Link>

            <Link
              href="#contact"
              className="ml-2 px-5 py-2 bg-[#0071e3] text-white text-sm font-semibold rounded-full hover:bg-[#0077ed] transition-colors"
              onClick={closeAll}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
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
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#d2d2d7]/60"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                <Link
                  href="#hero"
                  className="px-3 py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7] rounded-lg transition-colors"
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
                    className="px-3 py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7] rounded-lg transition-colors"
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
                    className="px-3 py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7] rounded-lg transition-colors"
                    onClick={closeAll}
                  >
                    {p.label}
                    <span className="ml-2 text-xs text-[#6e6e73]">{p.desc}</span>
                  </Link>
                ))}
                <Link
                  href="#portfolio"
                  className="px-3 py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7] rounded-lg transition-colors"
                  onClick={closeAll}
                >
                  Portfolio
                </Link>
                <Link
                  href="#contact"
                  className="px-3 py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] hover:bg-[#f5f5f7] rounded-lg transition-colors"
                  onClick={closeAll}
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  className="mt-2 px-5 py-3 bg-[#0071e3] text-white text-sm font-semibold rounded-full hover:bg-[#0077ed] transition-colors text-center"
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
