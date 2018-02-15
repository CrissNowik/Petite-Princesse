$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    center: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout:5000,
    loop:true,
    margin:0,
    nav:true,
    navText: ["<", ">"],
    responsive:{
        0:{
            items:1,
            nav:true,
            autoplay: true,
        },
        600:{
            items:1,
            nav:true,
            autoplay: true,
        },
        1000:{
            items:1,
            nav:true,
            autoplay: true,
        }
    }
})


}); /*doc.ready.func END*/
