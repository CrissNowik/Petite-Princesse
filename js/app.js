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

    $('#massage').val("Hej, Zamawiam następujące towary:" + '\n' + " " + shopingList.join(" "));
    $('#massage').html($('.contact-form--textarea').text().replace(/\n\r?/g, '<br/>'));
  })
  //END of ordering items
  //
  // deleting issues from shopingList

  function deletingShopingList() {
    let txtArea = $('#massage');

    txtArea.keyup(function(e){
      if (e.which===8) {
        shopingList = [];
        shopingList.push(txtArea.val());
      }
      console.log("test", shopingList);
    })
  };

  deletingShopingList();
  // END of deleting issues from shopingList
  //
  // form validation

  function checkName() {
    let name = $('#name');
    if (name.val().length > 2 &&
      name.val().length < 31 &&
      (
        name.val() !== "Nieładnie tak pisać;-)" ||
        name.val() !== "Podaj pełne imię;-)" ||
        name.val() !== "Skróć troszkę podpis ;-)"
      )
    ) {
      if (name.val().includes("huj")) {
        name.val("Nieładnie tak pisać;-)").css('color', 'red');
      }
    } else {
      if (name.val().length < 3) {
        name.val("Podaj pełne imię;-)").css('color', 'red');
      } else if (name.val().length > 30) {
        name.val("Skróć troszkę podpis ;-)").css('color', 'red');
      }
    }
  };

  function checkMail() {
    let mail = $('#mail');
    if (mail.val().length > 5 &&
      mail.val().includes("@") &&
      mail.val().length < 31 &&
      (
        mail.val() !== "Na pewno to prawidłowy adres?;-)" ||
        mail.val() !== "Adres @ chyba jest niepełny;-)" ||
        mail.val() !== "Zbyt długi adres e-mail ;-("
      )
    ) {
      if (mail.val().includes("huj")) {
        mail.val("Na pewno to prawidłowy adres?;-)").css('color', 'red');
      }
    } else {
      if (mail.val().length < 6) {
        mail.val("Adres @ chyba jest niepełny;-)").css('color', 'red');
      } else if (mail.val().length > 30) {
        mail.val("Zbyt długi adres e-mail ;-(").css('color', 'red');
      }
    }
  };

  function checkMsg() {
    let msg = $('#massage');
    if (msg.val().length > 20 &&
      msg.val().length < 1000 &&
      (
        msg.val() !== "Nieładnie tak pisać;-)" ||
        msg.val() !== "Napisz coś więcej;-)"
      )
    ) {
      if (msg.val().includes("huj")) {
        msg.val("Nieładnie tak pisać;-)").css('color', 'red');
      }
    } else {
      if (msg.val().length < 21) {
        msg.val("Napisz coś więcej;-)").css('color', 'red');
      }
    }
  };

  function changeColor(inputName) {
    inputName.focus(function() {
      inputName.css('color', '#A22DA2');
    })
  };

  function inputColors() {
    let name = $('#name');
    let mail = $('#mail');
    let msg = $('#massage');

    changeColor(name);
    changeColor(mail);
    changeColor(msg);
  };

  // requests:

  $("#send-btn").click(function(e) {
    e.preventDefault();
    checkName();
    checkMail();
    checkMsg();
  });

  inputColors();

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
