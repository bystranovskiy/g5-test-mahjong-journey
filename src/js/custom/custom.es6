"use strict";

(function ($) {

    $(document).ready(function () {

        gsap.to(".parallax", {
            scrollTrigger: {
                scrub: true
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
            ease: "none"
        });

        $(".reviews-slider").slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            cssEase: 'linear'
        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            for (let i = 1; i <= 5; i++) {
                gsap.from($("[data-slick-index='" + nextSlide + "'] .rating_img:nth-child(" + i + ")"), {
                    ease: "back.out(1.7)",
                    duration: .3,
                    delay: i * 0.04 + 0.3,
                    x: -100,
                    opacity: 0
                });
            }
            gsap.from("[data-slick-index='" + nextSlide + "'] .avatar_img", {
                ease: "bounce.out",
                duration: 1,
                scale: 0,
                opacity: 0
            });
            gsap.from("[data-slick-index='" + nextSlide + "'] .name", {
                ease: "back.out(1.1)",
                duration: .7,
                delay: .3,
                scale: 0,
                opacity: 0
            });
            gsap.from("[data-slick-index='" + nextSlide + "'] .review", {
                ease: "back.out(1.1)",
                duration: .7,
                delay: .5,
                scale: .3,
                opacity: 0
            });
        });

    });

})(jQuery);
