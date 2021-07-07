$('.select').select2();

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.reviews-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 2,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    } else {
        $(".reviews-slider.slick-initialized").slick("unslick");
    }
});
// slick active