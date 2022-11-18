import cardBuilder from './cardBuilder.js';
import { disableScrolling, getBrowserStoredData, getCardData, setModalDisplayData, storeDataInBrowser } from './utils.js';
import worksCardData from './worksCardData.js';

const navMenu = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');
const worksSection = document.querySelector('.works');
const modal = document.querySelector('.modal-content');
const overlay = document.querySelector('.overlay');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const fullName = document.querySelector('[name="name"]');
const emailError = document.querySelector('.error');
const getIntouchForm = document.querySelector('.form');

worksCardData.forEach((cardItem) => {
  worksSection.insertAdjacentHTML('afterbegin', cardBuilder(cardItem));
});

document.addEventListener('click', (e) => {
  const isNavIcon = e.target.matches('[data-nav-menu-icon]');
  const isNavLink = e.target.matches('[data-nav-link]');
  const isOverlay = e.target.matches('.overlay');

  const isModalOpenButton = e.target.matches('[data-modal-target]');
  const isModalCloseButton = e.target.matches('[data-modal-close]');

  if (isModalOpenButton) {
    modal.classList.add('modal-active');
    overlay.classList.add('overlay-active');

    const cardData = e.target.closest('.card');
    const modalDisplayData = getCardData(cardData);
    setModalDisplayData(modalDisplayData, modal);
    disableScrolling();
  }

  if (isOverlay && modal.classList.contains('modal-active')) {
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
  }

  if (isModalCloseButton) {
    modal.classList.remove('modal-active');
    overlay.classList.remove('overlay-active');
  }

  if (isNavIcon) {
    navMenu.classList.toggle('mobile-nav-active');
  }

  if (isNavLink && navMenu.classList.contains('mobile-nav-active')) {
    navMenu.classList.remove('mobile-nav-active');
    body.style.overflow = 'auto';
  }

  if (navMenu.classList.contains('mobile-nav-active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

function displayError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email is required please';
    email.setCustomValidity('');
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please provide a valid email';
  } else if (email.validity.patternMismatch) {
    emailError.textContent = 'Email should be in lowercase';
  }
  emailError.className = 'error error-active';
}

email.addEventListener('blur', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    displayError();
  }
});

email.addEventListener('invalid', () => {
  email.setCustomValidity(' ');
});

getIntouchForm.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    displayError();
    e.preventDefault();
  }

  let userData = {
    userName: fullName.value,
    userEmail: email.value,
    userMessage: message.value,
  };

  storeDataInBrowser('userData', userData);
});

const { 
  userName,
  userEmail,
  userMessage 
} = getBrowserStoredData('userData');
  fullName.value = userName;
  email.value = userEmail;
  message.value = userMessage;
