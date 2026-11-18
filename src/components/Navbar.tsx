'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function Navbar() {
  const { cartCount, setIsCartOpen, setIsSearchOpen, setIsMobileMenuOpen } = useShop();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-black text-white transition-all duration-200 border-b ${
        scrolled ? 'border-neutral-800 shadow-md' : 'border-black'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        {/* Left: Hamburger & Search */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 -ml-1.5 rounded-full hover:bg-neutral-800/80 transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 text-white stroke-[2.2]" />
          </button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-1.5 rounded-full hover:bg-neutral-800/80 transition-colors focus:outline-none"
            aria-label="Search Store"
          >
            <Search className="w-5 h-5 text-white stroke-[2.2]" />
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 group">
            {/* Zero Lifestyle Brandmark & Wordmark */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-black text-[17px] tracking-tighter leading-none group-hover:scale-105 transition-transform">
                Z
              </div>
              <span className="font-extrabold text-[17px] md:text-[20px] tracking-[0.2em] uppercase leading-none font-sans">
                ZERO
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Cart & Quick Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full hover:bg-neutral-800/80 transition-colors focus:outline-none"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-6 h-6 text-white stroke-[2.1]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] px-1 bg-red-600 text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-in zoom-in-75">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
