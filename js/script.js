$(document).ready(function(){
  $('.carousel').slick({
    arrows: false,
    vertical: true,
    infinite: false,
    verticalSwiping: true,
  });

  $('.tooltip').tooltipster({
   	theme: 'tooltipster-light',
    trigger: 'click'
  });

});

$(document).ready(function(){

  $('.form__text, .form__link').hide();

  $('form__button').click(function() {
    $('.form__text, .form__link').show();
  });

});
