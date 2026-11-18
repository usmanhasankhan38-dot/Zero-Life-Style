'use client';

import React, { useState } from 'react';
import { PROMISE_ITEMS } from '@/data/mockData';
import { ChevronDown, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function PromiseAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-red-600 tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Customer First Culture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
              Zero&apos;s Promise
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md">
            Transparency, official warranties, and zero hassle across every touchpoint in Pakistan.
          </p>
        </div>

        {/* Interactive Expandable Accordion List */}
        <div className="space-y-4">
          {PROMISE_ITEMS.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xl'
                    : 'bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100/80'
                }`}
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-black w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        isExpanded
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {item.id}
                    </span>
                    <div>
                      <h3
                        className={`text-base sm:text-lg md:text-xl font-bold tracking-tight ${
                          isExpanded ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-0.5 ${
                          isExpanded ? 'text-neutral-300' : 'text-gray-500'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isExpanded
                        ? 'bg-white/10 text-white rotate-180'
                        : 'bg-white text-gray-700 shadow-sm'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 animate-in fade-in duration-300">
                    <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={`https://zerolifestyle.co${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
