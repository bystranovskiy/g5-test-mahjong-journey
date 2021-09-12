"use strict";

(function ($) {

    $(window).on("load", function () {

        gsap.to(".preloader", {
            duration: .7,
            delay: .3,
            scale: 2,
            display: 'none',
            opacity: 0
        });

        gsap.from(".eva-thinking_img", {
            ease: "back.out(1.7)",
            duration: 1,
            delay: 1,
            x: -500,
            opacity: 0
        });

        gsap.from(".mj-tiles_img", {
            ease: "back.out(1.7)",
            duration: 1,
            delay: 1,
            x: 500,
            opacity: 0
        });

        gsap.from(".mahjong-logo_img", {
            ease: "bounce.out",
            duration: 1,
            delay: 1.4,
            y: -500,
            opacity: 0
        });

        gsap.from(".slogan", {
            ease: "back.out(1)",
            duration: .7,
            delay: 1.4,
            y: 500,
            opacity: 0
        });

        gsap.from(".btn-play_wrapper", {
            ease: "back.out(3)",
            duration: .7,
            delay: 2,
            scale: 0,
            opacity: 0
        });


        gsap.from(".baloon_img", {
            scrollTrigger: ".baloon",
            duration: 2,
            y: 500,
            x: -100,
            delay: .5,
        });
        gsap.from(".baloon-2_img__01", {
            scrollTrigger: ".baloon-2",
            duration: 2,
            y: 500,
            x: 100,
            delay: .7,
        });
        gsap.from(".baloon-2_img__02", {
            scrollTrigger: ".baloon-2",
            duration: 2,
            y: 500,
            x: 100,
            delay: .5,
        });

        gsap.from(".wooden-stand_inner", {
            ease: "bounce.out",
            scrollTrigger: ".wooden-stand",
            duration: 1,
            scale: 0,
            opacity: 0,
            delay: .5,
        });

        gsap.from(".cloud_img", {
            scrollTrigger: ".cloud",
            duration: 2,
            x: -200,
            opacity: 0,
            delay: .3,
        });
        gsap.from(".cloud-2_img", {
            scrollTrigger: ".cloud-2",
            duration: 2,
            x: 200,
            opacity: 0,
            delay: .5,
        });

        gsap.from(".hourglass_img", {
            ease: "bounce.out",
            scrollTrigger: ".reviews-slider",
            duration: 1,
            scale: 0,
            opacity: 0,
            delay: .5,
        });

        gsap.from(".section-features h2", {
            ease: "bounce.out",
            scrollTrigger: ".section-features",
            duration: 1,
            scale: 0,
            opacity: 0,
        });

        gsap.from(".smiling-cat_img", {
            ease: "back.out(1.7)",
            scrollTrigger: ".smiling-cat",
            duration: 1,
            x: 500,
            opacity: 0
        });

        gsap.from(".features-list li", {
            ease: "back.out(1.7)",
            scrollTrigger: ".features-list li",
            duration: 1,
            stagger: 0.1,
            x: -500,
            opacity: 0
        });

    })

})(jQuery);
