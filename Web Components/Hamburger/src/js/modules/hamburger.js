'use strict';

export default function() {
  $('.hamburger').on('click', function() {
    $(this).toggleClass('hamburger_close');
  });
}