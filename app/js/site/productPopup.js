export function initProductPopup() {
    document.addEventListener('DOMContentLoaded', function() {
        const btn = document.querySelector('.btn-rounded');
      
        btn.addEventListener('click', function() {
          const parent = this.closest('.four-column__slider-box');
          const popup = parent.querySelector('.four-column__slider-box--popup');
      
          popup.classList.add('four-column__slider-box--popup__active');
          document.body.classList.add('body-overflow');
        });
      });
      
          
}
