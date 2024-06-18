/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

// function showNumbers(a, b) {
//   for (let i = a; i <= b; i++) {
//     if (i % 5 === 0) console.log(i);
//   }
// }

// showNumbers(23, 70);

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

// function foo(min, max) {
//   let total = 0;

//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }

//   return total;
// }

// foo(1, 15);

//!===============================================================

// Напиши цикл, який виведе на консоль числа від 1 до 10.

// Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0) console.log(i);
// }
//!===============================================================

// let total = 0;

// for (let i = 0; i < 100; i++) {
//   total += i;
// }

// console.log(total);

//!========================================================
// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал `!5 = 5 * 4 * 3 * 2 * 1`).

// !6 = 6 * 5 * 4 * 3 * 2 * 1 * 0;
// !6 = 24 * 5 * 6;

// function factorial(x) {
//   let result = 1;

//   for (let i = 1; i <= x; i++) {
//     result *= i;
//   }

//   console.log(result);
// }

// factorial(6);

//!===============================================================

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello worldt"

// function task10(str) {
//   for (let i = 1; i < str.length; i += 2) {
//     console.log(str[i]);
//   }
// }

// task10('Hello worldt');

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.
// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок
// function reverse(str) {
//   debugger;
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(reverse('Hello World'));

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.

function task11(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') break;
    console.log(str[i]);
  }
}

// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// const str = 'JavaScript';
// for (let i = 0; i < str.length; i += 2) {
//   console.log(str[i]);
// }

// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
//    верхньому регістрі

// function myConvert(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }
//   console.log(result);
// }

// myConvert('Javascript');

// function myConvert2(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) > 90) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }

//   console.log(result);
// }

// myConvert2('Hello World');

// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
//    рядочка str1 стільки разів скільки вказали у параметрі count.

// function getString(str1, str2, count) {
//   let result = str1;

//   for (let i = 0; i < count; i++) {
//     result += str2;
//   }

//   console.log(result);
// }

// getString('Hello', '!', 10);

//!======================================================

// function test(len) {
//   let str = '';

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       const isFirstCol = j === 0;
//       const isLastCol = j === len - 1;
//       const isFirstRow = i === 0;
//       const isLastRow = i === len - 1;

//       const isDiagonal = i === j;

//       const isEvenCol = j % 2 === 0;

//       const fill = isFirstCol || isLastCol || isFirstRow || isLastRow;

//       if (fill) str += '#';
//       else if (isDiagonal) str += '0';
//       else if (isEvenCol) str += '|';
//       else str += ' ';
//     }

//     str += '\n';
//   }

//   console.log(str);
// }

// test(20);

//!===================================================
