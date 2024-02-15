// Accordion

const accordion = document.querySelector('.accordion');
const accordionTitles = accordion.querySelectorAll('.accordion__title');

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener('click', function () {
    const currentText =
      accordionTitle.parentElement.querySelector('.accordion__text');
    accordionTitle.classList.toggle('accordion__title--active');
    currentText.classList.toggle('accordion__text--visible');

    if (currentText.classList.contains('accordion__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
      currentText.style.maxHeight = null;
    }
  });
});

// Burger button

const menuBtn = document.querySelector('.menu__btn');
const navList = document.querySelector('.header__nav-list');

menuBtn.addEventListener('click', function () {
  this.classList.toggle('open');
  navList.classList.toggle('nav-list--open');
});

// Slider reviews

const swiper = new Swiper('.reviews__slider', {
  spaceBetween: 22,
  grabCursor: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
  },

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  },
});

// Slider team
const teamInner = document.querySelector('.team__inner');
const teamItems = document.querySelectorAll('.team__item');
if (window.innerWidth <= 455) {
  teamInner.classList.add('swiper-wrapper');
  teamItems.forEach((item) => {
    item.classList.add('swiper-slide');
  });
} else {
  teamInner.classList.remove('swiper-wrapper');
  teamItems.forEach((item) => {
    item.classList.remove('swiper-slide');
  });
}

const teamSlider = new Swiper('.team__slider', {
  spaceBetween: 1,
  slidesPerView: 1.5,
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.team__item-next',
    prevEl: '.team__item-prev',
  },
});
