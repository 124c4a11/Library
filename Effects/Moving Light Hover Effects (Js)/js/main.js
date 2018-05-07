'use strict';


function moveLight(e) {
  const light = document.querySelector('.light');

  light.style.top = e.clientY - light.offsetHeight / 2 + 'px';
  light.style.left = e.clientX - light.offsetWidth / 2 + 'px';
}


document.addEventListener('mousemove', moveLight);