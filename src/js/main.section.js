const btnEl = document.getElementById('btn');
const divEl = document.getElementById('main-img-menu');
const ratingEl = document.querySelector('.main-rating-span');
const searchInput = document.querySelector('.main-search-input');
const resetBtnEl = document.querySelector('.main-reset-btn');
// const openRecipeOnMainSection = document.querySelector(".main-rating-btn");
const timeEl = document.querySelector('.time-span');
const areaFieldEl = document.querySelector('.area-span');
const ingredientsFieldEl = document.querySelector('.ingredients-span');

const wrapper = document.querySelector('.time-wrapper');
const areaWrapper = document.querySelector('.main-area-wrap');
const ingredientsWrapper = document.querySelector('.main-ingredients-wrap');
const selectBtn = document.querySelector('.select-btn');
const mainAreaBtn = document.querySelector('.main-area-wrapper');
const mainIngredientsBtn = document.querySelector('.main-ingredients-wrapper');
const selectedIconEl = document.querySelector('.selected-icon');
const selectedAreaIconEl = document.querySelector('.selected-area-icon');
const selectedIngredientsIconEl = document.querySelector(
  '.selected-ingredients-icon'
);
const timeOptionsEl = document.querySelector('.time-options');
const areaOptionsEl = document.querySelector('.area-options');
const ingredientsOptionsEl = document.querySelector('.ingredients-options');

const mainHeartBtn = document.getElementById('main-heart-btn');

const mainPagDotsEl = document.querySelector('.main-pagination');
const mainNumberPagDotsEl = document.querySelectorAll(
  '.main-pagination-btn-numbers'
);

// timeOptionsEl.scrollIntoView({ top: 20, left: 20 });
// all the items
// const time = [
//   "10min",
//   "20min",
//   "30min",
//   "40min",
//   "50min",
//   "60min",
//   "70min",
//   "80min",
// ];

const areaEl = [
  'Italian',
  'French',
  'Spanish',
  'English',
  'Ukrainian',
  'Norwegian',
];

const ingredientsEl = [
  'Cabbage',
  'Cucumber',
  'Tomato',
  'Corn',
  'Radish',
  'Parsley',
];

const favorites = [];

// Add Time to select
// function addTimeEl() {
//   time.map((time) => {
//     let li = `<li class="time-select-hover" onclick="updateName(this)">${time}</li>`;
//     timeOptionsEl.insertAdjacentHTML("beforeend", li);
//   });
// }

// addTimeEl();

// Add Area to select
// function addAreaEl() {
//   areaEl.map((area) => {
//     let liAr = `<li class="area-select-hover" onclick="updateArea(this)">${area}</li>`;
//     areaOptionsEl.insertAdjacentHTML("beforeend", liAr);
//   });
// }

// addAreaEl();

// Add Ingredients to select
// function addIngredientsEl() {
//   ingredientsEl.map((ingredient) => {
//     let liAr = `<li class="area-select-hover" onclick="updateIngredients(this)">${ingredient}</li>`;
//     ingredientsOptionsEl.insertAdjacentHTML("beforeend", liAr);
//   });
// }

// addIngredientsEl();

// Function to update time field
function updateName(selectedLi) {
  wrapper.classList.remove('active');

  selectBtn.firstElementChild.innerText = selectedLi.innerText;
  selectedIconEl.classList.remove('open-selected-menu');
}
// Add event to time field
selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
  selectedIconEl.classList.toggle('open-selected-menu');
});

// Function to update area field
function updateArea(selectedLi) {
  areaWrapper.classList.remove('active');

  mainAreaBtn.firstElementChild.innerText = selectedLi.innerText;
  selectedAreaIconEl.classList.remove('open-selected-menu');
}
// Add event to area field
mainAreaBtn.addEventListener('click', () => {
  areaWrapper.classList.toggle('active');
  selectedAreaIconEl.classList.toggle('open-selected-menu');
});

// Function to update ingredients field
function updateIngredients(selectedLi) {
  ingredientsWrapper.classList.remove('active');

  mainIngredientsBtn.firstElementChild.innerText = selectedLi.innerText;
  selectedIngredientsIconEl.classList.remove('open-selected-menu');
}

// Add event to ingredients field
mainIngredientsBtn.addEventListener('click', () => {
  ingredientsWrapper.classList.toggle('active');
  selectedIngredientsIconEl.classList.toggle('open-selected-menu');
});

// btnEl.addEventListener("click", getRandomMeal);

// async function imagesCall() {
//   const resp = await fetch(
//     "https://tasty-treats-backend.p.goit.global/api/recipes?page=1&limit=3"
//   );
//   const data = await resp.json();
//   return data;
// }

// function createMarkUp() {
//   const data = imagesCall();
// }

// createMarkUp();

let ratingStar = 0;

getRandomMeal();

function getRandomMeal() {
  divEl.innerHTML = '';
  fetch('https://tasty-treats-backend.p.goit.global/api/recipes?page=1&limit=9')
    .then(res => res.json())
    .then(data => {
      const dataRecipes = data.results;
      addMealToSearchArea(dataRecipes);
      addMealToDOM(dataRecipes);
      addTimeToField(dataRecipes);
      addAreaToField(dataRecipes);
      addIngredientsToField(dataRecipes);
    });
}

function addMealToSearchArea(recipes) {
  timeEl.innerText = 'Select';
  areaFieldEl.innerText = 'Select';
  ingredientsFieldEl.innerText = 'Select';

  // const searchFields = recipes.map(({ time, area, category }) => {
  //   timeEl.innerText = `${time} min`;
  //   areaFieldEl.innerText = `${area}`;
  //   ingredientsFieldEl.innerText = `${category}`;
  //   // time / area / ingredients[]
  // });
}

function addMealToDOM(recipes) {
  const markup = recipes
    .map(item => {
      const { description, rating, thumb, title, _id: id } = item;
      ratingStar = rating;
      return `
      <div class="main-img-items">
                  <img class="main-img-img" src="${thumb}" alt="${title}" />
                  <div class="main-heart">
                    <button id="main-heart-btn" class="main-heart-btn">
  <svg width="22" height="22">
    <use href="./images/icons.svg#icon-empty-heart"></use>
  </svg>
</button>
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
                      <button id="${id}" class="main-rating-btn">See recipe</button>
                    </div>
                  </div>
                </div>
    `;
    })
    .join('');

  divEl.insertAdjacentHTML('beforeend', markup);

  // setTimeout(() => {
  //   const openRecipeOnMainSection =
  //     document.querySelectorAll(".main-rating-btn");
  //   console.log(openRecipeOnMainSection);

  //   openRecipeOnMainSection.forEach((item) => {
  //     item.addEventListener("click", (e) => {
  //       const recipesBtnEl = recipes.map((item) => {
  //         console.log(item.description);
  //         // console.log(item.title);
  //         // if (currentRecipeId === e.currentTarget.) {
  //         //   console.log(item.description);
  //         // }
  //       });
  //     });
  //   });
  // }, 1000);
}

function addTimeToField(recipes) {
  recipes.map(({ time }) => {
    let li = `<li class="time-select-hover" onclick="updateName(this)">${time} min</li>`;
    timeOptionsEl.insertAdjacentHTML('beforeend', li);
  });
}
function addAreaToField(recipes) {
  recipes.map(({ area }) => {
    let li = `<li class="time-select-hover" onclick="updateArea(this)">${area}</li>`;
    areaOptionsEl.insertAdjacentHTML('beforeend', li);
  });
}
function addIngredientsToField(recipes) {
  recipes.map(({ category }) => {
    let li = `<li class="time-select-hover" onclick="updateIngredients(this)">${category}</li>`;
    ingredientsOptionsEl.insertAdjacentHTML('beforeend', li);
  });
}

searchInput.addEventListener('search', searchInputHandler);

function searchInputHandler() {
  const valueOnSearchEl = searchInput.value;
  // Check for empty
  if (valueOnSearchEl.trim()) {
    fetch(
      `https://tasty-treats-backend.p.goit.global/api/recipes?&page=1&limit=9`
    )
      .then(res => res.json())
      .then(data => {
        const searchCategory = data.results
          .map(item => {
            if (item.category.toLowerCase() === valueOnSearchEl.trim()) {
              return `
      <div class="main-img-items">
                  <img class="main-img-img" src="${item.thumb}" alt="${
                item.title
              }" />
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
                    <h3 class="main-img-title">${item.title}</h3>
                    <p class="main-img-text">
                      ${item.description}
                    </p>
                    <div class="main-img-subtext-wrap">
                      <div class="main-rating-wrap">
                        <span class="main-rating-span">${Math.round(
                          item.rating
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
                </div>
    `;
            }
          })
          .join('');

        // if (searchCategory.name === valueOnSearchEl) {
        //   addSearchMealToDom(searchCategory);
        // }
        if (searchCategory === '') {
          return alert(
            'We don`t found any food by your categories. Choose another one.'
          );
        }
        divEl.innerHTML = searchCategory;
      });
  }

  searchInput.value = '';
}

function addSearchMealToDom(categories) {
  const searchMarkUp = categories
    .map(item => {
      console.log(item.category);
      const { description, rating, thumb, title } = item;
      ratingStar = rating;
      return `
      <div class="main-img-items">
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
                </div>
    `;
    })
    .join('');

  divEl.innerHTML = searchMarkUp;
}

resetBtnEl.addEventListener('click', resetFilterHandler);

function resetFilterHandler() {
  getRandomMeal();
}

// description  / rating / thumb / title

mainPagDotsEl.addEventListener('click', paginationHandler);

function paginationHandler(e) {
  // console.dir(e.target.tagName);
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  console.log(mainPagBtnEl);
  mainPagBtnEl.classList.toggle('active-pag-btn');
}

divEl.addEventListener('click', e => {
  let btnId;
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  btnId = e.target.id;
});

const paginationList = document.querySelector('.js-pagination');

paginationList.addEventListener('click', updateActivePage);

function updateActivePage(e) {
  const activeBtn = paginationList.querySelector('.active-pag-btn');
  const currentBtn = e.target;

  if (currentBtn.nodeName !== 'LI') {
    return;
  }

  if (currentBtn.dataset.type === 'page') {
    activeBtn.classList.remove('active-pag-btn');
    currentBtn.classList.add('active-pag-btn');
  }

  if (currentBtn.dataset.type === 'prev') {
    const prevActivePage = activeBtn.dataset.page - 1;
    const prevPage = paginationList.querySelector(
      `[data-page="${prevActivePage}"]`
    );

    if (prevPage) {
      activeBtn.classList.remove('active-pag-btn');
      prevPage.classList.add('active-pag-btn');
    }
  }

  if (currentBtn.dataset.type === 'next') {
    const nextActivePage = Number(activeBtn.dataset.page) + 1;
    const nextPage = paginationList.querySelector(
      `[data-page="${nextActivePage}"]`
    );

    if (nextPage) {
      activeBtn.classList.remove('active-pag-btn');
      nextPage.classList.add('active-pag-btn');
    }
  }
}
