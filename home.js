$(document).ready(function () {
    var menu = $('.menunav'); // ahora usamos clase en lugar de id
    var menuOffset = menu.offset().top;
  
    // Sticky menu al hacer scroll
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= menuOffset) {
        menu.addClass('sticky');
      } else {
        menu.removeClass('sticky');
      }
    });
});
  
//Option 2 - jQuery Smooth Scrolling
$('.menunav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});

// $('menunav a').on('click', function (e) {
//     e.preventDefault();
  
//     var destino = $(this).attr('href');        // ← Aquí se obtiene el ID del enlace
//     var offset = $(destino).offset().top - menu.outerHeight();
  
//     $('html, body').animate({
//       scrollTop: offset
//     }, 600);
//   });
  
  