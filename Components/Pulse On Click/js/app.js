function pulse(e) {
  const elem = document.createElement('div');

  elem.className = 'circle';

  elem.style.top = e.pageY + 'px';
  elem.style.left = e.pageX + 'px';

  document.body.appendChild(elem);

  setTimeout(() => {
    document.body.removeChild(elem);
  }, 1000);
}


document.addEventListener('click', pulse);
