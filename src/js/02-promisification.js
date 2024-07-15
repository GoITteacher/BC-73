import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
/*
 * Промісифікація:
 * - Функція, яка повертає проміс
 */

// function getPromise() {
//   const arr = [];

//   const promise = new Promise(resolve => {
//     resolve(arr);
//   });

//   return promise;
// }

// const x = getPromise();

// x.then(data => {
//   console.log(data);
// });

//!======================================================

// function createPromise(value, delay, isActive) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('p1', 300, true);
// const p2 = createPromise('p1', 300, true);
// const p3 = createPromise('p1', 300, true);
// const p4 = createPromise('p1', 300, true);
// const p5 = createPromise('p1', 300, true);
// const p6 = createPromise('p1', 300, true);
// const p7 = createPromise('p1', 300, true);
// const p8 = createPromise('p1', 300, true);
// const p9 = createPromise('p1', 300, true);

// p1.then(data => {
//   console.log('🤑', data);
// }).catch(error => {
//   console.log('👿', error);
// });

//!======================================================

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(data => {
//     return data.json();
//   })
//   .then(result => {
//     console.log(result);
//   });

//!======================================================

// function createPromise(value, delay, isActive) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// for (let i = 0; i < 3; i++) {
//   const promise = createPromise(i, i * 1000, true);
//   promise
//     .then(res => {
//       console.log(res);
//     })
//     .catch(() => {});
// }

// const userDelay = 2000;
// const userIsActive = true;

// createPromise('Hello', userDelay, userIsActive)
//   .then(data => {
//     iziToast.success({
//       title: 'OK',
//       message: data,
//     });
//   })
//   .catch(error => {
//     iziToast.error({
//       title: 'Error',
//       message: error,
//     });
//   });

//!======================================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArr() {
//   const arr = [];
//   return Promise.resolve(arr);
// }
// const pArr = getArr();
// console.log(pArr);

//!======================================================

// const promise = createPromise(200, 300, true);

// promise
//   .then(value => {
//     if (value < 500) {
//       return value;
//     } else {
//       return Promise.reject('Value > 500');
//     }
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//!======================================================

// function createPromise(value, delay, isActive) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
//   return promise;
// }

// const p1 = createPromise('p1', 2000, false);
// const p2 = createPromise('p2', 5000, true);
// const p3 = createPromise('p3', 10000, true);
// const p4 = createPromise('p4', 3000, false);
// const p5 = createPromise('p5', 4000, true);

// const arr = [p1, p2, p3, p4, p5];

// Promise.all(arr)
//   .then(data => {
//     console.log('Ok:', data);
//   })
//   .catch(err => {
//     console.log('Error:', err);
//   });

// Promise.allSettled(arr).then(data => {
//   console.log('Ok:', data);
// });

// Promise.race(arr)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log('Error', error);
//   });
