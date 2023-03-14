var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 4,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
var swiper = new Swiper(".work-projects", {
  slidesPerView: 4,
  spaceBetween: 1,
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});