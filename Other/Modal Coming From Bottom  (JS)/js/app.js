'use strict';


const
  modalToggle = document.querySelector('.modal-toggle'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal__close');


function showModal() {
  if (modal.classList.contains('modal_visible')) return;
  modal.classList.add('modal_visible');

  setTimeout(() => modalClose.focus(), 100);
}


function hideModal() {
  modal.classList.remove('modal_visible');
} 


modalToggle.addEventListener('click', showModal);
modalClose.addEventListener('click', hideModal);