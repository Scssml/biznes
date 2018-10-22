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
    var btn = $(this);
    var timeout = 200;
    btn.addClass('menu-btn--hidden');

    if(btn.hasClass('menu-btn--active')) {
      timeout = 0;
    }

    setTimeout(function() {
      btn.removeClass('menu-btn--hidden');
      btn.toggleClass('burger--active menu-btn--active');
    }, timeout);
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

  $(document).on('click', '.select-custom', function(e) {
    var select = $(this);
    var selectList = $(this).find('.select-custom__list');
    if(!selectList.is(e.target) && selectList.has(e.target).length === 0 && select.hasClass('select-custom--active')) {
      select.removeClass('select-custom--active');
      selectList.removeClass('select-custom__list--active');
    } else {
      select.addClass('select-custom--active');
      selectList.addClass('select-custom__list--active');
    }
  });

  $(document).on('touchend', '.select-custom', function(e) {
    $(this).trigger('click');
  });

  $(document).on('click', function(e) {
    var select = $('.select-custom');
    if(!select.is(e.target) && select.has(e.target).length === 0) {
      $('.select-custom__list--active').removeClass('select-custom__list--active');
      select.removeClass('select-custom--active');
    }
  });

  $(document).on('click', '.select-custom__item', function() {
    var select = $(this).parents('.select-custom');
    var selectList = select.find('.select-custom__list');
    var value = $(this).data('value');
    var valueName = $(this).text();

    select.find('.select-custom__item--selected').removeClass('select-custom__item--selected');
    $(this).addClass('select-custom__item--selected');

    select.find('.select-custom__value').text(valueName);
    select.find('input').text(value);

    setTimeout(function() {
      select.removeClass('select-custom--active');
      selectList.removeClass('select-custom__list--active');
    }, 50);
  });

  $('.slider-sum').slider({
    range: true,
    create: function( e, ui ) {
      $(e.target).slider('option', 'min', $(e.target).data('min'));
      $(e.target).slider('option', 'max', $(e.target).data('max'));
      $(e.target).slider('option', 'values', [$(e.target).data('min'), $(e.target).data('max')]);
      $(e.target).slider('option', 'step', $(e.target).data('step'));
    },
    slide: function( e, ui ) {
      var select = $(e.target).parents('.select-custom');
      var inputMin = select.find('.select-custom__min');
      var inputMax = select.find('.select-custom__max');
      var selectValue = select.find('.select-custom__value');

      inputMin.val(ui.values[0]);
      inputMax.val(ui.values[1]);
      selectValue.text(ui.values[0] + '₽ - ' + ui.values[1] + '₽');
    }
  });

  $('.card, .card-vertical, .card-horizontal, .select-custom').on('touchend', function() {});
  
});