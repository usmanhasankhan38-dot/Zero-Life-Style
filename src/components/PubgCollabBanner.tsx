'use client';

import React from 'react';
import { Gamepad2, ArrowRight } from 'lucide-react';

export default function PubgCollabBanner() {
  return (
    <section className="w-full bg-black py-4 md:py-6 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <a
          href="https://zerolifestyle.co/collections/pubg-x-zero"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full rounded-2xl md:rounded-3xl overflow-hidden group shadow-2xl border border-neutral-800"
        >
          {/* Main PUBG Banner Graphic */}
          <div className="relative w-full aspect-[2.6/1] sm:aspect-[4/1] md:aspect-[5/1] lg:aspect-[6.276/1] bg-neutral-950 flex items-center justify-between">
            <img
              src="https://zerolifestyle.co/cdn/shop/files/website-pubg_1.webp?v=1767858307&width=3000"
              alt="PUBG Mobile x ZERO Lifestyle Collaboration"
              className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700"
              onError={(e) => {
                // Fallback graphic if cdn limits
                (e.target as HTMLElement).setAttribute(
                  'src',
                  'https://zerolifestyle.co/cdn/shop/files/desktop_b460cddb-b406-4cd1-8378-6eb78cfc1576.webp?v=1789121225&width=2000'
                );
              }}
            />

            {/* Subtle gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex items-center p-6 md:p-12">
              <div className="max-w-md space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[11px] font-black uppercase tracking-wider">
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>OFFICIAL ESPORTS COLLABORATION</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase leading-tight">
                  PUBG MOBILE <span className="text-amber-400">×</span> ZERO
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-medium hidden sm:block">
                  Ultra-Low 40ms Latency Gaming Earbuds engineered for competitive dominance.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-black font-extrabold text-xs md:text-sm rounded-full group-hover:bg-amber-300 transition-colors shadow-lg">
                    <span>Explore Collab Gear</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
