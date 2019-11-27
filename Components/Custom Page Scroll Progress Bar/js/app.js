window.addEventListener('scroll', () => {
  const windowScrollTop = window.pageYOffset;
  const dh = document.documentElement.offsetHeight;
  const wh = window.innerHeight;
  const scrollPercent = (windowScrollTop / (dh - wh)) * 100;

  document.getElementById('progressbar').style.height = `${scrollPercent}%`;
})
