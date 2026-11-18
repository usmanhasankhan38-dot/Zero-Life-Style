// Zero Lifestyle Exact Clone Interactions Engine
(function() {
  function initInteractions() {
    console.log('[Zero Lifestyle] Initializing interactions engine...');

    // 1. Mobile Menu Drawer Toggle
    const menuButtons = document.querySelectorAll('[aria-controls="mobile-menu-drawer"], .header__icon--menu, .store-header__icon--menu');
    const mobileDrawer = document.getElementById('mobile-menu-drawer') || document.querySelector('drawer-menu#mobile-menu-drawer') || document.querySelector('.drawer-menu');
    
    function toggleDrawer(open) {
      if (!mobileDrawer) return;
      if (open) {
        mobileDrawer.setAttribute('open', '');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        mobileDrawer.classList.add('is-open', 'active');
        document.body.classList.add('overflow-hidden', 'drawer-open');
      } else {
        mobileDrawer.removeAttribute('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        mobileDrawer.classList.remove('is-open', 'active');
        document.body.classList.remove('overflow-hidden', 'drawer-open');
      }
    }

    menuButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = mobileDrawer?.hasAttribute('open') || mobileDrawer?.classList.contains('is-open');
        toggleDrawer(!isOpen);
      });
    });

    // Close buttons inside mobile drawer
    document.querySelectorAll('#mobile-menu-drawer [data-action="close"], #mobile-menu-drawer .drawer__close-button, #mobile-menu-drawer .drawer__overlay').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDrawer(false);
      });
    });

    // 2. Mini Cart Drawer Toggle
    const cartButtons = document.querySelectorAll('[aria-controls="mini-cart"], .header__icon--cart, .store-header__icon--cart');
    const miniCart = document.getElementById('mini-cart') || document.querySelector('cart-drawer#mini-cart');

    function toggleCart(open) {
      if (!miniCart) return;
      if (open) {
        miniCart.setAttribute('open', '');
        miniCart.setAttribute('aria-hidden', 'false');
        miniCart.classList.add('is-open', 'active');
        document.body.classList.add('overflow-hidden', 'cart-open');
      } else {
        miniCart.removeAttribute('open');
        miniCart.setAttribute('aria-hidden', 'true');
        miniCart.classList.remove('is-open', 'active');
        document.body.classList.remove('overflow-hidden', 'cart-open');
      }
    }

    cartButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = miniCart?.hasAttribute('open') || miniCart?.classList.contains('is-open');
        toggleCart(!isOpen);
      });
    });

    document.querySelectorAll('#mini-cart [data-action="close"], #mini-cart .drawer__close-button, #mini-cart .drawer__overlay').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCart(false);
      });
    });

    // 3. Hero Gradient Slider Engine
    const sliderContainer = document.querySelector('.gradient-slider') || document.querySelector('[data-section-type="gradient-slider"]');
    if (sliderContainer) {
      const slides = sliderContainer.querySelectorAll('.hero-slider__slide, .gradient-slider__slide, .slideshow__slide');
      const dots = sliderContainer.querySelectorAll('.slideshow__dot, .slider-dot');
      let currentSlide = 0;
      
      const gradients = [
        'linear-gradient(to bottom, #101321 0%, #1f274a 60%, #ffffff 100%)',
        'linear-gradient(to bottom, #463f91 0%, #2e266a 60%, #ffffff 100%)',
        'linear-gradient(to bottom, #0f172a 0%, #1e293b 60%, #ffffff 100%)',
        'linear-gradient(to bottom, #3b0764 0%, #581c87 60%, #ffffff 100%)',
        'linear-gradient(to bottom, #7f1d1d 0%, #991b1b 60%, #ffffff 100%)'
      ];

      function showSlide(idx) {
        if (!slides.length) return;
        currentSlide = (idx + slides.length) % slides.length;
        
        slides.forEach((s, i) => {
          if (i === currentSlide) {
            s.style.display = 'block';
            s.classList.add('is-selected', 'active');
            const img = s.querySelector('.hero-slider__image');
            if (img) img.classList.add('active');
          } else {
            s.style.display = 'none';
            s.classList.remove('is-selected', 'active');
            const img = s.querySelector('.hero-slider__image');
            if (img) img.classList.remove('active');
          }
        });

        // Set gradient background
        sliderContainer.style.background = gradients[currentSlide % gradients.length];
        sliderContainer.style.transition = 'background 0.6s ease';
      }

      // Initial slide
      if (slides.length > 0) {
        showSlide(0);
        setInterval(() => {
          showSlide(currentSlide + 1);
        }, 5000);
      }

      // Next / Prev controls
      const nextBtn = sliderContainer.querySelector('.slideshow__arrow--next, [data-action="next"]');
      const prevBtn = sliderContainer.querySelector('.slideshow__arrow--prev, [data-action="prev"]');
      if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
      if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    }

    // 4. Color Swatches on Product Cards
    document.querySelectorAll('.product-card, product-card').forEach(card => {
      const swatches = card.querySelectorAll('.color-swatch, [data-swatch], input[type="radio"]');
      const mainImg = card.querySelector('img.product-card__image, img');

      swatches.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
          const newImgUrl = swatch.getAttribute('data-image-url') || swatch.getAttribute('data-media-url');
          if (newImgUrl && mainImg) {
            mainImg.src = newImgUrl;
            if (mainImg.srcset) mainImg.srcset = newImgUrl;
          }
        });
      });

      // Quick Buy button
      const buyBtn = card.querySelector('button[type="submit"], .product-card__buy-now, [data-action="quick-buy"]');
      if (buyBtn) {
        buyBtn.addEventListener('click', (e) => {
          e.preventDefault();
          // Update cart badge count
          const badge = document.querySelector('.header__cart-count, .cart-count, [data-cart-count]');
          if (badge) {
            const count = parseInt(badge.textContent || '0', 10) + 1;
            badge.textContent = count;
            badge.style.display = 'inline-flex';
          }
          toggleCart(true);
        });
      }
    });

    // 5. Featured Collections Tab Switcher ("Just Launched")
    const tabSection = document.querySelector('#shopify-section-template--27918264434966__featured_collections_FMnNyC');
    if (tabSection) {
      const tabs = tabSection.querySelectorAll('[role="tab"], .tab-button, button.tabs-nav__button');
      const panels = tabSection.querySelectorAll('[role="tabpanel"], .tab-panel, .featured-collections__collection');

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          tabs.forEach(t => {
            t.setAttribute('aria-selected', 'false');
            t.classList.remove('is-active', 'active');
          });
          tab.setAttribute('aria-selected', 'true');
          tab.classList.add('is-active', 'active');

          panels.forEach((p, pIndex) => {
            if (pIndex === index) {
              p.removeAttribute('hidden');
              p.style.display = 'block';
            } else {
              p.setAttribute('hidden', '');
              p.style.display = 'none';
            }
          });
        });
      });
    }

    // 6. Interactive Cards Sub-Tabs (Striker, Orbit 2, Storm)
    document.querySelectorAll('.interactive-card, [data-interactive-card]').forEach(card => {
      const tabs = card.querySelectorAll('[role="tab"], .sub-tab-btn');
      const panels = card.querySelectorAll('.sub-tab-content');

      tabs.forEach((tab, idx) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          panels.forEach((p, pIdx) => {
            p.style.display = pIdx === idx ? 'block' : 'none';
          });
        });
      });
    });

    // 7. Zero's Promise Accordion
    const promiseSection = document.querySelector('#shopify-section-template--27918264434966__promise_expanding_yHyhUd');
    if (promiseSection) {
      const items = promiseSection.querySelectorAll('.accordion__item, .promise-card');
      items.forEach(item => {
        const trigger = item.querySelector('.accordion__toggle, .promise-card__header') || item;
        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('is-open');
          items.forEach(i => i.classList.remove('is-open'));
          if (!isOpen) item.classList.add('is-open');
        });
      });
    }

    // 8. FAQ Accordion inside Editorial Section
    document.querySelectorAll('#shopify-section-sections--27918262567190__custom_liquid_bbAqtY details, .faq-item details').forEach(detail => {
      detail.addEventListener('toggle', () => {
        // Smooth transition
      });
    });

    console.log('[Zero Lifestyle] All interactions registered successfully.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInteractions);
  } else {
    initInteractions();
  }
})();
