`use strict`;

const toggleButtons = document.querySelectorAll(`.display-toggle`);
const slides = document.querySelectorAll(`.slide`);

const serviceButtons = document.querySelectorAll(`.services-button`);
const serviceDescriptions = document.querySelectorAll(`.services-description`);

const openEmailPopup = document.querySelector(`.send-email`);
const emailPopup = document.querySelector(`.email-container`);
const closeEmailPopup = emailPopup.querySelector(`.button-close`);
const emailForm = emailPopup.querySelector(`.send-email-form`);
const nameInput = emailForm.querySelector(`.name`);
const emailInput = emailForm.querySelector(`.email`);
const textInput = emailForm.querySelector(`.mailtext`);

const openMap = document.querySelector(`.large-map`);
const mapPopup = document.querySelector(`.map-section`);
const closeMap = mapPopup.querySelector(`.button-close`);

const setToggleHandlers = function (toggle, slide) {
  toggle.addEventListener (`click`, function () {
    let activeToggle = document.querySelector(`.slide-on`);
    let activeSlide = document.querySelector(`.slide-shown`);
    activeToggle.classList.remove(`slide-on`);
    toggle.classList.add(`slide-on`);
    activeSlide.classList.remove(`slide-shown`);
    slide.classList.add(`slide-shown`);
  });
};

const setServiceHandlers = function (button, item) {
  button.addEventListener (`click`, function (evt) {
    let activeButton = document.querySelector(`.service-active`);
    let activeItem = document.querySelector(`.service-shown`);
    evt.preventDefault();
    activeButton.classList.remove(`service-active`);
    button.classList.add(`service-active`);
    activeItem.classList.remove(`service-shown`);
    item.classList.add(`service-shown`);
  });
};

const onEmailPopupEsc = (evt) => {
  if (evt.key === `Escape`) {
    emailPopup.classList.remove(`email-container--active`);
    openEmailPopup.focus();
    document.removeEventListener(`keydown`, onEmailPopupEsc);
  }
};

const onMapPopupEsc = (evt) => {
  if (evt.key === `Escape`) {
    mapPopup.classList.remove(`map-section--active`);
    openMap.focus();
    document.removeEventListener(`keydown`, onMapPopupEsc);
  }
};

for (let i = 0; i < toggleButtons.length; i++) {
  setToggleHandlers(toggleButtons[i], slides[i]);
}

for (let i = 0; i < serviceButtons.length; i++) {
  setServiceHandlers(serviceButtons[i], serviceDescriptions[i]);
}

openEmailPopup.addEventListener (`click`, function (evt) {
  evt.preventDefault();
  emailPopup.classList.add(`email-container--hidden`);
  setTimeout(function () {
    emailPopup.classList.add(`email-container--active`);
  }, 20);
  emailPopup.focus();
  document.addEventListener(`keydown`, onEmailPopupEsc);
});

closeEmailPopup.addEventListener (`click`, function () {
  emailPopup.classList.remove(`email-container--active`);
  openEmailPopup.focus();
  document.removeEventListener(`keydown`, onEmailPopupEsc);
});

emailForm.addEventListener(`submit`, function (evt) {
	if (!nameInput.value || !emailInput.value || !textInput.value) {
    	evt.preventDefault();
      emailPopup.classList.remove(`form-error`);
      emailPopup.offsetWidth;
      emailPopup.classList.add(`form-error`);
    }
});

openMap.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  mapPopup.classList.add(`map-section--active`);
  mapPopup.focus();
  document.addEventListener(`keydown`, onMapPopupEsc);
});

closeMap.addEventListener(`click`, function () {
  mapPopup.classList.remove(`map-section--active`);
  openMap.focus();
  document.removeEventListener(`keydown`, onMapPopupEsc);
})
