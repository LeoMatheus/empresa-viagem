'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelector('.show-modal');

function closeModal() {
  modal.classList.add('hidden');
  // overlay.classList.add('hidden');
}

const openModal = function () {
  modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.onclick = closeModal;

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
