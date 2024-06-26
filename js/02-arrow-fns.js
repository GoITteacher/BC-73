/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//!======================================================

// const x = 5 + 5;
// const y = 10 > 5;
// const t = () => {};

// const t = () => {};
// const arrow = () => {};
// const myFoo = () => {};

//!======================================================

// const sayHello = () => {
//   console.log('Hello world');
// };

// const sayHelloUser = (firstName, lastName) => {
//   console.log(`Hello ${firstName} ${lastName}`);
// };

// const sayHelloUsername = username => {
//   console.log(`Hello ${username}`);
// };

//!======================================================

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// const firstLetter = str => str[0].toUpperCase();
// const normalizeStr = str => firstLetter(str) + str.slice(1).toLowerCase();

// console.log(normalizeStr('hello'));

//!======================================================
// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!======================================================
// function fnA() {
//   return {
//     a: 5,
//   };
// }

// const arrowFnA = () => {
//   const obj = {};
//   return obj;
// };

// console.log(arrowFnA());

//!======================================================
/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (a, b) => a + b);
// calc(10, 8, (a, b) => a - b);
