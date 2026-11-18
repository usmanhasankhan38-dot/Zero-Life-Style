'use client';

import React, { useState } from 'react';
import { FEATURED_DEEP_DIVES } from '@/data/mockData';
import { ArrowRight, ShoppingBag, Flame, Heart, CheckCircle2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function FeaturedProductsDeepDive() {
  const { showToast } = useShop();
  // Manage active tab per card
  const [activeTabs, setActiveTabs] = useState<Record<string, number>>({
    striker: 0,
    'orbit-2': 0,
    storm: 0,
  });

  const handleTabChange = (cardId: string, index: number) => {
    setActiveTabs((prev) => ({ ...prev, [cardId]: index }));
  };

  return (
    <section className="w-full bg-[#FBFBFB] py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
            Signature Lineup
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
            Featured Products
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Engineered with bespoke hardware and validated by thousands of verified Pakistani buyers.
          </p>
        </div>

        {/* 3 Large Interactive Horizontal Cards */}
        <div className="space-y-8 md:space-y-12">
          {FEATURED_DEEP_DIVES.map((item) => {
            const currentTabIndex = activeTabs[item.id] || 0;
            const currentTab = item.tabs[currentTabIndex];

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Visual Left Stage */}
                <div className="lg:col-span-5 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-gray-100">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black text-white text-[11px] font-bold tracking-tight">
                      {item.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-[11px] font-bold">
                      {item.trendBadge}
                    </span>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-[320px] aspect-square object-contain transform hover:scale-108 transition-transform duration-500 my-4"
                    onError={(e) => {
                      (e.target as HTMLElement).setAttribute(
                        'src',
                        'https://zerolifestyle.co/cdn/shop/files/CarbonBlack_a0eeb9ae-965d-4fcf-8470-3d8495a4f78d.webp?v=1738739194&width=600'
                      );
                    }}
                  />

                  {/* Social Proof metrics */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      {item.soldCount}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500" />
                      {item.wishlistCount}
                    </span>
                  </div>
                </div>

                {/* Content Right Stage */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <p className="text-xs uppercase font-bold text-red-600 tracking-wider">
                        {item.tagline}
                      </p>
                      <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-black rounded">
                        {item.discount}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Interactive Sub-Tabs Navigation */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 my-4 border-b border-gray-100">
                      {item.tabs.map((tab, idx) => (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(item.id, idx)}
                          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                            currentTabIndex === idx
                              ? 'bg-black text-white shadow-sm'
                              : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
                          }`}
                        >
                          {tab.title}
                        </button>
                      ))}
                    </div>

                    {/* Active Tab Explanation Box */}
                    <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-100 min-h-[100px] flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-sm text-gray-900">
                          {currentTab.title} Architecture
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                          {currentTab.content}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price Row & Action */}
                  <div className="pt-6 border-t border-gray-100 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                        {item.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {item.originalPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={`https://zerolifestyle.co${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-full transition-all flex items-center gap-2 shadow-md hover:scale-105"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Order Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
