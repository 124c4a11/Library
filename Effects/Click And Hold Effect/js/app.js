const cursor = document.querySelector('.cursor');


document.documentElement.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
});
