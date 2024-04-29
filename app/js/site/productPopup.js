export function initProductPopup() {  
  const btns = document.querySelectorAll('.price-popup');

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const parent = this.closest('.four-column__slider-box');
      const popup = parent.querySelector('.four-column__slider-box--popup');

      popup.classList.add('four-column__slider-box--popup__active');
      document.body.classList.add('body-overflow');

      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          popup.classList.remove('four-column__slider-box--popup__active');
          document.body.classList.remove('body-overflow');
        }
      });
    });
  });

  const closeBtns = document.querySelectorAll('.slider-box--popup__close');

  closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
      const parent = this.closest('.four-column__slider-box');
      const popup = parent.querySelector('.four-column__slider-box--popup');

      popup.classList.remove('four-column__slider-box--popup__active');
      document.body.classList.remove('body-overflow');
    });
  });
}
