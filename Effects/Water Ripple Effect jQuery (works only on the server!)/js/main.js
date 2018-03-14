'use strict';


$(document).ready(function() {
  if ($('.hero').length) {
    $('.hero').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04
    });
  }
});