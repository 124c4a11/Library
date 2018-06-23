'use strict';


$(window).on('scroll', function() {
  let
    winHeight = $(this).height(),
    winScrollTop = $(this).scrollTop(),
    docHeight = $(document).height(),
    scrolled = (winScrollTop / (docHeight - winHeight)) * 100;

  $('.scrollprogress').css('width', (scrolled + '%'));
});