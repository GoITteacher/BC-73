/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

//!======================================================

// const imageEl = document.querySelector('.hero__image');
// imageEl.setAttribute(
//   'src',
//   'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg',
// );

// const url =
//   'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg';
// const imageContainer = document.querySelector('.js-images');
// const images = imageContainer.children;

// for (const imgElem of images) {
//   imgElem.setAttribute('src', url);
// }

//!======================================================

const addBtnElem = document.querySelector('[data-action="add"]');
// addBtnElem.setAttribute('disabled', '');

// addBtnElem.disabled = true;

//!======================================================
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// const btnElem = document.querySelector('button');
// btnElem.disabled = true;
// btnElem.setAttribute('my-src', 'hello world');
// console.log(btnElem.getAttribute('data-action'));
// btnElem.removeAttribute('disabled');
// btnElem.removeAttribute('data-action');

// if (btnElem.hasAttribute('disabled')) {
//   console.log('Все погано!');
// }

/*
 * Data-атрибути
 */
// const actions = document.querySelectorAll('.actions button');

// const addBtn = actions[0];
// addBtn.dataset.action = 'add';
