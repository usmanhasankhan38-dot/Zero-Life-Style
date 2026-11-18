'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Tag } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    showToast,
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'ZERO10' || promoCode.toUpperCase() === '1111') {
      setDiscountPercent(10);
      showToast('10% VIP Promo applied!');
    } else {
      showToast('Invalid promo code. Try ZERO10');
    }
  };

  const discountAmount = Math.round((cartTotal * discountPercent) / 100);
  const finalTotal = cartTotal - discountAmount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-black text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-500" />
            <h3 className="font-extrabold text-base tracking-tight">Your Cart</h3>
            <span className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 text-xs font-bold">
              {cartCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded-full hover:bg-neutral-800 text-white transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-red-50 p-3 px-5 border-b border-red-100">
          <div className="flex items-center justify-between text-xs font-bold text-red-700 mb-1.5">
            <span>🎉 FREE Shipping Nationwide Unlocked!</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-red-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-red-600 h-full rounded-full w-full animate-pulse" />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-gray-100">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-gray-900">Your bag is empty</h4>
                <p className="text-xs text-gray-500 mt-1">Discover Pakistan&apos;s best tech deals and fill your bag.</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-black text-white font-bold text-xs rounded-full hover:bg-neutral-800 transition-all"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.selectedColor}`} className="pt-3 first:pt-0 flex gap-3.5">
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl bg-gray-50 p-1 border border-gray-200 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 leading-snug">
                        {item.product.name}
                      </h4>
                      {item.selectedColor && (
                        <span className="text-[11px] text-gray-500 font-medium">
                          Color: {item.selectedColor}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-full bg-gray-50 p-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-black text-sm text-black">
                        Rs.{(item.product.salePrice * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50/80 space-y-3">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Coupon Code (e.g. ZERO10)"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-black uppercase font-medium"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 bg-neutral-900 text-white rounded-lg text-xs font-bold hover:bg-black transition-colors"
              >
                Apply
              </button>
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-gray-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">Rs.{cartTotal.toLocaleString()}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>VIP Discount ({discountPercent}%)</span>
                  <span>- Rs.{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Nationwide</span>
                <span className="font-bold text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-200">
                <span>Total Amount (COD)</span>
                <span>Rs.{finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                showToast('Proceeding to Cash on Delivery checkout!');
              }}
              className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>CHECKOUT • CASH ON DELIVERY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>1 Year Official Replacement Warranty Included</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
