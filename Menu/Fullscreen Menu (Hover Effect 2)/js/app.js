window.onload = function() {
  const menu = document.querySelector('.menu');
  const menuLinks = menu.querySelectorAll('.menu__link');
  const colors = ['#ff6b6b', '#48dbfb', '#50ff66', '#feca57', '#f368e0', '#7143ff'];

  function changeMenuBg(color) {
    menu.style.backgroundColor = color;
  }

  let colorNdx = 0;

  for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];
    const color = colors[colorNdx];

    menuLink.addEventListener('mouseover', () => changeMenuBg(color) );
    menuLink.addEventListener('focus', () => changeMenuBg(color));
    menuLink.addEventListener('mouseout', () => changeMenuBg('transparent'));
    menuLink.addEventListener('blur', () => changeMenuBg('transparent'));

    if (++colorNdx === colors.length) colorNdx = 0;
  }
};
