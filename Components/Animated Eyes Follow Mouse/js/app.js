const eyes = document.querySelectorAll('.face__eye');

function moveEyes(e) {
  eyes.forEach((eye) => {
    const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    const radian = Math.atan2(e.pageX - x, e.pageY - y);
    const rot= -radian * (180 / Math.PI) + 270;

    eye.style.transform = `rotate(${rot}deg)`;
  });
}

document.querySelector('body').addEventListener('mousemove', moveEyes);
