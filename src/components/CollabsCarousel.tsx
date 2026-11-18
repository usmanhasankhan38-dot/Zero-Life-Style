'use client';

import React from 'react';
import { COLLABS_REELS } from '@/data/mockData';
import { Play, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CollabsCarousel() {
  const { showToast } = useShop();

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-bold text-red-500 tracking-wider">
              Social Proof & Viral Moments
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-1">
              Recent Collabs
            </h2>
          </div>

          <span className="text-xs sm:text-sm text-neutral-400">
            Pakistan’s favorite creators testing Zero gear in real life
          </span>
        </div>

        {/* Horizontal Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {COLLABS_REELS.map((reel) => (
            <div
              key={reel.id}
              className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group shadow-lg flex flex-col justify-between aspect-[9/14]"
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 pointer-events-none" />

              {/* Top metadata */}
              <div className="relative z-10 p-3 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-red-600/90 text-[10px] font-bold text-white uppercase tracking-wider">
                  {reel.videoBadge}
                </span>

                <span className="flex items-center gap-1 text-[11px] text-neutral-300 font-semibold bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  <Eye className="w-3 h-3 text-neutral-400" />
                  {reel.views}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 self-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-white group-hover:text-black transition-all cursor-pointer shadow-xl">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>

              {/* Bottom Details & Shop Now */}
              <div className="relative z-10 p-4 space-y-2">
                <div>
                  <p className="text-xs text-neutral-300 font-medium">{reel.creator}</p>
                  <h4 className="font-extrabold text-sm sm:text-base text-white leading-tight">
                    {reel.title}
                  </h4>
                  <p className="text-xs font-bold text-amber-400 mt-0.5">{reel.price}</p>
                </div>

                <a
                  href={`https://zerolifestyle.co${reel.productLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-white hover:bg-neutral-200 text-black text-xs font-bold rounded-full transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
