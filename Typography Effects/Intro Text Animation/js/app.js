'use strict';


const
  intro = document.querySelector('.intro'),
  introToggle = document.querySelector('.intro__toggle');


const onToggle = () => intro.classList.add('intro_hidden');


introToggle.addEventListener('click', onToggle);