'use strict';


const bg = document.querySelector('.bg');
const glass = document.querySelector('.glass');


bg.onmousemove = (e) => {
  glass.style.top = `${e.pageY * 1}px`;
  glass.style.left = `${e.pageX * 1}px`;
};