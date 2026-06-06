import Link from "next/link";
import { restaurantInfo } from "@/lib/menu-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0805] border-t border-[#2d2318]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0f0d0a] font-bold text-sm">
                T
              </div>
              <span className="text-xl font-bold">
                <span className="text-[#c9a84c]">Thobass</span>
                <span className="text-[#f5f0e8]/70">&amp;Co</span>
              </span>
            </div>
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed mb-4 max-w-xs">
              {restaurantInfo.description}
            </p>
            <p className="text-[#c9a84c] text-sm italic font-medium">
              &ldquo;{restaurantInfo.tagline}&rdquo;
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2d2318] flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2d2318] flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">
              Navigare
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Acasă" },
                { href: "/meniu", label: "Meniu" },
                { href: "/comanda", label: "Comandă online" },
                { href: "/despre", label: "Despre noi" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#f5f0e8]/50 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <div>
                <p className="text-[#f5f0e8]/50 text-sm">{restaurantInfo.address}</p>
              </div>
              <div>
                {restaurantInfo.phone.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block text-[#f5f0e8]/50 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
              <div>
                <p className="text-[#f5f0e8]/50 text-xs">
                  Luni – Vineri: {restaurantInfo.hours.weekdays}
                </p>
                <p className="text-[#f5f0e8]/50 text-xs">
                  Sâmbătă – Duminică: {restaurantInfo.hours.weekend}
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="divider-gold mt-8 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#f5f0e8]/30">
          <p>&copy; {currentYear} Thobass&amp;Co. Toate drepturile rezervate.</p>
          <p>Rădăuți, județul Suceava, România</p>
        </div>
      </div>
    </footer>
  );
}
