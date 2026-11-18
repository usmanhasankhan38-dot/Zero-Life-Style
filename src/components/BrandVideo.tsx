'use client';

import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function BrandVideo() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Redefining Tech In Pakistan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Designed to Turn Heads
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Experience the harmony of futuristic aesthetics, unmatched battery life, and crystal-clear acoustic precision.
          </p>
        </div>

        {/* Video Wrapper */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-black aspect-video max-w-5xl mx-auto">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Wh65xHg6D9w?autoplay=1&mute=1&loop=1&playlist=Wh65xHg6D9w&controls=1&modestbranding=1&playsinline=1&rel=0"
            title="Zero Lifestyle Official Film"
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
