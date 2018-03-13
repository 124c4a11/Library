'use strict';


$(document).ready(function() {
  if ($('.hero').length) {
    $('.hero').ripples({
      igeUrl: 'img/1.jpg',
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04
    });
  }
});