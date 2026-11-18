'use client';

import React from 'react';

export default function SeoLinkMatrix() {
  const featureLinks = [
    { label: 'Amoled Display Smartwatch', href: 'https://zerolifestyle.co/collections/amoled' },
    { label: 'Sports Watches', href: 'https://zerolifestyle.co/collections/sports-watches' },
    { label: 'Round Dial Smartwatch', href: 'https://zerolifestyle.co/collections/round-dial' },
    { label: 'Big Display Smartwatch', href: 'https://zerolifestyle.co/collections/big-display-smartwatch' },
    { label: 'Fitness Tracker Smartwatch', href: 'https://zerolifestyle.co/collections/fitness-tracker' },
  ];

  const genderLinks = [
    { label: 'Smart Watches for Women', href: 'https://zerolifestyle.co/collections/smartwatches-for-women' },
    { label: 'Smart Watches for Men', href: 'https://zerolifestyle.co/collections/smartwatches-for-men' },
    { label: 'Couple Smartwatch Combos', href: 'https://zerolifestyle.co/pages/smart-watches' },
    { label: 'Teens & Kids Watches', href: 'https://zerolifestyle.co/pages/smart-watches' },
  ];

  const priceLinks = [
    { label: 'Smart Watches Under 6000', href: 'https://zerolifestyle.co/collections/smartwatches-under-6000' },
    { label: 'Smart Watches Under 7000', href: 'https://zerolifestyle.co/collections/smartwatches-under-7000' },
    { label: 'Smart Watches Under 8000', href: 'https://zerolifestyle.co/collections/smartwatches-under-8000' },
    { label: 'Smart Watches Under 10000', href: 'https://zerolifestyle.co/collections/smartwatches-under-10000' },
    { label: 'Budget Wireless Earbuds Under 3500', href: 'https://zerolifestyle.co/pages/earbuds-zbuds' },
  ];

  return (
    <section className="w-full bg-[#F5F6F8] py-10 md:py-14 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
          Popular Search Directories
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h5 className="font-extrabold text-sm text-gray-900 uppercase tracking-tight mb-3">
              Shop by Feature
            </h5>
            <ul className="space-y-2 text-xs text-gray-600">
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="font-extrabold text-sm text-gray-900 uppercase tracking-tight mb-3">
              Shop By Gender & Category
            </h5>
            <ul className="space-y-2 text-xs text-gray-600">
              {genderLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="font-extrabold text-sm text-gray-900 uppercase tracking-tight mb-3">
              Shop By Budget
            </h5>
            <ul className="space-y-2 text-xs text-gray-600">
              {priceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
