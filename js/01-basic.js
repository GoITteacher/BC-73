/**
 * Деструктуризація об'єкта
 */
//!======================================================

// const user = {
//   username: 'Jacob name',
//   city: 'Dnipro',
//   country: 'Ukraine',
//   age: 20,
//   phoneNumber: '123234124',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username, city, country, age } = user;

// const username = user.username;
// const city = user.city;
// const country = user.country;
// const age = user.age;

//!======================================================

// const username = 'TEST USER';

// const user = {
//   username: 'Jacob name',
//   age: 20,
//   phoneNumber: '123234124',
//   address: {
//     city: 'Dnipro',
//     country: 'Ukraine',
//     street: 'Test Street',
//   },
// };

// const { username: myName, age: myAge } = user;

// const myName = user.username
// const myAge = user.age

//!======================================================
/**
 * Глибока деструктуризація об'єкта
 */

// const user = {
//   username: 'Jacob name',
//   age: 20,
//   phoneNumber: '123234124',
//   address: {
//     city: 'Dnipro',
//     country: 'Ukraine',
//     street: 'Test Street',
//   },
//   info: {
//     isStudent: false,
//     isAdmin: false,
//     isOnline: true,
//   },
// };

// const {
//   username,
//   age,
//   phoneNumber,
//   address: { city, country, street },
//   info: { isStudent, isAdmin, isOnline },
// } = user;

// console.log(city, country, street);

// const {city, country, street} = user.address
//!======================================================

// const point = {
//   x: 10,
//   y: 15,
// };

// const { x = 0, y = 0, z = 0 } = point;
// const x = point.x || 0;
// const y = point.y || 0;
// const z = point.z || 0;

// console.log(x, y, z);

//!======================================================

// const test = {};

// const { address: { x = 0, y = 0 } = {} } = test;

// const myAddress = test.address || {}

// console.log(x, y);

//!======================================================

// const obj = {
//   x: 100,
// };

// const { x: x1, x: x2, x: x3 } = obj;

// const x1 = obj.x
// const x2 = obj.x
// const x3 = obj.x

// console.log(x1);

//!======================================================

// const user = {
//   username: 'Jacob name',
//   age: 20,
//   phoneNumber: '123234124',
//   address: {
//     city: 'Dnipro',
//     country: 'Ukraine',
//     street: 'Test Street',
//   },
//   id: 123124235,
//   info: {
//     isStudent: false,
//     isAdmin: false,
//     isOnline: true,
//   },
// };

// const { id, info, ...userInfo } = user;

// console.log(userInfo);
//!======================================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
// const [x1, , x3] = arr;
// console.log(x1, x3);

// const rgb = [12, 51, 22, 0.5];
// const [red, green, blue, alpha = 1] = rgb;
// console.log(red, green, blue, alpha);

//!======================================================

// const arr = [1, 3, 2, 1, 3, 4, 5, 1, 2, 34, 5];
// const arr1 = [];

// const [firstElem = 4, ...numbers] = arr;

// console.log(firstElem, numbers);

//!======================================================
// let t1 = 10;
// let t2 = 20;

// [t1, t2] = [t2, t1];

// const [x1, x2, x3, x4, x5] = [10, 20, 30, 40, 50];

// console.log(x1, x2, x3, x4, x5);

//!======================================================
// const product = {
//   title: 'Product',
//   price: 123,
//   amount: 123,
//   img: '123',
// };

// function productTemplate(obj) {
//   const { title, price, amount, img } = obj;
//   return `<li>
//   <p>${title}</p>
//   <p>${price}</p>
//   <p>${amount}</p>
//   <p>${img}</p>
//   </li>`;
// }
