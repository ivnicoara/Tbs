"use client";

import { useState } from "react";
import { restaurantInfo } from "@/lib/menu-data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "rezervare",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#1a1612] border-b border-[#2d2318] py-16 px-4 sm:px-6 text-center">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
          Suntem aproape
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f0e8] mb-4">Contact</h1>
        <p className="text-[#f5f0e8]/50 max-w-md mx-auto">
          Rezervări, întrebări sau sugestii — suntem bucuroși să te auzim.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">
                Informații
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-[#f5f0e8]/40 text-xs mb-0.5">Adresă</p>
                    <p className="text-[#f5f0e8]/80 text-sm">{restaurantInfo.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-[#f5f0e8]/40 text-xs mb-0.5">Telefon</p>
                    {restaurantInfo.phone.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="block text-[#f5f0e8]/80 hover:text-[#c9a84c] text-sm transition-colors"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="text-[#f5f0e8]/40 text-xs mb-0.5">Email</p>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-[#f5f0e8]/80 hover:text-[#c9a84c] text-sm transition-colors"
                    >
                      {restaurantInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl mt-0.5">🕐</span>
                  <div>
                    <p className="text-[#f5f0e8]/40 text-xs mb-0.5">Program</p>
                    <p className="text-[#f5f0e8]/80 text-sm">
                      Luni – Vineri: {restaurantInfo.hours.weekdays}
                    </p>
                    <p className="text-[#f5f0e8]/80 text-sm">
                      Weekend: {restaurantInfo.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">
                Social Media
              </h2>
              <div className="flex gap-3">
                <a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1612] border border-[#2d2318] rounded-lg text-[#f5f0e8]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all text-sm"
                >
                  <span>📷</span>
                  Instagram
                </a>
                <a
                  href={restaurantInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1612] border border-[#2d2318] rounded-lg text-[#f5f0e8]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/30 transition-all text-sm"
                >
                  <span>👥</span>
                  Facebook
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h2 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">
                Hartă
              </h2>
              <div className="bg-[#1a1612] border border-[#2d2318] rounded-xl overflow-hidden">
                <div className="h-40 flex items-center justify-center flex-col gap-2 text-[#f5f0e8]/30">
                  <span className="text-3xl">🗺️</span>
                  <span className="text-xs">Strada 1 Mai Nr. 2, Rădăuți</span>
                </div>
                <div className="p-3 border-t border-[#2d2318]">
                  <a
                    href="https://maps.google.com/?q=Thobass+Co+Radauti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[#c9a84c] text-sm hover:underline"
                  >
                    Deschide în Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-6">
              Trimite un mesaj
            </h2>

            {submitted ? (
              <div className="bg-[#1a1612] border border-green-800/50 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-[#f5f0e8] font-bold text-xl mb-2">
                  Mesaj trimis cu succes!
                </h3>
                <p className="text-[#f5f0e8]/50 text-sm">
                  Îți vom răspunde în cel mai scurt timp posibil. Mulțumim!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                      Nume *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                      placeholder="07xx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                    Subiect
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8]/80 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                  >
                    <option value="rezervare">Rezervare masă</option>
                    <option value="comanda">Comandă specială</option>
                    <option value="feedback">Feedback</option>
                    <option value="parteneriat">Parteneriat</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                    Mesaj *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50 resize-none"
                    placeholder="Scrie-ne mesajul tău..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded-lg hover:bg-[#a8832d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Se trimite..." : "Trimite mesajul"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
