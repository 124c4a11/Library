window.onload = function() {
  const deg = 6;
  const hr = document.getElementById('hh');
  const mn = document.getElementById('mm');
  const sc = document.getElementById('ss');

  function tick() {
    let d = new Date();
    let hh = d.getHours() * 30;
    let mm = d.getMinutes() * deg;
    let ss = d.getSeconds() * deg;

    hr.style.transform = `rotate(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
  }
  tick();

  setInterval(tick, 1000);
};
