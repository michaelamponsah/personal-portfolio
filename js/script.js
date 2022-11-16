import cardBuilder from "./cardBuilder.js";
import worksCardData from "./worksCardData.js";

const navMenu = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');
const worksSection = document.querySelector('.works');

worksCardData.forEach(cardItem => {
   worksSection.insertAdjacentHTML('afterbegin', cardBuilder(cardItem))
})

document.addEventListener('click', (e) => {
  const isNavIcon = e.target.matches('[data-nav-menu-icon]');
  const isNavLink = e.target.matches('[data-nav-link]');

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
