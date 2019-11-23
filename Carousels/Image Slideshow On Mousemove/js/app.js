const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel__item');


carousel.addEventListener('mousemove', (e) => {
  const target = e.target;

  if (target.classList.contains('carousel__item_active')) return;

  carouselItems.forEach((item) => item.classList.remove('carousel__item_active'));

  target.classList.add('carousel__item_active');
});
