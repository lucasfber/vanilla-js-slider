'use strict';

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

let currentSlide = 0;
let maxSlides = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (item, index) =>
      (item.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
};

const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

const nextSlide = function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

const rotate = function () {
  setInterval(() => {
    nextSlide();
  }, 2500);
};

goToSlide(0);
rotate();

btnLeft.addEventListener('click', previousSlide);
btnRight.addEventListener('click', nextSlide);
