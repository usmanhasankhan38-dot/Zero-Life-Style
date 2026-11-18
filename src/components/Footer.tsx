'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { ArrowRight, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      showToast('Thank you for subscribing to Zero VIP Club!');
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-800">
      {/* Newsletter Strip */}
      <div className="bg-black text-white py-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold text-red-500 tracking-wider">
              BE THE FIRST TO KNOW
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
              Join the Zero Insider Community
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Get secret discount codes, launch notifications, and exclusive drops.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center max-w-md">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full sm:w-80 px-4 py-3 rounded-l-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-r-full transition-colors flex items-center gap-1.5 shrink-0"
            >
              {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main Links Matrix */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-black text-lg">
                Z
              </div>
              <span className="font-black text-2xl tracking-[0.2em] text-black uppercase">
                ZERO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 max-w-sm leading-relaxed">
              Pakistan&apos;s fastest-growing wearable tech ecosystem. We design smartwatches and audio accessories with unrivaled durability, backed by genuine 1-year local warranty.
            </p>

            <div className="pt-2 text-xs text-gray-500 space-y-1">
              <p><strong className="text-gray-900">Support Email:</strong> support@zerolifestyle.co</p>
              <p><strong className="text-gray-900">Helpline:</strong> Mon - Sat (10:00 AM - 7:00 PM)</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {['Facebook', 'Instagram', 'YouTube', 'TikTok', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center text-xs font-bold text-gray-700 transition-colors"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-extrabold text-sm text-gray-900 tracking-tight uppercase mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li><a href="#best-sellers" className="hover:text-black hover:underline">Best Sellers</a></li>
              <li><a href="#smart-watches" className="hover:text-black hover:underline">Smart Watches</a></li>
              <li><a href="#earbuds" className="hover:text-black hover:underline">Ear Buds & Zbuds</a></li>
              <li><a href="#powerbanks" className="hover:text-black hover:underline">Power Banks</a></li>
              <li><a href="#new-launches" className="hover:text-black hover:underline">New Launches</a></li>
              <li><a href="https://zerolifestyle.co/blogs/news" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Latest Tech Blogs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-extrabold text-sm text-gray-900 tracking-tight uppercase mb-4">
              Support
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li><a href="#faq" className="hover:text-black hover:underline">FAQs & Helpdesk</a></li>
              <li><a href="https://zerolifestyle.co/pages/track-your-order" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Track Your Order</a></li>
              <li><a href="https://zerolifestyle.co/pages/warranty-registration" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Warranty Registration</a></li>
              <li><a href="https://zerolifestyle.co/pages/shipping" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Shipping & Delivery</a></li>
              <li><a href="https://zerolifestyle.co/pages/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Terms & Conditions</a></li>
              <li><a href="https://zerolifestyle.co/pages/contact-us" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Contact Customer Care</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h5 className="font-extrabold text-sm text-gray-900 tracking-tight uppercase mb-4">
              Policy
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li><a href="https://zerolifestyle.co/pages/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Privacy Policy</a></li>
              <li><a href="https://zerolifestyle.co/pages/warranty-policy" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Warranty Policy</a></li>
              <li><a href="https://zerolifestyle.co/pages/corporate" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Corporate Gifting</a></li>
              <li><a href="https://zerolifestyle.co/pages/complain" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">Register Complaint</a></li>
              <li><a href="https://zerolifestyle.co/pages/why-buy-at-zero-exchange-return" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline">7 Days Return / Exchange</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment Badges */}
      <div className="border-t border-gray-100 bg-[#FAFAFA] py-6 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Zero Lifestyle. All rights reserved. Pakistan</p>

          {/* Payment Badges */}
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-white border border-gray-200 rounded font-bold text-gray-800 text-[10px]">
              Cash on Delivery (COD)
            </span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded font-bold text-blue-700 text-[10px]">
              VISA
            </span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded font-bold text-red-600 text-[10px]">
              Mastercard
            </span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded font-bold text-green-700 text-[10px]">
              PayPak
            </span>
            <span className="px-2 py-1 bg-white border border-gray-200 rounded font-bold text-teal-700 text-[10px]">
              UnionPay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
