$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
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
    // $('.nonloop').owlCarousel({
    //     center: true,
    //     items:2,
    //     loop:false,
    //     margin:10,
    //     responsive:{
    //         600:{
    //             items:4
    //         }
    //     }
    // });
})