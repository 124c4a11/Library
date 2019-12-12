const hero = document.querySelector('.hero');
const heroTitles = hero.querySelectorAll('.hero__title');


hero.addEventListener('mousemove', (e) => {
  const x = (hero.clientWidth - e.pageX * 10) / 100;
  const y = (hero.clientHeight - e.pageY * 10) / 100;

  console.log(x);

  heroTitles.forEach((title) => {
    title.style.transform = `translate(${x}px, ${y}px)`;
  });
});
