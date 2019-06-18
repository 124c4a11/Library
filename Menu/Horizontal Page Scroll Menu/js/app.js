$(document).ready(function() {
  const $menu = $('.menu');

  let docWidth = $('body').width();
  let menuWidth = $menu.width();

  $(window).on('resize', function() {
    docWidth = $('body').width();
    menuWidth = $menu.width();
  });

  $(document).on('mousemove', function(e) {
    const mouseX = e.pageX;
    const offset = mouseX / docWidth * menuWidth - mouseX / 2;

    $menu.css({
      'transform': `translate3d(${-offset}px, 0, 0)`
    });
  });
});
