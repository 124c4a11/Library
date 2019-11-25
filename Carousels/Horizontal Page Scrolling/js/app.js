const body = document.querySelector('body');
const carousel = document.getElementById('carousel');
const carouselItems = carousel.querySelectorAll('.carousel__item');
const carouselItemsCount = carouselItems.length;

let carouselItemWidth = getItemWidth(carouselItems[0]);
let summaryItemsWidth = getSummaryItemsWidth(carouselItemWidth, carouselItemsCount);


function getItemWidth(item) {
  return item.offsetWidth;
}


function getSummaryItemsWidth(itemWidth, itemsCount) {
  return (itemsCount - 1) * itemWidth;
}


function setBodyHeight() {
  body.style.height = `${summaryItemsWidth + window.innerHeight}px`;
}
setBodyHeight();


window.addEventListener('resize', () => {
  carouselItemWidth = getItemWidth(carouselItems[0]);
  summaryItemsWidth = getSummaryItemsWidth(carouselItemWidth, carouselItemsCount);
  setBodyHeight();
});


window.addEventListener('scroll', () => {
  carousel.style.transform = `translateX(${-window.pageYOffset}px)`;
});
