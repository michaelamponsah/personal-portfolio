const navMenu = document.querySelector('.mobile-navigation');
const body = document.querySelector('body');

document.addEventListener('click', (e) => {
  const isNavIcon = e.target.matches('[data-nav-menu-icon]');
  const isNavLink = e.target.matches('[data-nav-link]');

  if (isNavIcon) {
    navMenu.classList.toggle('mobile-nav-active');
  }

  if(isNavLink && navMenu.classList.contains('mobile-nav-active')) {
    console.log('hi')
    navMenu.classList.remove('mobile-nav-active')
    body.style.overflow = 'auto'
  }
  
  if (navMenu.classList.contains('mobile-nav-active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
