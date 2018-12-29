$(document).ready(function() {
  $(window).scroll(function() {
    let scrollPos = $(this).scrollTop();

    $('.hero').css('background-size', `${100 + scrollPos}%`);
  });
});