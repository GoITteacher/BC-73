/*
 * Створення та додавання елементів
 */
//!======================================================

// const el = document.createElement('p');

// el.textContent = 'Hello world';
// el.classList.add('deposit');
// el.setAttribute('disabled', '');
// el.style.width = '50px';

// const container = document.querySelector('.hero');

// container.append(el);

//!======================================================
/*
 * Створюємо заголовок
 */
const container = document.querySelector('.hero');
const titleEl = document.createElement('h1');

titleEl.textContent = 'Hello world';
titleEl.style.color = 'green';

container.append(titleEl);

//!======================================================
/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

// const imageEl = document.createElement('img');

// imageEl.style.width = '100px';
// imageEl.style.height = '100px';

// imageEl.setAttribute(
//   'src',
//   'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
// );

// imageEl.setAttribute('alt', 'my image');

// container.append(imageEl);

//!======================================================
/*
 * Створюємо та додаємо новий пункт меню
 */

// const images = [
//   'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg',
//   'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
//   'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg',
//   'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k',
//   'https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600',
// ];

// const imageElems = images.map(url => {
//   const imageEl = document.createElement('img');
//   imageEl.setAttribute('src', url);
//   imageEl.setAttribute('alt', 'Hello');
//   imageEl.style.width = '300px';
//   return imageEl;
// });

// for (const imageEl of imageElems) {
//   container.append(imageEl);
// }

// container.append(...imageElems);
