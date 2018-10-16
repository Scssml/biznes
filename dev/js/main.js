$(document).ready(function(){

  $('.slider').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    margin: 20,
    dots: true,
    autoplay: true
  });

  $('input[type="tel"]').inputmask({mask:"+7 (999) 999-99-99"});

  $('.menu-btn').on('click', function(){
    $(this).toggleClass('burger--active menu-btn--active');
    $('.main-menu').toggleClass('main-menu--active');
    $('body').toggleClass('no-scrol');
    return false;
  });

  $('.fancybox').fancybox({
    minWidth: '250',
    autoCenter: false,
    wrapCSS: 'popup-block',
    helpers: {
      overlay: {
        closeClick: true,
        locked: false
      }
    }
  });

});