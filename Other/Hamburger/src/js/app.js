'use strict';

import hamburger from './modules/hamburger';

$(document).ready(function() {
  if ($('.hamburger').length) {
    hamburger();
  }
});