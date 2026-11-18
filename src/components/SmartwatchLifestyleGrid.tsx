'use client';

import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function SmartwatchLifestyleGrid() {
  const tiles = [
    {
      id: 'fashion',
      title: 'For Fashion',
      desc: 'Sleek luxury mesh and metallic finishes',
      image: 'https://zerolifestyle.co/cdn/shop/files/regal_bg.jpg?v=1739884653&width=1000',
      link: 'https://zerolifestyle.co/products/regal-smartwatch',
    },
    {
      id: 'adventure',
      title: 'For Adventure',
      desc: 'Rugged shockproof build with 100+ sports modes',
      image: 'https://zerolifestyle.co/cdn/shop/files/New-Website-Smartwatch-Category-Banner_02.webp?v=1732355317&width=1000',
      link: 'https://zerolifestyle.co/collections/adventure',
    },
    {
      id: 'lifestyle',
      title: 'For your Lifestyle',
      desc: 'Seamless all-day wellness and sleep tracking',
      image: 'https://zerolifestyle.co/cdn/shop/files/New-Website-Smartwatch-Category-Banner_04.webp?v=1732355316&width=1000',
      link: 'https://zerolifestyle.co/collections/lifestyle-oriented',
    },
    {
      id: 'productivity',
      title: 'For Productivity',
      desc: 'Clear Bluetooth calling and instant notifications',
      image: 'https://zerolifestyle.co/cdn/shop/files/New-Website-Smartwatch-Category-Banner_03.webp?v=1732355316&width=1000',
      link: 'https://zerolifestyle.co/collections/productivity',
    },
  ];

  return (
    <section id="smart-watches" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
            Curated Collections
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Smart Watches Built For Real Life
          </h2>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Large Hero Banner Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden group shadow-lg min-h-[380px] lg:min-h-[560px] flex flex-col justify-end p-8 text-white bg-black">
            <img
              src="https://zerolifestyle.co/cdn/shop/files/khanzada.webp?v=1761999042&width=1800"
              alt="Vision 2025 Smartwatch"
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                FLAGSHIP SERIES
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Vision 2025: Rethinking Possibilities
              </h3>
              <p className="text-sm text-neutral-300 line-clamp-2">
                Pioneering aerospace-grade alloys, vibrant always-on AMOLED display, and ultra-precise biometrics.
              </p>
              <div className="pt-2">
                <a
                  href="https://zerolifestyle.co/products/visionary-smartwatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all"
                >
                  <span>Read more</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 2x2 Grid Tiles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {tiles.map((tile) => (
              <a
                key={tile.id}
                href={tile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between p-6 bg-neutral-900 text-white"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-108 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute(
                      'src',
                      'https://zerolifestyle.co/cdn/shop/files/regal_bg.jpg?v=1739884653&width=1000'
                    );
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none" />

                {/* Top header row with arrow button */}
                <div className="relative z-10 flex items-center justify-between">
                  <h4 className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                    {tile.title}
                  </h4>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom text */}
                <div className="relative z-10">
                  <p className="text-xs text-neutral-300 font-medium">
                    {tile.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
