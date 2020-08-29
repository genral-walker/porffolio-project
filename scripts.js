
///// Header Nav Animation /////
const nav = document.querySelector('.nav__hamburger');
const innerNav = document.querySelector('.nav__icon'); 
const bgNav = document.querySelector('.nav-content'); 
const bgNavItems = document.querySelector('.nav-content__ul');

 nav.addEventListener('click', () => {
     innerNav.classList.toggle('hamburger-rotate');
     bgNav.classList.toggle('show');
     bgNavItems.classList.toggle('show');
 });



////// From Label Color Change on Focus //////
const inputName = document.querySelector('#label-1');
document.querySelector('.form__input-name').addEventListener('focusin', () => {
    inputName.classList.add('color-primary');
});
document.querySelector('.form__input-name').addEventListener('focusout', () => {
    setTimeout(() => {
        inputName.classList.remove('color-primary');
        }, 700);
    
});

const inputMessage = document.querySelector('#label-2');
document.querySelector('.form__input-message').addEventListener('focusin', () => {
    inputMessage.classList.add('color-primary');
});
document.querySelector('.form__input-message').addEventListener('focusout', () => {
    setTimeout(() => {
        inputMessage.classList.remove('color-primary');
        }, 700);
});




////// Page Section Navigate DropDown //////
document.querySelector('.header__page-navigate').addEventListener('click', () => {
    document.querySelector('.header__page-navigate').style.animation = 'none';
    document.querySelector('.dropdown__ul').classList.toggle('nav-drop');
});

for (let i = 0; i < 5; i++) {
    document.querySelectorAll('.dropdown__li')[i].addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('.dropdown__ul').classList.remove('nav-drop');
        }, 2500);
    });
    
}



