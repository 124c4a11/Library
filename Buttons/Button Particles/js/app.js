'use strict';


$(document).ready(() => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $('.btn').on('click', function() {
    const
      $btn = $(this),
      radius = $(this).attr('data-radius'),
      particles = $(this).attr('data-particle');

    // add particles on click
    for (let i = 0; i < particles; i++) {
      $btn.append($('<span class="btn__particle"></span>'));
    }

    $btn
      .addClass('btn_active')
      .find('.btn__particle')
        .each(function() {
          $(this).animate({
            top: getRandomInt(-radius, radius),
            right: getRandomInt(-radius, radius),
            bottom: getRandomInt(-radius, radius),
            left: getRandomInt(-radius, radius),
            opacity: 0
          }, 600, function() {
            $(this).remove();
            $btn.removeClass('btn_active');
          });
        })
  });
});