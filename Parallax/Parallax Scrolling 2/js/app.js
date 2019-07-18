const leftImg = document.querySelector('.hero__img_left');
const rightImg = document.querySelector('.hero__img_right');
const textImg = document.querySelector('.hero__img_text');

document.addEventListener('scroll', (e) => {
  const offset = window.pageYOffset;

  leftImg.style.width = `${100 + offset / 5}%`;
  rightImg.style.width = `${100 + offset / 5}%`;
  textImg.style.top = `${-offset / 5}%`;
});
