'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { JUST_LAUNCHED_WATCHES, JUST_LAUNCHED_EARBUDS } from '@/data/mockData';
import { Watch, Headphones, Sparkles, ArrowRight } from 'lucide-react';

export default function JustLaunchedTabs() {
  const [activeTab, setActiveTab] = useState<'watches' | 'earbuds'>('watches');

  const products = activeTab === 'watches' ? JUST_LAUNCHED_WATCHES : JUST_LAUNCHED_EARBUDS;

  return (
    <section id="new-launches" className="w-full bg-white py-12 md:py-18 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-red-600 tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Latest Releases</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Just Launched
            </h2>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-gray-100/90 border border-gray-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('watches')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                activeTab === 'watches'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Watch className="w-4 h-4" />
              <span>SMART WATCHES</span>
            </button>

            <button
              onClick={() => setActiveTab('earbuds')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                activeTab === 'earbuds'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span>ZERO EARBUDS</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 animate-in fade-in duration-300">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Bottom Link */}
        <div className="mt-8 text-center">
          <a
            href={activeTab === 'watches' ? 'https://zerolifestyle.co/pages/smart-watches' : 'https://zerolifestyle.co/pages/earbuds-zbuds'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black text-black font-bold text-xs sm:text-sm hover:bg-black hover:text-white transition-all group"
          >
            <span>Explore All {activeTab === 'watches' ? 'Smart Watches' : 'Earbuds'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
