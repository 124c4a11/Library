'use strict';


$(document).ready(function() {
  $(window).on('scroll', function() {
    const
      $window = $(this),
      $menu = $('.menu'),
      menuHeight = Math.round($menu.innerHeight()),
      distanceToMenu = $window.height() - menuHeight,
      windowScrollTop = $window.scrollTop();

    if (windowScrollTop > distanceToMenu && !$menu.hasClass('menu_fixed')) {
      $menu.addClass('menu_fixed');
    }

    if (windowScrollTop < distanceToMenu && $menu.hasClass('menu_fixed')) {
      $menu.removeClass('menu_fixed');
    }
  });
});