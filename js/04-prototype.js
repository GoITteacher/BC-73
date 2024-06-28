/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */

//!======================================================

// const baseUser = {
//   x: 'Hello world',
// };

// const user1 = {
//   name: 'Vasya',
//   age: 10,
//   city: 'Dnipro',
//   country: 'Ukraine',
// };

// console.log(user1.t);

//!======================================================

// const baseUser = {
//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showCity() {
//     console.log(this.city);
//   },
// };

// function createUser(name, age, city) {
//   const user = Object.create(baseUser);

//   user.name = name;
//   user.age = age;
//   user.city = city;

//   return user;
// }

// const user1 = createUser('Vasya', 20, 'Dnipro');
// const user2 = createUser('Dmytro', 25, 'Lviv');

// console.log(user1);
// console.log(user2);
//!======================================================

// const arr = [1, 2, 4, 1, 2, 4, 5, 2];
// const arr1 = [1, 3, 5, 3, 1, 2, 45, 5];
// const arr2 = [2, 4, 41, 2, 45, 5, 2];
// console.log(arr2);

//!======================================================

// const obj0 = {
//   t1: 10,
//   t2: 20,
//   t3: 30,
// };

// const obj1 = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
//   __proto__: obj0,
// };

// const obj2 = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
//   __proto__: obj1,
// };

// for (const key in obj2) {
//   console.log(key);
// }

//!======================================================

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.a);
// console.log(objA.hasOwnProperty('a'));

// console.log(objA.b);
// console.log(objA.hasOwnProperty('b'));

// console.log(objA.c);
// console.log(objA.hasOwnProperty('c'));

// console.log(objA.x);
// console.log(objA.hasOwnProperty('x'));

//!======================================================

// const arr = [1, 2, 34, 4, 1, 2, 23];
// console.log(arr);

//!======================================================
