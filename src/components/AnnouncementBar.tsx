'use client';

import React from 'react';

export default function AnnouncementBar() {
  const marqueeText = "Mehngay Shauq Ka Shortcut Click Here · • · 11.11 Sale Live Now · • · Free Shipping Nationwide · • · 1 Year Official Brand Warranty · • · ";

  return (
    <div className="relative z-50 w-full bg-black text-white py-2 overflow-hidden border-b border-neutral-900 marquee-container select-none">
      <a
        href="https://zerolifestyle.co/pages/11-11-sale"
        target="_blank"
        rel="noopener noreferrer"
        className="flex whitespace-nowrap text-[12px] md:text-[13px] font-semibold tracking-wider transition-colors hover:text-neutral-300"
      >
        <div className="inline-flex items-center gap-6 animate-marquee shrink-0 marquee-content">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
        <div className="inline-flex items-center gap-6 animate-marquee shrink-0 marquee-content" aria-hidden="true">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </a>
    </div>
  );
}
