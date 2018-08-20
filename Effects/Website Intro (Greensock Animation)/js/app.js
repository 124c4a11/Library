'use strict';


function fadeOut() {
  TweenMax.to('.hero', 2, {
    delay: 2.6,
    top: '-110%',
    ease: Expo.easeInOut
  });

  TweenMax.to('.hero__title', 2, {
    delay: 2,
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut
  });

  TweenMax.to('.btn', 1, {
    y: -100,
    opacity: 0
  });

  TweenMax.to('.overlay', 2, {
    delay: 3,
    top: "-110%",
    ease: Expo.easeInOut
  });

  TweenMax.from('.page-section', 2, {
    delay: 3.2,
    opacity: 0,
    ease: Power2.easeInOut
  });

  TweenMax.to('.page-section', 2, {
    delay: 3.2,
    y: -300,
    opacity: 1,
    ease: Power2.easeInOut
  })
}


document.querySelector('.btn').addEventListener('click', fadeOut);