const layers = document.querySelectorAll('.parallax__layer');


document.addEventListener('mousemove', (e) => {
  layers.forEach((layer) => {
    const speed = layer.dataset.speed;
    const x = (window.innerWidth - e.pageX * speed) / 250;

    layer.style.transform = `translate(${-x}px, ${x}px)`;
  });
});
