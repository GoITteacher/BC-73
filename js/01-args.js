//!======================================================
// function foo(a = 0, b = 0) {
//   console.log(`${a} + ${b} = `);
//   return a + b;
// }

// const res = foo(15, 15);

// console.log(res);
//!======================================================

// function foo(age, username, balance) {
//   if (age < 18) return;

//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
// }

// foo(19, 'Petro', 150);

//!======================================================

// function foo(age, username, balance) {
//   if (age < 18) return;

//   balance -= 50;
//   console.log(`Hello ${username}`);
//   console.log(`Balance:  ${balance}`);
// }

// console.log(foo(19, 'Vasya', 500));

//!======================================================

// const x = Math.random();

// console.log(x * 100);

//!======================================================
/**
 * Псевдомасив arguments и Array.from
 */

// function fn(x, y) {
// console.log(arguments);
// for (let i = 0; i < arguments.length; i++) {
//   console.log(arguments[i]);
// }
// for (const item of arguments) {
//   console.log(item);
// }
// }

//!======================================================

// function fn() {
//   arguments = Array.from(arguments);
//   const args = Array.from(arguments);
//   console.log(args);
// }
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//!======================================================

// const arr = [];
// arr.push(1, 12, 12, 15, 15);
// console.log(arr);

// const max = Math.max(10, 50);
// console.log(max);
//!======================================================

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add() {
//   let total = 0;
//   const args = Array.from(arguments);

//   for (const elem of args) {
//     total += elem;
//   }

//   return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   const args = Array.from(arguments);
//   let avg = 0;
//   for (const elem of args) {
//     avg += elem / args.length;
//   }
//   return avg;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//!======================================================
// function getArr() {
//   const args = Array.from(arguments);
//   const max = args.pop();
//   const result = [];
//   for (const item of args) {
//     if (item > max) {
//       result.push(item);
//     }
//   }
//   console.log(result);
// }
// getArr(1, 3, 5, 31, 2, 3, 4, 2, 1, 23, 4, 5, 66, 4);
//!======================================================
