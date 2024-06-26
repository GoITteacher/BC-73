/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
//!======================================================
/* const x = 10;
const y = 'Hello';
const t = function () {};
function showValue(myValue) {
  console.log(myValue);
}
showValue(t); */

//!======================================================

// const t = function () {
//   console.log('Hello T');
// };
// function showValue(t) {
//   x();
// }
// showValue(10);
// showValue(t);

//!======================================================

// function myDay(day, callback) {
//   console.log('Прокинутись');
//   console.log('Поснідати');
//   console.log(`Зібратись до школи на ${day}`);
//   console.log(`Піти до школи`);
//   console.log(`Повернутись зі школи`);
//   callback();
//   console.log(`Вечеря`);
//   console.log(`Спати`);
// }

// function goToMusicSchool() {
//   console.log('Піти до муз школи');
//   console.log('повернутись з муз школи');
// }

// function goToDanceSchool() {
//   console.log('Піти до школи танців');
//   console.log('повернутись з школи танців');
// }

// function gotToShopping() {
//   є;
// }

// function gotToSchool() {
//   goToDanceSchool();
//   goToMusicSchool();
// }

// myDay('Понеділок', goToMusicSchool);
//
// myDay('Вівторок', goToDanceSchool);

// myDay('Середа', gotToSchool);
//!======================================================

// function foo(x, y, q) {
//   x();
//   y();
//   q();
// }

// foo();

//!======================================================

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const res = callback(a, b);
//   console.log(res);
// }

// function sum(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function percent(a, b) {
//   return b / (a / 100);
// }

// function myFun(a, b) {
//   return (a * a * b * b) / 22;
// }

// calc(2, 3, sum);
// calc(2, 3, mult);
// calc(1000, 85, percent);
// calc(1000, 85, myFun);

//!======================================================

// function foo(x) {
//   console.log(x);
// }
// foo(myDay);

//!======================================================

// function foo(callback) {
//   callback();
// }

// foo(function () {
//   console.log('Hello');
// });

//!======================================================

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function forEach(array, callback) {
  const result = [];

  for (const elem of array) {
    const res = callback(elem);
    result.push(res);
  }

  return result;
}

// console.log(each([64, 49, 36, 25, 16], x => x * 2));
// console.log(each([64, 49, 36, 25, 16], x => x - 10));
// console.log(each([64, 49, 36, 25, 16], x => Math.sqrt(x)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], x => Math.ceil(x)));
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return value - 30;
//   }),
// );

// function toUpper(str) {
//   return str.toUpperCase();
// }

// function toMarkup(str) {
//   return `<li>${str}</li>`;
// }

// const result = each(['hello', 'World', 'test'], toUpper);
// const result = each(['hello', 'World', 'test'], toMarkup);

// console.log(result);

//!======================================================
