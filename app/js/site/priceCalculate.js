export function initPriceCalculate() {
    
    const checkboxes = document.querySelectorAll('.popup__right-list--box input[type="checkbox"]');

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const calculatePrice = this.closest(".four-column__slider-box--popup").querySelector('.calculate-price');
            const calculatePriceFront = this.closest(".four-column__slider-box").querySelector('.calculate-price-front');
            const span = this.parentElement.querySelector('.calculate-price--value');
            let price = parseFloat(span.textContent.replace(',', '.'));
            let total = parseFloat(calculatePrice.textContent.replace('.', '').replace(',', ''));
            let totalFront = parseFloat(calculatePriceFront.textContent.replace('.', '').replace(',', ''));

            if (this.checked) {
                total += price;
                totalFront += price;
            } else {
                total -= price;
                totalFront -= price;
            }

            calculatePrice.textContent = formatNumber(total.toFixed(2));
            calculatePriceFront.textContent = formatNumber(total.toFixed(2));
        });
    });
}