'use strict';


$('.box').on('mousemove', function(e) {
  const
    box = $(this),
    positionX = e.pageX - box.offset().left;

  $('.box__mask').css({
    left: positionX,
    backgroundPosition: `-${positionX}px`
  });
});