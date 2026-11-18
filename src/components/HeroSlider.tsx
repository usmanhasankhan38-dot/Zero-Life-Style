'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { HERO_SLIDES } from '@/data/mockData';
import { useShop } from '@/context/ShopContext';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { showToast } = useShop();

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full overflow-hidden transition-all duration-700 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Gradient matching current slide */}
      <div className={`relative min-h-[460px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] w-full bg-gradient-to-b ${slide.bgGradient} text-white flex items-center transition-colors duration-700`}>
        {/* Glow orb effect */}
        <div
          className="absolute -top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-700"
          style={{ backgroundColor: slide.accentColor }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 w-full py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          {/* Slide Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-bold tracking-wider uppercase w-fit">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{slide.badge}</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm md:text-base font-semibold tracking-wide text-neutral-300">
                {slide.tagline}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                {slide.title}
              </h1>
            </div>

            <p className="text-sm md:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              {slide.subhead}
            </p>

            {/* Price Badge */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {slide.price}
              </span>
              <span className="text-sm sm:text-base text-neutral-400 line-through">
                {slide.originalPrice}
              </span>
              <span className="px-2 py-0.5 text-xs font-bold bg-red-600 text-white rounded">
                {slide.discount}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-neutral-200 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#best-sellers"
                className="px-6 py-3.5 rounded-full bg-black/30 backdrop-blur-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Explore More
              </a>
            </div>

            {/* Micro perks */}
            <div className="flex items-center gap-6 pt-3 text-xs text-neutral-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Free Express Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>1 Year Official Warranty</span>
              </div>
            </div>
          </div>

          {/* Slide Visual / Graphic */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden p-2 flex items-center justify-center">
              {/* Product Visual Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center">
                <img
                  src={slide.bannerImg}
                  alt={slide.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to high quality tech hero visual if remote cdn expires
                    (e.target as HTMLElement).setAttribute(
                      'src',
                      'https://zerolifestyle.co/cdn/shop/files/desktop_b460cddb-b406-4cd1-8378-6eb78cfc1576.webp?v=1789121225&width=1200'
                    );
                  }}
                />

                {/* Floating promo sticker */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-xl">
                  {slide.discount}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Prev / Next Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all z-20 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all z-20 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
