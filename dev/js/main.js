$(document).ready(function(){

  $('.slider').owlCarousel({
    items: 6,
    loop: true,
    nav: false,
    margin: 10,
    dots: false,
    nav:true,
    autoWidth: true
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

  $('.tabs__link').on('click', function() {
    var id = $(this).attr('href');

    $('.tabs__link--active').removeClass('tabs__link--active');
    $('.tabs__block--active').removeClass('tabs__block--active');

    $(this).addClass('tabs__link--active');
    $(id).addClass('tabs__block--active');

    return false;
  });

});