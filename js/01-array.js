/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const arr = [10, 20, 40, 20, 10, 20];

//!======================================================

const friends1 = [
  { name: 'Mango', online: false, age: 12, city: 'Dnipro' },
  { name: 'Kiwi', online: true, age: 12, city: 'Dnipro' },
  { name: 'Poly', online: false, age: 12, city: 'Dnipro' },
  { name: 'Ajax', online: false, age: 12, city: 'Dnipro' },
];
const friends2 = [
  { name: 'Mango', online: true, age: 12, city: 'Dnipro' },
  { name: 'Kiwi', online: true, age: 12, city: 'Dnipro' },
  { name: 'Poly', online: false, age: 12, city: 'Dnipro' },
  { name: 'Ajax', online: true, age: 12, city: 'Dnipro' },
];

// for (const item of friends) {
//   console.log(item['name']);
//   console.log(item.online);
// }

// for (let i = 0; i, friends.length; i++) {
//   const friend = friends[i];
//   friend.name;
//   friend.online;
// }

//!======================================================

/**
 * Пошук друга за іменем
 */

// function findFriendByName(allFriends, friendName) {
//   for (const friend of friends) {
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
//   return null;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

//!======================================================
/**
 * Отримуємо імена всіх лрузів
 */

// function getAllNames(allFriends) {
//   const result = [];

//   for (const item of allFriends) {
//     result.push(item.name);
//   }

//   return result;
// }

// console.log(getAllNames(friends1));
// console.log(getAllNames(friends2));

//!======================================================
/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
// function getOnlineFriends(allFriends) {
//   const result = [];

//   for (const item of allFriends) {
//     if (item.online) {
//       result.push(item.name);
//     }
//   }

//   return result;
// }

// console.log(getOnlineFriends(friends1));
// console.log(getOnlineFriends(friends2));

//!======================================================
/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return 0;
// }

// console.log(calcTotalPrice(stones, 'Сапфір'));
// console.log(calcTotalPrice(stones, 'test'));

//!======================================================

// const stones1 = [
//   { name: 'Смарагд', price: 1300, quantity: 4, x: 'Hello world' },
//   { name: 'Діамант', price: 2700, quantity: 3, x: 'Hello world' },
//   { name: 'Сапфір', price: 400, quantity: 7, x: 'Hello world' },
//   { name: 'Щебінь', price: 200, quantity: 2, x: 'Hello world' },
// ];

// function showProp(arr, x) {
//   for (const item of arr) {
//     console.log(item[x]);
//   }
// }

// showProp(stones, 'price');
