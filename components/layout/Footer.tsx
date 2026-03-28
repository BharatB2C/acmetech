import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  services: [
    { label: "WordPress Development", href: "/services/wordpress" },
    { label: "Shopify Development", href: "/services/shopify" },
    { label: "Custom Development", href: "/services/custom-development" },
    { label: "SaaS Development", href: "/services/custom-development" },
  ],
  products: [
    { label: "OnlineFreeInvoice", href: "/products/onlinefreeinvoice" },
    { label: "TeamConnect", href: "/products/teamconnect" },
    { label: "Datum51", href: "/products/datum51" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1d1d1f] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0071e3] flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <span className="font-semibold text-white">Acme Technologies</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building scalable digital products for startups and growing businesses across Canada and beyond.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-[#0071e3] shrink-0" />
                <span>Canada</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-[#0071e3] shrink-0" />
                <a href="mailto:hello@acmetechnologies.ca" className="hover:text-white transition-colors">
                  hello@acmetechnologies.ca
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-[#0071e3] shrink-0" />
                <a href="tel:+1-800-ACME" className="hover:text-white transition-colors">
                  +1 (800) ACME-TECH
                </a>
              </div>
            </div>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "GitHub", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "X", href: "#" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors text-xs font-bold"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Acme Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
