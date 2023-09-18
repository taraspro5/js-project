const refs = {
    btnCart: document.querySelector('.js-shopping-cart'),
    btnBurger: document.querySelector('.js-burger-menu'),
    btnCloseModal: document.querySelector('.js-btn-close'),
    modal: document.querySelector('.header-back'),
  };
  
  refs.btnBurger.addEventListener('click', handlerClickerAdd);
  refs.btnCloseModal.addEventListener('click', handlerClickerRemove);
  
  function handlerClickerAdd() {
    refs.modal.classList.toggle('display-none');
    document.body.style.overflow = 'hidden';
  }
  
  function handlerClickerRemove() {
    refs.modal.classList.toggle('display-none');
    document.body.style.overflow = 'visible';
  }
  
