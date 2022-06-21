// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// Custom JS

// Mobile-menu ================================================
const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
// const menuCloseItem = document.querySelector('.header__nav-close');

headerBurger.addEventListener("click", function (event) {
  headerBurger.classList.toggle("burger_closed");
  headerNav.classList.toggle("header__nav_opened");
});
// Slider ================================================
import Splide from "@splidejs/splide";
document.addEventListener("DOMContentLoaded", () => {
  new Splide("#promo-slider", {
    type: "loop",
    autoplay: true,
    interval: 2000,
    classes: {
      pagination: "splide__pagination promo-slider__pagination",
    },
    arrows: false,
  }).mount();

  const revSliderSettings = {
    type: "loop",
    gap: "40px",
    classes: {
      arrow: "splide__arrow reviews-slider__arrow",
    },
    pagination: false,
    breakpoints: {
      560: {
        arrows: false,
        pagination: true,
        classes: {
          pagination: "splide__pagination reviews-slider__pagination",
        },
      },
    },
  };

  new Splide("#reviews-slider", revSliderSettings).mount();

  new Splide("#author-reviews", revSliderSettings).mount();
});

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

// Accordion===============================================
var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// THEME===========================================================================================
document.querySelector(".switch").addEventListener("change", (event) => {
  if (event.target.nodeName === "INPUT") {
    document.documentElement.classList.toggle("dark");
  }
});
