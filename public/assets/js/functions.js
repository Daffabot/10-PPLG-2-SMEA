/*----------------------------- Navigation --------------------------*/
jQuery(window).on('scroll', function (){
    "use strict";

    // main menu
    if ($(this).scrollTop() > 700){
        $('#main-menu').addClass('navbar-fixed-top');
      } else {
        $('#main-menu').removeClass('navbar-fixed-top');
      }

    // menu toggle
    $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
    $(".toggle_nav_button").click(
      function(){
        var link = $(this);
        $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
          if ($(this).is(':visible')){
            link.text('-');
          } else {
            link.text('+');
          }
        });
      });

    // Scroll to top
    if ($(this).scrollTop() > 200) {
        $('#scroll-to-top').fadeIn('slow');
      } else {
        $('#scroll-to-top').fadeOut('slow');
      }

    // Single page Nav
    if ($(this).scrollTop() > 400) {
        $('.post-navigation').fadeIn('slow');
      } else {
        $('.post-navigation').fadeOut('slow');
      }
});





(function($) {
  "use strict";

  /*------------- Scroll to Top -----------------*/
  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


 /*----------- Scroll to Feature Section ----------*/ 
  $('#go-to-next').click(function() {
    $('html,body').animate({scrollTop:$('#about').offset().top - 150}, 1000);
  });


  /*------------------- Parallax ------------------*/
  jQuery(window).load(function(){
    $("#top-section").parallax("50%", 0.5);
    $("#video-section").parallax("50%", 0.5);  
    $("#quality").parallax("50%", 0.5);
    $("#testimonial").parallax("50%", 0.5);
    $("#quote").parallax("50%", 0.5);
    $("#subscribe").parallax("50%", 0.5);
    $("#page-name-sec").parallax("50%", 0.5);
    $("#footer-section").parallax("50%", 0.5);
  });


  /*------------  Skill Progress bar  ---------------*/
  $( '.progress-bar' ).each(function() { 
    var  barWidth = $(this).data('progress-value');
    $(this).css({
      'width': barWidth
    });
  });


  /*-------------------  Counter -----------------*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  /*-----------  Boxer Video and image Gallery  --------*/
      $(".boxer").boxer(); 



  /*------------------- Team Member Slider  --------------*/
  var teamSlider = $("#team-member-slider");

  teamSlider.owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    pagination : true,
    paginationNumbers: false,

    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 2],
    [1000, 3],
    [1200, 4],
    ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
    });



  /*--------------  Pricing Table Slider  -----------------*/
  var priceSlider = $("#pricing-table-slider");

  priceSlider.owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    pagination : true,
    paginationNumbers: false,

    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 2],
    [700, 2],
    [972, 4],
    [1200, 4],
    ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
    });



  /*---------------- Clients Logo Slider -----------------*/
  var logoSlider = $("#clients-logo-slider");

  logoSlider.owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    pagination : true,
    paginationNumbers: false,

    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 2],
    [700, 3],
    [1000, 5],
    [1200, 5],
    ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
    });



  /*---------------- Blog Post Slider -----------------*/
  var blogSlider = $("#blog-post-slider");

  blogSlider.owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    pagination : true,
    paginationNumbers: false,

    itemsCustom : [
    [0, 1],
    [450, 1],
    [600, 1],
    [700, 1],
    [972, 3],
    [1200, 3],
    ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
    });



  /*---------------- Similar Project Slider -----------------*/
  var SameProjectSlider = $("#similar-project-slider");

  SameProjectSlider.owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    pagination : true,
    paginationNumbers: false,

    itemsCustom : [
    [0, 1],
    [450, 2],
    [600, 2],
    [700, 3],
    [1000, 4],
    [1200, 4],
    ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
    });


})(jQuery);



/*-------------------------- Portfolio Item Filter -----------------------*/
(function ($) {
  "use strict";
  var $container = $('#works-item'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 1,
    columnWidth = 0;
    if (w > 960) {
      columnNum  = 4;
    } 
     else if (w > 640) {
      columnNum  = 3;
    }  
     else if (w > 360) {
      columnNum  = 2;
    } 
    columnWidth = Math.floor(w/columnNum);
    $container.find('.item').each(function() {
      var $item = $(this),
      multiplier_w = $item.attr('class').match(/item-w(\d)/),
      multiplier_h = $item.attr('class').match(/item-h(\d)/),
      width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
      height = multiplier_h ? columnWidth*multiplier_h[1]*0.7-10 : columnWidth*0.7-10;
      $item.css({
        width: width,
        height: height
      });
    });
    return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope();
  $(window).smartresize(isotope);

  $('.portfolioFilter a').click(function(){
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 
}
(jQuery)
);




/*------------------------------ SmoothScroll (for Mouse Wheel) v1.2.1 ----------------------*/
(function ($) {
  var defaultOptions = {
    frameRate: 150,
    animationTime: 1200,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1
  }, options = defaultOptions,
  direction = {
    x: 0,
    y: 0
  }, root = 0 <= document.compatMode.indexOf("CSS") || !document.body ? document.documentElement : document.body,
  que = [],
  pending = !1,
  lastScroll = +new Date;

  function scrollArray(a, b, c, d) {
    d || (d = 1E3);
    directionCheck(b, c);
    if (1 != options.accelerationMax) {
      var e = +new Date - lastScroll;
      e < options.accelerationDelta && (e = (1 + 30 / e) / 2, 1 < e && (e = Math.min(e, options.accelerationMax), b *= e, c *= e));
      lastScroll = +new Date
    }
    que.push({
      x: b,
      y: c,
      lastX: 0 > b ? 0.99 : -0.99,
      lastY: 0 > c ? 0.99 : -0.99,
      start: +new Date
    });
    if (!pending) {
      var q = a === document.body,
      p = function (e) {
        e = +new Date;
        for (var h = 0, k = 0, l = 0; l < que.length; l++) {
          var f = que[l],
          m = e - f.start,
          n = m >= options.animationTime,
          g = n ? 1 : m / options.animationTime;
          options.pulseAlgorithm && (g = pulse(g));
          m = f.x * g - f.lastX >> 0;
          g = f.y * g - f.lastY >> 0;
          h += m;
          k += g;
          f.lastX += m;
          f.lastY += g;
          n && (que.splice(l, 1), l--)
        }
        q ? window.scrollBy(h, k) : (h && (a.scrollLeft += h), k && (a.scrollTop += k));
        b || c || (que = []);
        que.length ? requestFrame(p, a, d / options.frameRate + 1) : pending = !1
      };
      requestFrame(p, a, 0);
      pending = !0
    }
  }

  function wheel(a) {
    var b = overflowingAncestor(a.target);
    if (!b || a.defaultPrevented) return !0;
    var c = a.wheelDeltaX || 0,
    d = a.wheelDeltaY || 0;
    c || d || (d = a.wheelDelta || 0);
    1.2 < Math.abs(c) && (c *= options.stepSize / 120);
    1.2 < Math.abs(d) && (d *= options.stepSize / 120);
    scrollArray(b, -c, -d);
    a.preventDefault()
  }
  var cache = {};
  setInterval(function () {
    cache = {}
  }, 1E4);
  var uniqueID = function () {
    var a = 0;
    return function (b) {
      return b.uniqueID || (b.uniqueID = a++)
    }
  }();

  function setCache(a, b) {
    for (var c = a.length; c--;) cache[uniqueID(a[c])] = b;
      return b
  }

  function overflowingAncestor(a) {
    var b = [],
    c = root.scrollHeight;
    do {
      var d = cache[uniqueID(a)];
      if (d) return setCache(b, d);
      b.push(a);
      if (c === a.scrollHeight) {
        if (root.clientHeight + 10 < c) return setCache(b, document.body)
      } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return setCache(b, a)
  } while (a = a.parentNode)
}

function directionCheck(a, b) {
  a = 0 < a ? 1 : -1;
  b = 0 < b ? 1 : -1;
  if (direction.x !== a || direction.y !== b) direction.x = a, direction.y = b, que = [], lastScroll = 0
}
var requestFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a, b, c) {
    window.setTimeout(a, c || 1E3 / 60)
  }
}();

function pulse_(a) {
  var b;
  a *= options.pulseScale;
  1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), a = 1 - Math.exp(-(a - 1)), b += a * (1 - b));
  return b * options.pulseNormalize
}

function pulse(a) {
  if (1 <= a) return 1;
  if (0 >= a) return 0;
  1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1));
  return pulse_(a)
}
window.addEventListener("mousewheel", wheel, !1);
})(jQuery);



