'use strict';

var
  $body = $('body'),
  $galleryItems = $('.gallery').find('.gallery__item'),
  $lightbox = $('.lightbox'),
  $lightboxPreviewImg = $lightbox.find('.lightbox__preview-img'),
  galleryItemNdx = 0,
  requiredImgSrc = '';

$galleryItems.on('click', showLightbox);

$lightbox.on('click', onClickLightbox);

function replacePreviewImg(src) {
  $lightboxPreviewImg.attr('src', src);
}

function getRequiredImgSrc(ndx) {
  return $galleryItems.eq(ndx).find('.gallery__item-link').attr('href');
}

function showLightbox(e) {
  e.preventDefault();

  var $this = $(this);

  galleryItemNdx = $this.index();

  requiredImgSrc = $this.find('.gallery__item-link').attr('href');

  $lightboxPreviewImg.attr('src', requiredImgSrc);

  $body.css('overflow', 'hidden');

  $lightbox.fadeIn();
}

function hideLightbox() {
  $body.css('overflow', '');
  $lightbox.fadeOut();
}

function nextImg() {
  galleryItemNdx++;

  if (galleryItemNdx > $galleryItems.length - 1) {
    galleryItemNdx = 0;
  }

  requiredImgSrc = getRequiredImgSrc(galleryItemNdx);

  replacePreviewImg(requiredImgSrc);
}

function prevImg() {
  galleryItemNdx--;

  if (galleryItemNdx < 0) {
    galleryItemNdx = $galleryItems.length - 1;
  }

  requiredImgSrc = getRequiredImgSrc(galleryItemNdx);

  replacePreviewImg(requiredImgSrc);
}

function onClickLightbox(e) {
  var $target = $(e.target);

  if ($target.hasClass('lightbox')) {
    hideLightbox();
  }

  if ($target.hasClass('lightbox__btn_next') || $target.hasClass('lightbox__preview-img')) {
    nextImg();
  }

  if ($target.hasClass('lightbox__btn_prev')) {
    prevImg();
  }
}

function preloadImg() {
  $galleryItems.each(function() {
    var
      imgSrc = $(this).attr('href'),
      img = new Image();

    $(img).attr('src', imgSrc);
  });
}
preloadImg();