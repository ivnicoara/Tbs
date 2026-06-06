import Link from "next/link";
import { menuCategories, restaurantInfo } from "@/lib/menu-data";

const stats = [
  { value: "15+", label: "ani de experiență" },
  { value: "0.5 mp", label: "pizza gigantică" },
  { value: "4.5★", label: "rating mediu" },
  { value: "426+", label: "recenzii" },
];

const highlights = [
  {
    emoji: "🍕",
    title: "Pizza Artizanală",
    desc: "Rețetă proprie, unică în Rădăuți. Pizza pregătită cu grijă de echipa noastră, cu ingrediente proaspete.",
  },
  {
    emoji: "🍦",
    title: "Înghețată Naturală",
    desc: "Preparată chiar de boss alături de fiul Mihai. Rețete proprii cu ingrediente naturale, fără arome artificiale.",
  },
  {
    emoji: "🍺",
    title: "Bere la Cizmă",
    desc: "Cea mai mare gamă de bere din Rădăuți. Și da — o servim și la cizmă de 2 litri pentru o experiență unică!",
  },
  {
    emoji: "🏛️",
    title: "15 Ani Tradiție",
    desc: "Unul dintre cele mai vechi restaurante din Rădăuți, în inima orașului. Bucătărie italiană, grecească și germană.",
  },
];

export default function HomePage() {
  const popularItems = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.popular))
    .slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0d0a] via-[#1a1200] to-[#0f0d0a]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#c9a84c]/8 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-medium tracking-widest uppercase mb-8">
            <span>★</span>
            <span>Rădăuți — de peste 15 ani</span>
            <span>★</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-gold-gradient">Thobass</span>
            <span className="text-[#f5f0e8]/80">&amp;Co</span>
          </h1>

          <p className="text-[#c9a84c] text-xl sm:text-2xl italic font-medium mb-6">
            &ldquo;Gustos, sănătos și rapid&rdquo;
          </p>

          <p className="text-[#f5f0e8]/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Pizza artizanală, înghețată naturală și cea mai mare gamă de bere din Rădăuți.
            Bine ai venit la masa noastră.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/comanda"
              className="px-8 py-3.5 bg-[#c9a84c] text-[#0f0d0a] font-bold text-base rounded hover:bg-[#a8832d] transition-colors shadow-lg shadow-[#c9a84c]/20"
            >
              Comandă acum
            </Link>
            <Link
              href="/meniu"
              className="px-8 py-3.5 border border-[#c9a84c]/40 text-[#c9a84c] font-medium text-base rounded hover:bg-[#c9a84c]/10 transition-colors"
            >
              Vezi meniul
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-[#f5f0e8]/40">
            <span>📍 Strada 1 Mai Nr. 2, Rădăuți</span>
            <span className="hidden sm:inline">•</span>
            <span>🕐 10:00 – 22:30</span>
            <span className="hidden sm:inline">•</span>
            <span>📞 0230 564 001</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-[#c9a84c]/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#c9a84c]/60" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a1612] border-y border-[#2d2318]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#f5f0e8]/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
              De ce Thobass&amp;Co
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f0e8]">
              Experiența noastră,{" "}
              <span className="text-gold-gradient">povestea ta</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-6 hover:border-[#c9a84c]/30 hover:bg-[#1f1b14] transition-all group"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-[#f5f0e8] font-semibold text-lg mb-2 group-hover:text-[#c9a84c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a0805]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
              Cele mai apreciate
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f0e8]">
              Favorite clienților
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-5 hover:border-[#c9a84c]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#f5f0e8]">{item.name}</h3>
                      {item.tags?.includes("special") && (
                        <span className="text-xs px-1.5 py-0.5 bg-[#c9a84c]/20 text-[#c9a84c] rounded font-medium">
                          Special
                        </span>
                      )}
                    </div>
                    <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{item.description}</p>
                    {item.weight && (
                      <p className="text-[#f5f0e8]/30 text-xs mt-1">{item.weight}</p>
                    )}
                  </div>
                  <div className="text-[#c9a84c] font-bold text-lg whitespace-nowrap">
                    {item.price} lei
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/meniu"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a84c]/40 text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-colors"
            >
              Vezi meniul complet
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIAL - Pizza Gigant */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/5 via-transparent to-[#c9a84c]/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">🍕</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Pizza <span className="text-gold-gradient">Gigant</span>
          </h2>
          <p className="text-[#f5f0e8]/60 text-xl mb-4">
            0.5 metri pătrați de pizza artizanală
          </p>
          <p className="text-[#f5f0e8]/40 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Cea mai mare pizza din Rădăuți! Alege 4 arome diferite și bucură-te de o
            experiență culinară de neuitat împreună cu prietenii sau familia.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl">
            <span className="text-[#c9a84c] font-bold text-2xl">180 lei</span>
            <span className="text-[#f5f0e8]/40">·</span>
            <span className="text-[#f5f0e8]/50 text-sm">~2.5 kg · 4 arome la alegere</span>
          </div>
          <div className="mt-6">
            <Link
              href="/comanda"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded hover:bg-[#a8832d] transition-colors"
            >
              Comandă Pizza Gigant
            </Link>
          </div>
        </div>
      </section>

      {/* INFO BAND */}
      <section className="py-16 px-4 sm:px-6 bg-[#1a1612] border-t border-[#2d2318]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-[#c9a84c] font-semibold mb-2">Locație</h3>
              <p className="text-[#f5f0e8]/50 text-sm">{restaurantInfo.address}</p>
              <a
                href="https://maps.google.com/?q=Thobass+Co+Radauti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] text-xs hover:underline mt-2 inline-block"
              >
                Deschide în Maps →
              </a>
            </div>
            <div>
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="text-[#c9a84c] font-semibold mb-2">Program</h3>
              <p className="text-[#f5f0e8]/50 text-sm">
                Luni – Vineri: {restaurantInfo.hours.weekdays}
              </p>
              <p className="text-[#f5f0e8]/50 text-sm">
                Weekend: {restaurantInfo.hours.weekend}
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-[#c9a84c] font-semibold mb-2">Rezervări</h3>
              {restaurantInfo.phone.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="block text-[#f5f0e8]/50 hover:text-[#c9a84c] text-sm transition-colors"
                >
                  {p}
                </a>
              ))}
              <Link
                href="/contact"
                className="text-[#c9a84c] text-xs hover:underline mt-2 inline-block"
              >
                Formular de contact →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
