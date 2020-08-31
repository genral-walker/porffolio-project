
////// Page Section Navigate DropDown Effects //////
const dropDownButton = document.querySelector('.header__page-navigate');
const dropDownItem = document.querySelector('.dropdown__ul');
const dropDownLists = document.querySelectorAll('.dropdown__li');

dropDownButton.addEventListener('click', () => {
    dropDownButton.style.animation = 'none';
    dropDownItem.classList.toggle('nav-drop');
});

dropDownLists.forEach(list => {
    list.addEventListener('click', () => {
        setTimeout(() => {
            dropDownItem.classList.remove('nav-drop');
        }, 2500);
    })
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
