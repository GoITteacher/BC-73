/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// for(const item of arr){}
//!======================================================

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);
//!======================================================

// let day = 1;
// const data = {
//   [`day_${day++}`]: 26,
//   [`day_${day++}`]: 24,
//   [`day_${day++}`]: 22,
//   [`day_${day++}`]: 27,
//   [`day_${day++}`]: 22,
//   [`day_${day++}`]: 27,
//   [`day_${day++}`]: 25,
// };

// let temp = 0;

// for (const key in data) {
//   temp += data[key];
// }

// console.log(temp);

//!======================================================
// let day = 1;
// const data = {
//   [`day_${day++}`]: 26,
//   [`day_${day++}`]: 24,
//   [`day_${day++}`]: 22,
//   [`day_${day++}`]: 27,
//   [`day_${day++}`]: 22,
//   [`day_${day++}`]: 27,
//   [`day_${day++}`]: 25,
// };

// Object.values();
// Object.keys();
// Object.entries();

// const values = Object.values(data);
// const keys = Object.keys(data);

// for(const key of keys){}
// for(const value of values){}

//!======================================================

// let day = 1;
// const data = {
//   [`day_${day++}`]: 26,
//   [`day_${day++}`]: 24,
//   [`day_${day++}`]: 22,
//   [`day_${day++}`]: 27,
//   [`day_${day++}`]: 22,
//   [`day_${day++}`]: 27,
//   [`day_${day++}`]: 25,
// };

//  ========================
// const keys = Object.keys(data);
// for (const key of keys) {
//   data[key] += 1;
// }
// console.log(data);
//  ========================
// function getAvg(data) {
//   const values = Object.values(data);
//   let total = 0;
//   for (const item of values) {
//     total += item / values.length;
//   }
//   console.log(total);
// }

// getAvg({ x: 'Hello', y: 'World' });
//  ========================

//!======================================================

let day = 1;
const data = {
  [`day_${day++}`]: 26,
  [`day_${day++}`]: 24,
  [`day_${day++}`]: 22,
  [`day_${day++}`]: 27,
  [`day_${day++}`]: 22,
  [`day_${day++}`]: 27,
  [`day_${day++}`]: 25,
};

const entries = Object.entries(data);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

// [
//   ['data_1', 26],
//   ['data_2', 24],
//   ['data_3', 24],
//   ['data_4', 24],
//   ['data_5', 24],
//   ['data_6', 24],
//   ['data_7', 24],
// ];

//!======================================================
