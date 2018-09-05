'use strict';


const
  $svg = $('svg').drawsvg({ duration: 4000 }),
  $doc = $(document),
  $win = $(window),
  max = $doc.height() - $win.height();


$win.on('scroll', function() {
  let progress = $win.scrollTop() / max;

  $svg.drawsvg('progress', progress);
});