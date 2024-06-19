/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
//!======================================================

/* const arr = [1, 3, 4, 1, 2, 4, 56, 1, 2, 4, 5];

function newArr(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i] * 2;
    result.push(elem);
  }

  return result;
}

newArr(arr); */
//!======================================================

// const arr = [1, 2, 45, 5, 56, 1, 3, 5, 6, 1];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// console.log(arr);
//!======================================================

// const numbers = [1, 3, 5, 1, 3, 5, 62];
// for (const elem of numbers) {
//   elem *= 2;
// }
//!======================================================

// const emails = [
//   'test1@gmail.com',
//   'test2@yahoo.com',
//   'test1@yandex.com',
//   'test4@gmail.com',
//   'test6@yahoo.com',
//   'test2@gmail.com',
//   'test3@yandex.com',
//   'test6@yahoo.com',
//   'test1@gmail.com',
//   'test5@gmail.com',
//   'test2@yandex.com',
//   'test5@gmail.com',
//   'test1@gmail.com',
//   'test6@yahoo.com',
//   'test1@gmail.com',
//   'test7@yandex.com',
// ];

// function searchYahooAndGmail(arr) {
//   const res1 = [];
//   const res2 = [];

//   for (const item of arr) {
//     const endsYahoo = item.endsWith('@yahoo.com');
//     const endsGmail = item.endsWith('@gmail.com');
//     if (endsYahoo) {
//       res1.push(item);
//     } else if (endsGmail) {
//       res2.push(item);
//     }
//   }

//   console.log(result);
// }

// searchYahooAndGmail(emails);

//!======================================================
/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

/* const values = '8 11';

function getArea(valueStr) {
  const elems = valueStr.split(' ');

  const width = +elems[0];
  const height = +elems[1];

  const area = width * height;
  return area;
}

const area1 = getArea(values); */

//!======================================================

// function task1(str) {
//   const arr = str.split(' ');
//   const result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     const width = +arr[i];
//     const height = +arr[i + 1];
//     const area = width * height;
//     result.push(area);
//   }
//   console.log(result);
// }

// task1('10 21 32 12 32 12 23 3');
//!======================================================
/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//   const message = `${i + 1}: ${fruits[i]}`;
//   console.log(message);
// }
