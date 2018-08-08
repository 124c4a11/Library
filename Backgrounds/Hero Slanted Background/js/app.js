'use strict'


window.onload = function() {
  const
    hero = document.querySelector('.hero'),
    heroBg = document.querySelector('.hero__bg'),
    showBgBtn = document.querySelector('.hero__show-bg-btn'),
    hideBgBtn = document.querySelector('.hero__hide-bg-btn');

  function showHeroBg() {
    if (!hero.classList.contains('hero_bg-visible')) {
      hero.classList.add('hero_bg-visible');
    }
  }
  showHeroBg();

  function hideHeroBg() {
    if (hero.classList.contains('hero_bg-visible')) {
      hero.classList.remove('hero_bg-visible');
    }
  }

  showBgBtn.onclick = showHeroBg;
  hideBgBtn.onclick = hideHeroBg;
}