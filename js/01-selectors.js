/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const btnElem = document.querySelector('.js-magic-btn');
// console.log(btnElem);

// const linkElem = document.querySelector('ul a');
// console.log(linkElem);

// const lastLinkElem = document.querySelector('ul>li:last-child a');
// console.log(lastLinkElem);

// const btnElem = document.querySelector('.js-magic-btn');
// btnElem.textContent = 'Hello world';

// const ulElem = document.querySelector('ul');
// console.log(ulElem);
// const linkElem = ulElem.querySelector('li:last-child a');
// linkElem.textContent = 'Hello world';

// const links = document.querySelectorAll('ul>li>a');

// for (const link of links) {
//   console.log(link.textContent);
// }

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

// const liElem = document.querySelector('li');

// console.log(liElem.nextElementSibling.nextElementSibling);
/* 
- parentElement - піти до батька
- firstElementChild - піти до першої дитини
- lastElementChild - піти до останньої дитини
- previousElementSibling - піти до сусіда зліва
- nextElementSibling - піти до сусіда зправа
*/

// CHILDREN

// const ulElem = document.querySelector('ul');

// console.log('Count items: ', ulElem.children.length);

// for (const liElem of ulElem.children) {
//   const linkText = liElem.firstElementChild.textContent;
//   console.log(linkText);
// }
