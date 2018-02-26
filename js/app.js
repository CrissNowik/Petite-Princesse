$(document).ready(function(){

//main slider by OwlCarousel2
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
// end of main slider by OwlCarousel2

// smooth scrolling
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
// end smooth scrolling

//ordering items

var shopingList = [];
$('.gallery-photo').on('click', function (e){
  e.preventDefault();

  function adToList(x) {
    shopingList.push(x);
    shopingList.push('\n');
    return shopingList;
  };

  var item = $(this).data().item;
  adToList(item)

    $('.contact-form--textarea').val("Hej, Zamawiam następujące towary:" + '\n' + " " + shopingList.join(" "));
    $('.contact-form--textarea').html($('.contact-form--textarea').text().replace(/\n\r?/g, '<br/>'));
})

//end of ordering items


}); /*doc.ready.func END*/
