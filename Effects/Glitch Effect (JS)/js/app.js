const bg = document.getElementById('glitch');
const count = 20;


for (let i = 0; i < count; i++) {
  const glitchItem = document.createElement('div');

  glitchItem.className = 'glitch__item';

  bg.appendChild(glitchItem);
}


const glitchItems = document.querySelectorAll('.glitch__item');


setInterval(() => {
  glitchItems.forEach((item) => {
    item.style.top = Math.floor(Math.random() * 100) + 'vh';
    item.style.left = Math.floor(Math.random() * 100) + 'vw';
    item.style.width = Math.floor(Math.random() * 400) + 'px';
    item.style.height = Math.floor(Math.random() * 100) + 'px';
    item.style.backgroundPosition = Math.floor(Math.random() * 50) + 'px';
  });
}, 200)
