/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

//!======================================================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isActive = Math.random() > 0.5;

//     if (isActive) {
//       resolve('Смачного!');
//     } else {
//       reject('Вибачайте!');
//     }
//   }, 300);
// });

//!======================================================

// promise.then(onFulfilled, onRejected);

// function onFulfilled(message) {
//   console.log(message);
//   console.log('🤑Ням ням ням');
// }
// function onRejected(error) {
//   console.log(error);
//   console.log('👿Поверніть гроші');
// }

//!======================================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isActive = Math.random() > 0.5;
//     if (isActive) resolve('Смачного!');
//     else reject('Вибачайте!');
//   }, 300);
// });

// promise
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Вимикаю лоадер');
//   });
//!======================================================

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     const isActive = Math.random() > 0.5;
//   //     if (isActive) resolve('Смачного!');
//   //     else reject('Вибачайте!');
//   //   }, 300);

//   resolve('t-shirt');
// });

// promise
//   .then(data => {
//     console.log(1, data);
//     return 'hello';
//   })
//   .then(data => {
//     console.log(2, data);
//     return 'world';
//   })
//   .then(data => {
//     console.log(3, data);
//     return 'test';
//   })
//   .catch(error => {
//     console.log(4, error);
//   });

// promise
//   .then(data => {
//     console.log(1, data);
//     return 'sizes';
//   })
//   .then(data => {
//     console.log(2, data);
//     return 'templates';
//   })
//   .then(data => {
//     console.log(3, data);
//     return 't-shirt';
//   })
//   .then(result => {
//     console.log('finish', result);
//   })
//   .catch(() => {
//     console.log('Зламалась');
//   });
