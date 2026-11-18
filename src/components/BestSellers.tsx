'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { BEST_SELLERS } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

export default function BestSellers() {
  return (
    <section id="best-sellers" className="w-full bg-white py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-100">
          <div>
            <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
              Top Rated Tech
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Best Sellers
            </h2>
          </div>

          <a
            href="https://zerolifestyle.co/collections/best-seller"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-black hover:text-red-600 transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4-column responsive product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {BEST_SELLERS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
