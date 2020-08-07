
///// Header Nav Animation /////
const nav = document.querySelector('.header__anchor');
const innerNav = document.querySelector('.header__nav');

nav.addEventListener('click', () => {
    innerNav.classList.toggle('nav-rotate');
    document.querySelector('.header__bg').classList.toggle('bg-show');
});



////// For form Label Color Change //////
const inputName = document.querySelector('#label-1');
document.querySelector('.form__input-name').addEventListener('focusin', () => {
    inputName.classList.toggle('color-primary');
});
document.querySelector('.form__input-name').addEventListener('focusout', () => {
    inputName.classList.remove('color-primary');
});

const inputMessage = document.querySelector('#label-2');
document.querySelector('.form__input-message').addEventListener('focusin', () => {
    inputMessage.classList.add('color-primary');
});
document.querySelector('.form__input-message').addEventListener('focusout', () => {
    inputMessage.classList.remove('color-primary');
});


