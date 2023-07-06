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
    //const s1coords = section1.getBoundingClientRect();
 /*    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
 */
    // Scrolling
    // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset, {behaviour: 'smooth'});

    // Old method
/*     window.scrollTo({
        left: s1coords.left,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth',
    }); */

    // New method
    section1.scrollIntoView({behavior: 'smooth'});
});

/////////////////////////////////////////////////////

// Page navigation

/* document.querySelectorAll('.nav__link').forEach(function(e){
    e.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    });
}); */

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();

    // Matching strategy
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    };
});

// Tabbed component

tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if(!clicked) return;

    tabs.forEach(e => e.classList.remove('operations__tab--active'));

    clicked.classList.add('operations__tab--active');
    
    
    // Old way
    // if(clicked) clicked.classList.add('operations__tab--active');
    
    // Activate content area
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

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
}

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


// Sticky navigation
// Scroll Event - very bad for perfomance of the website
/* const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function(e){
    console.log(window.scrollY);

    if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
});
 */

// Intersection Observer API
/* const obsCallback = function(entries, observer){
    entries.forEach(entry => {
        console.log(entry);
    })
};

const obsOptions = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); */

const header = document.querySelector('.header');

const stickyNav = function(entries){
    const [entry] = entries;
    console.log(entry);
    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-90px',
});
headerObserver.observe(header);

























////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////

// Selecting elements
/* console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies';
message.innerHTML = 'We use cookies. <button class="btn btn--close-cookie"> Got it!</button>';

// First child
// header.prepend(message);

// Last child
header.append(message);
// Cloning Node
// header.append(message.cloneNode(true));

//header.before(message);
header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.remove();
    // Before ES6
    // message.parentElement.removeChild(message);
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Works only for inline style
console.log(message.style.width);

// Works for all styles
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

// Attributes on link
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use, it will overwrite all existing classes
logo.className = 'Marcin'; */

/* const h1 = document.querySelector('h1');

const alertH1 = function(e){
    console.log('addEventlistener');
};

// New method
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); */

// Old method
/* h1.onmouseenter = function(e){
    console.log('onmouseenter');
};
 */

// rgb(255,255,255);

/* const rnd = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const opacity = function(){
    return Math.random();
};

document.querySelector('.nav').addEventListener('click', function(e){
    const randomColor = `rgba(${rnd(0, 255)}, ${rnd(0, 255)}, ${rnd(0, 255)}, ${opacity()})`;
    this.style.background = randomColor;
    const randomGradient = `linear-gradient(to left, rgb(${rnd(0, 255)}, ${rnd(0, 255)}, ${rnd(0, 255)}), rgb(${rnd(0, 255)}, ${rnd(0, 255)}, ${rnd(0, 255)}))`;
    this.style.backgroundImage = randomGradient;
}, true);

document.querySelector('.nav__links').addEventListener('click', function(e){
    const randomColor = `rgba(${rnd(0, 255)}, ${rnd(0, 255)}, ${rnd(0, 255)}, ${opacity()})`;
    this.style.background = randomColor;
    // Stop propagation
    // e.stopPropagation();
});  */

/* const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'blue';

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-primary)';
h1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(e){
    if(e !== h1) e.style.transform = 'scale(0.5)';
}); */