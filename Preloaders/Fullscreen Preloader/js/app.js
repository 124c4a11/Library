'use stirct';


window.addEventListener('load', function() {
  let progress = 0;

  const interval = setInterval(() => {
    document.querySelector('.preloader__progress-bar').style.width = `${progress}%`;
    document.querySelector('.preloader__progress').innerHTML = `${progress}%`;

    progress++;

    if (progress > 100) clearInterval(interval);
  }, 50);
});