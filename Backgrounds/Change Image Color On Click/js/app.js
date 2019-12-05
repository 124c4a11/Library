const hero = document.getElementById('hero');
const heroBg = hero.querySelector('.hero__bg');


function randomColor() {
  return Math.floor(Math.random() * 255);
}


hero.addEventListener('click', () => {
  heroBg.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});


console.log('app');
