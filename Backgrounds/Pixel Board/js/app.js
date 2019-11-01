window.onload = function() {
  const board = document.querySelector('.board');

  for (let i = 0; i < 4000; i++) {
    const elem = document.createElement('div');

    elem.className = 'board__pixel';

    board.appendChild(elem);
  }
};
