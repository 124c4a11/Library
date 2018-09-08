'use strict';


$(document).ready(function() {
  $('.btn').confettiButton({
    // appears on a hover event
    hoverOnly: true,

    // the number of particles
    num: 100,

    // an array of colos
    colorArray: ['#FF5566', '#FFFFFF', '#F1C40F', '#2EBFF6', '#2ECC71'],

    // min/max distances
    minX: 5,
    minY: 5,
    maxX: 120,
    maxY: 120,

    // min/max scale levels
    minScale: 50,
    maxScale: 500,

    // animation speed
    speed: 1,

    // rotate the particles
    rotation: true
  });
});