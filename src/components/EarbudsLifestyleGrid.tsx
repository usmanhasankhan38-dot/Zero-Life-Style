'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function EarbudsLifestyleGrid() {
  const tiles = [
    {
      id: 'gamers',
      title: 'For The Gamers',
      desc: '40ms Ultra Low Latency Beast Mode',
      image: 'https://zerolifestyle.co/cdn/shop/files/desktop_b460cddb-b406-4cd1-8378-6eb78cfc1576.webp?v=1789121225&width=800',
      link: 'https://zerolifestyle.co/collections/arcade-series',
    },
    {
      id: 'pros',
      title: 'For The Productivity Pros',
      desc: 'Quad Mic AI ENx for studio-grade call clarity',
      image: 'https://zerolifestyle.co/cdn/shop/files/CarbonBlack_a0eeb9ae-965d-4fcf-8470-3d8495a4f78d.webp?v=1738739194&width=800',
      link: 'https://zerolifestyle.co/products/wave-earbuds',
    },
    {
      id: 'enthusiast',
      title: 'For The Enthusiast',
      desc: '13mm Bionic Drivers with explosive deep bass',
      image: 'https://zerolifestyle.co/cdn/shop/files/striker.webp?v=1738739194&width=800',
      link: 'https://zerolifestyle.co/products/robo-earbuds',
    },
    {
      id: 'focused',
      title: 'For The Focused Listener',
      desc: 'Hybrid 35dB Active Noise Cancellation',
      image: 'https://zerolifestyle.co/cdn/shop/files/klarity_transparent.webp?v=1738739194&width=800',
      link: 'https://zerolifestyle.co/products/quantum-earbuds',
    },
  ];

  return (
    <section id="earbuds" className="w-full bg-white py-12 md:py-16 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
            Audio Revolution
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Sound Redefined: Zero Earbuds & Zbuds
          </h2>
        </div>

        {/* Inverted 2-Column Grid (Tiles first on left, hero banner on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 2x2 Grid Tiles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1">
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

          {/* Right Large Hero Banner Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden group shadow-lg min-h-[380px] lg:min-h-[560px] flex flex-col justify-end p-8 text-white bg-black order-1 lg:order-2">
            <img
              src="https://zerolifestyle.co/cdn/shop/files/desktop_b460cddb-b406-4cd1-8378-6eb78cfc1576.webp?v=1789121225&width=1800"
              alt="Zero Earbuds Showcase"
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                ACOUSTIC MASTERY
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Immersive Audio Built For Pakistan
              </h3>
              <p className="text-sm text-neutral-300 line-clamp-2">
                Heavy bass tuning, InstaCharge fast charging, and up to 70 hours combined marathon playback.
              </p>
              <div className="pt-2">
                <a
                  href="https://zerolifestyle.co/pages/earbuds-zbuds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
