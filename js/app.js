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
//END main slider by OwlCarousel2
//ordering items

let shopingList = [];
$('.gallery-photo').on('click', function (e){
  e.preventDefault();

  function adToList(x) {
    shopingList.push(x);
    shopingList.push('\n');
    return shopingList;
  };

  let item = $(this).data().item;
  adToList(item)

    $('.contact-form--textarea').val("Hej, Zamawiam następujące towary:" + '\n' + " " + shopingList.join(" "));
    $('.contact-form--textarea').html($('.contact-form--textarea').text().replace(/\n\r?/g, '<br/>'));
})

//END of ordering items
// smooth scrolling
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    let target = this.hash;
	    let $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
//END smooth scrolling
// menu <=> mobile menu
var menu = document.getElementById("drop");
var hamb = document.getElementById("hamburger");
// change MENU <-> full menu
var mobile = window.matchMedia("(max-width:760px)");
var flipMenu = function(mobile) {
  if (mobile.matches) {
    menu.style.display = "none";
    hamb.style.display = "block";
  }
  else {
    menu.style.display = "flex";
    hamb.style.display = "none";
  }
}

mobile.addListener(function(mobile){
  if (mobile.matches) {
    menu.style.display = "none";
    hamb.style.display = "block";
  }
  else {
    menu.style.display = "flex";
    menu.style.marginLeft = "0";
    hamb.style.display = "none";
  }
});

flipMenu(mobile);
//dropdown list look
hamb.addEventListener("click", openList);

function openList() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }else{
    menu.style.display = "block";
    menu.style.marginLeft = "20%";
    menu.style.position = "absolute";
  }
};


//END menu <=> mobile menu

}); /*doc.ready.func END*/
