'use strict';


$(document).ready(function() {
  $('.menu__toggle').on('click', function() {
    $(this).toggleClass('menu__toggle_open');

    $('.menu__table')
      .removeClass('menu__table_closed')
      .toggleClass('menu__table_open');
  });
});