window.onload = function() {

  const pageBg = document.querySelector('.page-bg');

  window.addEventListener('scroll', function(e) {
    pageBg.style.backgroundPositionX = `${-parseInt(window.pageYOffset)}px`;
  });

};
