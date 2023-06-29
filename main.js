'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

/* for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal); */

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
    const s1cords = section1.getBoundingClientRect();
    console.log(s1cords);
    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // Scrolling
    // window.scrollTo(s1cords.left, s1cords.top + window.pageYOffset);

    // Old method
    /* window.scrollTo({
       left: s1cords.left, 
       top: s1cords.top + window.pageYOffset,
       behavior: 'smooth',
    }); */

    // New method(works only on new search engines)
    section1.scrollIntoView({
        behavior: 'smooth',
    });
});

// Page navigation
/* document.querySelectorAll('.nav__link').forEach(function(el){
    el.addEventListener('click', function(e){
        e.preventDefault();
        
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth',});
    });
}); */

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();

    // Matching strategy
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth',});
    };
});

// Tabbed component
tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if(!clicked) return;

    // Active tab
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    // Activate content area
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function(e){
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if(el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    };
};

// Passing an argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function(e){
    console.log(window.scrollY);

    if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
});





















/* // Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analitycs.';
message.innerHTML = 'We use cookies for improved functionality and analitycs. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.remove();
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'tak';

// Non-standard
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't USE!!!!!!! - it will remove all classes and add only one
// logo.className = 'Marcin'; */

// **************************************************************
// ************* TYPES OF EVENTS AND EVENT HANDLERS *************
// **************************************************************

/* const h1 = document.querySelector('h1');

const alertH1 = function(e){
    alert('addEventListener: Great! You are reading the heading');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
 */
/* h1.onmouseenter = function(e){
    alert('onmouseenter: Great! You are reading the heading');
}; */

// **************************************************************
// ********************* EVENT PROPAGATION **********************
// **************************************************************

/* const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('link', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // Stop propagation
    // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
}); */

// **************************************************************
// *********************** DOM TRAVERSING ***********************
// **************************************************************

/* const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(e){
    if(e !== h1) e.style.transform = 'scale(0.5)';
}); */