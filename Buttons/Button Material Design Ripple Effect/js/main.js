'use strict';


function getCoords(elem) {
  const coords = elem.getBoundingClientRect();
  return {
    top: coords.top + pageYOffset,
    left: coords.left + pageXOffset
  };
}


function rippleHandler(e) {
  const
    elem = this,
    elemCoords = getCoords(elem),
    ripple = document.createElement('span');

  ripple.className = 'ripple';

  elem.appendChild(ripple);

  ripple.style.top = (e.pageY - ripple.offsetHeight / 2) - elemCoords.top + 'px';
  ripple.style.left = (e.pageX - ripple.offsetWidth / 2) - elemCoords.left + 'px';

  setTimeout(() => {
    elem.removeChild(ripple);
  }, 2000);
}


window.onload = () => {
  document.querySelector('.btn_ripple').addEventListener('click', rippleHandler);
};