$(document).ready(function() {
  $('.rotating-text').on('mousemove', function(e) {
    const
      centerX = $(this).width() / 2,
      moveX = (centerX - e.offsetX) / 50;

    $(this).css({ 'transform': `perspective(500px) rotateY(${moveX}deg)` });
  });
});