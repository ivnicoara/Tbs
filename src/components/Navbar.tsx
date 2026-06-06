"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/meniu", label: "Meniu" },
  { href: "/comanda", label: "Comandă" },
  { href: "/despre", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0f0d0a]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#2d2318]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0f0d0a] font-bold text-sm">
              T
            </div>
            <span className="text-xl font-bold tracking-wide">
              <span className="text-[#c9a84c]">Thobass</span>
              <span className="text-[#f5f0e8]/70">&amp;Co</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : "text-[#f5f0e8]/70 hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0230564001"
              className="text-sm text-[#f5f0e8]/60 hover:text-[#c9a84c] transition-colors"
            >
              0230 564 001
            </a>
            <Link
              href="/comanda"
              className="px-4 py-2 bg-[#c9a84c] text-[#0f0d0a] text-sm font-semibold rounded hover:bg-[#a8832d] transition-colors"
            >
              Comandă acum
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#f5f0e8]/80"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-transform origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 pb-4 flex flex-col gap-1 border-t border-[#2d2318] pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2.5 px-3 rounded text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#c9a84c] bg-[#c9a84c]/10"
                  : "text-[#f5f0e8]/70 hover:text-[#c9a84c] hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-[#2d2318]">
            <Link
              href="/comanda"
              className="block w-full text-center py-2.5 bg-[#c9a84c] text-[#0f0d0a] text-sm font-semibold rounded hover:bg-[#a8832d] transition-colors"
            >
              Comandă acum
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
