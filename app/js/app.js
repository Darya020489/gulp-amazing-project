// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
});

// SPLIDE ================================================
import Splide from "@splidejs/splide";
new Splide(".reviews-slider", {
  classes: {
    arrow: "splide__arrow reviews-slider__arrow",
  },
  pagination: false,
}).mount();

new Splide(".reviews-slider_light", {
  classes: {
    arrow: "splide__arrow reviews-slider__arrow",
  },
  pagination: false,
}).mount();



// header==============================================
let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});

// AOS init===============================================
AOS.init();
