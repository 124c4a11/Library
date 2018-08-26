'use strict';


$(document).on('mousemove', function(e) {
  $('.trail__item').css({ top: e.pageY, left: e.pageX});
});