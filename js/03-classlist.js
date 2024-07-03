/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

// const liElems = document.querySelectorAll('li');

// firstLiElem.classList.add('site-nav__link--current');

// for (let i = 0; i < liElems.length; i++) {
//   const text = liElems[i].firstElementChild.textContent;
//   if (text.length > 7) {
//     liElems[i].classList.add('site-nav__link--current');
//   }
// }

//!======================================================
// const ulElem = document.querySelector('ul');
// ulElem.classList.remove('site-nav');

//!======================================================

// const ulElem = document.querySelector('ul');
// setInterval(() => {
//   ulElem.classList.toggle('site-nav__link--current');
// }, 1000);

//!======================================================
// const ulElem = document.querySelector('ul');
// ulElem.classList.replace('site-nav1', 'site-nav__link--current');

//!======================================================
const ulElem = document.querySelector('ul');
const liElems = ulElem.children;
let width = 50;

for (const liElem of liElems) {
  width += 20;
  liElem.style.width = `${width}px`;
  liElem.style.backgroundColor = 'tomato';
}
