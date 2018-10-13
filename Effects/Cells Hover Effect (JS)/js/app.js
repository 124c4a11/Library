'use strict';


const cells = document.querySelector('.cells');


for(let i = 0; i < 5000; i++) {
  const cell = document.createElement('div');
  cell.className = 'cells__item';
  cells.appendChild(cell);
}