'use strict';

$(window).on('scroll', () => {
  let scrollIndex = $(this).scrollTop();

  $('.hero__bg').css({
    filter: `blur(${scrollIndex / 100}px)`
  });
});