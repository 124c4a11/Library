window.onload = function() {

  document.querySelector('.light').addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    this.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, transparent, #000 30%)`;
  });

}
