/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

//!======================================================

// const obj = {
//     key1: 'value',
//     key2: 'value',
// }

//!======================================================
// const username = 'Mango';
// const email = 'mango@mail.com';
// const credentials = { username, email };

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

//!======================================================

const inputName = 'color';

// const userKey = prompt('Enter key');
const x = 10;
const y = 20;
let i = 0;
const colorPickerData = {
  [`myKey_${i++}`]: 'Hello world',
  [`myKey_${i++}`]: 'Hello world',
  [inputName.toUpperCase().slice(3)]: 'test',
};

console.log(colorPickerData);
