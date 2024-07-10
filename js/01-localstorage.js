//!======================================================
//? JSON

// const data = [10, 20, 30];
// const myJsonData = JSON.stringify(data);
// console.log(data);
// console.log(myJsonData);
//!======================================================
// const data = {
//   20: {},
//   123: [10, 20, 30, undefined, 10, 10, 30, () => {}],
//   345: 20,
//   2345: 20,
//   city: 'Дніпро',
//   country: undefined,
//   sayHello() {},
// };

// const myJsonData = JSON.stringify(data);

// console.log(data.toString());
// console.log(myJsonData);

//!======================================================

// const jsonMessage = `{
//     "update_id": 936447088,
//     "message": {
//      "message_id": 1732334,
//      "from": {
//       "id": 433982686,
//       "is_bot": false,
//       "first_name": "Volodymyr",
//       "username": "pashchenko_v_r",
//       "language_code": "uk"
//      },
//      "chat": {
//       "id": 433982686,
//       "first_name": "Volodymyr",
//       "username": "pashchenko_v_r",
//       "type": "private"
//      },
//      "date": 1720554344,
//      "forward_origin": {
//       "type": "user",
//       "sender_user": {
//        "id": 433982686,
//        "is_bot": false,
//        "first_name": "Volodymyr",
//        "username": "pashchenko_v_r",
//        "language_code": "uk"
//       },
//       "date": 1720554336
//      },
//      "forward_from": {
//       "id": 433982686,
//       "is_bot": false,
//       "first_name": "Volodymyr",
//       "username": "pashchenko_v_r",
//       "language_code": "uk"
//      },
//      "forward_date": 1720554336,
//      "text": "Hello"
//     }
//    }`;

// const message = JSON.parse(jsonMessage);

// console.log(message);

//!======================================================
// console.log('start');

// try {
//   const json = prompt('Enter your json');
//   const data = JSON.parse(json);
//   console.log(data);
// } catch (err) {
//   console.log('Error');
// }

// console.log('end');

//!======================================================

// try {
//   const x = 10;
//   x = 124;
// } catch (err) {
//   console.log(err);
// }

// console.log('END');

//!======================================================

// function foo1() {
//   foo2();
// }
// function foo2() {
//   foo3();
// }
// function foo3() {
//   foo4();
// }
// function foo4() {
//   console.log(hello);
// }

// foo1();

//!======================================================

// function getUserData() {
//   const userJson = prompt('Enter your data:');
//   try {
//     const result = JSON.parse(userJson);
//     return result;
//   } catch {
//     return userJson;
//   }
// }

// const value1 = getUserData();
// console.log(value1);

//!======================================================
//? LocalStorage

// localStorage.setItem('address', 20);

// localStorage.setItem('myInfo', { x: 10, y: 20 });

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// localStorage.setItem('firstName', JSON.stringify(prompt()));

// const res = JSON.parse(localStorage.getItem('theme'));
// console.log(res);

//!======================================================

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const user1 = {
//   name: 'Vasya',
//   age: 23,
// };

// const user2 = {
//   name: 'Vasya',
//   age: 23,
// };

// const user3 = {
//   name: 'Vasya',
//   age: 23,
// };

// localStorage.setItem('user1', JSON.stringify(user1));
// localStorage.setItem('user2', JSON.stringify(user2));
// localStorage.setItem('user3', JSON.stringify(user3));

// saveToLs('user1', user1);
// saveToLs('user2', user2);
// saveToLs('user3', user3);

//!======================================================

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

const user1 = loadFromLs('user1');
const user2 = loadFromLs('user2');
const user3 = loadFromLs('user3');

// try {
//   const user2 = JSON.parse(localStorage.getItem('user1'));
//   console.log(user2);
// } catch {
//   console.log(localStorage.getItem('user2'));
// }
// try {
//   const user3 = JSON.parse(localStorage.getItem('user3'));
//   console.log(user3);
// } catch {
//   console.log(localStorage.getItem('user3'));
// }
// try {
//   const user3 = JSON.parse(localStorage.getItem('user3'));
//   console.log(user3);
// } catch {
//   console.log(localStorage.getItem('user3'));
// }

//!======================================================
//?======================================================
//!======================================================

function saveToLs(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

//!======================================================

/**
 * Видалення
 */

// localStorage.removeItem('user1');

//!======================================================

// localStorage.clear();

//!======================================================

// const USER_COLOR_KEY = 'user-color';

// const color = {
//   red: 123,
//   green: 31,
//   blue: 23,
// };

// saveToLs(USER_COLOR_KEY, color);
// const myColor = loadFromLs(USER_COLOR_KEY);
