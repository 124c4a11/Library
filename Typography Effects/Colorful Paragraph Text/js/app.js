'use strict';


$(document).ready(function() {
  $('.colorful').each(function() {
    $(this).html(
      $(this)
        .text()
          .replace(/(\w)/g, '<span>$1</span>')
    );
  });
});