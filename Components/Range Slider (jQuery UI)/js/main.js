'use strict';

var Range = (function() {
  function _setValues($field, $rangeSlider, unit) {
    var value = $field.val();

    if (value.indexOf(unit) === 0) value = parseInt(value.slice(1));

    if ($field.hasClass('range__field_min')) {
      $rangeSlider.slider('values', 0, value);
    }

    if ($field.hasClass('range__field_max')) {
      $rangeSlider.slider('values', 1, value);
    }

    $field.val(unit + ' ' + value);
  }

  function _getValues($rangeSlider) {
    var
      $container = $rangeSlider.closest('.range'),
      $minField = $container.find('.range__field_min'),
      $maxField = $container.find('.range__field_max'),
      unit = $rangeSlider.data('unit');

    var values = $rangeSlider.slider('option', 'values');

    $minField.val(unit + ' ' + values[0]);
    $maxField.val(unit + ' ' + values[1]);
  }

  function init() {
    $('.range__slider').each(function() {
      var
        $rangeSlider = $(this),
        $container = $rangeSlider.closest('.range'),
        $minField = $container.find('.range__field_min'),
        $maxField = $container.find('.range__field_max'),
        min = parseInt($rangeSlider.data('min')),
        max = parseInt($rangeSlider.data('max')),
        unit = $rangeSlider.data('unit');

      $rangeSlider.slider({
        range: true,
        min: min,
        max: max,
        values: [120, 780],
        slide: function(e, ui) {
          _getValues($rangeSlider);
        },
        create: function() {
          _getValues($rangeSlider);
        }
      });

      $minField.change(function() {
        _setValues($(this), $rangeSlider, unit);
      });

      $maxField.change(function() {
        _setValues($(this), $rangeSlider, unit);
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