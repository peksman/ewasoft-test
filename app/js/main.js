// main.js
import { initStickyHeader } from './site/headerSticky.js';
import { initSlider } from './site/sliders.js';
import { initPriceCalculate } from './site/priceCalculate.js';
import { initProductPopup } from './site/productPopup.js';
import { initHamburger } from './site/hamburger.js';
import { initTabs } from './site/tabs.js';
import { initFormPopup } from './site/contactForm.js';
import { initAos } from './site/aos.js';

document.addEventListener('DOMContentLoaded', function () {
  
  initStickyHeader();
  initSlider();
  initPriceCalculate();
  initProductPopup();
  initHamburger();
  initTabs();
  initFormPopup();
  initAos();

});
