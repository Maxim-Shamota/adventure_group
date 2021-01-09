window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.headline-menu__humburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('headline-menu__humburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('headline-menu__humburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

// Modal
$('[data-modal=popup]').on('click', function() {
    $('.overlay,#popup').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay,#popup').fadeOut('slow');
});


// Vertical menu
// Cache selectors
var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});


// main-slider
new Swiper('.main__slider-container', {
  // //стрелки 
  // navigation: {
  //   nextEl: '.',
  //   prevEl: '.'
  // }

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  //бесконечность
  loop: true,

  //эффект исчезания
  effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

  //автопрокрутка
  autoplay: {
    //pausa
    delay: 3000
  },
});


//case__main
new Swiper('.case__main-swiper-container', {
  navigation: {
    nextEl: '.case__main-pointer-right',
    prevEl: '.case__main-pointer-left'
  },

  //бесконечность
  loop: true
});

//case__video
new Swiper('.case__video-swiper-container', {
  navigation: {
    nextEl: '.case__video-pointer-right',
    prevEl: '.case__video-pointer-left'
  },

  //бесконечность
  loop: true
});

//case__foto-gallery
new Swiper('.case__foto-gallery-swiper-container', {
  navigation: {
    nextEl: '.case__foto-gallery-pointer-right',
    prevEl: '.case__foto-gallery-pointer-left'
  },

  //бесконечность
  loop: true
});
