/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

//!======================================================
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby += ' skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
//!======================================================
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// function showProps(obj) {
//   const keys = Object.keys(obj);
//   console.log('=========================');
//   for (const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
//   }
//   console.log('=========================');
// }

// function setName(newName, obj) {
//   obj.name = newName;
// }

// setName('Poly', user);

//!======================================================

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   Poly: 300,
//   Mango: 200,
// };

// function getTotalSalary(objSalary) {
//   let sum = 0;
//   const arr = Object.values(objSalary);

//   for (const item of arr) {
//     sum += item;
//   }

//   return sum;
// }

// const totalSum = getTotalSalary(salaries);

//!======================================================

// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та
// професія.

// const person = {
//   username: 'Volodka',
//   age: 23,
//   position: 'Middle',
// };

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(person.username);
// console.log(person['username']);

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// person.age += 1;
// person['age'] += 1;

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// зі значенням.

// person.company = 'GoIT';

// Видалення властивостей: Видаліть властивість професія з об'єкта person.

// delete person.position;

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// const hasPosition = person.position !== undefined;
// console.log(hasPosition);

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить
// інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з
// об'єктом person.

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// вигляді ключ-значення.

// for (const key in person) {
//   console.log(`${key} - ${person[key]}`);
// }

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити
// вітання з іменем особи.

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта
// person за допомогою функції Object.keys().

// const keys = Object.keys(person);
// console.log(keys);

// console.log(person);

//!======================================================

//!======================================================
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

function createUser(username, age) {
  const user = { username, age };
  return user;
}

// const user1 = createUser('Vlad', 25);
// const user2 = createUser('Roman', 23);
// const user3 = createUser('Maks', 22);

// console.log(user1);
// console.log(user2);
// console.log(user3);

//!======================================================
// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address".
// Поверни оновлений об'єкт.

const user = createUser('Vlad', 25);

function addAddress(obj, city, country, street) {
  // obj.address = { city, country, street };

  obj.address = {
    city: city.toUpperCase(),
    country: country.toUpperCase(),
    street: street.toUpperCase(),
  };

  return obj;
}

addAddress(user, 'Dnipro', 'Ukraine', 'My Street');

// console.log(user);

//!======================================================
// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.

// const user = createUser('Vlad', 25);

// function updateAge(userObj, newAge) {
//   userObj.age = newAge;
// }

// updateAge(user, 30);

// console.log(user);

//!======================================================
// Напиши функцію, яка приймає об'єкт і видаляє з нього all властивістi.
// Поверни оновлений об'єкт.

// const user = createUser('Vlad', 25);

// function clearObj(obj) {
//   const keys = Object.keys(obj);
//   for (const key of keys) {
//     delete obj[key];
//   }
// }

//!======================================================

// const a = {
//   x1: 10,
//   x2: 20,
//   x3: 30,
// };

// const b = {
//   y1: 10,
//   y2: 20,
//   y3: 30,
//   __proto__: a,
// };

// for (const key in b) {
//   console.log(key);
// }

//!======================================================
// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".

// function showName(obj) {
//   const name = obj.username;
//   console.log(`User Name: ${name}`);
// }

// function getName(obj) {
//   return obj.username;
// }

// const username = getName(user);
// console.log(username);

//!======================================================
/* 
const user = {
  username:'VLAD',
  age:25,
  address: {
    city: 'DNIPRO',
    country: 'UKRAINE',
    street:'MyStreet'
  }
}
*/

function getAddres(userObj) {
  const adrs = userObj.address;

  const city = adrs.city;
  const country = adrs.country;
  const street = adrs.street;

  let result = `${country} ${city} ${street}`;
  return result;
}

// const res = getAddres(user);
// console.log(res);

//!======================================================
// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

// function hasAddress(x) {
//   return x.address !== undefined;
// }

// console.log(hasAddress(user));

// const obj = {
//   x: 10,
//   y: 20,
// };

// console.log(hasAddress(obj));

//!======================================================
// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
//Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.

function objCompare(obj1, obj2) {
  const res = {};

  for (const key of Object.keys(obj1)) {
    res[key] = obj1[key];
  }

  for (const key of Object.keys(obj2)) {
    res[key] = obj2[key];
  }

  return res;
}

// const objA = {
//   x1: 10,
//   x2: 20,
//   t: 50,
// };
// const objB = {
//   y1: 10,
//   y2: 20,
//   t: 72,
// };

// const res = objCompare(objB, objA);
// console.log(res);

//!======================================================
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.

// function createUser2(username, age, address) {
//   const user = {
//     username: username ?? 'Unknown',
//     age: age || 0,
//     address,
//   };

//   return user;
// }

// const user2 = createUser2('', undefined);
// console.log(user2);

//!======================================================
// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
