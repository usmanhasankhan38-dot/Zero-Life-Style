'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/mockData';
import { ChevronDown, HelpCircle, Check, ShieldCheck, Mail } from 'lucide-react';

export default function BrandEditorialAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#FAFBFD] py-16 md:py-24 border-t border-gray-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Editorial Block */}
        <div className="max-w-4xl mx-auto space-y-10 mb-16">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider">
              About The Brand
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Zero Lifestyle, Pakistan&apos;s Smart Wearable Revolution Starts Here
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Breaking the monopoly of overpriced imported gadgets by delivering flagship-tier engineering at honest prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-sm leading-relaxed">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <h3 className="font-extrabold text-lg text-black tracking-tight">
                Why Zero Lifestyle Is Different
              </h3>
              <p>
                Most tech brands in Pakistan either offer subpar unbranded replicas or outrageously expensive international brands without genuine local warranty. Zero Lifestyle was created to bridge this gap.
              </p>
              <p>
                Every smartwatch, pair of earbuds, and power bank in our catalog is rigorously tested for harsh Pakistani climate conditions: extreme summer heat, heavy dust, high humidity, and hectic daily commutes.
              </p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
              <h3 className="font-extrabold text-lg text-black tracking-tight">
                A Truly Local Brand You Can Trust
              </h3>
              <p>
                We do not drop-ship or hide behind virtual addresses. We are a registered Pakistani enterprise with dedicated localized service centers, physical dispatch warehouses in Karachi, Lahore, and Islamabad, and direct customer care agents who speak your language.
              </p>
              <div className="flex items-center gap-2 pt-2 text-xs font-bold text-gray-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>1-Year Direct Brand Replacement Warranty</span>
              </div>
            </div>
          </div>

          {/* Quick Price Guide Matrix */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-8 shadow-sm">
            <h3 className="font-extrabold text-xl text-black tracking-tight mb-4">
              Zero Lifestyle Price Guide Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-extrabold text-sm text-black block mb-1">Calling Smartwatches</span>
                <p className="text-gray-500 mb-2">High-def Bluetooth calls, metallic dials & health tracking.</p>
                <span className="font-black text-rose-600 text-sm">From Rs. 4,999</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-extrabold text-sm text-black block mb-1">Wireless Zbuds & ANC</span>
                <p className="text-gray-500 mb-2">Active Noise Cancellation, 40ms gaming mode, & ENC quad mics.</p>
                <span className="font-black text-rose-600 text-sm">From Rs. 2,999</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-extrabold text-sm text-black block mb-1">Lumin Power Banks</span>
                <p className="text-gray-500 mb-2">High-speed 65W PD fast charging & digital LED smart meter.</p>
                <span className="font-black text-rose-600 text-sm">From Rs. 4,999</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold text-red-600 tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50/80 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-black' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need help direct email card */}
          <div className="mt-8 p-4 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Still have questions?</p>
                <p className="text-sm font-bold">support@zerolifestyle.co</p>
              </div>
            </div>
            <a
              href="mailto:support@zerolifestyle.co"
              className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
