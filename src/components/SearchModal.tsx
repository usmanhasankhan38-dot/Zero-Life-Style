'use client';

import React, { useState, useMemo } from 'react';
import { useShop } from '@/context/ShopContext';
import { BEST_SELLERS, BEST_OFFERS, JUST_LAUNCHED_WATCHES, JUST_LAUNCHED_EARBUDS, Product } from '@/data/mockData';
import { Search, X, ArrowRight, ShoppingBag } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useShop();
  const [searchTerm, setSearchTerm] = useState('');

  const allProducts = useMemo(() => {
    const map = new Map<string, Product>();
    [...BEST_SELLERS, ...BEST_OFFERS, ...JUST_LAUNCHED_WATCHES, ...JUST_LAUNCHED_EARBUDS].forEach((p) => {
      map.set(p.id, p);
    });
    return Array.from(map.values());
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return allProducts.slice(0, 4);
    const term = searchTerm.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.tagline.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }, [searchTerm, allProducts]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-200"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50/60">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search smartwatches, earbuds, powerbanks..."
            className="w-full bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-semibold text-gray-400 hover:text-black"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Suggestions */}
        <div className="p-4 sm:p-6 max-h-[460px] overflow-y-auto">
          <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            <span>{searchTerm ? `Results for "${searchTerm}"` : 'Trending Right Now'}</span>
            <span>{filteredProducts.length} items</span>
          </div>

          <div className="space-y-3">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 p-1 flex items-center justify-center shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">{p.name}</h5>
                    <p className="text-xs text-gray-500">{p.tagline}</p>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-extrabold text-xs text-black">
                        Rs.{p.salePrice.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-gray-400 line-through">
                        Rs.{p.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-bold text-red-600">{p.discount}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(p);
                    setIsSearchOpen(false);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Buy</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Tip: Press ESC to close search</span>
          <span className="font-semibold text-black">Official Zero Lifestyle Catalog</span>
        </div>
      </div>
    </div>
  );
}
