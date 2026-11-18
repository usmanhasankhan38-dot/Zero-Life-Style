'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PromotionalRibbon() {
  return (
    <section className="w-full bg-white py-3 md:py-4 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <a
          href="https://zerolifestyle.co/pages/11-11-sale"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative min-h-[90px] md:min-h-[110px] bg-gradient-to-r from-black via-neutral-900 to-red-950 text-white p-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-neutral-800">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent pointer-events-none" />

            {/* Left Content */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="hidden sm:flex w-12 h-12 rounded-full bg-red-600/20 border border-red-500/30 items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-red-500 animate-spin-slow" />
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <span className="bg-red-600 text-white text-[10px] md:text-xs font-black uppercase px-2 py-0.5 rounded tracking-wider">
                    LIMITED TIME ONLY
                  </span>
                  <span className="text-neutral-400 text-xs hidden md:inline">
                    Pakistans Biggest Gadget Festival
                  </span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-white">
                  GULUNA OFFERS & 11.11 MEGA DEALS
                </h3>
              </div>
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs sm:text-sm text-neutral-300 font-medium hidden lg:inline">
                Extra Discounts Applied at Checkout
              </span>
              <div className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs md:text-sm flex items-center gap-2 transition-all group-hover:scale-105">
                <span>Claim Offer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
