'use strict';


document.querySelector('.bg').onmousemove = (e) => {
  let
    pX = e.pageX / 2,
    pY = e.pageY / 2,
    rgbColor = `rgb(00, ${pX}, ${pY})`;

  e.target.style.backgroundColor = rgbColor;
};