'use strict';


window.onload = function() {
  let prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function() {
    const pageHeader = document.querySelector('.page-header');
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      pageHeader.style.transform = 'translateY(0)';
    } else {
      pageHeader.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;
  });
};