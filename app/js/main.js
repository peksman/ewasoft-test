// main.js
import { initStickyHeader } from './site/headerSticky.js';
import { initSlider } from './site/sliders.js';
// import { initPriceCalculate } from './site/priceCalculate.js';

document.addEventListener('DOMContentLoaded', function () {
  
  initStickyHeader();
  initSlider();
  // initPriceCalculate();
  
});
