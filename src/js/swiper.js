import './refs';

// import Swiper JS
import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/..';

// import 'swiper/';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const swiper = new Swiper(swipeMarker, {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.6,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 18,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  waitForAnimate: false,
  variableWidth: true,
});
