$(document).ready(function() {

  //main slider by OwlCarousel2
  $('.owl-carousel').owlCarousel({
    center: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<", ">"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoplay: true,
      },
      560: {
        items: 1,
        nav: true,
        autoplay: true,
      },
      1120: {
        items: 1,
        nav: true,
        autoplay: true,
      }
    }
  });


  //END main slider by OwlCarousel2
  //
  //ordering items
  let shopingList = [];
  $('.gallery-photo').on('click', function(e) {
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
  //
  // form validation

  function checkName(){
    let name = $('#name');
    if (name.val().length > 2 && name.val().length < 31) {
      if (name.val().includes("huj")) {
        name.val("Nieładnie tak pisać;-)").css('color', 'red');
      }
    } else {
      if (name.val().length < 3) {
        name.val("Podaj pełne imię;-)").css('color', 'red');
      } else if(name.val().length > 30) {
        name.val("Skróć troszkę podpis ;-)").css('color', 'red');
      }
    }
  };

  function checkMail(){
    let mail = $('#mail');
    if (mail.val().length > 5 && mail.val().includes("@") && mail.val().length < 31) {
    // TODO: msg in val()
    } else {
    // TODO: msg in val()
    }
  };

  function checkMsg(){
    let msg = $('#massage');
    if (msg.val().length > 20 && msg.val().length < 1000) {
      // TODO: msg in val()
    } else {
      // TODO: msg in val()
    }
  };

$("#send-btn").click(function(e){
    e.preventDefault();
    checkName();
    checkMail();
    checkMsg();
  });

  // END of form validation
  //
  // smooth scrolling
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    let target = this.hash;
    let $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
  //END smooth scrolling
  //
  // menu <=> mobile menu
  $('#hamburger').on('click', function(e) {
    e.preventDefault();
    $('.menu-mobile--drop').toggle("slow");
  });
  //END menu <=> mobile menu
  //
}); /*doc.ready.func END*/
