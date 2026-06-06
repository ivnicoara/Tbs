"use client";

import { useState } from "react";
import Link from "next/link";
import { menuCategories } from "@/lib/menu-data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered =
    activeCategory === "all"
      ? menuCategories
      : menuCategories.filter((c) => c.id === activeCategory);

  const searched = searchQuery.trim()
    ? filtered.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : filtered;

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#1a1612] border-b border-[#2d2318] py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
            Meniu complet
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">
            Ce pregătim azi
          </h1>
          <p className="text-[#f5f0e8]/50 max-w-xl mx-auto">
            Bucătărie italiană, grecească și germană. Ingrediente proaspete, rețete proprii,
            preparate cu pasiune din 2009.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Caută în meniu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/30 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:border-[#c9a84c]/50 text-sm"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f5f0e8]/30 text-base">
            🔍
          </span>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          <button
            onClick={() => setActiveCategory("all")}
            className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-[#c9a84c] text-[#0f0d0a]"
                : "bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8]/60 hover:border-[#c9a84c]/30 hover:text-[#c9a84c]"
            }`}
          >
            Toate
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#c9a84c] text-[#0f0d0a]"
                  : "bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8]/60 hover:border-[#c9a84c]/30 hover:text-[#c9a84c]"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu sections */}
        {searched.length === 0 ? (
          <div className="text-center py-16 text-[#f5f0e8]/40">
            <div className="text-4xl mb-4">🔍</div>
            <p>Niciun produs găsit pentru &ldquo;{searchQuery}&rdquo;</p>
          </div>
        ) : (
          <div className="space-y-12">
            {searched.map((category) => (
              <div key={category.id}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-[#f5f0e8]">{category.name}</h2>
                    <p className="text-[#f5f0e8]/40 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="divider-gold mb-6" />

                {/* Items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-[#1a1612] border rounded-xl p-4 hover:bg-[#1f1b14] transition-all ${
                        item.popular
                          ? "border-[#c9a84c]/20"
                          : "border-[#2d2318]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 mb-1">
                            <h3 className="font-semibold text-[#f5f0e8] text-sm">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <span className="text-xs px-1.5 py-0.5 bg-[#c9a84c]/15 text-[#c9a84c] rounded-full font-medium">
                                ★ Popular
                              </span>
                            )}
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                                  tag === "vegetarian"
                                    ? "bg-green-900/30 text-green-400"
                                    : tag === "picant"
                                    ? "bg-red-900/30 text-red-400"
                                    : tag === "special"
                                    ? "bg-purple-900/30 text-purple-400"
                                    : "bg-[#2d2318] text-[#f5f0e8]/50"
                                }`}
                              >
                                {tag === "vegetarian"
                                  ? "🌿 Vegetarian"
                                  : tag === "picant"
                                  ? "🌶️ Picant"
                                  : tag === "special"
                                  ? "⭐ Special"
                                  : tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">
                            {item.description}
                          </p>
                          {item.weight && (
                            <p className="text-[#f5f0e8]/25 text-xs mt-1">{item.weight}</p>
                          )}
                        </div>
                        <div className="text-[#c9a84c] font-bold text-base whitespace-nowrap">
                          {item.price} lei
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order CTA */}
        <div className="mt-16 text-center bg-[#1a1612] border border-[#2d2318] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#f5f0e8] mb-2">
            Ți-a plăcut ce ai văzut?
          </h3>
          <p className="text-[#f5f0e8]/50 mb-6">
            Comandă online sau sună-ne direct — livrăm în Rădăuți!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/comanda"
              className="px-6 py-3 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded hover:bg-[#a8832d] transition-colors"
            >
              Comandă online
            </Link>
            <a
              href="tel:0230564001"
              className="px-6 py-3 border border-[#c9a84c]/40 text-[#c9a84c] rounded hover:bg-[#c9a84c]/10 transition-colors"
            >
              📞 0230 564 001
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
