// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// Custom JS

// header_has-bg==============================================
let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});

// Mobile-menu ================================================
const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const headerClose = document.querySelector('.header__close');

headerBurger.addEventListener("click", function (event) {
  headerBurger.classList.add("burger_closed");
  headerNav.classList.add("header__nav_opened");
  headerClose.classList.add("close_opened");
});

headerClose.addEventListener("click", function (event) {
  headerBurger.classList.remove("burger_closed");
  headerNav.classList.remove("header__nav_opened");
  headerClose.classList.remove("close_opened");
});

// Promo-slider ================================================
import Splide from "@splidejs/splide";
document.addEventListener("DOMContentLoaded", () => {
  const promoSlides = document.querySelectorAll('[data-slide-title]');
  let slideTitles = [];
  promoSlides.forEach(function(slide) {
    slideTitles.push(slide.dataset.slideTitle);
  });
  const promoSlider = new Splide("#promo-slider", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    // speed: 3000,
    pauseOnHover: false,
    perPage: 1,
    // padding: { right: '25%' },
    classes: {
      pagination: "splide__pagination promo-slider__pagination",
    },
    arrows: false,
    drag: false,
  });

  promoSlider.on( 'pagination:mounted', function ( data ) {
    // You can add your class to the UL element
    data.list.classList.add( 'splide__pagination--custom' );
  
    // `items` contains all dot items
    data.items.forEach( function ( item ) {
      item.button.textContent = `${slideTitles[item.page]}`;
    } );
  } );
  promoSlider.mount();

// Slider ================================================
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
