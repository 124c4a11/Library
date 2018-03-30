'use strict';


function parallaxScroll() {
  let scrolled = window.pageYOffset;

  document.querySelector('.parallax-layer-1').style.top = `${0 - (scrolled * 0.25)}px`;
  document.querySelector('.parallax-layer-2').style.top = `${0 - (scrolled * 0.4)}px`;
  document.querySelector('.parallax-layer-3').style.top = `${0 - (scrolled * 0.75)}px`;
}


window.onload = () => {
  document.addEventListener('scroll', parallaxScroll);
}