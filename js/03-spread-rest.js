/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

//!======================================================

// const x = [1, 2, 3, 4, 5, 1, 2, 4, 55];
// const y = [...x];
// console.log(y);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const res = ['START', ...arr1, ...arr2, ...arr3, 'END'];

// console.log(res);

//!======================================================

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const res = Math.min(...temps);
// console.log(res);

// console.log(temps);
// console.log(...temps);

//!======================================================
/**
 * Створення масиву і тип за посиланням
 */
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// b[0].x = 'Hello';

// console.log(a);

// const copy = [];
// for(const item of arr){
//   const obj = [...item]
//   copy.push(obj)
// }
//!======================================================

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

//!======================================================
/*
 * Створення об'єкта
 */

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };

// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log(objC);

//!======================================================
/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// let userSettings = {
//   opacity: 0.1,
//   baseColor: 'grey',
//   showNotifications: false,
//   hideSidebar: true,
// };

// userSettings = { ...defaultSettings, ...userSettings };

// console.log(userSettings);
//!======================================================
//!======================================================
//!======================================================

// function foo(...arr) {
//   console.log(argumen);
// }
// foo(1, 2, 3, 4, 6, 1, 2, 3, 5, 1, 2);

//!======================================================

// function foo(x, y, ...arr) {
//   console.log(x, y);
//   console.log(arr);
// }
// foo(10, 20, 30, 40);

//!======================================================

// function task1_1(max, min, ...nums) {
//   const result = [];
//   for (const num of nums) {
//     if (num < max) {
//       result.push(num);
//     }
//   }
//   return result;
// }
// function task1_2() {
//   const args = Array.from(arguments);
//   const max = args.shift();

//   const result = [];
//   for (const num of args) {
//     if (num < max) {
//       result.push(num);
//     }
//   }
//   return result;
// }

// const res = task1_1(10, 1, 3, 42, 12, 3, 4, 1, 12, 3, 42, 3, 1);

// console.log(res);

//!======================================================
