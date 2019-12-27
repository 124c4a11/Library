window.addEventListener('scroll', () => {
  const wave = document.querySelector('.water__wave');
  const scroll = window.pageYOffset;
  const dh = document.body.clientHeight;
  const wh = window.innerHeight;
  const percent = Math.floor((scroll / (dh - wh)) * 100);

  wave.style.top = `${percent}%`;
});
