export function initPriceCalculate() {
    console.log("1");
    document.addEventListener("DOMContentLoaded", function () {
        const checkbox = document.getElementById('checkbox');
    
        checkbox.addEventListener('click', function () {
            if (this.checked) {
                console.log("Checkbox is checked");
            } else {
                console.log("Checkbox is unchecked");
            }
        });
    });
}