"use strict";

(function ($) {

    $(window).on("load", function () {
        setTimeout(function(){
            $(".preloader").fadeOut(800);
        }, 500);
        setTimeout(function(){
            g5.init({
                once: true
            });
        }, 1000);

    })

    $(document).ready(function () {
        if ($(window).outerWidth() < 768){
            $("section, footer, header, div").removeAttr("data-retina");
        }
        $(".lazy").lazy();
        $(".reviews-slider").slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            lazyLoad: "ondemand",
        });
    });


})(jQuery);
