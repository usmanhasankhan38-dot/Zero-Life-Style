import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Zero Lifestyle - Pakistan's Best Smart Watches & Wireless Earbuds",
  description: "Shop Pakistan's #1 Smartwatch & Audio Brand with 1-Year Official Brand Warranty, Fast Nationwide Delivery, and Cash on Delivery.",
  icons: {
    icon: 'https://zerolifestyle.co/cdn/shop/files/zero-lifestyle-logo_5b9310b8-4d88-410b-84d0-b1f7fada86b2.webp?v=1683120623&width=100',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-js">
      <head>
        {/* Preload Inter Font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />

        {/* Original Production Stylesheets */}
        <link rel="stylesheet" href="/css/inline-theme.css" />
        <link rel="stylesheet" href="/css/theme.min.css" />
        <link rel="stylesheet" href="/css/shopify_v2.css" />
        <link rel="stylesheet" href="/css/interactive-cards.css" />
        <link rel="stylesheet" href="/css/widget_v3.css" />
      </head>
      <body className="template-index antialiased">
        {children}

        {/* Production Scripts & Interactions Engine */}
        <script src="/js/vendor.js" defer></script>
        <script src="/js/theme.min.js" defer></script>
        <script src="/js/custom.js" defer></script>
        <script src="/js/gradient-slider.js" defer></script>
        <script src="/js/interactive-cards.js" defer></script>
        <script src="/js/clone-interactions.js" defer></script>
      </body>
    </html>
  );
}
