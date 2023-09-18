const btnEl = document.getElementById('btn'),
  divEl = document.getElementById('main-img-menu'),
  ratingEl = document.querySelector('.main-rating-span'),
  searchInput = document.querySelector('.main-search-input'),
  resetBtnEl = document.querySelector('.main-reset-btn'),
  timeEl = document.querySelector('.time-span'),
  areaFieldEl = document.querySelector('.area-span'),
  ingredientsFieldEl = document.querySelector('.ingredients-span'),
  wrapper = document.querySelector('.time-wrapper'),
  areaWrapper = document.querySelector('.main-area-wrap'),
  ingredientsWrapper = document.querySelector('.main-ingredients-wrap'),
  selectBtn = document.querySelector('.select-btn'),
  mainAreaBtn = document.querySelector('.main-area-wrapper'),
  mainIngredientsBtn = document.querySelector('.main-ingredients-wrapper'),
  selectedIconEl = document.querySelector('.selected-icon'),
  selectedAreaIconEl = document.querySelector('.selected-area-icon'),
  selectedIngredientsIconEl = document.querySelector(
    '.selected-ingredients-icon'
  ),
  timeOptionsEl = document.querySelector('.time-options'),
  areaOptionsEl = document.querySelector('.area-options'),
  ingredientsOptionsEl = document.querySelector('.ingredients-options'),
  mainHeartBtn = document.getElementById('main-heart-btn'),
  mainPagDotsEl = document.querySelector('.main-pagination'),
  mainNumberPagDotsEl = document.querySelectorAll(
    '.main-pagination-btn-numbers'
  ),
  mainPagBtnEl = document.querySelector('.main-pagination-btn');

const favorites = [];

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
      // addAreaToField(dataRecipes);
      // addIngredientsToField(dataRecipes);
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

// ADD MEAL TO DOM
function addMealToDOM(recipes) {
  const markup = recipes
    .map(item => {
      const { description, rating, thumb, title, _id: id } = item;
      ratingStar = rating;
      return `
      <li class="main-img-items">
                  <img class="main-img-img" src="${thumb}" alt="${title}" />
                  <div class="main-heart">
                    <button id="main-heart-btn" class="main-heart-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234 5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912 17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629 19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219 19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961 13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434 2.00948 12.8266 2.5652 10.9939 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
</svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
</svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z" fill="#EEA10C"/>
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
                </li>
    `;
    })
    .join('');

  divEl.insertAdjacentHTML('beforeend', markup);
}

// SELECTION === TIME / AREA / INGREDIENTS

// Add time to field
function addTimeToField(recipes) {
  // console.log(recipes);

  // const markUp = recipes
  //   .map(({ time, _id: id }) => {
  //     return `<li id="${id}" class="time-select-hover" onclick="updateTime(this)">${time} min</li>`;
  //   })
  //   .join("");

  let unit = [];
  let uniqueChar = recipes
    .map(({ time }) => {
      if (!unit.includes(time)) {
        unit.push(time);
      }
    })
    .join('');

  const markUp = unit
    .sort((a, b) => {
      return a - b;
    })
    .map(time => {
      if (time === '') {
        return;
      }
      return `<li class="time-select-hover">${time} min</li>`;
    })
    .join('');

  timeOptionsEl.insertAdjacentHTML('beforeend', markUp);
}

timeOptionsEl.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  updateTime(e.target.innerText);
});

// Function to update time field
function updateTime(selectedLi) {
  wrapper.classList.remove('active');

  selectBtn.firstElementChild.innerText = selectedLi;
  selectedIconEl.classList.remove('open-selected-menu');
}
// Add event to time field
selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
  selectedIconEl.classList.toggle('open-selected-menu');
});

// AREA
getSelectedArea();
// Get area from api
async function getSelectedArea() {
  const res = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/areas'
  );
  const data = await res.json();

  addSelectedArea(data);
}

// create markup for area
function addSelectedArea(area) {
  area.map(({ name, _id: id }) => {
    let li = `<li id="${id}" class="time-select-hover">${name}</li>`;
    areaOptionsEl.insertAdjacentHTML('beforeend', li);
  });
}

areaOptionsEl.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  updateArea(e.target.innerText);
});

function updateArea(selectedLi) {
  areaWrapper.classList.remove('active');

  mainAreaBtn.firstElementChild.innerText = selectedLi;
  selectedAreaIconEl.classList.remove('open-selected-menu');
}
// Add event to area field
mainAreaBtn.addEventListener('click', () => {
  areaWrapper.classList.toggle('active');
  selectedAreaIconEl.classList.toggle('open-selected-menu');
});

// INGREDIENTS
// Get Ingredients from api
getSelectedIngredients();
// Get area from api
async function getSelectedIngredients() {
  const res = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/ingredients'
  );
  const data = await res.json();

  addIngredientsToField(data);
}

let IngredientsId = '';
// create markup for area
function addIngredientsToField(ingr) {
  ingr.map(({ name, _id: id }) => {
    let li = `<li id="${id}" class="time-select-hover">${name}</li>`;
    ingredientsOptionsEl.insertAdjacentHTML('beforeend', li);
  });
}

ingredientsOptionsEl.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  updateIngredients(e.target.innerText);
});

// Function to update ingredients field
function updateIngredients(selectedLi) {
  ingredientsWrapper.classList.remove('active');

  mainIngredientsBtn.firstElementChild.innerText = selectedLi;
  selectedIngredientsIconEl.classList.remove('open-selected-menu');
}

// Add event to ingredients field
mainIngredientsBtn.addEventListener('click', () => {
  ingredientsWrapper.classList.toggle('active');
  selectedIngredientsIconEl.classList.toggle('open-selected-menu');
});

// SEARCH INPUT
searchInput.addEventListener('search', searchInputHandler);

// SEARCH INPUT FETCH
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

// ADD SEARCH INPUT TO DOM
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

// RESET BUTTON
resetBtnEl.addEventListener('click', resetFilterHandler);

function resetFilterHandler() {
  getRandomMeal();
}

// PAGINATION
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
