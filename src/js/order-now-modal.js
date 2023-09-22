const refs = {
  orderNowBtn: document.querySelector('.hero_btn-js'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.orderNowBtn.addEventListener('click', handleModalOpen);
refs.closeModalBtn.addEventListener('click', handleModalClose);
document.addEventListener('keydown', handleEsc);

function handleModalOpen() {
  refs.modal.classList.remove('is-hidden');
}

function handleModalClose() {
  refs.modal.classList.add('is-hidden');
}

function handleEsc(evt) {
   if (evt.key === 'Escape') {
     handleModalClose();
     document.removeEventListener('keydown', handleEsc);
   }
}