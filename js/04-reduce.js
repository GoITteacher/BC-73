/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

//!======================================================
// const numbers = [5, 10, 15, 20, 25];

// const result = numbers.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(result);

//!======================================================

const numbers = [1, 42, 1, 4, 6, 5, 3, 1, 2, 4, 6, 43, 2];

// const res = numbers.reduce((acc, el, i) => {
//   if (el % 2 === 0) {
//     acc.push(el);
//   }
//   return acc;
// }, []);

// const res = numbers.reduce((acc, el) => {
//   acc.push(el * 2);
//   return acc;
// }, []);

// const res = numbers.reduce((acc, el) => {
//   acc += `<li>${el}</li>\n`;
//   return acc;
// }, '');

// console.log(res);
//!======================================================
/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const values = Object.values(salary);

const totalSalary = values.reduce((total, el) => total + el, 0);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((total, player) => {
  return total + player.timePlayed;
}, 0);
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const info = {
//   name: '123',
//   total: 18,
// };

// const totalAmount = cart.reduce((acc, el) => {
//   acc.total += el.price * el.quantity;
//   return acc;
// });

// console.log(totalAmount);
