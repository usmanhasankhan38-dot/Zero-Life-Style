'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight, Watch, Headphones, Zap, Shield, Truck, HelpCircle, Building } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function NavigationDrawer() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useShop();
  const [openAccordion, setOpenAccordion] = useState<string | null>('watches');

  if (!isMobileMenuOpen) return null;

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-[390px] bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-black text-white border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border border-white flex items-center justify-center font-black text-sm">
              Z
            </div>
            <span className="font-extrabold tracking-widest text-base">ZERO</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-full hover:bg-neutral-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Promo Banner in Drawer */}
        <div className="p-4 bg-neutral-900">
          <a
            href="https://zerolifestyle.co/pages/11-11-sale"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-xl overflow-hidden relative group border border-neutral-800"
          >
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-3.5 text-white flex items-center justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 bg-black/40 text-[10px] uppercase font-bold tracking-wider rounded mb-1">
                  11.11 Mega Sale
                </span>
                <p className="font-bold text-sm">Mehngay Shauq Ka Shortcut</p>
                <p className="text-xs text-red-100">Up to 80% Off Everything</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Visual Category Cards (3 columns) */}
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Popular Categories</p>
          <div className="grid grid-cols-3 gap-2.5">
            <a
              href="#smart-watches"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <Watch className="w-5 h-5 text-black" />
              </div>
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Smart Watches</span>
            </a>

            <a
              href="#earbuds"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <Headphones className="w-5 h-5 text-black" />
              </div>
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Earbuds</span>
            </a>

            <a
              href="#powerbanks"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-[11px] font-bold text-gray-900 leading-tight">Power Banks</span>
            </a>
          </div>
        </div>

        {/* Accordion Menu Items */}
        <div className="flex-1 py-2">
          {/* Smart Watches Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleAccordion('watches')}
              className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-bold tracking-tight text-gray-900">SMART WATCHES</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  openAccordion === 'watches' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openAccordion === 'watches' && (
              <div className="bg-gray-50/70 px-5 py-2.5 space-y-2 text-[13px]">
                <a
                  href="#smart-watches"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-700 hover:text-black font-semibold"
                >
                  All Smart Watches
                </a>
                <a
                  href="#smart-watches"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Luxury Collection
                </a>
                <a
                  href="#smart-watches"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  AMOLED Series
                </a>
                <a
                  href="#smart-watches"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Calling Series
                </a>
                <a
                  href="#smart-watches"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Sports & Fitness Collection
                </a>
              </div>
            )}
          </div>

          {/* Earbuds Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => toggleAccordion('earbuds')}
              className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-bold tracking-tight text-gray-900">ZERO EARBUDS</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  openAccordion === 'earbuds' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openAccordion === 'earbuds' && (
              <div className="bg-gray-50/70 px-5 py-2.5 space-y-2 text-[13px]">
                <a
                  href="#earbuds"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-700 hover:text-black font-semibold"
                >
                  All Earbuds & Zbuds
                </a>
                <a
                  href="#earbuds"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Gaming Earbuds (Arcade Series)
                </a>
                <a
                  href="#earbuds"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Active Noise Cancellation (ANC)
                </a>
                <a
                  href="#earbuds"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-gray-600 hover:text-black"
                >
                  Wireless & Clear Calling Earbuds
                </a>
              </div>
            )}
          </div>

          {/* Direct Navigation Links */}
          <div className="py-2">
            <a
              href="#powerbanks"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 flex items-center justify-between text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>Power Banks</span>
              <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded font-bold">NEW</span>
            </a>
            <a
              href="#new-launches"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 flex items-center justify-between text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>New Launches</span>
              <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-bold">HOT</span>
            </a>
            <a
              href="https://zerolifestyle.co/pages/11-11-sale"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 flex items-center justify-between text-sm font-semibold text-red-600 hover:bg-red-50"
            >
              <span>11.11 Mega Sale</span>
              <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-bold">80% OFF</span>
            </a>
          </div>

          <div className="border-t border-gray-100 my-2 pt-2">
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2.5 flex items-center gap-3 text-[13px] text-gray-600 hover:text-black"
            >
              <Truck className="w-4 h-4 text-gray-400" />
              <span>Track Your Order</span>
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2.5 flex items-center gap-3 text-[13px] text-gray-600 hover:text-black"
            >
              <Shield className="w-4 h-4 text-gray-400" />
              <span>Warranty Registration</span>
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2.5 flex items-center gap-3 text-[13px] text-gray-600 hover:text-black"
            >
              <Building className="w-4 h-4 text-gray-400" />
              <span>Corporate Inquiries</span>
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2.5 flex items-center gap-3 text-[13px] text-gray-600 hover:text-black"
            >
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <span>FAQs & Support</span>
            </a>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
          <p className="font-medium text-gray-700">Official Brand Helpline</p>
          <p className="mt-0.5">support@zerolifestyle.co</p>
          <p className="mt-2 text-[11px] text-gray-400">© 2024 Zero Lifestyle. Pakistan</p>
        </div>
      </div>
    </div>
  );
}
