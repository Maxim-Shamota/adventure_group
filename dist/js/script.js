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