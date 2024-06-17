/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log('before');
// for (let i = 0; i <= 150; i += 1) {
//   console.log(i);
// }
// console.log('after');

//!===============================================================

// const str = 'Hello world';

// for (let i = 0; i < str.length / 2; i += 1) {
//   console.log(str[i]);
//   console.log(`console.log(str[${i}])`);
// }

//!===============================================================

// let salary = 1000;

// for (let i = 0; i < 3; i++) {
//   console.log('Може більше?');
//   salary += Math.round(Math.random() * 100);
//   console.log('Ok', salary);
// }

// console.log(salary);

//!===============================================================

// for (let i = 100; i > 0; i -= 5) {
//   console.log(i);
// }

// let x = 10;
// // console.log(--x);
// x += 1;
// console.log(x);

// // console.log(x--);
// console.log(x);
// x += 1;

// console.log(10 + Number('10'));
// console.log(10 + +'10');
//!===============================================================

// let salary = 1500;
// let target = 1300;

// while (salary < target) {
//   console.log('Може більше?');
//   salary += Math.round(Math.random() * 100);
//   console.log('Ok', salary);
// }

// do {
//   console.log('Може більше?');
//   salary += Math.round(Math.random() * 100);
//   console.log('Ok', salary);
// } while (salary < target);
//!===============================================================

// const random = Math.round(Math.random() * 100); //85
// let userNumber;

// while (userNumber != random) {
//   userNumber = prompt('Enter number');
//   // console.log(userNumber > random? '>': '<');
//   if (userNumber > random) {
//     console.log('<');
//   } else {
//     console.log('>');
//   }
// }

// console.log('Game over');
//!===============================================================

// let message = '    Hello    user   test     world          word      ';
// message = message.trim();

// while (message.includes('  ')) {
//   message = message.replace('  ', ' ');
//   console.log(message);
// }

//!===============================================================

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0 && i % 8 === 0 && i > 50) break;
//   console.log(i);
// }

// for (let i = 0; i < 50; i++) {
//   if (i % 3 !== 0 && i % 8 !== 0) continue;
//   console.log(i);
// }

//!===============================================================

// function getTotal(min, max) {
//   let total = 0;
//   debugger;
//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) continue;
//     total += i;
//   }
//   console.log(total);
// }

// getTotal(0, 50);

//!===============================================================
