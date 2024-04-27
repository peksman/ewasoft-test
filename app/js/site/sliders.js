export function initSlider() {
    console.log("log");
    document.addEventListener("DOMContentLoaded", function() {
        console.log("log 2");
        const slider = document.querySelector('.banner-slider__wrapper');
        const slickOptions = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        };
        
        if (slider) {
            new Slick(slider, slickOptions);
            console.log("log 3");
        }
    });
}
