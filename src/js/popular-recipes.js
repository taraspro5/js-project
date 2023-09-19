import axios from 'axios';
import { onSeeRecipeBtnClick } from './modal-recipe';
import { createModalReceiptMarkup } from './modal-recipe';

const BASE_URL =
  'https://tasty-treats-backend.p.goit.global/api/recipes/popular';

const popularRecipesList = document.querySelector('.js-popular-recipes-list');

// console.log(container)

const getPopularRecipe = async () => {
  const response = await axios.get(`${BASE_URL}`);
  // console.log (response.data)
  return response.data;
};

getPopularRecipe().then(data => {
  if (data.length === 0) {
    // console.log(`Error`)
    return;
  }
  //   container.innerHTML = createMarkupPopularRecipies(data)
  popularRecipesList.insertAdjacentHTML(
    'beforeend',
    createMarkupPopularRecipies(data)
  );
});

// Click and open modal //
popularRecipesList.addEventListener('click', onClick);

async function onClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const dataId = evt.target.dataset.id;

  const resp = await axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${dataId}`
  );

  try {
    onSeeRecipeBtnClick(dataId);
    createModalReceiptMarkup(resp.data);
  } catch {
    err => console.log(err);
  }
}

// Markup //
function createMarkupPopularRecipies(arr) {
  return arr
    .map(
      ({ _id, title, description, preview }) =>
        `<li class="popular-recipes-item js-popular-recipes-item">
        <img data-id="${_id}"
            class="popular-recipes-img"
            src="${preview}"
            alt="${title}"/>
        <div class="popular-recepices-text">
            <h3 class="popular-recipes-subtitle">${title}</h3>
            <p class="popular-recipes-description">${description}</p>
            </div>
    </li>`
    )
    .join('');
}
