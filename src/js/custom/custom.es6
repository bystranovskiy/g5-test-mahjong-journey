"use strict";

(function ($) {

    $(window).on("load", function () {
        setTimeout(function () {
            $(".preloader").fadeOut(800);
        }, 500);

    })

    $(document).ready(function () {
        $(".reviews-slider").slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    });

})(jQuery);
