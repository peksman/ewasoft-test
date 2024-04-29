export function initSlider() {
    $(document).ready(function(){
        $('.banner-slider__wrapper').slick({
            slislidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            dots: false,
            prevArrow: $('.custom-prev-arrow'),
            nextArrow: $('.custom-next-arrow')
        });
    });
}
