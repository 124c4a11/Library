'use strict';


function changeBodyBgColor(e) {
  const
    target = e.target,
    link = target.closest('.colorbox__link');

  if (!link) return;

  const
    body = document.body,
    color = link.innerHTML;

  body.style.backgroundColor = color;
}


document.querySelector('#colorbox').onclick = changeBodyBgColor;