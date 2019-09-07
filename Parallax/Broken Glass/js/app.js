const hero = document.querySelector('.hero');
const img = document.querySelector('.hero__img');


hero.addEventListener('mousemove', (e) => {
  const moveX = e.pageX * -1 / 15;
  const moveY = e.pageY * -1 / 15;

  img.style.backgroundPosition = `${moveX}px ${moveY}px`;
});
