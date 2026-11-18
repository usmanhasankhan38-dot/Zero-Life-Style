'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function FloatingSupport() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { showToast } = useShop();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-gray-900 border border-gray-200/90 shadow-xl rounded-2xl p-3 max-w-[220px] text-xs font-semibold relative animate-bounce-subtle">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-gray-400 hover:text-black"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="pr-4">Need help choosing a smartwatch or earbuds? Chat with us live!</p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => showToast('Opening WhatsApp Live Support...')}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
