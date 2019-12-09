const curve = document.querySelector('.section__curve');


window.addEventListener('scroll', () => {
  const scaleVal = window.pageYOffset / -500 + 1;

  curve.style.transform = `scaleY(${scaleVal})`;
});
