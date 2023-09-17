import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';

// elements
const list = document.querySelector('.select-category-list');
const btnAllCtg = document.querySelector('.btn-all-categories');
const menu = document.querySelector('.main-img-menu');

list.addEventListener('click', onClick);
btnAllCtg.addEventListener('click', resetCategories);

async function onClick(evt) {
  if (!evt.target.classList.contains('js-select-category')) {
    return;
  }
  
  const btnSelectCtg = document.querySelectorAll('.js-select-category');
  btnSelectCtg.forEach(button => {
    if (button.classList.contains('btn-select-active')) {
      button.classList.remove('btn-select-active')
    }
  });
  evt.target.classList.add('btn-select-active');

  // backend request
  const resp = await axios.get(
    `${BASE_URL}/recipes?category=${evt.target.textContent}`
  );
  try {
    menu.insertAdjacentHTML('afterbegin', markupMenu(resp.data.results));
  } catch {
    err => console.log(err);
  }
}

async function resetCategories() {
  menu.innerHTML = '';
  const btnSelectCtg = document.querySelectorAll('.js-select-category');
  btnSelectCtg.forEach(button => {
    if (button.classList.contains('btn-select-active')) {
      button.classList.remove('btn-select-active');
      button.removeAttribute('disabled');
    }
  });
  const resp = await axios.get(`${BASE_URL}/recipes`);
  try {
    menu.insertAdjacentHTML('afterbegin', markupMenu(resp.data.results));
  } catch {
    err => console.log(err);
  }
}

async function addCategories() {
  const resp = await axios.get(`${BASE_URL}/categories`);
  try {
    list.innerHTML = renderMarkup(resp.data);
  } catch {
    err => console.log(err);
  }
}
addCategories();

///////////  MARKUP  ////////////////

function renderMarkup(data) {
  return data
    .map(
      ({ _id, name }) => `<li>
    <button class="btn-select-category js-select-category" data-id="${_id}" type="button">${name}</button>  
    </li>`
    )
    .join('');
}

function markupMenu(data) {
  return data
    .map(
      ({ thumb, title, description, rating }) => `<div class="main-img-items">
      <img class="main-img-img" src="${thumb}" alt="${title}" />
      <div class="main-heart">
        <svg>
          <use
            href="./images/icons.svg#icon-empty-heart"
            width="22"
            height="22"
          ></use>
        </svg>
      </div>
      <div class="main-img-text-wrap">
        <h3 class="main-img-title">${title}</h3>
        <p class="main-img-text">
          ${description}
        </p>
        <div class="main-img-subtext-wrap">
          <div class="main-rating-wrap">
            <span class="main-rating-span">${Math.round(
              rating
            )}</span>
            <svg width="14" height="14">
              <use href="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="14" height="14">
              <use href="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="14" height="14">
              <use href="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="14" height="14">
              <use href="./images/icons.svg#icon-star"></use>
            </svg>
            <svg width="14" height="14">
              <use href="./images/icons.svg#icon-empty-star"></use>
            </svg>
          </div>
          <button class="main-rating-btn">See recipe</button>
        </div>
      </div>
    </div>`
    )
    .join('');
}
