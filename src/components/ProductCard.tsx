'use client';

import React, { useState } from 'react';
import { Product } from '@/data/mockData';
import { useShop } from '@/context/ShopContext';
import { Check, ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShop();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeColor = product.colors[selectedColorIndex];
  const activeImage = activeColor?.image || product.image;

  return (
    <div
      className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
        {product.tagline ? (
          <span className="px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-white text-[10px] md:text-[11px] font-bold tracking-tight shadow-sm">
            {product.tagline}
          </span>
        ) : <div />}

        {product.discount && (
          <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[11px] font-black tracking-tight shadow-sm">
            {product.discount}
          </span>
        )}
      </div>

      {/* Product Image Stage */}
      <div className="relative w-full aspect-square bg-[#F9FAFB] flex items-center justify-center p-6 overflow-hidden">
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLElement).setAttribute(
              'src',
              'https://zerolifestyle.co/cdn/shop/files/1_07d4b4a1-0ca2-4824-a4b0-c089c89420bf.webp?v=1739527633&width=600'
            );
          }}
        />

        {/* Quick hover badge */}
        <div
          className={`absolute inset-x-0 bottom-3 flex justify-center transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-[11px] font-medium rounded-full shadow-lg">
            {activeColor?.name || 'Selected'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          {/* Sub badge & rating */}
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <span className="text-[11px] font-semibold text-rose-600 tracking-tight">
              {product.subBadge}
            </span>
            {product.rating && (
              <span className="text-[11px] text-gray-500 font-medium">
                ★ {product.rating.toFixed(1)}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-base md:text-[17px] text-gray-900 tracking-tight leading-snug group-hover:text-black">
            {product.name}
          </h3>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 my-2.5">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColorIndex(idx);
                  }}
                  className={`w-5 h-5 rounded-full p-[1px] transition-all focus:outline-none ${
                    selectedColorIndex === idx
                      ? 'ring-2 ring-black scale-110'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                />
              ))}
              {product.colors.length > 1 && (
                <span className="text-[11px] text-gray-400 font-medium ml-1">
                  +{product.colors.length}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Price & Buy Now Row */}
        <div className="pt-2 border-t border-gray-100 mt-2">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg md:text-xl font-black text-black tracking-tight">
              Rs.{product.salePrice.toLocaleString()}
            </span>
            <span className="text-xs md:text-sm text-gray-400 line-through">
              Rs.{product.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Buy Now Button */}
          <button
            onClick={() => addToCart(product, activeColor?.name)}
            className="w-full py-2.5 px-4 bg-black hover:bg-neutral-800 active:scale-[0.98] text-white text-xs md:text-sm font-bold tracking-wide rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
