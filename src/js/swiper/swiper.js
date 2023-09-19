// import Swiper from 'swiper';

// import { Navigation, Pagination } from 'swiper';
// import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css';

// import '../../node_modules/swiper/swiper-bundle.css';

// import { createMarkup } from './swiper-markup';
// import { getFetch } from './swiper-api';

// const way = document.querySelector('.js-swiper');
// console.log(way);
// const mySwiper = document.querySelector('.mySwiper');
// console.log(mySwiper);
// console.log(getFetch());

// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 3,
//   spaceBetween: 16,
//   allowSlideNext: true,
//   // allowSlideNext: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 5000,
//   },
// });

// });
// console.log(swiper);

// async function get() {
//   const result = await getFetch();
//   // createMarkup(result);
//   way.insertAdjacentHTML('beforeend', createMarkup(result));
// }

// get();
// import Swiper from 'swiper';
// import { Pagination, Autoplay } from 'swiper';
// import 'swiper/css/pagination';
// import 'swiper/css';

import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper';

export const swiper = new Swiper('.swiper', {
  noSwiping: true,
  noSwipingSelector: '.swiper',
  speed: 800,
  slidesPerView: 0.7,
  spaceBetween: '16px',
  loop: true,
  modules: [Pagination, Autoplay],
  Autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.pages-pagination',
    clickable: true,
  },
});

// swiper.use([Pagination]);
swiper.autoplay.start();
