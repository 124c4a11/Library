'use strict'; 


$(document).ready(function() {
  const $window = $(window);

  $window.on('scroll', function() {
    $('.hero').css('opacity', 1 - $window.scrollTop() / 900);
  });
});