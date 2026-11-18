'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { CheckCircle2 } from 'lucide-react';

export default function ToastNotification() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900/95 text-white backdrop-blur-md shadow-2xl border border-neutral-700 animate-in fade-in slide-in-from-top-4 duration-300">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-xs sm:text-sm font-bold tracking-tight">{toastMessage}</span>
    </div>
  );
}
