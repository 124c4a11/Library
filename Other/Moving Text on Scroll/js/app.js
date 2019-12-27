'use strict'


function moveText() {
  const movingText = document.querySelector('.moving-text');
  let lft = window.pageYOffset / 4 + 'px';

  movingText.style.left = lft;
}


window.addEventListener('scroll', moveText);