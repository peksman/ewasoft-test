// main.js
import { initStickyHeader } from './site/headerSticky.js';
import { initSlider } from './site/sliders.js';
// import { initPriceCalculate } from './site/priceCalculate.js';
import { initProductPopup } from './site/productPopup.js';
import { initHamburger } from './site/hamburger.js';

document.addEventListener('DOMContentLoaded', function () {
  
  initStickyHeader();
  initSlider();
  // initPriceCalculate();
  initProductPopup();
  initHamburger();

});
