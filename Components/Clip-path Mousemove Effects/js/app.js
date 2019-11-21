const hero = document.querySelector('.hero');
const heroBg = hero.querySelector('.hero__bg');

hero.addEventListener('mousemove', (e) => {
  heroBg.style.setProperty('--x', `${e.clientX}px`);
  heroBg.style.setProperty('--y', `${e.clientY}px`);
});
