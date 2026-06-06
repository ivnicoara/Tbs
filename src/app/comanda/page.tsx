"use client";

import { useState } from "react";
import { menuCategories, type MenuItem } from "@/lib/menu-data";

type CartItem = MenuItem & { quantity: number; categoryName: string };

export default function ComandaPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [orderType, setOrderType] = useState<"livrare" | "ridicare">("livrare");
  const [step, setStep] = useState<"menu" | "checkout" | "success">("menu");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const addToCart = (item: MenuItem, categoryName: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1, categoryName }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c));
      }
      return prev.filter((c) => c.id !== id);
    });
  };

  const getItemQuantity = (id: number) =>
    cart.find((c) => c.id === id)?.quantity ?? 0;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const activeMenuCategory = menuCategories.find((c) => c.id === activeCategory)!;

  if (step === "success") {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-[#f5f0e8] mb-4">
            Comanda a fost plasată!
          </h1>
          <p className="text-[#f5f0e8]/50 mb-2">
            Mulțumim, <strong className="text-[#f5f0e8]/80">{name}</strong>!
          </p>
          <p className="text-[#f5f0e8]/50 mb-8">
            Te vom contacta la <strong className="text-[#f5f0e8]/80">{phone}</strong> pentru confirmare.
            Timp estimat de livrare: <strong className="text-[#c9a84c]">30–45 minute</strong>.
          </p>
          <div className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-4 mb-8 text-left">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
              Sumar comandă
            </p>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm text-[#f5f0e8]/70 py-1">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>{item.price * item.quantity} lei</span>
              </div>
            ))}
            <div className="divider-gold mt-3 mb-3" />
            <div className="flex justify-between font-bold text-[#f5f0e8]">
              <span>Total</span>
              <span className="text-[#c9a84c]">{total} lei</span>
            </div>
          </div>
          <button
            onClick={() => {
              setCart([]);
              setStep("menu");
              setName("");
              setPhone("");
              setAddress("");
              setNotes("");
            }}
            className="px-6 py-3 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded hover:bg-[#a8832d] transition-colors"
          >
            Comandă din nou
          </button>
        </div>
      </div>
    );
  }

  if (step === "checkout") {
    return (
      <div className="min-h-screen pt-20">
        <div className="bg-[#1a1612] border-b border-[#2d2318] py-8 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setStep("menu")}
              className="flex items-center gap-2 text-[#c9a84c] text-sm mb-4 hover:underline"
            >
              ← Înapoi la meniu
            </button>
            <h1 className="text-3xl font-bold text-[#f5f0e8]">Finalizare comandă</h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
          {/* Order type */}
          <div className="flex gap-3 mb-6">
            {(["livrare", "ridicare"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all ${
                  orderType === type
                    ? "bg-[#c9a84c] text-[#0f0d0a]"
                    : "bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8]/60 hover:border-[#c9a84c]/30"
                }`}
              >
                {type === "livrare" ? "🛵 Livrare la domiciliu" : "🏃 Ridicare din local"}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">Nume *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                placeholder="Numele tău"
              />
            </div>
            <div>
              <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">Telefon *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                placeholder="07xx xxx xxx"
              />
            </div>
            {orderType === "livrare" && (
              <div>
                <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                  Adresă de livrare *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50"
                  placeholder="Strada, număr, bloc, apartament..."
                />
              </div>
            )}
            <div>
              <label className="block text-[#f5f0e8]/50 text-xs mb-1.5">
                Observații (opțional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8] placeholder-[#f5f0e8]/20 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c9a84c]/50 resize-none"
                placeholder="Alergii, preferințe, instrucțiuni speciale..."
              />
            </div>
          </div>

          {/* Cart summary */}
          <div className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-4 mb-6">
            <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-3">
              Produse selectate
            </p>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm py-2 border-b border-[#2d2318] last:border-0">
                <span className="text-[#f5f0e8]/70">
                  {item.quantity}x {item.name}
                </span>
                <span className="text-[#f5f0e8]/50">{item.price * item.quantity} lei</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-[#f5f0e8] mt-3 pt-2">
              <span>Total</span>
              <span className="text-[#c9a84c] text-lg">{total} lei</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (!name || !phone || (orderType === "livrare" && !address)) {
                alert("Te rugăm completează toate câmpurile obligatorii.");
                return;
              }
              setStep("success");
            }}
            className="w-full py-3.5 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded-lg hover:bg-[#a8832d] transition-colors text-base"
          >
            Plasează comanda — {total} lei
          </button>
          <p className="text-center text-[#f5f0e8]/30 text-xs mt-3">
            Plata se face la livrare / la ridicare
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#1a1612] border-b border-[#2d2318] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-1">
            Comandă online
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f0e8]">
            Ce poftești azi?
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-8">
          {/* Menu */}
          <div className="flex-1 min-w-0">
            {/* Category tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#c9a84c] text-[#0f0d0a]"
                      : "bg-[#1a1612] border border-[#2d2318] text-[#f5f0e8]/60 hover:border-[#c9a84c]/30 hover:text-[#c9a84c]"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Category title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{activeMenuCategory.emoji}</span>
              <h2 className="text-xl font-bold text-[#f5f0e8]">{activeMenuCategory.name}</h2>
            </div>

            {/* Items */}
            <div className="space-y-2">
              {activeMenuCategory.items.map((item) => {
                const qty = getItemQuantity(item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-[#1a1612] border border-[#2d2318] rounded-xl p-4 hover:border-[#c9a84c]/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="font-semibold text-[#f5f0e8] text-sm">{item.name}</h3>
                          {item.popular && (
                            <span className="text-xs px-1.5 py-0.5 bg-[#c9a84c]/15 text-[#c9a84c] rounded-full">
                              ★
                            </span>
                          )}
                        </div>
                        <p className="text-[#f5f0e8]/40 text-xs">{item.description}</p>
                        {item.weight && (
                          <p className="text-[#f5f0e8]/25 text-xs mt-0.5">{item.weight}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[#c9a84c] font-bold text-sm">{item.price} lei</span>
                        {qty === 0 ? (
                          <button
                            onClick={() => addToCart(item, activeMenuCategory.name)}
                            className="w-8 h-8 rounded-full bg-[#c9a84c] text-[#0f0d0a] font-bold text-lg hover:bg-[#a8832d] transition-colors flex items-center justify-center"
                          >
                            +
                          </button>
                        ) : (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 rounded-full bg-[#2d2318] text-[#f5f0e8] font-bold hover:bg-[#3d3218] transition-colors flex items-center justify-center text-sm"
                            >
                              −
                            </button>
                            <span className="w-5 text-center text-[#f5f0e8] font-semibold text-sm">
                              {qty}
                            </span>
                            <button
                              onClick={() => addToCart(item, activeMenuCategory.name)}
                              className="w-7 h-7 rounded-full bg-[#c9a84c] text-[#0f0d0a] font-bold hover:bg-[#a8832d] transition-colors flex items-center justify-center text-sm"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart sidebar - desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-[#1a1612] border border-[#2d2318] rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-[#2d2318]">
                <h3 className="font-bold text-[#f5f0e8] flex items-center gap-2">
                  <span>🛒</span>
                  Coșul meu
                  {itemCount > 0 && (
                    <span className="ml-auto text-xs px-2 py-0.5 bg-[#c9a84c] text-[#0f0d0a] rounded-full font-bold">
                      {itemCount}
                    </span>
                  )}
                </h3>
              </div>

              {cart.length === 0 ? (
                <div className="p-6 text-center">
                  <div className="text-4xl mb-2">🍽️</div>
                  <p className="text-[#f5f0e8]/30 text-sm">Coșul e gol</p>
                  <p className="text-[#f5f0e8]/20 text-xs mt-1">Adaugă produse din meniu</p>
                </div>
              ) : (
                <>
                  <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-2 text-sm">
                        <div className="flex-1 min-w-0">
                          <p className="text-[#f5f0e8]/80 truncate">{item.name}</p>
                          <p className="text-[#f5f0e8]/40 text-xs">{item.price} lei/buc</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-5 h-5 rounded bg-[#2d2318] text-[#f5f0e8]/60 hover:bg-[#3d3218] flex items-center justify-center text-xs"
                          >
                            −
                          </button>
                          <span className="w-4 text-center text-[#f5f0e8] text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item, item.categoryName)}
                            className="w-5 h-5 rounded bg-[#c9a84c]/20 text-[#c9a84c] hover:bg-[#c9a84c]/30 flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-[#c9a84c] text-xs font-semibold w-12 text-right">
                          {item.price * item.quantity} lei
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-[#2d2318]">
                    <div className="flex justify-between mb-3">
                      <span className="text-[#f5f0e8]/50 text-sm">Total</span>
                      <span className="text-[#c9a84c] font-bold">{total} lei</span>
                    </div>
                    <button
                      onClick={() => setStep("checkout")}
                      className="w-full py-2.5 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded-lg hover:bg-[#a8832d] transition-colors text-sm"
                    >
                      Comandă acum
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile cart bar */}
      {cart.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#1a1612] border-t border-[#2d2318]">
          <button
            onClick={() => setStep("checkout")}
            className="w-full py-3 bg-[#c9a84c] text-[#0f0d0a] font-bold rounded-xl flex items-center justify-between px-4"
          >
            <span className="bg-[#0f0d0a]/20 text-sm px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
            <span>Finalizează comanda</span>
            <span className="font-bold">{total} lei</span>
          </button>
        </div>
      )}
    </div>
  );
}
