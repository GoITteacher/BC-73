/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const ulElem = document.querySelector('.js-items');
const items = ['Vasya', 'Kolya', 'Anton', 'Roman', 'Borys'];

function friendTemplate(el) {
  return `<li>${el}</li>`;
}
function friendsTemplate(arr) {
  return arr.map(friendTemplate).join('\n');
}

const markup = friendsTemplate(items);
// ulElem.innerHTML = '';
// ulElem.insertAdjacentHTML('afterbegin', markup);
