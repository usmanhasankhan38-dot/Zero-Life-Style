'use client';

import React from 'react';
import { STORY_CATEGORIES } from '@/data/mockData';

export default function StoryCategories() {
  return (
    <section className="w-full bg-white py-6 md:py-8 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto no-scrollbar py-2 px-1">
          {STORY_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.link}
              className="flex flex-col items-center group shrink-0 select-none cursor-pointer"
            >
              {/* Animated Story Ring */}
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-rose-500 via-amber-400 to-indigo-600 group-hover:scale-105 group-active:scale-95 transition-all duration-300">
                <div className="w-[76px] h-[76px] md:w-[86px] md:h-[86px] rounded-full overflow-hidden bg-white p-[2px]">
                  <img
                    src={cat.gif}
                    alt={cat.title}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback if gif takes time
                      (e.target as HTMLElement).setAttribute(
                        'src',
                        'https://zerolifestyle.co/cdn/shop/files/Smartwatch_85x85.gif?v=1778070072'
                      );
                    }}
                  />
                </div>

                {cat.isHot && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-sm animate-pulse">
                    HOT
                  </span>
                )}
                {cat.isNew && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-sm">
                    NEW
                  </span>
                )}
              </div>

              {/* Title */}
              <span className="mt-2 text-xs md:text-[13px] font-bold text-gray-900 group-hover:text-black tracking-tight text-center">
                {cat.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
