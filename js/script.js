import cardBuilder from "./cardBuilder.js";
import worksCardData from "./worksCardData.js";

const navMenu = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');
const worksSection = document.querySelector('.works');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
// const modalCloseButton = document.querySelector('[data-modal-close]')

worksCardData.forEach(cardItem => {
  worksSection.insertAdjacentHTML('afterbegin', cardBuilder(cardItem))
})

document.addEventListener('click', (e) => {
  const isNavIcon = e.target.matches('[data-nav-menu-icon]');
  const isNavLink = e.target.matches('[data-nav-link]');

  const isModalOpenButton = e.target.matches('[data-modal-target]');
  const isModalCloseButton = e.target.matches('[data-modal-close]');

  if (isModalOpenButton) {
    modal.classList.add('modal-active');
    overlay.classList.add('overlay-active');
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
