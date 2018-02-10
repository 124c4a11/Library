'use strict';

var Range = (function() {
  var
    $rangeSlider = $('.range__slider');

  function _insertValues($this) {
    var
      $container = $this.closest('.range'),
      $minField = $container.find('.range__field_min'),
      $maxField = $container.find('.range__field_max'),
      unit = $this.data('unit');

    var values = $this.slider('option', 'values');

    $minField.text(unit + ' ' + values[0]);
    $maxField.text(unit + ' ' + values[1]);
  }

  function init() {
    $rangeSlider.each(function() {
      var
        $this = $(this),
        min = parseInt($this.data('min')),
        max = parseInt($this.data('max'));

      $this.slider({
        range: true,
        min: min,
        max: max,
        values: [min, max],
        slide: function(e, ui) {
          _insertValues($this);
        },
        create: function() {
          _insertValues($this);
        }
      });
    });
  }

  return {
    init: init
  };
})();


$(document).ready(function() {
  if ($('.range__slider').length) {
    Range.init();
  }
});