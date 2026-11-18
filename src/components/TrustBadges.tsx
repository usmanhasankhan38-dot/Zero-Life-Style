'use client';

import React from 'react';
import { ShieldCheck, RefreshCw, Truck, Wrench } from 'lucide-react';

export default function TrustBadges() {
  const perks = [
    {
      id: 1,
      title: '1 Year Warranty',
      desc: 'Official Brand Support',
      icon: ShieldCheck,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 2,
      title: 'Easy 7 Days Replacement',
      desc: 'Zero Hassle Returns',
      icon: RefreshCw,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      id: 3,
      title: 'FREE Shipping Nationwide',
      desc: 'Delivered in 4 to 5 Days',
      icon: Truck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 4,
      title: 'Easy Warranty Claim',
      desc: 'Doorstep Pickup Service',
      icon: Wrench,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] border-y border-gray-200/80 py-8 md:py-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.id}
                className="flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 rounded-xl transition-transform hover:-translate-y-0.5"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${perk.bgColor} flex items-center justify-center shrink-0 border border-gray-200/50`}
                >
                  <Icon className={`w-6 h-6 ${perk.color} stroke-[2.2]`} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
