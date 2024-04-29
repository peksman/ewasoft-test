export function initSlider() {
    $(document).ready(function(){
        $('.banner-slider__wrapper').slick({
            slislidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            infinite: false,
            arrows: true,
            dots: false,
            prevArrow: $('.custom-prev-arrow'),
            nextArrow: $('.custom-next-arrow')
        });
    });
}
