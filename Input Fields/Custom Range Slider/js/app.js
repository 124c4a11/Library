window.onload = function() {
  const rangeInput = document.querySelector('.range__input');
  const rangeValue = document.querySelector('.range__value');

  rangeInput.addEventListener('input', (e) => {
    rangeValue.innerHTML = e.target.value;
  });
};
