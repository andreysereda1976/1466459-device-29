'use strict';

const toggleButtons = document.querySelectorAll('.display-toggle');
const slides = document.querySelectorAll('.slide');

const toggleOne = document.querySelector('.toggle-slide-1');
const toggleTwo = document.querySelector('.toggle-slide-2');
const toggleThree = document.querySelector('.toggle-slide-3');
const slideOne = document.querySelector('.slide-1');
const slideTwo = document.querySelector('.slide-2');
const slideThree = document.querySelector('.slide-3');

const serviceButtons = document.querySelectorAll('.services-button');
const serviceDescriptions = document.querySelectorAll('.services-description');

const setToggleHandlers = function (toggle, slide) {
  toggle.addEventListener ('click', function () {
    let activeToggle = document.querySelector('.slide-on');
    let activeSlide = document.querySelector('.slide-shown');
    activeToggle.classList.remove('slide-on');
    toggle.classList.add('slide-on');
    activeSlide.classList.remove('slide-shown');
    slide.classList.add('slide-shown');
  });
};

for (let i = 0; i < toggleButtons.length; i++) {
  setToggleHandlers(toggleButtons[i], slides[i]);
}

const setServiceHandlers = function (button, item) {
  button.addEventListener ('click', function () {
    let activeButton = document.querySelector('.service-active');
    let activeItem = document.querySelector('.service-shown');
    activeButton.classList.remove('service-active');
    button.classList.add('service-active');
    activeItem.classList.remove('service-shown');
    item.classList.add('service-shown');
  });
};

for (let i = 0; i < serviceButtons.length; i++) {
  setServiceHandlers(serviceButtons[i], serviceDescriptions[i]);
}
