'use strict';


window.onload = function() {
  document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('hamburger_arrow');
  });
};