/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

//!======================================================
/* const numbers = [5, 10, 15, 20, 25];

function myCallback(num) {
  console.log(num);
}
function myCallback2(elem) {
  console.log(`elem: ${elem}`);
}
function myCallback3(elem, i) {
  console.log(`${i + 1}) ${elem}`);
} */

// numbers.forEach(myCallback);
// numbers.forEach(myCallback3);

/* 
myCallback2(5, 0);
myCallback2(10, 1);
myCallback2(15, 2);
myCallback2(20, 3);
myCallback2(25, 4);
*/

//!======================================================
// const numbers = [5, 10, 15, 20, 25];

// let total = 0;

// numbers.forEach(el => (total += el));

// for (const elem of numbers) {
//   total += elem;
// }

// console.log(total);

// numbers.forEach((elem, indx) => {
//   console.log(elem);
// });

// numbers.forEach((elem, i) => {
//   console.log(i, elem);
// });

// numbers.forEach((elem, i) => {
//   console.log(elem * i);
// });

//!======================================================
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

function logItems(items) {
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  items.forEach((item, i) => {
    console.log(`${i + 1} - ${item}`);
  });
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((el, i) => {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
//  */

// function calculateAverage(...args) {
//   let total = 0;
//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   args.forEach(el => (total += el));
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// const result = arr.forEach();
