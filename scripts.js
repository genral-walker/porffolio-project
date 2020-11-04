
// ANIMATIONS FOR REST OF PAGE ON SCROLL
AOS.init({
    offset: 400,
    delay: 0,
    duration: 1200 
  });


////// NAVIGATE PAGE DROPWON CONTENT ANIMATION //////
const dropDownButton = document.querySelector('.header__page-navigate');
const dropDownItem = document.querySelector('.dropdown__ul');
const dropDownLists = document.querySelectorAll('.dropdown__li');

dropDownButton.addEventListener('click', () => {
    dropDownButton.style.animation = 'none';
    dropDownItem.classList.add('nav-drop');
    setTimeout(() => {
        dropDownItem.classList.remove('nav-drop');
    }, 4200);
});

dropDownLists.forEach(list => {
    list.addEventListener('click', () => {
        setTimeout(() => {
            dropDownItem.classList.remove('nav-drop');
        }, 1300);
    })
});


////// LABEL COLOR CHANGE ON INPUT FOCUS //////
const inputName = document.querySelector('.form__input-name');
const inputMessage = document.querySelector('.form__input-message');
const lableName = document.querySelector('#label-1');
const labelMessage = document.querySelector('#label-2');

const changeColor = (parent, elm) => {
    elm.classList.toggle('color-primary');
};

inputName.addEventListener('focusin', () => { changeColor(inputName, lableName); });
inputMessage.addEventListener('focusin', () => { changeColor(inputMessage, labelMessage); })

inputName.addEventListener('focusout', () => { changeColor(inputName, lableName); });
inputMessage.addEventListener('focusout', () => { changeColor(inputMessage, labelMessage); })


//ANIMATIONS AS PER VIEW

// FOR THE HEADER NAV
const nav = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const body = document.body.getBoundingClientRect();
    if (body.y <= -35) {
        nav.classList.add('fix');
    } else {
        nav.classList.remove('fix');
    }
});
