import Link from "next/link";
import { restaurantInfo } from "@/lib/menu-data";

const timeline = [
  {
    year: "2009",
    title: "Deschiderea restaurantului",
    desc: "Thobass&Co deschide porțile în centrul Rădăuților, lângă sinagoga evreiască, cu o viziune simplă: mâncare gustoasă, sănătoasă și rapidă.",
  },
  {
    year: "2012",
    title: "Pizza Gigant",
    desc: "Lansăm pizza gigantică de 0.5 mp — prima și singura din Rădăuți. Clienții pot alege 4 arome diferite pe același aluat.",
  },
  {
    year: "2015",
    title: "Înghețata naturală",
    desc: "Boss-ul și fiul său Mihai (Ița) încep să prepare înghețată artizanală cu rețete proprii, folosind doar ingrediente naturale.",
  },
  {
    year: "2018",
    title: "Bere la Cizmă",
    desc: "Introducem berea servită la cizmă de sticlă de 2 litri — o tradiție germană care a devenit o atracție în sine pentru clienții noștri.",
  },
  {
    year: "2021",
    title: "Comenzi online",
    desc: "Lansăm platforma de comenzi online pentru a servi mai ușor clienții fideli și pentru a ajunge la noi familii din Rădăuți.",
  },
  {
    year: "2024+",
    title: "Continuăm tradiția",
    desc: "15+ ani de prezență în Rădăuți. Continuăm să îmbunătățim meniul, să descoperim rețete noi și să vă aducem experiențe culinare memorabile.",
  },
];

const features = [
  { icon: "🛵", label: "Livrare la domiciliu" },
  { icon: "🥡", label: "Take-away" },
  { icon: "☀️", label: "Terasă exterioară" },
  { icon: "📶", label: "Wi-Fi gratuit" },
  { icon: "📅", label: "Rezervări" },
  { icon: "♿", label: "Acces persoane cu dizabilități" },
  { icon: "🅿️", label: "Parcare" },
  { icon: "💳", label: "Plată cu cardul" },
  { icon: "📺", label: "TV" },
];

export default function DesprePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#1a1612] border-b border-[#2d2318] py-16 px-4 sm:px-6 text-center">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
          Povestea noastră
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
          Despre Thobass&amp;Co
        </h1>
        <p className="text-[#f5f0e8]/50 max-w-xl mx-auto">
          O poveste despre pasiune, familie și mâncare bună — de peste 15 ani în inima Rădăuților.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Story */}
        <div className="mb-16">
          <div className="bg-[#1a1612] border border-[#2d2318] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c9a84c] to-transparent" />
            <blockquote className="text-[#f5f0e8]/70 text-lg leading-relaxed italic mb-4">
              &ldquo;{restaurantInfo.description}&rdquo;
            </blockquote>
            <div className="text-[#c9a84c] font-semibold text-sm">
              — Thobass&amp;Co, Rădăuți
            </div>
          </div>
        </div>

        {/* Motto */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-[#c9a84c]/30 rounded-2xl bg-[#c9a84c]/5">
            <span className="text-4xl">⭐</span>
            <div>
              <p className="text-[#f5f0e8]/40 text-xs uppercase tracking-widest mb-1">Motto</p>
              <p className="text-[#c9a84c] text-2xl font-bold italic">
                &ldquo;{restaurantInfo.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#f5f0e8] mb-8 text-center">
            Cronologia noastră
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#2d2318]" />
            <div className="space-y-8">
              {timeline.map((event, i) => (
                <div
                  key={event.year}
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-[#c9a84c] border-2 border-[#0f0d0a] -translate-x-1/2 mt-1" />

                  {/* Content */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                    }`}
                  >
                    <div className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-4 hover:border-[#c9a84c]/20 transition-all">
                      <span className="text-[#c9a84c] text-sm font-bold">{event.year}</span>
                      <h3 className="text-[#f5f0e8] font-semibold mt-0.5 mb-2">{event.title}</h3>
                      <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cuisine types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#f5f0e8] mb-8 text-center">
            Bucătăria noastră
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                flag: "🇮🇹",
                name: "Italiană",
                desc: "Pizza artizanală, paste proaspete, tiramisu, ingrediente mediteraneene",
              },
              {
                flag: "🇬🇷",
                name: "Grecească",
                desc: "Gyros, salată grecească, tzatziki, carne marinată cu ierburi",
              },
              {
                flag: "🇩🇪",
                name: "Germană",
                desc: "Schnitzel vienez, bere la cizmă, mici, preparate tradiționale",
              },
            ].map((cuisine) => (
              <div
                key={cuisine.name}
                className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-6 text-center hover:border-[#c9a84c]/30 transition-all"
              >
                <div className="text-5xl mb-3">{cuisine.flag}</div>
                <h3 className="text-[#c9a84c] font-bold text-lg mb-2">{cuisine.name}</h3>
                <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{cuisine.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#f5f0e8] mb-8 text-center">
            Facilitățile noastre
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-[#1a1612] border border-[#2d2318] rounded-lg p-3"
              >
                <span className="text-xl">{f.icon}</span>
                <span className="text-[#f5f0e8]/70 text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#f5f0e8]/50 mb-6">
            Vino să ne vizitezi sau comandă acum — cu plăcere!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/comanda"
              className="px-6 py-3 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded hover:bg-[#a8832d] transition-colors"
            >
              Comandă online
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#c9a84c]/40 text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-colors"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
