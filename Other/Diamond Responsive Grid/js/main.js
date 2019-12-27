'use strict;'


$(document).ready(() => {
  $(".diamond-grid").diamonds({
    size : 220, // Size of diamonds in pixels. Both width and height.
    gap : 5, // Pixels between each square.
    hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
    autoRedraw : true, // Auto redraw diamonds when it detects resizing.
    itemSelector : ".item" //
  });
});