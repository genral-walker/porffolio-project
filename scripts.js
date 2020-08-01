
///// Header Nav Animation /////
const nav = document.querySelector('.header__anchor');
const innerNav = document.querySelector('.header__nav');

nav.addEventListener('click', () => {
    innerNav.classList.toggle('nav-rotate');
});
