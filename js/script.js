const navMenu = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');

document.addEventListener('click', (e) => {
  const isNavIcon = e.target.matches('[data-nav-menu-icon]');
  if (!isNavIcon) return;

  if (isNavIcon) {
    navMenu.classList.toggle('mobile-nav-active');
  }

  if (navMenu.classList.contains('mobile-nav-active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
