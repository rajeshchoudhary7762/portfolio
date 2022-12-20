$(document).ready(() => {
    $('.portfolio-owl').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        // stagePadding: 50,
        autoplay: true,
        responsive:{
            0: {
                items:1
            },
            500:{
                items:2
            },
            900: {
                items:3
            },
            1300:{
                items:4
            }
        }
    });

    $('.testimonial-owl').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        // autoplay: true,
        responsive:{
            0: {
                items:1
            },
            600:{
                items:2
            },
            900: {
                items:3
            }
        }
    });
})