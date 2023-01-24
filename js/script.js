let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();

      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  
  
  
  
 
   //slide down menu
   $(".menu-name").click(function (e) {
    e.preventDefault();
    $(this).siblings(".cats-display-2").slideToggle(400);
    $(".menu-name").not(this).siblings(".cats-display-2").slideUp(400);
    if ($(window).width() <= 991) {
      $(this).toggleClass("active");
      $(".menu-name").not(this).removeClass("active");
    }
  });}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 112) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
 

  //////////////////** scroll down btn   **//////////////////////////////
  var atr = 0;
    $('.scroll-down-btn').click(function () {
        atr = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(atr).offset().top
        }, 1000);

        return false;
    });
  

    ////////////////////** products tabs  **///////////////////////////////////////////////////
    tabControl();

    /*
    We also apply the switch when a viewport change is detected on the fly
    (e.g. when you resize the browser window or flip your device from 
    portrait mode to landscape). We set a timer with a small delay to run 
    it only once when the resizing ends. It's not perfect, but it's better
    than have it running constantly during the action of resizing.
    */
    var resizeTimer;
    $(window).resize('resize', function(e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        tabControl();
      }, 250);
    });
    
    /*
    The function below is responsible for switching the tabs when clicked.
    It switches both the tabs and the accordion buttons even if 
    only the one or the other can be visible on a screen. We prefer
    that in order to have a consistent selection in case the viewport
    changes (e.g. when you esize the browser window or flip your 
    device from portrait mode to landscape).
    */
    function tabControl() {
      var tabs = $('.tabbed-content').find('.tabs');
      if(tabs.is(':visible')) {
        tabs.find('a').click('click', function(event) {
          event.preventDefault();
          var target = $(this).attr('href'),
              tabs = $(this).parents('.tabs'),
              buttons = tabs.find('a'),
              item = tabs.parents('.tabbed-content').find('.item');
          buttons.removeClass('active');
          item.removeClass('active');
          $(this).addClass('active');
          $(target).addClass('active');
        });
      } else {
        $('.item').click('click', function() {
          var container = $(this).parents('.tabbed-content'),
              currId = $(this).attr('id'),
              items = container.find('.item');
          container.find('.tabs a').removeClass('active');
          items.removeClass('active');
          $(this).addClass('active');
          container.find('.tabs a[href$="#'+ currId +'"]').addClass('active');
        });
      } 
    }
 
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
 
  $(".footer-accordion").click(function () {
    
   
    
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", "200px");
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});

$('[data-fancybox]').fancybox({
  // Options will go here
  buttons : [
    'close'
  ],
  wheel : false,
  transitionEffect: "slide",
   // thumbs          : false,
  // hash            : false,
  loop            : true,
  // keyboard        : true,
  toolbar         : false,
  // animationEffect : false,
  // arrows          : true,
  clickContent    : false
});


///////// **clients-section** /////////
var screen = new Swiper(".clients-section .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".clients-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".clients-section .swiper-btn-next",
    prevEl: ".clients-section .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});








   