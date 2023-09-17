import axios from "axios";
import { onSeeRecipeBtnClick } from "./modal-recipe"
import {createModalReceiptMarkup} from "./modal-recipe"

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular'

const popularRecipesList = document.querySelector('.js-popular-recipes-list')
// console.log(container)

const getPopularRecipe = async () => {
  const response = await axios.get(`${BASE_URL}`)
  console.log (response.data)
  return response.data
}

const recipies = getPopularRecipe()
// console.log(recipies)
getPopularRecipe()
  .then((data) => {
    if (data.length === 0) {
      console.log(`Error`)
      return
    }
    //   container.innerHTML = createMarkupPopularRecipies(data)
      popularRecipesList.insertAdjacentHTML('beforeend', createMarkupPopularRecipies(data))
  })

  // Click and open modal //
popularRecipesList.addEventListener('click', onClick)

function onClick(evt) {

  onSeeRecipeBtnClick()

  // const currentPopularRecipe = evt.target.closest('.js-popular-recipes-item')
  // const { _id } = currentPopularRecipe.dataset;

  openModal({ _id })
  try {
    createModalReceiptMarkup()
  } catch {
    err => console.log(err);
  }
}

async function openModal({ _id }) {
  const resp = await axios.get(`https://tasty-treats-backend.p.goit.global/api/recipes/${_id}`)
  try {
    return resp.data
  } catch {
    err => console.log(err);
  }
}

// Markup //
function createMarkupPopularRecipies(arr) {
    return arr.map(({ _id, title, description, preview }) =>
    `<li data-id="${_id}" class="popular-recipes-item js-popular-recipes-item">
        <img
            class="popular-recipes-img"
            src="${preview}"
            alt="${title}"/>
        <div class="popular-recepices-text">
            <h3 class="popular-recipes-subtitle">${title}</h3>
            <p class="popular-recipes-description">${description}</p>
            </div>
    </li>`).join('');
}

// function handlerPopularRecipeClick(evt) {
//     if (evt.target === evt.currentTarget) {
//         return
//     }

//     const currentPopularRecipe = evt.target.closest('.js-popular-recipes-item')
//     const { _id } = currentPopularRecipe.dataset;
//     console.log(evt.target);
//     console.log(currentPopularRecipe);
// }