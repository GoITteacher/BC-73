/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

//!===============================================================

// const username = 'Jacob Mercer';
// const firstName = username.slice(0, 5);
// const lastName = username.slice(6);
// const email = 'test-mail@gmail.ua';
// const domen = email.slice(-3);
// console.log(domen);

//!===============================================================

// const message = 'Hello WoRld';
// const lowerMessage = message.toLowerCase();
// console.log(lowerMessage);

// let userMail = 'TestPoshta@gmail.com';
// userMail = userMail.toLowerCase();
// console.log(userMail);

// let password = 'Hello world';
// password = password.toUpperCase();
// console.log(password);

//!===============================================================

// const message = 'tEsT meSsaGE';
// const firstPart = message[0].toUpperCase();
// const secondPart = message.slice(1).toLowerCase();
// const result = firstPart + secondPart;
// console.log(result);

//!===============================================================

// const message = 'Hello world+ ';
// const res = message.includes('world+');
// console.log(res);

// const email = 'testemailegmail.com';
// const hasDogSymbol = email.includes('@');
// const hasDomen = email.includes('.com');
// const isValidEmail = hasDogSymbol && hasDomen;
// if (isValidEmail) {
//   console.log('Ok');
// } else {
//   console.log('Error');
// }

//!===============================================================

// const url = 'https://test-url.com';
// const isBadUrl = url.endsWith('ru');
// if (isBadUrl) {
//   console.log('ERROR');
// } else {
//   console.log('Ok');
// }

// const username = '$testUser';
// const isValidName = username.startsWith('$');
// if (isValidName) {
//   console.log('Valid');
// } else {
//   console.log('Invalid');
// }
//!===============================================================

// const email = 'test-user@gmail.com';
// const index = email.indexOf('@');
// const firstPart = email.slice(0, index);
// const secondPart = email.slice(index);

// const fullName = 'Test User';
// const index = fullName.indexOf(' ');
// const firstName = fullName.slice(0, index);
// const lastName = fullName.slice(index + 1).toUpperCase();

// const str = 'Hello world';
// const index = str.indexOf('@');
//!===============================================================

// const message = '   \n\n\nTest user     \n\n\n';
// const res = message.trim();
// console.log(message);
// console.log(res);

//!===============================================================
